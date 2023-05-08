package esprit.DevUp.FoRest.Service.GestionRestaurant;

import esprit.DevUp.FoRest.Entity.OffreRestaurant;

import java.util.List;

public interface IServiceOffreRestaurant {
    List<OffreRestaurant> retrieveAllOffer();

    List<OffreRestaurant> retrieveAllOffreByRestaurant(Integer id);
    OffreRestaurant retrieveOneOffre(Integer Offreidrestaurant);
    OffreRestaurant addOffreRestaurant (OffreRestaurant u,Integer id);

    OffreRestaurant updateOffreRestaurant (OffreRestaurant u);



    void removeOffreRestaurant(Integer idOffrerestaurant);
}
