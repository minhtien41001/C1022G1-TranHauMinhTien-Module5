package com.example.books.controller;


import com.example.books.model.Category;
import com.example.books.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/category")
public class CategoryRestController {

    @Autowired
    private ICategoryService iCategoryService;
    @GetMapping("")
    public ResponseEntity<List<Category>> getAll() {
        List<Category> categories = iCategoryService.findAllCategory();
        if (categories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }
}
