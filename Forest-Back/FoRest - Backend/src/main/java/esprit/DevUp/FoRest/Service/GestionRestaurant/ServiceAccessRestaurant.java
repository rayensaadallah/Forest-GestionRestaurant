package esprit.DevUp.FoRest.Service.GestionRestaurant;

import esprit.DevUp.FoRest.Entity.*;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.AccessRestaurantRepository;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.OffreRestaurantRepository;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.RestaurantRepository;
import esprit.DevUp.FoRest.Repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


@Service
@Slf4j
public class ServiceAccessRestaurant implements IServiceAccessRestaurant {
    @Autowired
    AccessRestaurantRepository accessRestaurantRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    OffreRestaurantRepository offreRestaurantRepository;


    @Override
    @Transactional
    public accessRestaurant addaccessRestaurant(accessRestaurant u,Integer iduser,Integer idoffre) {
        User user= userRepository.findById(iduser).get();
        u.setUser(user);
        OffreRestaurant offreRestaurant=offreRestaurantRepository.findById(idoffre).get();
        u.setOffreRestaurant(offreRestaurant);
        Calendar calendar = Calendar.getInstance();
        Date currentDate = calendar.getTime();
        calendar.add(Calendar.DAY_OF_YEAR, offreRestaurant.getNbrDays());
        Date futureDate = calendar.getTime();
        u.setDateEnd(futureDate);
        u.setDateStart(currentDate);
        return accessRestaurantRepository.save(u);
    }
    @Scheduled(cron = "0 0 23 * * MON-FRI")
    public void accessIsOver() {
        Date currentDate = new Date();
        List<accessRestaurant> accessRestaurants = accessRestaurantRepository.findAll();
        for (accessRestaurant accessRestaurant : accessRestaurants) {
            if (accessRestaurant.getDateEnd().compareTo(currentDate) < 0) {
                log.info("User {} your subscription of {} has expired", accessRestaurant.getUser().getFirstname(), accessRestaurant.getOffreRestaurant().getNameOffre());
                accessRestaurantRepository.deleteById(accessRestaurant.getId_access_restaurant());
            }
        }
    }

    @Override
    public accessRestaurant updateaccessRestaurant(accessRestaurant u) {
        return accessRestaurantRepository.save(u);
    }


    @Override
    public void removeaccessRestaurant(Integer idaccessRestaurant) {
        accessRestaurantRepository.deleteById(idaccessRestaurant);
    }
    @Override
    public List<accessRestaurant> retrieveAllaccess() {
        return accessRestaurantRepository.findAll();
    }

    @Override
    public accessRestaurant OneAccessRestaurant(Integer idaccessRestaurant) {
        return accessRestaurantRepository.findById(idaccessRestaurant).orElse(null);
    }

    @Override
    public List<accessRestaurant> retrieveAllAccessbyRestaurant(Integer idRestaurant) {
        return accessRestaurantRepository.findByRestaurantId(idRestaurant);
    }

}
