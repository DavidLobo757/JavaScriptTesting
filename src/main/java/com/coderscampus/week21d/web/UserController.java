package com.coderscampus.week21d.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.coderscampus.week21d.domain.User;
import com.coderscampus.week21d.service.UserService;

@Controller
@RequestMapping("/users")
public class UserController {

	
	@Autowired
	private UserService userService;
	
	@PostMapping("/exists")
	@ResponseBody
	public Boolean postExists(@RequestBody User user) {
		user = userService.findByUsername(user.getUsername());
		return user != null;
	}
	
	@GetMapping("/validateUsername")
	@ResponseBody
	public Boolean getValidUsername(String username) {
		return true;
	}
	
	@GetMapping("/validatepassword")
	@ResponseBody
	public Boolean getValidatePassword(String password) {
		return true;
	}
	
	@GetMapping("/register")
	public String getRegister(ModelMap model) {
		User user  = new User();
		
		model.put("user", user);
		return "register";
		
	}
	
	@PostMapping("/register")
	public String postRegister (User user) {
		userService.save(user);
		return "redirect:/login";
		
	}
}
