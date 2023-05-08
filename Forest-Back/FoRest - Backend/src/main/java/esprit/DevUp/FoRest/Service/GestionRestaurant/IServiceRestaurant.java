package esprit.DevUp.FoRest.Service.GestionRestaurant;

import esprit.DevUp.FoRest.Dto.RestaurantDto;
import esprit.DevUp.FoRest.Entity.Restaurant;

import java.util.List;

public interface IServiceRestaurant {
    List<Restaurant> retrieveAllRestaurants();

    Restaurant addRestaurant (Restaurant u);

    Restaurant updateRestaurant (Restaurant u);

    Restaurant retrieveRestaurant(Integer idrestaurant);

    void removeRestaurant(Integer idrestaurant);

    List<RestaurantDto> findallDto();
}
