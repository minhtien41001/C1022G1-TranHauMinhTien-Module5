package com.example.ckeditordemo.service;

import com.example.ckeditordemo.dto.ProductDTO;
import com.example.ckeditordemo.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;


public interface IProductService {

    List<Product> findAll();

    void save(Product product);
}
