import { Component, OnInit } from '@angular/core';
import { Babysitter } from '../../models/babysitter';
import { BabysitterService } from '../babysitter.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-babysitter-ads-detail',
  templateUrl: './babysitter-ads-detail.component.html',
  styleUrls: ['./babysitter-ads-detail.component.css']
})
export class BabysitterAdsDetailComponent implements OnInit {

  id: number;
  sitter: Babysitter;

  constructor(private route: ActivatedRoute, private babysitterService: BabysitterService,
    private location: Location) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']; // converts string into number
    this.sitter = this.babysitterService.babysitters.find(element => element.id === this.id);
  }

  goBack() {
    this.location.back();
  }


}
