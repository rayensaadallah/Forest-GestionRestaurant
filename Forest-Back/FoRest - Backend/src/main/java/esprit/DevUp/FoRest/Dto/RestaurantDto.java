package esprit.DevUp.FoRest.Dto;

import esprit.DevUp.FoRest.Entity.OffreRestaurant;
import esprit.DevUp.FoRest.Entity.Restaurant;
import esprit.DevUp.FoRest.Entity.TableRestaurant;
import lombok.*;

import java.util.Set;

@Data
@Getter
@Setter
@AllArgsConstructor
public class RestaurantDto {

        private Integer idRestaurant;
        private String nameRestaurant;
        private String addressRestaurant;
        private int nbrmaximal;
        private Set<OffreRestaurant> offreRestaurants;
        private Set<TableRestaurant> tableRestaurants;

        public RestaurantDto() {

        }

        // Add getter and setter methods for each field


}