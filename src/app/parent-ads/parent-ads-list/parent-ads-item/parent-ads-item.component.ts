import { Component, OnInit, Input } from '@angular/core';
import { Parent } from '../../../models/parent';

@Component({
  selector: 'app-parent-ads-item',
  templateUrl: './parent-ads-item.component.html',
  styleUrls: ['./parent-ads-item.component.css']
})
export class ParentAdsItemComponent implements OnInit {

  @Input() parentItem: Parent;


  constructor() { }

  ngOnInit() {
  }

  goToDetail() {

  }

}
