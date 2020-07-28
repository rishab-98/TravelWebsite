package com.nagarro.travelPortalRestApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.travelPortalRestApi.model.EmployeeData;
import com.nagarro.travelPortalRestApi.model.TicketData;
import com.nagarro.travelPortalRestApi.repository.EmployeeInfoRepository;
import com.nagarro.travelPortalRestApi.repository.TicketRepository;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeInfoRepository repository;


	public EmployeeData saveProduct(EmployeeData product) {
		return repository.save(product);
	}

	public List<EmployeeData> saveProducts(List<EmployeeData> products) {
		return repository.saveAll(products);
	}

	public List<EmployeeData> getProducts() {
		List<EmployeeData> list = repository.findAll();
		return list;
	}

	public EmployeeData getUserDataByID(String email) {
		return repository.findByEmail(email);

	}




}
