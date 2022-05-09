package pl.kantor.ewymiennik.entities.kursy;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.math.BigDecimal;

@Embeddable
public class Kurs {
    @Column(name = "kurs", table = "waluta")
    BigDecimal kurs;

    @Column(name = "kurs_sprzedaży", table = "waluta")
    BigDecimal kursSprzedaży;

    @Column(name = "kurs_kupna", table = "waluta")
    BigDecimal kursKupna;


    public BigDecimal getKurs() {
        return kurs;
    }

    public void setKurs(BigDecimal kurs) {
        this.kurs = kurs;
    }

    public BigDecimal getKursSprzedaży() {
        return kursSprzedaży;
    }

    public void setKursSprzedaży(BigDecimal kursSprzedaży) {
        this.kursSprzedaży = kursSprzedaży;
    }

    public BigDecimal getKursKupna() {
        return kursKupna;
    }

    public void setKursKupna(BigDecimal kursKupna) {
        this.kursKupna = kursKupna;
    }
}
