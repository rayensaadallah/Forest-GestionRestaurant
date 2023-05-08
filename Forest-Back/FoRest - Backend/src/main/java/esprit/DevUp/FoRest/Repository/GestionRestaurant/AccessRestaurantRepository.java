package esprit.DevUp.FoRest.Repository.GestionRestaurant;

import esprit.DevUp.FoRest.Entity.Menu;
import esprit.DevUp.FoRest.Entity.Restaurant;
import esprit.DevUp.FoRest.Entity.User;
import esprit.DevUp.FoRest.Entity.accessRestaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccessRestaurantRepository extends JpaRepository<accessRestaurant,Integer> {
    @Query("SELECT m FROM accessRestaurant  m JOIN m.offreRestaurant o JOIN o.restaurant r WHERE r.idRestaurant = :restaurantId")
    List<accessRestaurant> findByRestaurantId(@Param("restaurantId") Integer restaurantId);
}
