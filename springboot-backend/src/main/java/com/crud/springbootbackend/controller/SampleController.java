package com.crud.springbootbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
public class SampleController {

	@GetMapping("/sasi")
	public void sample() {
		System.out.println("sas");
	}
}
