package esprit.DevUp.FoRest.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class OffreRestaurant implements Serializable  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_offre_restaurant", nullable = false)
    private Integer idOffreRestaurant;
    private String nameOffre;
    private Integer nbrDays;
    private Boolean BREAKFAST;
    private Boolean LUNCH ;
    private Boolean DINNER;
    private Integer price;

    @OneToMany(mappedBy = "offreRestaurant")
    private List<accessRestaurant> accessRestaurants;

    @ManyToOne
    @JsonIgnore
    Restaurant restaurant;

}
