package pl.kantor.ewymiennik.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.kantor.ewymiennik.entities.Portfel;
import pl.kantor.ewymiennik.repository.PortfelRepository;

import java.util.List;

@Service
@Transactional
public class PortfelService {
    @Autowired
    private PortfelRepository userRepository;
    public List<Portfel> listAllUser() {
        return userRepository.findAll();
    }

    public void saveUser(Portfel user) {
        userRepository.save(user);
    }

    public Portfel getUser(Integer id) {
        return userRepository.findById(id).get();
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}
