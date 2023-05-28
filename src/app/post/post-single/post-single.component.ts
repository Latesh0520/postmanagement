import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit{
  constructor(private route: ActivatedRoute,private postService: PostService){}
  postId: any;
  post: any;
  ngOnInit(): void {
    this.postId =  this.route.snapshot.paramMap.get('id')
    this.getpostDatabyID(this.postId);
  }
  getpostDatabyID(post_id: any){
    this.postService.getpost()
    .pipe(map(ResponseData=>{
      const postArray = [];
      for(const key in ResponseData){
        if(key === post_id){
          postArray.push({ ...ResponseData[key], id: key})
        }
      }
      return postArray;
    }))
    .subscribe(Response=>{
      this.post = Response;
    })
  }
}
