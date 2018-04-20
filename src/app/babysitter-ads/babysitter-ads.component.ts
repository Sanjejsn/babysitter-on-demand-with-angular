import { Component, OnInit } from '@angular/core';
import { BabysitterService } from './babysitter.service';
import { Babysitter } from '../models/babysitter';

@Component({
  selector: 'app-babysitter-ads',
  templateUrl: './babysitter-ads.component.html',
  styleUrls: ['./babysitter-ads.component.css'],
  providers: []
})
export class BabysitterAdsComponent implements OnInit {

  selected: Babysitter;

  constructor(private bebysitterService: BabysitterService) { }

  ngOnInit() {

  }

}


