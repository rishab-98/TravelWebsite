package com.nagarro.travelPortalRestApi.repository;

import com.nagarro.travelPortalRestApi.model.EmployeeData;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeInfoRepository extends JpaRepository<EmployeeData, String> {

	EmployeeData findByEmail(String username);

}