import { Component, OnInit, Input } from '@angular/core';
import { Bebysitter } from '../../../models/bebysitter';
import { BebysitterService } from '../../bebysitter.service';

@Component({
  selector: 'app-babysitter-ads-item',
  templateUrl: './babysitter-ads-item.component.html',
  styleUrls: ['./babysitter-ads-item.component.css']
})
export class BabysitterAdsItemComponent implements OnInit {


  @Input() sitter: Bebysitter;
  id: number;

  constructor(private bebysitterService: BebysitterService) { }

  ngOnInit() {
    this.id = this.sitter.id;
  }


}
