import { Component, OnInit, Input } from '@angular/core';
import { Bebysitter } from '../../../models/bebysitter';
import { BebysitterService } from '../../bebysitter.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-babysitter-ads-item',
  templateUrl: './babysitter-ads-item.component.html',
  styleUrls: ['./babysitter-ads-item.component.css']
})
export class BabysitterAdsItemComponent implements OnInit {


  @Input() sitter: Bebysitter;
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
