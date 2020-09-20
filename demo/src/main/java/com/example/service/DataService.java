package com.example.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.DataDao;
import com.example.exception.DemoException;
import com.example.model.DataModel;

@Service
public class DataService {

	@Autowired
	DataDao dao;

	@Autowired
	EntityManagerFactory entityManagerFactory;

	public List<DataModel> getAllRecords() {
		List<DataModel> data = new ArrayList<>();
		dao.findAll().forEach(records -> data.add(records));
		return data;
	}

	public DataModel getRecords(int id) throws DemoException {
		return dao.findById(id).orElseThrow(() -> new DemoException("Record Not Found for Id : " + id));
	}

	public void deleteRecord(int id) throws DemoException {
		dao.findById(id).orElseThrow(() -> new DemoException("Record Not Found for Id : " + id));
		dao.deleteById(id);
	}

	public void saveOrUpdate(DataModel data) throws DemoException {
		dao.save(data);
	}

	public List<DataModel> fetchByStartDate(String startDate, String endDate) {
		EntityManager em = entityManagerFactory.createEntityManager();
		CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
		CriteriaQuery<DataModel> query = criteriaBuilder.createQuery(DataModel.class);
		Root<DataModel> dataModel = query.from(DataModel.class);
		
		Predicate predicateForStartDate = criteriaBuilder.equal(dataModel.get("startdate"), startDate);
		Predicate predicateForEndDate = criteriaBuilder.equal(dataModel.get("startdate"), endDate);
		Predicate finalPredicate = criteriaBuilder.or(predicateForStartDate, predicateForEndDate);
		query.where(finalPredicate);
		List<DataModel> data = em.createQuery(query).getResultList();
		
		return data;
	}
	
	public List<DataModel> fetchByEndDate(String startDate, String endDate) {
		EntityManager em = entityManagerFactory.createEntityManager();
		CriteriaBuilder criteriaBuilder = em.getCriteriaBuilder();
		CriteriaQuery<DataModel> query = criteriaBuilder.createQuery(DataModel.class);
		Root<DataModel> dataModel = query.from(DataModel.class);
		
		Predicate predicateForStartDate = criteriaBuilder.equal(dataModel.get("enddate"), startDate);
		Predicate predicateForEndDate = criteriaBuilder.equal(dataModel.get("enddate"), endDate);
		Predicate finalPredicate = criteriaBuilder.or(predicateForStartDate, predicateForEndDate);
		query.where(finalPredicate);
		List<DataModel> data = em.createQuery(query).getResultList();

		return data;
	}

}
