package com.indi.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.indi.model.*;
import com.indi.dao.CommentDao;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@Controller
@RequestMapping(value = "/Comment")
public class CommentController {
	
	@Autowired
	CommentDao commentDao;
	
	@RequestMapping(value="/GetComments")
	@ResponseBody
	public List<Comment> getComments(@RequestParam("category") String category, @RequestParam("name") String name) {
		return commentDao.findByCategoryAndName(category, name);		
	}
	
	@RequestMapping(value="/AddComment")
	@ResponseBody
	public Map<String, String> addComment(@RequestParam("category") String category, @RequestParam("name") String name, @RequestParam("comment") String text){
		Comment comment = new Comment();
		comment.setCategory(category);
		comment.setName(name);
		comment.setComment(text);
		commentDao.saveAndFlush(comment);
		Map<String, String> result = new HashMap<String, String>();
		result.put("result", "Success");
		return result;
	}


}
