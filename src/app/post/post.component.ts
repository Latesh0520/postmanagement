import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  implements OnInit{
  
  posts: any;
  datearray: any;
  constructor(private postService: PostService, private router: Router){}
  ngOnInit(): void {
    this.getpost();
 }
 getpost(){
  this.postService
    .getpost()
    .pipe(map(ResponseData =>   {
      const postArray = [];
      for(const key in ResponseData){
        postArray.push({...ResponseData[key], id: key})
      }
      return postArray;
    }))
    .subscribe(Response => {
     console.log(Response); 
      this.posts = Response;
      this.filterby(Response);    
    })
 }
 singlepost(id: any){
  this.router.navigate(['post-single/'+id]);
 }
 filterby(data:any){
  const datearray: any[] = []
  data.forEach((element: {timestamp: any}) => {
    if (!datearray.includes(element.timestamp)) {
      datearray.push(element.timestamp)
    }
  });
  this.datearray = datearray;
  console.log(this.datearray);
}

}
