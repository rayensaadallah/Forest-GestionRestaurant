package esprit.DevUp.FoRest.Service.GestionRestaurant;

import esprit.DevUp.FoRest.Dto.RestaurantDto;
import esprit.DevUp.FoRest.Entity.Restaurant;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class RestaurantDtoService {
    @Autowired
    RestaurantRepository restaurantRepository;

    public RestaurantDto toDTO(Restaurant restaurant) {
        RestaurantDto dto = new RestaurantDto();
        dto.setIdRestaurant(restaurant.getIdRestaurant());
        dto.setNameRestaurant(restaurant.getNameRestaurant());
        dto.setAddressRestaurant(restaurant.getAddressRestaurant());
        dto.setNbrmaximal(restaurant.getNbrmaximal());
        return dto;
    }

    public Restaurant toEntity(RestaurantDto dto) {
        Restaurant restaurant = new Restaurant();
        restaurant.setIdRestaurant(dto.getIdRestaurant());
        restaurant.setNameRestaurant(dto.getNameRestaurant());
        restaurant.setAddressRestaurant(dto.getAddressRestaurant());
        restaurant.setNbrmaximal(dto.getNbrmaximal());
        return restaurant;
    }
}
