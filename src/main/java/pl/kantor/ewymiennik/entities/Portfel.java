package pl.kantor.ewymiennik.entities;


import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "portfel")
public class Portfel {

    public Portfel(BigDecimal ilość_pln, BigDecimal ilość_cnh, BigDecimal ilość_eur, BigDecimal ilość_jpy, BigDecimal ilość_gbp, BigDecimal ilość_chf, BigDecimal ilość_usd) {
        this.ilość_pln = ilość_pln;
        this.ilość_cnh = ilość_cnh;
        this.ilość_eur = ilość_eur;
        this.ilość_jpy = ilość_jpy;
        this.ilość_gbp = ilość_gbp;
        this.ilość_chf = ilość_chf;
        this.ilość_usd = ilość_usd;
    }
    public Portfel(){}

    public int getId_portfela() {
        return id_portfela;
    }

    public void setId_portfela(int id_portfela) {
        this.id_portfela = id_portfela;
    }



    public BigDecimal getIlość_pln() {
        return ilość_pln;
    }

    public void setIlość_pln(BigDecimal ilość_pln) {
        this.ilość_pln = ilość_pln;
    }

    public BigDecimal getIlość_cnh() {
        return ilość_cnh;
    }

    public void setIlość_cnh(BigDecimal ilość_cnh) {
        this.ilość_cnh = ilość_cnh;
    }

    public BigDecimal getIlość_eur() {
        return ilość_eur;
    }

    public void setIlość_eur(BigDecimal ilość_eur) {
        this.ilość_eur = ilość_eur;
    }

    public BigDecimal getIlość_jpy() {
        return ilość_jpy;
    }

    public void setIlość_jpy(BigDecimal ilość_jpy) {
        this.ilość_jpy = ilość_jpy;
    }

    public BigDecimal getIlość_gbp() {
        return ilość_gbp;
    }

    public void setIlość_gbp(BigDecimal ilość_gbp) {
        this.ilość_gbp = ilość_gbp;
    }

    public BigDecimal getIlość_chf() {
        return ilość_chf;
    }

    public void setIlość_chf(BigDecimal ilość_chf) {
        this.ilość_chf = ilość_chf;
    }

    public BigDecimal getIlość_usd() {
        return ilość_usd;
    }

    public void setIlość_usd(BigDecimal ilość_usd) {
        this.ilość_usd = ilość_usd;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_portfela;


    private BigDecimal ilość_pln;
	  private BigDecimal ilość_cnh;
    private BigDecimal ilość_eur;
    private BigDecimal ilość_jpy;
    private BigDecimal ilość_gbp;
    private BigDecimal ilość_chf;
    private BigDecimal ilość_usd;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_osoby", referencedColumnName = "id_osoby")
    private User klient;
}
