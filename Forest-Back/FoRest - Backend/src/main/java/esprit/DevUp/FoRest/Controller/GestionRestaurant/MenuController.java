package esprit.DevUp.FoRest.Controller.GestionRestaurant;

import com.google.zxing.WriterException;
import esprit.DevUp.FoRest.Entity.Menu;
import esprit.DevUp.FoRest.Entity.Restaurant;
import esprit.DevUp.FoRest.Entity.typeFood;
import esprit.DevUp.FoRest.Service.GestionRestaurant.IServiceMenu;
import esprit.DevUp.FoRest.Utils.CodeQR;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@RestController
@AllArgsConstructor
@NoArgsConstructor
@RequestMapping("/menu")
@CrossOrigin(origins = "http://localhost:4200")
public class MenuController {
    @Autowired
    IServiceMenu iserviceMenu;
    @GetMapping("/all")
    public List<Menu> getMenu() {
        List<Menu> list = iserviceMenu.retrieveAllMenu();
        return list;
    }

    @GetMapping("/details/{idmenu}")
    public Menu OneMenu(@PathVariable("idmenu") Integer m) {
        return  iserviceMenu.retrieveMenu(m);
    }
    @GetMapping("/all/{Restaurant_id}")
    public List<Menu> retrieveAllMenuByRestaurant(@PathVariable("Restaurant_id") Integer Restaurant_id) {
        List<Menu> list = iserviceMenu.retrieveAllMenuByRestaurant(Restaurant_id);
        return list;
    }
    @PostMapping(value = "/add/{restaurant_id}" ,consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Menu addMenu(@RequestParam("image") MultipartFile image, @RequestParam("description") String description,
                        @PathVariable("restaurant_id") Integer idrestaurant, @RequestParam("plate_name") String plate_name,
                        @RequestParam("time_meal") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") Date timeMeal,
                        @RequestParam("typeFood") typeFood typeFood
                         ) throws IOException, WriterException {
        Menu menu=new Menu();
        menu.setRestaurantid(idrestaurant);
        menu.setImage(image.getBytes());
        menu.setDescription(description);
        menu.setPlateName(plate_name);
        menu.setTimeMeal(timeMeal);
        menu.setTypeFood(typeFood);
        Menu r = iserviceMenu.addMenu(menu,image);
        CodeQR.generateQRCodeMenu(menu);
        return r;
    }

  @PostMapping("/add")
  public Menu addRestaurant(@RequestBody Menu restaurant) throws IOException, WriterException {
    Menu r = iserviceMenu.addMenu2(restaurant);
    CodeQR.generateQRCodeMenu(r);
    return r;
  }

  @DeleteMapping("/delete/{idMenu}")
    public void removeMenu(@PathVariable("idMenu") Integer idmenu) {
        iserviceMenu.removeMenu(idmenu);
    }

    @PutMapping("/update/{idMenu}")
    public Menu updateMenu(@RequestBody Menu idmenu) {
        Menu menu= iserviceMenu.updateMenu(idmenu);
        return idmenu;
    }
}
