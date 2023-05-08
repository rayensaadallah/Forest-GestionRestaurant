package esprit.DevUp.FoRest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;



@SpringBootApplication
@EnableScheduling
public class FoRestApplication {

	public static void main(String[] args)  {
		SpringApplication.run(FoRestApplication.class, args);
		System.out.println("FOREST");

	}
}





