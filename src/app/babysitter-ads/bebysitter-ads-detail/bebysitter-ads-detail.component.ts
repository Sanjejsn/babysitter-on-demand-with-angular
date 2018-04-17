import { Component, OnInit } from '@angular/core';
import { Bebysitter } from '../../models/bebysitter';
import { BebysitterService } from '../bebysitter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bebysitter-ads-detail',
  templateUrl: './bebysitter-ads-detail.component.html',
  styleUrls: ['./bebysitter-ads-detail.component.css']
})
export class BebysitterAdsDetailComponent implements OnInit {

  id: number;
  sitter: Bebysitter;

  constructor(private route: ActivatedRoute, private bebysitterService: BebysitterService,
    private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']; // converts string into number
    this.sitter = this.bebysitterService.bebysitters.find(element => element.id === this.id);
  }

  goBack() {
    this.router.navigate(['/babysitter-ads']);
  }


}
