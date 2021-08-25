package com.covidcare.CovidCare.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class vaccine {
	
	String name;
	@Id
	Long aadhar;
	String hospital;
	String city;
	String email;
	Long pno;
	String state;
	Long pincode;
	
	/*
	Boolean BookDose1;
	Boolean BookDose2;
	Boolean ConfirmDose1;
	Boolean ConfirmDose2;
	
	
	
	
	public Boolean getBookDose1() {
		return BookDose1;
	}
	public void setBookDose1(Boolean bookDose1) {
		BookDose1 = bookDose1;
	}
	public Boolean getBookDose2() {
		return BookDose2;
	}
	public void setBookDose2(Boolean bookDose2) {
		BookDose2 = bookDose2;
	}
	public Boolean getConfirmDose1() {
		return ConfirmDose1;
	}
	public void setConfirmDose1(Boolean confirmDose1) {
		ConfirmDose1 = confirmDose1;
	}
	public Boolean getConfirmDose2() {
		return ConfirmDose2;
	}
	public void setConfirmDose2(Boolean confirmDose2) {
		ConfirmDose2 = confirmDose2;
	}
	*/
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getAadhar() {
		return aadhar;
	}
	public void setAadhar(Long aadhar) {
		this.aadhar = aadhar;
	}
	public String getHospital() {
		return hospital;
	}
	public void setHospital(String hospital) {
		this.hospital = hospital;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Long getPno() {
		return pno;
	}
	public void setPno(Long pno) {
		this.pno = pno;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Long getPincode() {
		return pincode;
	}
	public void setPincode(Long pincode) {
		this.pincode = pincode;
	}
	
	
	
	
	

}
