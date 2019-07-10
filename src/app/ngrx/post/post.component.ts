import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';


import * as postActions from '../state/post.action';
import * as fromPost from '../state/post.reducer';

import { Post } from '../model/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts$: Observable<Post[]>;
// tslint:disable-next-line: ban-types
  error$: Observable<String>;

  constructor(private store: Store<fromPost.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new postActions.LoadPosts());
    this.posts$ = this.store.pipe(select(fromPost.getPosts));
    this.error$ = this.store.pipe(select(fromPost.getError));
  }

}

