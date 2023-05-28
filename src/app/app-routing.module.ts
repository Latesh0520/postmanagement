import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostSingleComponent } from './post/post-single/post-single.component';
import { PagenotfoundComponent } from './header-footer/pagenotfound/pagenotfound.component';
import { AddPostComponent } from './post/add-post/add-post.component';

const routes: Routes = [
  {path:'',component:PostComponent},
  {path:'post',component:PostComponent},
  {path:'post-single/:id',component:PostSingleComponent},
  {path:'add-post',component:AddPostComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
