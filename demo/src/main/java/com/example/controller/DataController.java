/**
 * 
 */
package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.exception.DemoException;
import com.example.model.DataModel;
import com.example.service.DataService;

/**
 * @author Admin
 *
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class DataController {

	@Autowired
	DataService service;

	@GetMapping("getAllRecords")
	public List<DataModel> getAllRecords() {
		return service.getAllRecords();
	}

	@GetMapping("record/{id}")
	public DataModel getRecords(@PathVariable("id") int id) throws DemoException {
		return service.getRecords(id);
	}

	@DeleteMapping("record/{id}")
	public void deleteRecord(@PathVariable("id") int id) throws DemoException {
		service.deleteRecord(id);
	}

	@PostMapping("record")
	public int saveRecord(@RequestBody DataModel data) throws DemoException {
		service.saveOrUpdate(data);
		return data.getId();
	}

	@PutMapping("record")
	public DataModel update(@RequestBody DataModel data) throws DemoException {
		service.saveOrUpdate(data);
		return data;
	}

	@GetMapping("fetchByStartDate")
	public List<DataModel> fetchByStartDate(@RequestParam("startDate") String startDate,
			@RequestParam("endDate") String endDate){

		return service.fetchByStartDate(startDate, endDate);
	}
	
	@GetMapping("fetchByEndDate")
	public List<DataModel> fetchByEndDate(@RequestParam("startDate") String startDate,
			@RequestParam("endDate") String endDate){

		return service.fetchByEndDate(startDate, endDate);
	}
}