package com.covidcare.CovidCare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.covidcare.CovidCare.model.Feedback;
import com.covidcare.CovidCare.repo.FeedbackRepo;

@Service
public class FeedbackService {
	
	@Autowired
	private FeedbackRepo repo;
	
	public Feedback saveFeedback(Feedback feedback)
	{
		return repo.save(feedback);
	}
	
	public List<Feedback> getAllFeedback()
	{
		return repo.findAll();
	}

}
