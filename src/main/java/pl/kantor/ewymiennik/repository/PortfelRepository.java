package pl.kantor.ewymiennik.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.kantor.ewymiennik.entities.Portfel;

public interface PortfelRepository extends JpaRepository<Portfel, Integer> {
}
