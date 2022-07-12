package com.coderscampus.week21d.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coderscampus.week21d.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	// automatically creates a SQL select statement
	// which is select * from users where username = :username
	

	User findByUsername(String username);

}
