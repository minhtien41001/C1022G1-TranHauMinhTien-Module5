package com.example.books.repository;

import com.example.books.dto.BookDto;
import com.example.books.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface IBookRepository extends JpaRepository<Book,Integer> {
    @Query(value = "select * from book where name like concat('%', :name, '%') " +
            "and category_id like concat('%', :id, '%')", nativeQuery = true)
    Page<BookDto> findAllBooks(@Param("name") String name, @Param("id") String categoryId, Pageable pageable);

    @Query(value = "select * from book where is_delete =false and id =:id",nativeQuery = true)
    Book findBookById(Integer id);

    @Transactional
    @Modifying
    @Query(value = "update book set is_delete = true where id =:id",nativeQuery = true)
    void deleteBook(Integer id);

}
