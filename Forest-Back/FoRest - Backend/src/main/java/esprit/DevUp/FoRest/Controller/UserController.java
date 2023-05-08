package esprit.DevUp.FoRest.Controller;

import esprit.DevUp.FoRest.Entity.User;
import esprit.DevUp.FoRest.Service.ISeviceUser;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@NoArgsConstructor
@RequestMapping("/User")
public class UserController {

    @Autowired
    ISeviceUser iSevice;


    // http://localhost:8089/Forest/User/retrieveAllUsers
    @GetMapping("/retrieveAllUsers")
    public List<User> getUsers() {
        List<User> listUsers = iSevice.retrieveAllUsers();
        return listUsers;
    }

    // http://localhost:8089/Forest/User/addUser
    @PostMapping("/addUser")
    public User adduser(@RequestBody User user) {
        User users = iSevice.addUser(user);
        return users;
    }

    // http://localhost:8089/Forest/User/removeUser/1
    @DeleteMapping("/removeUser/{userid}")
    public void removeuser(@PathVariable("userid") Integer idUser) {
        iSevice.removeUser(idUser);
    }

    // http://localhost:8089/Forest/User/updateUser
    @PutMapping("/updateUser")
    public User updateuser(@RequestBody User user) {
        User users= iSevice.updateUser(user);
        return users;
    }
}
