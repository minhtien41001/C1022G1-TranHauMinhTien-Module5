package com.example.books.controller;


import com.example.books.dto.BookDto;
import com.example.books.model.Book;
import com.example.books.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/book")
public class BookRestController {
    @Autowired
    private IBookService ibookService;
    @GetMapping("")
    public ResponseEntity<Page<BookDto>> getAll(@PageableDefault(size = 3) Pageable pageable,
                                                @RequestParam(required = false, defaultValue = "") String name,
                                                @RequestParam(required = false, defaultValue = "") String categoryId) {
        Page<BookDto> books = ibookService.findAllBook(name,categoryId,pageable);
        if (books.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Book> delete(@PathVariable("id") Integer id) {
        Book book = ibookService.findBookById(id);
        if (book == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        ibookService.deleteBook(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> findBookById(@PathVariable("id") Integer id) {
        Book book = ibookService.findBookById(id);
        if (book == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(book, HttpStatus.OK);
    }
}
