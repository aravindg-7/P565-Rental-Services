package com.rental.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="product")
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="pr_id")
	private int id;
	
	@Column(name = "pr_name")
	private String productName;
	
	@Column(name = "pr_price")
	private int price;
	
	@Column(name = "pr_img")
	private String image;
	
	@Column(name = "pr_rating")
	private int rating;
	
	@Column(name = "pr_category")
	private String category;
	
	@Column(name = "pr_owner")
	private String owner;
	
	
	@Column(name = "pr_brand")
	private String brand;
	
	@Column(name = "address")
	private String address;
	
//	@Column(name = "pr_long")
//	private float prlong;
//	
//	@Column(name = "pr_lat")
//	private float prlat;
	
	//TODO add userlist and join
	
	

	public String getProductName() {
		return productName;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", productName=" + productName + ", price=" + price + ", image=" + image
				+ ", rating=" + rating + ", category=" + category + ", owner=" + owner + ", brand=" + brand +  ", address=" + address  + "]";
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}
	
//	public float getPrlong() {
//		return prlong;
//	}
//
//
//	public void setPrlong(int prlong) {
//		this.prlong = prlong;
//	}
//	
//	public float getPrlat() {
//		return prlat;
//	}
//
//
//	public void setPrlat(int prlat) {
//		this.prlat = prlat;
//	}
	
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	
	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}
	
	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}
	
	
	
	
}
