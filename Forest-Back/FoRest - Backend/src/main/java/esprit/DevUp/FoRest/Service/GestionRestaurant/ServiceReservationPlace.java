package esprit.DevUp.FoRest.Service.GestionRestaurant;

import esprit.DevUp.FoRest.Entity.Menu;
import esprit.DevUp.FoRest.Entity.ReservationPlace;
import esprit.DevUp.FoRest.Entity.TableRestaurant;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.MenuRepository;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.ReservationPlaceRepository;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.TableRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
@Service
@Slf4j
public class ServiceReservationPlace implements IServiceReservationPlace {
    @Autowired
    private TableRepository tableRepository;
    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    ReservationPlaceRepository reservationPlaceRepository;
    @Override
    public List<ReservationPlace> retrieveAllReservationPlace() {
        return reservationPlaceRepository.findAll();
    }

    @Override
    public ReservationPlace retrieveReservationPlace(Integer idReservationPlace) {
        return reservationPlaceRepository.findById(idReservationPlace).orElse(null);
    }
    @Override
    public List<ReservationPlace> showbytable(Integer integer) {
         return reservationPlaceRepository.findReservationsByTableId(integer);
      // return null;
    }


    @Override
    public ReservationPlace addReservationPlace(Integer idmenu, Integer iduser, Integer idtable, ReservationPlace u) {
        Menu menu=menuRepository.findById(idmenu).get();
        u.setMenu(menu);
        TableRestaurant tableRestaurant=tableRepository.findById(idmenu).get();
        u.setTable(tableRestaurant);
        u.setIduser(iduser);
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(u.getDateStart());
        calendar.add(Calendar.MINUTE, 30);
        u.setDateEnd(calendar.getTime());
        return reservationPlaceRepository.save(u);
    }

    @Override
    public ReservationPlace updateReservationPlace(ReservationPlace u) {
        return reservationPlaceRepository.save(u);
    }



    @Override
    public void removeReservationPlace(Integer idReservationPlace) {
        reservationPlaceRepository.deleteById(idReservationPlace);
    }
}
