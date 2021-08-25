package com.covidcare.CovidCare.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.covidcare.CovidCare.model.Covid;

public interface CovidRepo extends JpaRepository<Covid, String> {
	
	public Covid findByEmailAndPassword(String email,String password);
	
	@Transactional
	@Query(value="SELECT * FROM covid  where email = ?1 and password = ?2  ",nativeQuery=true)
	public Covid fetchList(String username,String password);

}
