import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Bebysitter } from '../../models/bebysitter';
import { NgForm } from '@angular/forms';
import { BebysitterService } from '../bebysitter.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bebysitter-ads-list',
  templateUrl: './bebysitter-ads-list.component.html',
  styleUrls: ['./bebysitter-ads-list.component.css']
})
export class BebysitterAdsListComponent implements OnInit {

  qualifications = ['Enter qualifications', 'Elementary school', 'High school', 'Student', 'Graduate'];
  qualification = 'Enter qualifications';
  city = '';
  bebysitters: Bebysitter[];
  filteredBabysitters: Bebysitter[];



  constructor(private bebysitterService: BebysitterService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          if (queryParams['city']) {
            this.city = queryParams['city'];
          } else {
            this.city = '';
          }
        }
      );

    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          if (queryParams['qualification']) {
            this.qualification = queryParams['qualification'];
          } else {
            this.qualification = 'Enter qualifications';
          }
        }
      );

    this.filterCity();

  }

  onSubmit(form: NgForm) {

    this.qualification = form.value.qualifications;
    this.city = form.value.city.toLowerCase();
    this.router.navigate(['/babysitter-ads'], { queryParams: { city: this.city, qualification: this.qualification } });
    this.filterCity();
  }

  filterCity() {
    this.bebysitters = this.bebysitterService.bebysitters;

    if (!this.city.length && this.qualification === 'Enter qualifications') {
      this.filteredBabysitters = this.bebysitters;
    } else if (this.qualification === 'Enter qualifications') {
      this.filteredBabysitters = this.bebysitters.filter(sitter => sitter.city.toLowerCase() === this.city);
    } else if (!this.city.length && this.qualification !== 'Enter qualifications') {
      this.filteredBabysitters = this.bebysitters.filter(sitter => sitter.qualifications === this.qualification);
    } else {
      this.filteredBabysitters =
        this.bebysitters.filter(sitter => sitter.city.toLowerCase() === this.city && sitter.qualifications === this.qualification);
    }

  }

  noResults() {
    if (this.filteredBabysitters.length) {
      return false;
    } else {
      return true;
    }
  }
}










