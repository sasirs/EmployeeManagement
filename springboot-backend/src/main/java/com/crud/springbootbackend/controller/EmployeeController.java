package com.crud.springbootbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.convert.ReadingConverter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.springbootbackend.modal.Employee;
import com.crud.springbootbackend.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/employee/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository emplRespo;
	
	/* Get All Employee */
	
	@GetMapping("/all")
	public  List<Employee> getAllEmployee(){
		return emplRespo.findAll();
	}
}
