package com.example.ckeditordemo.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class ProductDTO implements Validator {

    private Integer id;

    private String name;

    private String description;

    public ProductDTO() {
    }

    public ProductDTO(int id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        ProductDTO productDTO = (ProductDTO) target;
    }
}
