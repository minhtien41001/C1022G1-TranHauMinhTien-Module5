package com.example.books.dto;

import com.example.books.model.Category;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

public class BookDto {
    private int id;

    @Size(max = 100, message = "Tên sách không dài quá 100 ký tự")
    private String name;

    private String date;

    @Positive(message = "Số lượng sách phải là số nguyên dương")
    @Digits(fraction = 0, message = "Số lượng sách phải là số nguyên", integer = 10)
    private int amount;

    private Category category;

    private boolean isDelete = false;

    public BookDto() {
    }

    public BookDto(int id, String name, String date, int amount, Category category, boolean isDelete) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.amount = amount;
        this.category = category;
        this.isDelete = isDelete;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }
}
