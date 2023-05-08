package esprit.DevUp.FoRest.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class accessRestaurant implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_access_restaurant", nullable = false)
    private Integer id_access_restaurant;

    private Date dateStart;
    private Date dateEnd;
    private Boolean payment;
    @ManyToOne
    private User user;
    @ManyToOne
    @JsonIgnore
    private OffreRestaurant offreRestaurant;

}
