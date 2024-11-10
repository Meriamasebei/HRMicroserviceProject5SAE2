package tn.esprit.gestionconge.Services;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;
import tn.esprit.gestionconge.Entities.Utilisateur;

import java.util.List;

@FeignClient(name = "nodeproject",url = "http://nodeproject:5000")
public interface UserClient {

    @GetMapping("/users/getUser/{id}")
    Utilisateur getUserById(@PathVariable("id") int id);

    @GetMapping("/users/getAll")
    List<Utilisateur> getAllUsers();

    @PostMapping("/users/addUser")
    Utilisateur addUser(@RequestBody Utilisateur utilisateur);

}