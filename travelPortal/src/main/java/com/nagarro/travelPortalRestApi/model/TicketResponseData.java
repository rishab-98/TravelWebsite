package com.nagarro.travelPortalRestApi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "ticket_response")
public class TicketResponseData {
	@Id
	@Column(name = "ticket_id")
	private String ticketid;
	private String comments;
	@Lob
	private byte[] file;

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	private String status;
	private String name;
	private String contentType;

	public String getTicketid() {
		return ticketid;
	}

	public void setTicketid(String ticketid) {
		this.ticketid = ticketid;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public byte[] getFile() {
		return file;
	}

	public void setFile(byte[] file) {
		this.file = file;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public TicketResponseData(String ticketid, String comments, byte[] file, String status, String name,
			String content) {
		super();
		this.ticketid = ticketid;
		this.comments = comments;
		this.file = file;
		this.status = status;
		this.name = name;
		this.contentType = content;
	}

	public TicketResponseData() {

	}

}
