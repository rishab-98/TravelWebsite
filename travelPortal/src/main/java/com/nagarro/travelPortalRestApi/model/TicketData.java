package com.nagarro.travelPortalRestApi.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
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
@Table(name = "ticket_data")
public class TicketData {
	@Id
	@Column(name = "ticket_id")
	private String ticketid;
	private Date ticket_date;
	private String username;
	private String name;

	private String request_type;
	private String priority;
	private String travel_city;
	private String from_city;
	private Date travel_start_date;
	private Date travel_end_date;
	private String passport_number;
	private String project_name;
	private String expense_borne_by;
	private String travel_approver_name;
	private String expected_duration;
	private String upper_bound_cost;
	private String additional_details;
	private String status;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getTicketid() {
		return ticketid;
	}

	public void setTicket_id(String ticket_id) {
		this.ticketid = ticket_id;
	}

	public String getRequest_type() {
		return request_type;
	}

	public void setRequest_type(String request_type) {
		this.request_type = request_type;
	}

	public String getPriority() {
		return priority;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getTravel_city() {
		return travel_city;
	}

	public void setTravel_city(String travel_city) {
		this.travel_city = travel_city;
	}

	public String getFrom_city() {
		return from_city;
	}

	public void setFrom_city(String from_city) {
		this.from_city = from_city;
	}

	public Date getTravel_start_date() {
		return travel_start_date;
	}

	public void setTravel_start_date(Date travel_start_date) {
		this.travel_start_date = travel_start_date;
	}

	public Date getTravel_end_date() {
		return travel_end_date;
	}

	public void setTravel_end_date(Date travel_end_date) {
		this.travel_end_date = travel_end_date;
	}

	public String getPassport_number() {
		return passport_number;
	}

	public void setPassport_number(String passport_number) {
		this.passport_number = passport_number;
	}

	public String getProject_name() {
		return project_name;
	}

	public void setProject_name(String project_name) {
		this.project_name = project_name;
	}

	public String getExpense_borne_by() {
		return expense_borne_by;
	}

	public void setExpense_borne_by(String expense_borne_by) {
		this.expense_borne_by = expense_borne_by;
	}

	public String getTravel_approver_name() {
		return travel_approver_name;
	}

	public TicketData() {
		super();
	}

	public void setTravel_approver_name(String travel_approver_name) {
		this.travel_approver_name = travel_approver_name;
	}

	public String getExpected_duration() {
		return expected_duration;
	}

	public void setExpected_duration(String expected_duration) {
		this.expected_duration = expected_duration;
	}

	public String getUpper_bound_cost() {
		return upper_bound_cost;
	}

	public void setUpper_bound_cost(String upper_bound_cost) {
		this.upper_bound_cost = upper_bound_cost;
	}

	public String getAdditional_details() {
		return additional_details;
	}

	public void setAdditional_details(String additional_details) {
		this.additional_details = additional_details;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Date getTicket_date() {
		return ticket_date;
	}

	public void setTicket_date(Date ticket_date) {
		this.ticket_date = ticket_date;
	}

	public TicketData(String ticket_id, Date ticket_date, String username, String name, String request_type,
			String priority, String travel_city, String from_city, Date travel_start_date, Date travel_end_date,
			String passport_number, String project_name, String expense_borne_by, String travel_approver_name,
			String expected_duration, String upper_bound_cost, String additional_details, String status) {
		super();
		this.ticketid = ticket_id;
		this.ticket_date = ticket_date;
		this.username = username;
		this.name = name;
		this.request_type = request_type;
		this.priority = priority;
		this.travel_city = travel_city;
		this.from_city = from_city;
		this.travel_start_date = travel_start_date;
		this.travel_end_date = travel_end_date;
		this.passport_number = passport_number;
		this.project_name = project_name;
		this.expense_borne_by = expense_borne_by;
		this.travel_approver_name = travel_approver_name;
		this.expected_duration = expected_duration;
		this.upper_bound_cost = upper_bound_cost;
		this.additional_details = additional_details;
		this.status = status;
	}

}
