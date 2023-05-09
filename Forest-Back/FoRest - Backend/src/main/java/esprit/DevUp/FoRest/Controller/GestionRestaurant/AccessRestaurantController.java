package esprit.DevUp.FoRest.Controller.GestionRestaurant;

import esprit.DevUp.FoRest.Entity.accessRestaurant;
import esprit.DevUp.FoRest.Service.GestionRestaurant.IServiceAccessRestaurant;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@NoArgsConstructor
@RequestMapping("/accessrestaurant")
@CrossOrigin(origins = "http://localhost:4200")
public class AccessRestaurantController {
    @Autowired
    IServiceAccessRestaurant serviceAccessRestaurant;
    @GetMapping("/all")
    public List<accessRestaurant> getaccessRestaurant() {
        List<accessRestaurant> list = serviceAccessRestaurant.retrieveAllaccess();
        return list;
    }
        @GetMapping("/details/{idoffre}")
    public accessRestaurant OneAccesRestaurant(@PathVariable("idoffre") Integer idoffre) {
        return serviceAccessRestaurant.OneAccessRestaurant(idoffre);
    }

    @GetMapping("{idrestaurant}/all")
    public List<accessRestaurant> getaccessRestaurantbyrestaurant(@PathVariable("idrestaurant") Integer idRestaurant) {
        List<accessRestaurant> list = serviceAccessRestaurant.retrieveAllAccessbyRestaurant(idRestaurant);
        return list;
    }
    @PostMapping("/add/{iduser}/{idoffre}")
    public accessRestaurant addaccessRestaurant(@RequestBody accessRestaurant accessRestaurant,
                                                @PathVariable("iduser") Integer iduser,
                                                @PathVariable("idoffre") Integer idoffre) {
        accessRestaurant r = serviceAccessRestaurant.addaccessRestaurant(accessRestaurant,iduser,idoffre);
        return r;
    }

    @DeleteMapping("/delete/{idaccessRestaurant}")
    public void removeaccessRestaurant(@PathVariable("idaccessRestaurant") Integer idaccessRestaurant) {
        serviceAccessRestaurant.removeaccessRestaurant(idaccessRestaurant);
    }

    @PutMapping("/update/{idaccessRestaurant}")
    public accessRestaurant updateaccessRestaurant(@RequestBody accessRestaurant idAccessRestaurant) {
        accessRestaurant accessRestaurant= serviceAccessRestaurant.updateaccessRestaurant(idAccessRestaurant);
        return accessRestaurant;
    }
}
