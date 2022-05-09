package pl.kantor.ewymiennik.entities.kursy;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.sql.Date;
@Entity
@Table(name="KursCNH")
public class KursCNH {
    @Id
    private int id_waluty;
    private BigDecimal średnia_wartość;
    private Date data;
    private String nazwa;

}
