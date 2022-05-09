package pl.kantor.ewymiennik.entities.kursy;


import javax.persistence.*;

@Entity
@Table(name="waluta")
public class Waluta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_waluty")
    Long id_waluty;

    @Column(name = "nazwa",unique=true)
    String nazwa;

    @Embedded
    Kurs kursy;


    public Long getId_waluty() {
        return id_waluty;
    }

    public void setId_waluty(Long id_waluty) {
        this.id_waluty = id_waluty;
    }

    public String getNazwa() {
        return nazwa;
    }

    public void setNazwa(String nazwa) {
        this.nazwa = nazwa;
    }

    public Kurs getKursy() {
        return kursy;
    }

    public void setKursy(Kurs kursy) {
        this.kursy = kursy;
    }
}
