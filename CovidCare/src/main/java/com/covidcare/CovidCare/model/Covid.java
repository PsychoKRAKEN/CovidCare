package com.covidcare.CovidCare.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Covid {
	
	@Column(name="first_name")
	private String fname;
	
	@Column(name="last_name")
	private String lname;
	
	@Column(name="age")
	private int age;
	
	@Column(name="phone_number")
	private Long pno;
	
	@Id
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	public Covid()
	{
		
	}
	
	
	public Covid(String fname, String lname, int age, Long pno, String email, String password) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.age = age;
		this.pno = pno;
		this.email = email;
		this.password = password;
	}


	@Override
	public String toString() {
		return "Covid [fname=" + fname + ", lname=" + lname + ", age=" + age + ", pno=" + pno + ", email=" + email
				+ ", password=" + password + "]";
	}
	
	/*
	@Override
	public boolean isAccountNonLocked()
	{
		return true;
	}
	
	@Override
	public boolean isCredentialsNonExpired()
	{
		return true;
	}
	
	@Override
	public boolean isEnabled()
	{
		return false;
	}
	*/
	
	
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Long getPno() {
		return pno;
	}
	public void setPno(Long Pno) {
		this.pno = Pno;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	

}
