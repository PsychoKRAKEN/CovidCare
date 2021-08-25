package com.covidcare.CovidCare.util;

import org.springframework.stereotype.Component;

import com.covidcare.CovidCare.model.Covid;

@Component
public class CovidUtil {
	
	public void mapToActualObject(Covid actual,Covid covid)
	{
		if(covid.getFname()!=null)
			actual.setFname(covid.getFname());
		if(covid.getLname()!=null)
			actual.setLname(covid.getLname());
		actual.setAge(covid.getAge());
		actual.setPno(covid.getPno());
		if(covid.getEmail()!=null)
			actual.setEmail(covid.getEmail());
		if(covid.getPassword()!=null)
			actual.setPassword(covid.getPassword());
		
	}

}
