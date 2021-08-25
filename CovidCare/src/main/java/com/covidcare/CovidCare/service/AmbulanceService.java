package com.covidcare.CovidCare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covidcare.CovidCare.model.Ambulance;
import com.covidcare.CovidCare.repo.AmbulanceRepo;

@Service
public class AmbulanceService {
	
	@Autowired
	private AmbulanceRepo repo;
	
	public Ambulance saveAmbulance(Ambulance ambulance)
	{
		return repo.save(ambulance);
	}
	
	public List<Ambulance> getAllAmbulance()
	{
		return repo.findAll();
	}

}
