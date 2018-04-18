import { Component, OnInit } from '@angular/core';
import { Parent } from '../../models/parent';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { ParentService } from '../parent.service';


@Component({
  selector: 'app-parent-ads-detail',
  templateUrl: './parent-ads-detail.component.html',
  styleUrls: ['./parent-ads-detail.component.css']
})
export class ParentAdsDetailComponent implements OnInit {

  id: number;
  parent: Parent;

  constructor(private route: ActivatedRoute, private parentService: ParentService) { }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.parent = this.parentService.parents.find(element => element.id === this.id);
        }
      );
  }

}
