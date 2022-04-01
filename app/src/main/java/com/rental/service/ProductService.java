package com.rental.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rental.model.Product;
import com.rental.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository prodrepo;
	
	public List<Product> getProducts(){
		
		return prodrepo.findAll();
	}
	
	public List<Product> getByCategory(String category){
			
			return prodrepo.findByCategory(category);
		}

	public List<Product> getByRating(int rating){
		
		return prodrepo.findByRatingGreaterThanEqual(rating);
	}
//	
//	public List<Product> getByOwner(String owner){
//			
//			return prodrepo.findByOwner(owner);
//		}

	public List<Product> getByBrand(String brand){
		
		return prodrepo.findByBrand(brand);
	}

	public void addProduct(Product product) {
		prodrepo.save(product);
	}

}
