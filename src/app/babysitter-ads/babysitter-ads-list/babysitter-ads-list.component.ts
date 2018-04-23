import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Babysitter } from '../../models/babysitter';
import { NgForm } from '@angular/forms';
import { BabysitterService } from '../babysitter.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-babysitter-ads-list',
  templateUrl: './babysitter-ads-list.component.html',
  styleUrls: ['./babysitter-ads-list.component.css']
})
export class BabysitterAdsListComponent implements OnInit {

  qualifications = ['Enter qualifications', 'Elementary school', 'High school', 'Student', 'Graduate'];
  qualification = 'Enter qualifications';
  city = '';
  bebysitters: Babysitter[];
  filteredBabysitters: Babysitter[];



  constructor(private bebysitterService: BabysitterService, private router: Router,
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

    this.filterList();

  }

  onSubmit(form: NgForm) {

    this.qualification = form.value.qualifications;
    this.city = form.value.city;
    this.router.navigate(['/babysitter-ads'], { queryParams: { city: this.city, qualification: this.qualification } });
    this.filterList();
  }

  filterList() {
    this.bebysitters = this.bebysitterService.babysitters;

    if (!this.city.length && this.qualification === 'Enter qualifications') {
      this.filteredBabysitters = this.bebysitters;
    } else if (this.qualification === 'Enter qualifications') {
      this.filteredBabysitters = this.bebysitters.filter(sitter => sitter.city === this.city);
    } else if (!this.city.length) {
      this.filteredBabysitters = this.bebysitters.filter(sitter => sitter.qualifications === this.qualification);
    } else {
      this.filteredBabysitters =
        this.bebysitters.filter
          (sitter => sitter.city === this.city && sitter.qualifications === this.qualification);
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










