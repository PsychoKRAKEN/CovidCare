package com.covidcare.CovidCare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covidcare.CovidCare.model.Bed;
import com.covidcare.CovidCare.model.vaccine;
import com.covidcare.CovidCare.repo.BedRepo;

@Service
public class BedService {
	
	@Autowired
	private BedRepo repo;
	
	public Bed saveBed(Bed bed)
	{
		return repo.save(bed);
	}
	
	public List<Bed> getAllBed()
	{
		return repo.findAll();
	}


}
