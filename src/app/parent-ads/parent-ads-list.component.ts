import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Parent } from '../models/parent';
import { ParentService } from './parent.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-parent-ads-list',
  templateUrl: './parent-ads-list.component.html',
  styleUrls: ['./parent-ads-list.component.css']
})
export class ParentAdsListComponent implements OnInit, OnDestroy {

  city = '';
  parents: Parent[];
  subscription: Subscription;


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

    this.parents = this.parentService.getPrents();

    this.subscription = this.parentService.parentsChanged.subscribe(
      (parents: Parent[]) => this.parents = parents
    );

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
