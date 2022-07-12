package com.coderscampus.week21d.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coderscampus.week21d.domain.User;
import com.coderscampus.week21d.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	public User save (User user) {
		return userRepo.save(user);
	}

	public User findByUsername(String username) {
		// TODO Auto-generated method stub
		return userRepo.findByUsername(username);
	}
}
