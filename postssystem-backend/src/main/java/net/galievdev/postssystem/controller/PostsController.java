package net.galievdev.postssystem.controller;

import net.galievdev.postssystem.exception.ResourceNotFoundException;
import net.galievdev.postssystem.model.Posts;
import net.galievdev.postssystem.repository.PostsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/posts")
public class PostsController {
    @Autowired
    private PostsRepo postsRepo;

    //Get all posts
    @GetMapping
    public List<Posts> getAllPosts(){
        return postsRepo.findAll();
    }

    @GetMapping("/all-posts")
    public List<Posts> allPosts(){
        return postsRepo.findAll();
    }

    //Create Post
    @PostMapping
    public Posts createPost(@RequestBody Posts post){
        return postsRepo.save(post);
    }

    @PostMapping("/all-posts")
    public Posts postCreate(@RequestBody Posts post){
        return postsRepo.save(post);
    }

    //Get post by id
    @GetMapping("{id}")
    public ResponseEntity<Posts> getPostById(@PathVariable  long id){
        Posts posts = postsRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Could not find the post by id: " + id));
        return ResponseEntity.ok(posts);
    }

    //Update post
    @PutMapping("{id}")
    public ResponseEntity<Posts> updatePost(@PathVariable long id, @RequestBody Posts postsDetails) {
        Posts updatePost = postsRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Could not find the post by id: " + id));

        updatePost.setTitle(postsDetails.getTitle());
        updatePost.setText(postsDetails.getText());
        updatePost.setImgUrl(postsDetails.getImgUrl());

        postsRepo.save(updatePost);

        return ResponseEntity.ok(updatePost);
    }

    //Delete post
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deletePost(@PathVariable long id){

        Posts posts = postsRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Could not find the post by id: " + id));

        postsRepo.delete(posts);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
