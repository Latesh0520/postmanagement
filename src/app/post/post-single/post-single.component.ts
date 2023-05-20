import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  postId: any;
  post: any;
  ngOnInit(): void {
    this.postId =  this.route.snapshot.paramMap.get('id')
    this.getpostDatabyID(this.postId);
  }
  getpostDatabyID(id: any){
    
  }
}
