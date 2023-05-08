package esprit.DevUp.FoRest.Config;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@Aspect
public class LoggingAspect {

    // avant l'exécution
    @Before("execution(* esprit.DevUp.FoRest.Service.*.*(..))")
    public void logMethodEntry(JoinPoint joinPoint) {
        String name = joinPoint.getSignature().getName();
        log.info("In method : " + name + " : ");
    }

// après  la bonne exécution

    @AfterReturning("execution( * esprit.DevUp.FoRest.Service.*.*(..))")
    public void logMethodExit1(JoinPoint joinPoint) {
        String name = joinPoint.getSignature().getName();
        log.info("Out of method without errors : " + name );
    }

// s'exécute en cas d'erreur d'exécution (throws error)

    @AfterThrowing("execution(* esprit.DevUp.FoRest.Service.*.*(..))")
    public void logMethodExit2(JoinPoint joinPoint) {
        String name = joinPoint.getSignature().getName();
        log.error("Out of method with erros : " + name );
    }

// s'exécute dans la méthode dans tous les cas

    @After("execution(* esprit.DevUp.FoRest.Service.*.*(..))")
    public void logMethodExit(JoinPoint joinPoint) {
        String name = joinPoint.getSignature().getName();
        log.info("Out of method : " + name );
    }

}
