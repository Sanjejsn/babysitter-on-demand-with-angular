import { Component, OnInit, Input } from '@angular/core';
import { Parent } from '../../../models/parent';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent-ads-item',
  templateUrl: './parent-ads-item.component.html',
  styleUrls: ['./parent-ads-item.component.css']
})
export class ParentAdsItemComponent implements OnInit {

  @Input() parentItem: Parent;
  id: number;


  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.parentItem.id;
  }


  goToDetail() {
    this.router.navigate([this.id], { relativeTo: this.route, queryParamsHandling: 'preserve' });

  }

}
