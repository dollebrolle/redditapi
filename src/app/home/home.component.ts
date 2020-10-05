import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Child, RedditData, RedditQuery } from '../services/model';
import { RedditApiService } from '../services/reddit-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private redditService: RedditApiService) { }


  subredditName = new FormControl('sweden');
  pageLimit = new FormControl('10');
  currentPage: number = 1;
  redditData: RedditData;
  entries: Array<Child> = [];
  stickiedEntries: number = 0;


  ngOnInit(): void {
    this.getSubreddit(this.subredditName.value, this.pageLimit.value);

    this.pageLimit.valueChanges
      .subscribe(pageLimit => {
        this.currentPage = 1;
        this.stickiedEntries = 0;
        this.getSubreddit(this.subredditName.value, pageLimit);
      });

    this.subredditName.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe(name => this.getSubreddit(name, this.pageLimit.value));

  }


  getSubreddit(name: string, pageLimit: string) {
    this.redditService.getSubreddit({
      name: name,
      limit: pageLimit,
      before: null,
      after: null,
      count: null,
    }).subscribe((redditData: RedditData) => {
      this.redditData = redditData;
      this.stickiedEntries = redditData.data.children.length - this.pageLimit.value
      this.entries = redditData.data.children
    });
  }


  nextPage(after: string) {

    this.currentPage++;
    this.redditService.getSubreddit({
      name: this.subredditName.value,
      limit: this.currentPage === 2 ? (Number(this.pageLimit.value) - this.stickiedEntries).toString() : this.pageLimit.value,
      after: after,
      before: null,
      count: this.currentPage * Number(this.pageLimit.value)
    }).subscribe((redditData: RedditData) => {
      this.redditData = redditData;
      if (this.currentPage === 2) {
        this.entries = [...this.entries.slice(this.pageLimit.value), ...redditData.data.children]
      } else {
        this.entries = redditData.data.children
      }
    });

  }

  prevPage(before: string) {
    this.currentPage--;
    this.redditService.getSubreddit({
      name: this.subredditName.value,
      limit: this.pageLimit.value,
      after: null,
      before: this.currentPage === 1 ? null : before,
      count: this.currentPage * Number(this.pageLimit.value)
    }).subscribe((redditData: RedditData) => {
      this.redditData = redditData;
      this.entries = redditData.data.children
    });
  }

}
