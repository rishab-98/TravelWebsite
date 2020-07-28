package com.nagarro.travelPortalRestApi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nagarro.travelPortalRestApi.model.EmployeeData;
import com.nagarro.travelPortalRestApi.repository.EmployeeInfoRepository;

@Service
public class AuthenticationService implements UserDetailsService {

	@Autowired
	private EmployeeInfoRepository repository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		EmployeeData model = repository.findByEmail(username);
		CustomUserDetails userDetails = null;
		if (model != null) {
			userDetails = new CustomUserDetails();
			userDetails.setUser(model);

		} else {
			System.out.println("Wrong Credentials!");
			throw new UsernameNotFoundException("User not exist with name: " + username);
		}

		return userDetails;
	}

}
