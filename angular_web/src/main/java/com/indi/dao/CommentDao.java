package com.indi.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.indi.model.*;

public interface CommentDao extends JpaRepository<Comment, String>{
	
	public List<Comment> findByCategoryAndName(String category, String name);

}
