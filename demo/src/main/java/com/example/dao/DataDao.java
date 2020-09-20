package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.DataModel;

@Repository
public interface DataDao extends JpaRepository<DataModel, Integer>  {
	
}
