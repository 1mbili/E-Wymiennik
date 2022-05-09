package pl.kantor.ewymiennik.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.kantor.ewymiennik.entities.Portfel;
import pl.kantor.ewymiennik.service.PortfelService;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api")
public class PortfelController {
    @Autowired
    PortfelService userService;

    @GetMapping("/portfele")
    public List<Portfel> list() {
        return userService.listAllUser();
    }

    @GetMapping("/portfele/{id}")
    public ResponseEntity<Portfel> get(@PathVariable Integer id) {
        try {
            Portfel user = userService.getUser(id);
            return new ResponseEntity<Portfel>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Portfel>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/portfele/")
    public void add(@RequestBody Portfel user) {
        System.out.println("jajuszko");
        userService.saveUser(user);
    }
    @PutMapping("/portfele/{id}")
    public ResponseEntity<?> update(@RequestBody Portfel user, @PathVariable Integer id) {
        try {
            Portfel existUser = userService.getUser(id);
            user.setId_portfela(id);
            userService.saveUser(user);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/portfele/{id}")
    public void delete(@PathVariable Integer id) {

        userService.deleteUser(id);
    }
}
