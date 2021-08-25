package com.covidcare.CovidCare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.covidcare.CovidCare.model.vaccine;
import com.covidcare.CovidCare.repo.VaccineRepo;

@Service
public class VaccineService {
	
	@Autowired
	private VaccineRepo repo;
	
	public vaccine saveVaccine(vaccine vc)
	{
		return repo.save(vc);
	}
	
	public List<vaccine> getAllVaccine()
	{
		return repo.findAll();
	}
	
	public Optional<vaccine> getDose(Long aadhar)
	{
		return repo.findById(aadhar);
	}
	
	
}
