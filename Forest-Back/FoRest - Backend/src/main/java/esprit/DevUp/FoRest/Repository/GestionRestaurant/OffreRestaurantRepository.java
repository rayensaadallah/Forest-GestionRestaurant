package esprit.DevUp.FoRest.Repository.GestionRestaurant;

import esprit.DevUp.FoRest.Entity.OffreRestaurant;
import esprit.DevUp.FoRest.Entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OffreRestaurantRepository extends JpaRepository<OffreRestaurant,Integer> {
    List<OffreRestaurant> findByRestaurant(Restaurant restaurant);
}
