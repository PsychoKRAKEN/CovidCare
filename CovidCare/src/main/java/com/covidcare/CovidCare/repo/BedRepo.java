package com.covidcare.CovidCare.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.covidcare.CovidCare.model.Bed;

public interface BedRepo extends JpaRepository<Bed, Long> {

}
