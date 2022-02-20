package com.rental;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.rental.repository.UserRepository;

@EnableJpaRepositories(basePackages = {
	    "com.rental.repository"
	})
@SpringBootApplication
public class RentalApplication {
	
	@Autowired
	private static UserRepository urepository;
	

	

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(RentalApplication.class, args);
		urepository=context.getBean(UserRepository.class);
	}

}
