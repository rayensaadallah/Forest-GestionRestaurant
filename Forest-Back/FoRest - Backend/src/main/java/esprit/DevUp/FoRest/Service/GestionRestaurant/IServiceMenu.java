package esprit.DevUp.FoRest.Service.GestionRestaurant;

import esprit.DevUp.FoRest.Entity.Menu;
import esprit.DevUp.FoRest.Entity.OffreRestaurant;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface IServiceMenu {
    List<Menu> retrieveAllMenu();

    List<Menu> retrieveAllMenuByRestaurant(Integer Restaurant_id);
    Menu addMenu (Menu u, MultipartFile image) throws IOException;

    Menu updateMenu (Menu u);

    Menu retrieveMenu(Integer idmenu);

    void removeMenu(Integer idmenu);

}
