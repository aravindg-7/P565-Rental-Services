package com.rental.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rental.model.User;
import com.rental.repository.UserRepository;
//import com.rental.repository.UserRepository;
import com.rental.service.AppUserDetailsService;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private AppUserDetailsService detailservice;
	
	@Autowired
	private UserRepository repository;
	
	//TODO user exists exception
	@PostMapping
	public boolean signup(@RequestBody @Validated User user) {
		if(detailservice.signup(user))
			return detailservice.signup(user);
		else
			return false;
	}

}
