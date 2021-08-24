package com.covidcare.CovidCare.controller;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.covidcare.CovidCare.model.Ambulance;
import com.covidcare.CovidCare.model.Bed;
import com.covidcare.CovidCare.model.Covid;
import com.covidcare.CovidCare.model.vaccine;
import com.covidcare.CovidCare.repo.CovidRepo;
import com.covidcare.CovidCare.service.AmbulanceService;
import com.covidcare.CovidCare.service.BedService;
import com.covidcare.CovidCare.service.CovidService;
import com.covidcare.CovidCare.service.VaccineService;
import com.covidcare.CovidCare.util.CovidUtil;


import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class CovidController {
	
	@Autowired
	private CovidService service;
	
	@Autowired
	private VaccineService ser;
	
	@Autowired
	private BedService bedservice;
	
	@Autowired
	private AmbulanceService ambulanceService;
	
	@PostMapping("/covid")
	public Covid saveCovid(@RequestBody Covid covid)
	{
		Covid covidobj=null;
		covidobj=service.saveCovid(covid);
		return covidobj;
	}
	
	@PostMapping("/vaccine")
	public vaccine saveVaccine(@RequestBody vaccine vc)
	{
		vaccine vaccineobj=null;
		vaccineobj=ser.saveVaccine(vc);
		return vaccineobj;
	}
	
	@PostMapping("/bed")
	public Bed saveBed(@RequestBody Bed bed)
	{
		Bed bedobj=null;
		bedobj=bedservice.saveBed(bed);
		return bedobj;
	}
	
	@PostMapping("/ambulance")
	public Ambulance saveAmbulance(@RequestBody Ambulance ambulance)
	{
		Ambulance ambulanceobj=null;
		ambulanceobj=ambulanceService.saveAmbulance(ambulance);
		return ambulanceobj;
	}
	
	@GetMapping("/covid")
	public List<Covid> getAllCovid()
	{
		List<Covid> obj=null;
		obj=service.getAllCovid();
		return obj;
	}
	
	@GetMapping("/vaccine")
	public List<vaccine> getAllVaccine()
	{
		List<vaccine> obj=null;
		obj=ser.getAllVaccine();
		return obj;
	}
	
	@GetMapping("/bed")
	public List<Bed> getAllBed()
	{
		List<Bed> obj=null;
		obj=bedservice.getAllBed();
		return obj;
	}
	
	@GetMapping("/ambulance")
	public List<Ambulance> getAllAmbulance()
	{
		List<Ambulance> obj=null;
		obj=ambulanceService.getAllAmbulance();
		return obj;
	}
	
	
	
	
	
	@PostMapping("/login")
	public Covid loginCovid(@RequestBody Covid covid) throws Exception
	{
		String tempEmail=covid.getEmail();
		String tempPassword=covid.getPassword();
		
		Covid userObj=null;
		
		if(tempEmail !=null && tempPassword!=null)
		{
			userObj=service.fetchCovidByEmailAndPassword(tempEmail, tempPassword);
		}
		
		if(userObj==null)
		{
			throw new Exception("Bad Credentials");
		}
		return userObj;
		
	}
	
	@GetMapping("/dose1/{aadhar}")
	public Optional<vaccine> getDose(@PathVariable Long aadhar)
	{
		Optional<vaccine> vc=ser.getDose(aadhar);
		return vc;
	}
	

	
	
	/*
	
	private Logger log = LoggerFactory.getLogger(CovidController.class);
	
	@Autowired
	private CovidService service;
	@Autowired
	private CovidUtil util;
	@Autowired
	private CovidRepo feed;
	

	
	@PostMapping("/covid")
	public ResponseEntity<String> saveCovid(
			@RequestBody Covid c)
	{
		log.info("Entered into method with Covid data to save");

		ResponseEntity<String> resp = null;
		try {

			log.info("About to call save Operation");

			String id = service.saveCovid(c);
			log.debug("Covid saved with id "+id);

			String body = "Covid '"+id+"' created";

			resp =  new ResponseEntity<String>(body,	HttpStatus.CREATED); //201

			log.info("Sucess response constructed");
		} catch (Exception e) {
			log.error("Unable to save Covid : problem is :"+e.getMessage());
			resp =  new ResponseEntity<String>(
					"Unable to Create Covid", 
					HttpStatus.INTERNAL_SERVER_ERROR); //500
			e.printStackTrace();
		}

		log.info("About to Exist save method with Response");
		return resp;
	}
	
	@GetMapping("/covid")
	public ResponseEntity<?> getAllCovid() {
		log.info("Entered into method to fetch Covid data");
		ResponseEntity<?> resp = null ;
		try {

			log.info("About to call fetch student service");
			List<Covid> list = service.getAllCovid();
			if(list!=null && !list.isEmpty()) {
				log.info("Data is not empty=>"+list.size());
				list.sort((s1,s2)->s1.getFname().compareTo(s2.getFname()));
				/* JDK 1.8
				list = list.stream()
						.sorted((s1,s2)->s1.getName().compareTo(s2.getName()))
						.collect(Collectors.toList());
				 
				resp = new ResponseEntity<List<Covid>>(list, HttpStatus.OK);
			} else {
				log.info("No Covid exist: size "+list.size());

				//resp = new ResponseEntity<>(HttpStatus.NO_CONTENT);
				resp = new ResponseEntity<String>(
						"No Students Found",
						HttpStatus.OK);
			}
		} catch (Exception e) {
			log.error("Unable to fetch students : problem is :"+e.getMessage());

			resp =  new ResponseEntity<String>(
					"Unable to Fetch Covid", 
					HttpStatus.INTERNAL_SERVER_ERROR); //500
			e.printStackTrace();
		}
		log.info("About to Exist fetch all method with Response");
		return resp;
	}
	
	*/


}
