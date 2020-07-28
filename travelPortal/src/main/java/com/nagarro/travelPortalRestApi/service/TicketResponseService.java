package com.nagarro.travelPortalRestApi.service;

import java.io.File;
import java.io.FileOutputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mysql.cj.log.Log;
import com.nagarro.travelPortalRestApi.model.TicketResponseData;
import com.nagarro.travelPortalRestApi.repository.TicketResponseRepository;

import freemarker.core.Environment;

@Service
public class TicketResponseService {
	@Autowired
	private TicketResponseRepository responseRepo;
	
	public TicketResponseData getResponseById(String id) {
		TicketResponseData resp = responseRepo.findByTicketid(id);
		return resp;
	}

	public TicketResponseData saveResponse(TicketResponseData img) {
		// TODO Auto-generated method stub
		return responseRepo.save(img);	
	}


}
