package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SMSDATA")
public class DataModel {

	@Id
	@Column(name = "ID")
	private Integer id;
	@Column(name = "CITY")
	private String city;
	@Column(name = "START_DATE")
	private String startdate;
	@Column(name = "END_DATE")
	private String enddate;
	@Column(name = "PRICE")
	private String price;
	@Column(name = "STATUS")
	private String status;
	@Column(name = "COLOR")
	private String color;

	public DataModel() {
		super();
	}

	public DataModel(Integer id) {
		super();
		this.id = id;
	}
	
	public DataModel(Integer id, String city, String startdate, String enddate, String price, String status,
			String color) {
		super();
		this.id = id;
		this.city = city;
		this.startdate = startdate;
		this.enddate = enddate;
		this.price = price;
		this.status = status;
		this.color = color;
	}


	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getStartdate() {
		return startdate;
	}
	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}
	public String getEnddate() {
		return enddate;
	}
	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	
	
}
