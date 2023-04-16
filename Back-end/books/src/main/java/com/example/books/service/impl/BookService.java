package com.example.books.service.impl;

import com.example.books.dto.BookDto;
import com.example.books.model.Book;
import com.example.books.repository.IBookRepository;
import com.example.books.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BookService implements IBookService {
    @Autowired
    private IBookRepository iBookRepository;

    @Override
    public Page<BookDto> findAllBook(String name, String categoryId, Pageable pageable) {
        return iBookRepository.findAllBooks(name,categoryId,pageable);
    }

    @Override
    public Book findBookById(Integer id) {
        return iBookRepository.findBookById(id);
    }

    @Override
    public void deleteBook(Integer id) {
        iBookRepository.deleteBook(id);
    }
}
