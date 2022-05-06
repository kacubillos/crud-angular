import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/post.model';

import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  posts: Post[];

  constructor(public postService: PostService) {
    this.postService.getPosts().subscribe( (res) => {
      this.posts = res.map( (el) => {
        return {
          id: el.payload.doc.id,
          ...(el.payload.doc.data() as Post)
        }
      });
    });
  }

  ngOnInit(): void {
  }

  deletePost(post) {
    this.postService.deletePost(post);
  }
}
