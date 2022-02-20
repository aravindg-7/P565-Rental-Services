package com.rental.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import com.rental.model.User;
import com.rental.repository.UserRepository;


@Service
public class AppUserDetailsService {
	
	
	@Autowired
	UserRepository userrepository;
	
	
	public boolean signup(User newuser){
//		User u=userrepository.findByUsername(newuser.getUsername());
//		if(u==null)
//		{
		String password=newuser.getPassword();
		BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
		String newpassword=encoder.encode(password);
//			Role role= rolerepository.findById(1).get();
//			List<Role> roleset= new ArrayList<Role>();
//			roleset.add(role);
//			newuser.setRoles(roleset);
		newuser.setPassword(newpassword);
		userrepository.save(newuser);
		return true;
//		}
//		else
//			return false;
	}



}
