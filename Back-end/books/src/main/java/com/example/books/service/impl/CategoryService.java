package com.example.books.service.impl;

import com.example.books.model.Category;
import com.example.books.repository.ICategoryRepository;
import com.example.books.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CategoryService implements ICategoryService {

    @Autowired
    private ICategoryRepository iCategoryRepository;


    @Override
    public List<Category> findAllCategory() {
        return iCategoryRepository.findAllCategory();
    }
}
