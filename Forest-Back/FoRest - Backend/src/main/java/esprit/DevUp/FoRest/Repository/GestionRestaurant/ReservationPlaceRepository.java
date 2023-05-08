package esprit.DevUp.FoRest.Repository.GestionRestaurant;

import esprit.DevUp.FoRest.Entity.ReservationPlace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationPlaceRepository extends JpaRepository<ReservationPlace ,Integer> {
    //@Query("select m from ReservationPlace m where m.table= :integer")
    //List<ReservationPlace> findbytable(@Param("table") Integer integer);

   // List<ReservationPlace> findReservationPlacesByTable(Integer integer);
   @Query("SELECT r FROM ReservationPlace r JOIN r.table t WHERE t.idTableRestaurant = :tableId")
   List<ReservationPlace> findReservationsByTableId(Integer tableId);
}
