package com.example.ckeditordemo.controller;

import com.example.ckeditordemo.dto.ProductDTO;
import com.example.ckeditordemo.model.Product;
import com.example.ckeditordemo.service.IProductService;
import com.example.ckeditordemo.service.impl.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin("*")
public class ProductRestController {

    @Autowired
    IProductService iProductService;

    @PostMapping(value = {"/create"} )
    public ResponseEntity<?> createProduct(@Validated @RequestBody Product product, BindingResult bindingResult){
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.BAD_REQUEST);
        }
        iProductService.save(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public ResponseEntity<List<Product>> findAll() {

        List<Product> productList = this.iProductService.findAll();

        if (productList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(productList, HttpStatus.OK);
    }
}
