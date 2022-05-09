package pl.kantor.ewymiennik.entities;


import javax.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "klienci",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "PESEL"),
                @UniqueConstraint(columnNames = "email")
        })
public class User {



    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id_osoby;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Portfel getPortfel() {
        return portfel;
    }

    public void setPortfel(Portfel portfel) {
        this.portfel = portfel;
    }

    @Column(nullable = false)

    private String username;
    @Column(nullable = false)
    private String imie;
    @Column(nullable = false)
    private String nazwisko;
    @Column(nullable = false)

    private String email;
    @Column(nullable = false)
    private String adres;
    private Integer PESEL;
    private String password;
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @OneToOne(mappedBy = "klient")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Portfel portfel;

    public User() {
    }

    public User(String username,  String email, String imie, String nazwisko, String adres, Integer PESEL, String password) {
        this.username = username;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.email = email;
        this.adres = adres;
        this.PESEL = PESEL;
        this.password = password;
    }
    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }


    public Long getId_osoby() {
        return id_osoby;
    }

    public void setId_osoby(Long id_osoby) {
        this.id_osoby = id_osoby;
    }

    public String getImie() {
        return imie;
    }

    public void setImie(String imie) {
        this.imie = imie;
    }

    public String getNazwisko() {
        return nazwisko;
    }

    public void setNazwisko(String nazwisko) {
        this.nazwisko = nazwisko;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAdres() {
        return adres;
    }

    public void setAdres(String adress) {
        this.adres = adress;
    }

    public Integer getPESEL() {
        return PESEL;
    }

    public void setPESEL(Integer PESEL) {
        this.PESEL = PESEL;
    }


    public Set<Role> getRoles() {
        return roles;
    }
    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
