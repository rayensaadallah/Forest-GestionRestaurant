package esprit.DevUp.FoRest.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ReservationPlace implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_reservation_place", nullable = false)
    private Integer idReservationPlace;
    private Date dateStart;
    private Date dateEnd;
    private Integer iduser;
    @ManyToOne
    private TableRestaurant table;
    @ManyToOne
    private Menu menu;
}
