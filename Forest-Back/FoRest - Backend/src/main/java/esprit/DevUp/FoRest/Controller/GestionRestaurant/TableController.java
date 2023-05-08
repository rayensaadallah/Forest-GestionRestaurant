package esprit.DevUp.FoRest.Controller.GestionRestaurant;

import esprit.DevUp.FoRest.Entity.Restaurant;
import esprit.DevUp.FoRest.Entity.TableRestaurant;
import esprit.DevUp.FoRest.Service.GestionRestaurant.IServiceTableRestaurant;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.util.List;

@RestController
@AllArgsConstructor
@NoArgsConstructor
@RequestMapping("/table")
@CrossOrigin(origins = "http://localhost:4200")
public class TableController {
    @Autowired
    IServiceTableRestaurant iServiceTableRestaurant;

    @GetMapping("/all")
    public List<TableRestaurant> getTableRestaurant() {
        List<TableRestaurant> list = iServiceTableRestaurant.retrieveAllTableRestaurant();
        return list;
    }
    @GetMapping("/all/{idrestaurant}")
    public List<TableRestaurant> getTableRestaurantbyrestaurant(@PathVariable("idrestaurant")Integer id) {
        List<TableRestaurant> list = iServiceTableRestaurant.retrieveAllTableRestaurantByRestaurant(id);
        return list;
    }
    @GetMapping("/details/{tableid}")
    public TableRestaurant OneTable(@PathVariable("tableid")Integer id) {
        return  iServiceTableRestaurant.retrieveTableRestaurant(id);
    }

        @PostMapping("/add/{idrestaurant}")
        public TableRestaurant addTableRestaurant(@RequestBody TableRestaurant reservationPlace,
        @PathVariable("idrestaurant")Integer idrestaurant) {
            TableRestaurant r = iServiceTableRestaurant.addTableRestaurant(idrestaurant,reservationPlace);
            return r;
        }

    @DeleteMapping("/delete/{idtable}")
    public void removeTable(@PathVariable("idtable") Integer idtable) {
        iServiceTableRestaurant.removeTableRestaurant(idtable);
    }

    @PutMapping("/update/{idtable}")
    public TableRestaurant updateTableRestaurant(@RequestBody TableRestaurant idtable) {
        TableRestaurant table= iServiceTableRestaurant.updateTableRestaurant(idtable);
        return table;
    }

}
