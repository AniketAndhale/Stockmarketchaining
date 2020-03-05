package com.cts.training.userservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin("*")
@RestController

public class UserConrtroller {

	@Autowired
	UsersRepo ur;
	@Autowired
	UserService cs;
	@Autowired
	JavaMailSender jms;
	@RequestMapping(value = "/users", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Users> findAll() {
		return ur.findAll();
	}
	@RequestMapping(value = "/users/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Users findOne(@PathVariable int id) {
		Optional<Users> usr = ur.findById(id);
		Users us = usr.get();
		return us;
	}
	@RequestMapping(value = "/users", method = RequestMethod.POST)
	public String save(@RequestBody Users usr) {
		String us=cs.insert(usr);
		return us;
	}
	@RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable int id) {
		cs.remove(id);
	}
	@RequestMapping(value = "/users", method = RequestMethod.PUT)
	public String update(@RequestBody Users usr) {
		String us = cs.alter(usr);
				
		return us;
	}
}

