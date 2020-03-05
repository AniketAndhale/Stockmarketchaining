package com.cts.training.userservice;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UsersRepo extends JpaRepository<Users, Integer> {
	Users findByEmail(String email);
	

}