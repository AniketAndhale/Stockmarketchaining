
package com.cts.training.userservice;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Arrays;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
@SpringBootTest(classes=UserServiceApplication.class , webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension.class)
public class UserControllerIntegrationTest 
{
	@LocalServerPort
	private int port;
	HttpHeaders headers=new HttpHeaders();
	TestRestTemplate restTemplate=new TestRestTemplate();
	@Test
	public void test() throws Exception
	{
		String url="http://localhost:"+port+"/allUsers";
		System.out.println("Port is ::"+url);
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<String> entity=new HttpEntity<String>(null,headers);
		ResponseEntity<String> response=restTemplate.exchange(url,HttpMethod.GET,entity,String.class);
		String expected="";
		System.out.println("TEST1 :: Response Body :::: " +response.getBody());
		assertTrue(response.getBody().contains(expected));
	}
}













