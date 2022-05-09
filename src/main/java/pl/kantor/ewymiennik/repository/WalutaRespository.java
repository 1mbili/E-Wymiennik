package pl.kantor.ewymiennik.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.kantor.ewymiennik.entities.kursy.Waluta;

public interface WalutaRespository extends JpaRepository<Waluta, Integer> {
}
