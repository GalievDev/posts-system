package net.galievdev.postssystem.controller;

import net.galievdev.postssystem.model.Posts;
import net.galievdev.postssystem.repository.PostsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/all-posts")
public class AllPostsController {
    @Autowired
    private PostsRepo postsRepo;

    @GetMapping
    public List<Posts> allPosts(){
        return postsRepo.findAll();
    }

    @PostMapping
    public Posts postCreate(@RequestBody Posts post){
        return postsRepo.save(post);
    }
}
