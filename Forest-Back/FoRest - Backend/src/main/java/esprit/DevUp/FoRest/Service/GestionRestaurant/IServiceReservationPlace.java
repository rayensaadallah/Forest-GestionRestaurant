package esprit.DevUp.FoRest.Service.GestionRestaurant;

import esprit.DevUp.FoRest.Entity.ReservationPlace;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface IServiceReservationPlace {
    List<ReservationPlace> retrieveAllReservationPlace();
    List<ReservationPlace> showbytable(Integer integer);

    ReservationPlace retrieveReservationPlace(Integer idReservationPlace);

    ReservationPlace addReservationPlace (Integer idmenu,Integer iduser, Integer idtable, ReservationPlace u);

    ReservationPlace updateReservationPlace (ReservationPlace u);

    void removeReservationPlace(Integer idReservationPlace);
}
