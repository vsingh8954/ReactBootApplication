package com.example.utils;

import java.util.Map;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.boot.actuate.endpoint.annotation.Selector;

@Endpoint(id = "customEndPoint")
public class CustomEndpoint{
//	 @ReadOperation
//	    public Map<String, Object> customEndPoint() {
//		 
//	 }
//
//	    @ReadOperation
//	    public CustomEndpoint customEndPoint(@Selector String name) { ... }
}
