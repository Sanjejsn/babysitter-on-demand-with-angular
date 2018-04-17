import { Component, OnInit } from '@angular/core';
import { BebysitterService } from './bebysitter.service';
import { Bebysitter } from '../models/bebysitter';

@Component({
  selector: 'app-babysitter-ads',
  templateUrl: './babysitter-ads.component.html',
  styleUrls: ['./babysitter-ads.component.css'],
  providers: []
})
export class BabysitterAdsComponent implements OnInit {

  selected: Bebysitter;

  constructor(private bebysitterService: BebysitterService) { }

  ngOnInit() {

  }

}


