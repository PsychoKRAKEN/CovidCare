package com.covidcare.CovidCare.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covidcare.CovidCare.model.vaccine;

public interface VaccineRepo extends JpaRepository<vaccine, Long> {

	

}
