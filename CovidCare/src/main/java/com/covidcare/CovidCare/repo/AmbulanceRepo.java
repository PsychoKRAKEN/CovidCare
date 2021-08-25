package com.covidcare.CovidCare.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covidcare.CovidCare.model.Ambulance;

public interface AmbulanceRepo extends JpaRepository<Ambulance, Long> {

}
