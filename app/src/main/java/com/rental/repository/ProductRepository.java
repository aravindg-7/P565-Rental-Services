package com.rental.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.rental.model.Product;

public interface ProductRepository extends CrudRepository<Product,Integer> {
	
	
	List<Product>findAll();
	
	List<Product>findByCategory(String category);
	
	List<Product>findByRatingGreaterThanEqual(int rating);

}
