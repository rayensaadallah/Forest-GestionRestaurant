package esprit.DevUp.FoRest.Service.GestionRestaurant;

import esprit.DevUp.FoRest.Entity.Restaurant;
import esprit.DevUp.FoRest.Entity.TableRestaurant;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.RestaurantRepository;
import esprit.DevUp.FoRest.Repository.GestionRestaurant.TableRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@Slf4j
public class ServiceTableRestaurant implements IServiceTableRestaurant {
    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    TableRepository tableRepository;

    @Override
    public TableRestaurant retrieveTableRestaurant(Integer id) {
        return tableRepository.findById(id).orElse(null);
    }
    @Override
    public List<TableRestaurant> retrieveAllTableRestaurant() {
        return tableRepository.findAll();
    }
    @Override
    public List<TableRestaurant> retrieveAllTableRestaurantByRestaurant(Integer idrestaurant) {
        return tableRepository.findAll();
    }
    @Override
    public TableRestaurant addTableRestaurant(Integer id,TableRestaurant u) {
        Restaurant restaurant=restaurantRepository.findById(id).get();
        u.setResto(restaurant);
        return tableRepository.save(u);
    }
    @Override
    public TableRestaurant updateTableRestaurant(TableRestaurant u) {
        return tableRepository.save(u);
    }
    @Override
    public void removeTableRestaurant(Integer id) {
    tableRepository.deleteById(id);
    }
}
