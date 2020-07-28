package com.nagarro.travelPortalRestApi.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nagarro.travelPortalRestApi.model.EmployeeData;
import com.nagarro.travelPortalRestApi.model.TicketData;
import com.nagarro.travelPortalRestApi.model.TicketResponseData;
import com.nagarro.travelPortalRestApi.service.ForgetEmailService;
import com.nagarro.travelPortalRestApi.service.EmployeeService;
import com.nagarro.travelPortalRestApi.service.RegisterEmailService;
import com.nagarro.travelPortalRestApi.service.TicketResponseService;
import com.nagarro.travelPortalRestApi.service.TicketService;

import freemarker.template.TemplateException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LoginController {

	@Autowired
	private EmployeeService service;

	@Autowired
	private ForgetEmailService forgetMail;

	@Autowired
	private RegisterEmailService registerMail;

	@Autowired
	TicketService ticketService;

	@Autowired
	TicketResponseService responseService;

	@GetMapping("/")
	public EmployeeData findProductById(Principal principal) {
		// String currentUserName(Principal principal) {
		EmployeeData user = service.getUserDataByID(principal.getName());
		return user;
	}

	@CrossOrigin(origins = "http://localhost:4200/")
	@GetMapping("/products")
	public List<EmployeeData> findAllProducts() {
		List<EmployeeData> ls = service.getProducts();
		return ls;
	}

	@PostMapping("/register")
	public String addProduct(@RequestBody EmployeeData user) {
		service.saveProduct(user);
		Map<String, Object> model = new HashMap<>();
		model.put("name", user.getFirstName());
		model.put("email", user.getEmail());
		model.put("password", user.getPassword());
		try {
			return registerMail.sendRegisterEmail(user, model);
		} catch (IOException | TemplateException | MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "error";
		}
	}

	@PostMapping("/forget")
	public String getCredentials(@RequestBody String email) {
		System.out.println(email);
		EmployeeData user = service.getUserDataByID(email);
		System.out.println(user.getLastName());
		Map<String, Object> model = new HashMap<>();

		model.put("name", user.getFirstName());
		model.put("email", user.getEmail());
		model.put("password", user.getPassword());

		if (user.getEmail() == null) {
			return "User is not registered";
		} else {

			try {
				return forgetMail.sendForgetEmail(user, model);
			} catch (IOException | TemplateException | MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return "Error in sending email";
			}
		}

	}

	@PostMapping("/submitTicket")
	public TicketData submitTicket(@RequestBody TicketData data) {
		System.out.println(data);
		System.out.println(data.getPassport_number());
		return ticketService.saveTravelData(data);

	}

	@CrossOrigin(origins = "http://localhost:4200/")
	@GetMapping("/viewTicket")
	public List<TicketData> findTicketsById() {
		List<TicketData> ls = ticketService.getProducts();
		ArrayList<TicketData> finalList = new ArrayList<TicketData>();
		System.out.println(ls.size());
//	for(int i=0;i<ls.size();i++) {
//
//		
//		if(ls.get(i).getStatus()!="submitted" || ls.get(i).getStatus()!="Resubmitted" ||ls.get(i).getStatus()!="In Process" ||  ls.get(i).getStatus()!="In Process")
//		{ 
//			System.out.println("status="+ls.get(i).getStatus());
//			
//		ls.remove(i);
//		}

		// }

		System.out.println(ls.get(0).getFrom_city());
		return ls;
	}

	@CrossOrigin(origins = "http://localhost:4200/")
	@GetMapping("/viewUserTicket/{name}")
	public Page<TicketData> getTicketList(@PathVariable("name") String name,
			@RequestParam(defaultValue = "0") int page) {
		System.out.print(name);
		System.out.print(page);
		return ticketService.getTicketsByUsername(name, page, 5);
	}

	@CrossOrigin(origins = "http://localhost:4200/")
	@GetMapping("/viewResponse")
	public TicketResponseData findTicketResponseById(@RequestBody String id) {
		TicketResponseData resp = responseService.getResponseById(id);
		return resp;
	}

	@CrossOrigin(origins = "http://localhost:4200/")
	@PatchMapping("/updateTicket")
	public String updateTicket(@RequestBody TicketData data) {
		return ticketService.updateInfo(data);

	}

	@CrossOrigin(origins = "http://localhost:4200/")
	@PostMapping(value = "/uploadImage", produces = MediaType.APPLICATION_JSON_VALUE, consumes = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE })
	
	public BodyBuilder uplaodImage(@RequestParam("comment") String comment, @RequestParam("id") String id,
			@RequestParam("status") String status, @RequestParam("imageFile") MultipartFile file) throws IOException {
		// Fn to change status of ticket in ticket table

		System.out.println("Original Image Byte Size - " + file.getBytes().length);
		TicketResponseData img = new TicketResponseData(id, comment, compressBytes(file.getBytes()), status,
				file.getOriginalFilename(), file.getContentType());
		System.out.println(file.getContentType());
		responseService.saveResponse(img);
		ticketService.updateStatus(id, status);
		return ResponseEntity.status(HttpStatus.OK);
	}

	@CrossOrigin(origins = "http://localhost:4200/")
	@PostMapping("/getResponse")
	public TicketResponseData getImage(@RequestBody String id) throws IOException {
		System.out.println(id);
		TicketResponseData retrievedImage = responseService.getResponseById(id);

		TicketResponseData img = new TicketResponseData(retrievedImage.getTicketid(), retrievedImage.getComments(),
				decompressBytes(retrievedImage.getFile()), retrievedImage.getStatus(), retrievedImage.getName(),
				retrievedImage.getContentType());
		// responseService.saveImage(retrievedImage.getFile());

		return img;
	}

	public static byte[] compressBytes(byte[] data) {
		Deflater deflater = new Deflater();
		deflater.setInput(data);
		deflater.finish();
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		while (!deflater.finished()) {
			int count = deflater.deflate(buffer);
			outputStream.write(buffer, 0, count);
		}
		try {
			outputStream.close();
		} catch (IOException e) {
		}
		System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
		return outputStream.toByteArray();
	}

	public static byte[] decompressBytes(byte[] data) {
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		try {
			while (!inflater.finished()) {
				int count = inflater.inflate(buffer);
				outputStream.write(buffer, 0, count);
			}
			outputStream.close();
		} catch (IOException ioe) {
		} catch (DataFormatException e) {
		}
		return outputStream.toByteArray();

	}

}
