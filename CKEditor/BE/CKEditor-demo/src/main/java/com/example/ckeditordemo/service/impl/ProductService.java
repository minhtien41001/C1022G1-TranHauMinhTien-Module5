package com.example.ckeditordemo.service.impl;

import com.example.ckeditordemo.dto.ProductDTO;
import com.example.ckeditordemo.model.Product;
import com.example.ckeditordemo.repository.ProductRepository;
import com.example.ckeditordemo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public void save(Product product) {
        productRepository.save(product);
    }
}
