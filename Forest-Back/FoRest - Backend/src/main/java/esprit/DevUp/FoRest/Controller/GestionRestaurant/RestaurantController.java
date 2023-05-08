package esprit.DevUp.FoRest.Controller.GestionRestaurant;

import esprit.DevUp.FoRest.Dto.RestaurantDto;
import esprit.DevUp.FoRest.Entity.Restaurant;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.RestaurantRepository;
import esprit.DevUp.FoRest.Service.GestionRestaurant.IServiceRestaurant;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@NoArgsConstructor
@RequestMapping("/Restaurant")
@CrossOrigin(origins = "http://localhost:4200")
public class RestaurantController {

    @Autowired
    IServiceRestaurant serviceRestaurant;

    @GetMapping("/all")
    public List<Restaurant> getRestaurants() {
        List<Restaurant> list = serviceRestaurant.retrieveAllRestaurants();
        return list;
    }

    @PostMapping("/add")
    public Restaurant addRestaurant(@RequestBody Restaurant restaurant) {
        Restaurant r = serviceRestaurant.addRestaurant(restaurant);
        return r;
    }
    @DeleteMapping("/delete/{restaurantid}")
    public void removeEtudiant(@PathVariable("restaurantid") Integer idrestaurant) {
        serviceRestaurant.removeRestaurant(idrestaurant);
    }

    @PutMapping("/edit")
    public Restaurant updateRestaurant(@RequestBody Restaurant restaurant) {
        Restaurant Restaurants= serviceRestaurant.updateRestaurant(restaurant);
        return Restaurants;
    }
    //dto
     @Autowired
        private RestaurantRepository restaurantRepository;

        @PostMapping("/add_restauarant_dto")
        public ResponseEntity<RestaurantDto> addRestaurant(@RequestBody RestaurantDto restaurantDto) {

            Restaurant restaurant = new Restaurant();
            restaurant.setNameRestaurant(restaurantDto.getNameRestaurant());
            restaurant.setAddressRestaurant(restaurantDto.getAddressRestaurant());
            restaurant.setNbrmaximal(restaurantDto.getNbrmaximal());
            // Set the restaurant's offers and tables
            restaurant.setOffreRestaurants(restaurantDto.getOffreRestaurants());
            restaurant.setTableRestaurants(restaurantDto.getTableRestaurants());

            // Add the restaurant to the database
            serviceRestaurant.addRestaurant(restaurant);

            // Return the saved RestaurantDto object
            return new ResponseEntity<>(restaurantDto, HttpStatus.CREATED);

        }
    @GetMapping("/restaurantsdto")
    public List<RestaurantDto> getAllRestaurants() {
        return serviceRestaurant.findallDto();
    }

    }


