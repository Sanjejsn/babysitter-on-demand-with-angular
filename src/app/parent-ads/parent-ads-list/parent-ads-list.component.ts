import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParentService } from '../parent.service';
import { Parent } from '../../models/parent';

@Component({
  selector: 'app-parent-ads-list',
  templateUrl: './parent-ads-list.component.html',
  styleUrls: ['./parent-ads-list.component.css']
})
export class ParentAdsListComponent implements OnInit {

  city = '';
  parents: Parent[];

  constructor(private parentService: ParentService) { }

  ngOnInit() {
    this.parents = this.parentService.parents;
  }
  onSubmit(form: NgForm) {
    this.city = form.value.city.toLowerCase();

  }
}
