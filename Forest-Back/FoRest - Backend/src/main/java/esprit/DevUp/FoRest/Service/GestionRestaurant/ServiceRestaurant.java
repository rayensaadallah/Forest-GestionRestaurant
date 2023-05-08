package esprit.DevUp.FoRest.Service.GestionRestaurant;

import esprit.DevUp.FoRest.Dto.RestaurantDto;
import esprit.DevUp.FoRest.Entity.Restaurant;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.RestaurantRepository;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class ServiceRestaurant implements IServiceRestaurant {

    @Autowired
    RestaurantRepository restaurantRepository;
    @Override
    public List<Restaurant> retrieveAllRestaurants() {
        return restaurantRepository.findAll();
    }

    @Override
    public Restaurant addRestaurant(Restaurant u) {
        return restaurantRepository.save(u);
    }

    @Override
    public Restaurant updateRestaurant(Restaurant u) {
        return restaurantRepository.save(u);
    }

    @Override
    public Restaurant retrieveRestaurant(Integer idrestaurant) {
        return restaurantRepository.findById(idrestaurant).orElse(null);
    }

    @Override
    public void removeRestaurant(Integer idrestaurant) {
        restaurantRepository.deleteById(idrestaurant);
    }

    @Override
    public List<RestaurantDto> findallDto() {
        return restaurantRepository.findAll()
                .stream()
                .map(restaurant -> new RestaurantDto(
                        restaurant.getIdRestaurant(),
                        restaurant.getNameRestaurant(),
                        restaurant.getAddressRestaurant(),
                        restaurant.getNbrmaximal(),
                        restaurant.getOffreRestaurants(),
                        restaurant.getTableRestaurants()))
                .collect(Collectors.toList());
    }



}
