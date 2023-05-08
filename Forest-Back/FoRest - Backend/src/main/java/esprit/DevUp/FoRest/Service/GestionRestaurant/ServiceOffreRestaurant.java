package esprit.DevUp.FoRest.Service.GestionRestaurant;

import esprit.DevUp.FoRest.Entity.OffreRestaurant;
import esprit.DevUp.FoRest.Entity.Restaurant;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.OffreRestaurantRepository;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ServiceOffreRestaurant implements IServiceOffreRestaurant {
    @Autowired
   OffreRestaurantRepository offrerestaurantRepository;
    @Autowired
    RestaurantRepository restaurantRepository;
    @Override
    public OffreRestaurant retrieveOneOffre(Integer Offreidrestaurant) {// offre details
        return offrerestaurantRepository.findById(Offreidrestaurant).get();
    }
    @Override
    public List<OffreRestaurant> retrieveAllOffer() {// te5ou les offre el kol
        return offrerestaurantRepository.findAll();
    }

    @Override
    public List<OffreRestaurant> retrieveAllOffreByRestaurant(Integer id) {// te5ou les offre mta3 restaurant we7ed
        Restaurant restaurant= restaurantRepository.findById(id).get();
        return offrerestaurantRepository.findByRestaurant(restaurant);
    }
    @Override
    public OffreRestaurant addOffreRestaurant(OffreRestaurant u,Integer id) {
        Restaurant restaurant= restaurantRepository.findById(id).get();
        u.setRestaurant(restaurant);
        return offrerestaurantRepository.save(u);
    }

    @Override
    public OffreRestaurant updateOffreRestaurant(OffreRestaurant u) {
        return offrerestaurantRepository.save(u);
    }


    @Override
    public void removeOffreRestaurant(Integer idOffrerestaurant) {
        offrerestaurantRepository.deleteById(idOffrerestaurant);
    }
}
