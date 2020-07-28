package com.nagarro.travelPortalRestApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.nagarro.travelPortalRestApi.model.TicketData;
import com.nagarro.travelPortalRestApi.model.TicketResponseData;
import com.nagarro.travelPortalRestApi.repository.TicketRepository;
import com.nagarro.travelPortalRestApi.repository.TicketResponseRepository;
@Service
public class TicketService {
	@Autowired
	private TicketRepository travelRepo;
	
	@Autowired
	private TicketResponseRepository resp;
	
	public TicketData saveTravelData(TicketData data) {
		return travelRepo.save(data);
	}
	
	public List<TicketData> getProducts() {
		List<TicketData> list = travelRepo.findAll();
		return list;
	}

	public String updateInfo(TicketData data) {
			TicketData obj= travelRepo.findByTicketid(data.getTicketid());
			obj=data;
			travelRepo.save(obj);
			return "Data updated successfully";
	}

	public String updateStatus(String id, String status) {
		TicketData obj= travelRepo.findByTicketid(id);
		obj.setStatus(status);
		travelRepo.save(obj);
		return "Status updated successfully";
//	public List<TicketData> getTicketByID(String user) {
//		// TODO Auto-generated method stub
//		List<TicketData> ls =travelRepo.findByUsername(user);
//		return ls;
//	}
}



	public Page<TicketData> getTicketsByUsername(String name, int page, int i) {
		// TODO Auto-generated method stub

			return travelRepo.findByUsername(name, PageRequest.of(page, i));
		
	}


	
//  public Product updateProduct(Product product) {

//}
}
