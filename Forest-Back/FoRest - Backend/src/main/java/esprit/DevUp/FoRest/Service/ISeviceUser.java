package esprit.DevUp.FoRest.Service;

import esprit.DevUp.FoRest.Entity.User;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ISeviceUser {
    List<User> retrieveAllUsers();

    User addUser (User u);

    User updateUser (User u);

    User retrieveUser(Integer idUser);

    void removeUser(Integer idUser);
}
