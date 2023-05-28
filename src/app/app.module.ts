import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostSingleComponent } from './post/post-single/post-single.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { PagenotfoundComponent } from './header-footer/pagenotfound/pagenotfound.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostSingleComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
