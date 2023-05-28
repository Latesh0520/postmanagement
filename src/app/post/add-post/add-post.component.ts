import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{
  formgroup!: FormGroup;

  constructor(private FormBuilder: FormBuilder,private postService: PostService){

  }
  ngOnInit(): void {
    this.formgroup = this.FormBuilder.group({
      heading: ['',Validators.required],
      content: ['',Validators.required],
      timestamp: Date()
    })
  }
  submitpost(){
    const data = this.formgroup.value
    this.postService.addPost(data).subscribe(Response => {
      console.log(Response);
    })
  }

}
