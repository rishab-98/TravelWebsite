package com.nagarro.travelPortalRestApi.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.travelPortalRestApi.model.TicketData;

public interface TicketRepository extends JpaRepository<TicketData, String> {

	TicketData findByTicketid(String id);

//	List<TicketData> findByUsername(String name);

	public Page<TicketData> findByUsername(String username, Pageable pageable);
}
