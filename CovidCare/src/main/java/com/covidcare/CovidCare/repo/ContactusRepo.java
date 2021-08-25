package com.covidcare.CovidCare.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covidcare.CovidCare.model.Contactus;

public interface ContactusRepo extends JpaRepository<Contactus, String> {

}
