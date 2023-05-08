package esprit.DevUp.FoRest.Controller.GestionRestaurant;

import com.google.zxing.WriterException;
import esprit.DevUp.FoRest.Entity.OffreRestaurant;
import esprit.DevUp.FoRest.Service.GestionRestaurant.IServiceOffreRestaurant;
import esprit.DevUp.FoRest.Utils.CodeQR;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@AllArgsConstructor
@NoArgsConstructor
@RequestMapping("/offreRestaurant")
@CrossOrigin(origins = "http://localhost:4200")
public class OffreRestaurantController {

    @Autowired
    IServiceOffreRestaurant iServiceOffreRestaurant;

        @GetMapping("/offre/{idoffre}")
    public OffreRestaurant getoffredetails(@PathVariable("idoffre") Integer id) {
        return iServiceOffreRestaurant.retrieveOneOffre(id);
        }
    @GetMapping("/{idrestaurant}/offre")
    public List<OffreRestaurant> getoffreByRestaurant(@PathVariable("idrestaurant") Integer idrestaurant) {
        List<OffreRestaurant> list = iServiceOffreRestaurant.retrieveAllOffreByRestaurant(idrestaurant);
        return list;
    }
    @GetMapping("/Alloffers")
    public List<OffreRestaurant> getoffreRestaurant() {
        List<OffreRestaurant> list = iServiceOffreRestaurant.retrieveAllOffer();
        return list;
    }

    @PostMapping("/{idrestaurant}/addOffreRestaurant")
    public OffreRestaurant addOffreRestaurant(@PathVariable("idrestaurant") Integer idrestaurant,@RequestBody OffreRestaurant offreRestaurant) throws IOException, WriterException {
        CodeQR.generateQRCodeOffre(offreRestaurant);
        OffreRestaurant r = iServiceOffreRestaurant.addOffreRestaurant(offreRestaurant,idrestaurant);
        return r;
    }
    @DeleteMapping("/removeOffreRestaurant/{idOffreRestaurant}")
    public void removeOffreRestaurant(@PathVariable("idOffreRestaurant") Integer idOffreRestaurant) {
        iServiceOffreRestaurant.removeOffreRestaurant(idOffreRestaurant);
    }

    @PutMapping("/updateOffreRestaurant/{idOffreRestaurant}")
    public OffreRestaurant updateOffreRestaurant(@RequestBody OffreRestaurant offre) {
        OffreRestaurant offreRestaurant= iServiceOffreRestaurant.updateOffreRestaurant(offre);
        return offreRestaurant;
    }
}
