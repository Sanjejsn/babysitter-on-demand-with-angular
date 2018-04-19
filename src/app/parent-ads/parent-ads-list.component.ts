import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Parent } from '../models/parent';
import { ParentService } from './parent.service';


@Component({
  selector: 'app-parent-ads-list',
  templateUrl: './parent-ads-list.component.html',
  styleUrls: ['./parent-ads-list.component.css']
})
export class ParentAdsListComponent implements OnInit {

  city = '';
  parents: Parent[];

  constructor(private parentService: ParentService, private router: Router, private route: ActivatedRoute) { }

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

    this.filterCity();

  }
  onSubmit(form: NgForm) {
    this.city = form.value.city.toLowerCase();
    this.router.navigate(['/parent-ads'], { queryParams: { city: this.city } });
    this.filterCity();

  }

  filterCity() {

    this.parents = this.parentService.parents;
    this.parents = !this.city.length ? this.parents :
      this.parents.filter(parent => parent.city.toLowerCase() === this.city);
  }

  noResults() {
    if (this.parents.length) {
      return false;
    } else {
      return true;
    }
  }
}
