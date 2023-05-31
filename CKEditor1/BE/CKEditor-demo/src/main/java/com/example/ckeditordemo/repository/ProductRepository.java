package com.example.ckeditordemo.repository;

import com.example.ckeditordemo.dto.ProductDTO;
import com.example.ckeditordemo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface ProductRepository extends JpaRepository<Product,Integer> {
}
