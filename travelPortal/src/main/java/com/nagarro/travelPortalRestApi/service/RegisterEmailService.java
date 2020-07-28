package com.nagarro.travelPortalRestApi.service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;


import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import com.nagarro.travelPortalRestApi.model.EmployeeData;

@Service
public class RegisterEmailService {

	@Autowired
	private JavaMailSender sender;

	@Autowired
	private Configuration config;

	public String sendRegisterEmail(EmployeeData user, Map<String, Object> model) throws IOException, TemplateException, MessagingException {
	//MailResponse response = new MailResponse();
		try {
	MimeMessage message = sender.createMimeMessage();
	 
	// set mediaType
	MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
	StandardCharsets.UTF_8.name());

	Template t = config.getTemplate("registerEmail-template.ftl");
	String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);

	helper.setTo(user.getEmail());
	helper.setText(html, true);
	helper.setSubject("Nagarro Travel Portal Information");
	//helper.setFrom("travelportal.ng01@gmail.com");
	sender.send(message);
	return "sent mail";
		}catch(Exception e) {
			System.out.println(e);
			return "error";
		}
	
		
	
	}
}




