import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/services/model';

@Component({
  selector: 'app-entrycard',
  templateUrl: './entrycard.component.html',
  styleUrls: ['./entrycard.component.scss']
})
export class EntrycardComponent implements OnInit {

  @Input() entryData: Data;

  constructor() { }

  ngOnInit(): void {
  }

  openNewTab(permalink: string) {
    window.open(`http://reddit.com${permalink}`, '_blank');
  }
}
