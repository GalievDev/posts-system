package net.galievdev.postssystem.repository;

import net.galievdev.postssystem.model.Posts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostsRepo extends JpaRepository<Posts, Long> {
}
