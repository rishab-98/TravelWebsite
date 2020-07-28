package com.nagarro.travelPortalRestApi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.travelPortalRestApi.model.TicketResponseData;

public interface TicketResponseRepository extends JpaRepository<TicketResponseData, String> {
	TicketResponseData findByTicketid(String id);
	//TicketResponseData findByName(String name);
}
