package com.example.books.service;

import com.example.books.dto.BookDto;
import com.example.books.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBookService {
    Page<BookDto> findAllBook(String name, String categoryId, Pageable pageable);

    Book findBookById(Integer id);

    void deleteBook(Integer id);
}
