/*
This is the file where all the components, providers, and modules are defined.
 Without defining them here, they can’t be used elsewhere in the code.
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule } from "@angular/material";

// Component Source
import { IndexComponent } from './home-page/index/index.component';
import { BookComponent } from './books/book/book.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookCreateComponent } from './books/book-create/book-create.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RedditPostComponent } from './post/reddit-post/reddit-post.component';
import { CommentsComponent } from './post/comments/comments.component';
import { PostRedditComponent } from './home-page/post-reddit/post-reddit.component';
import { SettingsComponent } from './settings/settings.component';
import { PostCreateComponent } from './post/post-create/post-create.component';

// Angular Routes
const appRoutes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    data: { title: 'Index  Page' }
  },
  { 
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    data: { title: 'Profile' }
  },
  {
    path: 'post/:id',
    component: RedditPostComponent,
    data: { title: 'Post' }
  },
  {
    path: 'post-create',
    component: PostCreateComponent,
    data: { title: 'Create New Post' }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Settings' }
  },

  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    IndexComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RedditPostComponent,
    CommentsComponent,
    PostRedditComponent,
    SettingsComponent,
    PostCreateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
