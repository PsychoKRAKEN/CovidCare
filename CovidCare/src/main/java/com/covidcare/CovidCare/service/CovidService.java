package com.covidcare.CovidCare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covidcare.CovidCare.model.Covid;
import com.covidcare.CovidCare.repo.CovidRepo;

@Service
public class CovidService {
	
	
	@Autowired
	private CovidRepo repo;
	
	public Covid saveCovid(Covid covid)
	{
		return repo.save(covid);
	}
	
	public Optional<Covid> fetchCovidByEmail(String email)
	{
		return repo.findById(email);
	}
	
	public List<Covid> getAllCovid()
	{
		return repo.findAll();
	}
	
	public Covid fetchCovidByEmailAndPassword(String email,String password)
	{
		return repo.findByEmailAndPassword(email, password);
	}
	
	public Covid fetchList(String f,String p)
	{
		Covid obj= repo.fetchList(f,p);
		return obj;
		
		
	}
	
	

}
