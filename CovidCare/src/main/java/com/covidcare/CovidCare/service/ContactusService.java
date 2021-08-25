package com.covidcare.CovidCare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covidcare.CovidCare.model.Contactus;
import com.covidcare.CovidCare.repo.ContactusRepo;

@Service
public class ContactusService {
	
	@Autowired
	private ContactusRepo repo;
	
	public Contactus saveContactUs(Contactus contactus)
	{
		return repo.save(contactus);
	}
	
	public List<Contactus> getAllContactUs()
	{
		return repo.findAll();
	}

}
