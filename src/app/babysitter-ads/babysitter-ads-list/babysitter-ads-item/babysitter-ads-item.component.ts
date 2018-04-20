import { Component, OnInit, Input } from '@angular/core';
import { Babysitter } from '../../../models/babysitter';
import { BabysitterService } from '../../babysitter.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-babysitter-ads-item',
  templateUrl: './babysitter-ads-item.component.html',
  styleUrls: ['./babysitter-ads-item.component.css']
})
export class BabysitterAdsItemComponent implements OnInit {


  @Input() sitter: Babysitter;
  id: number;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.sitter.id;
  }

  goToDetail() {
    this.router.navigate([this.id], { relativeTo: this.route, queryParamsHandling: 'preserve' });

  }

}
