import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentService } from '../../parent-ads/parent.service';
import { Parent } from '../../models/parent';

@Component({
  selector: 'app-parent-ad',
  templateUrl: './parent-ad.component.html',
  styleUrls: ['./parent-ad.component.css']
})
export class ParentAdComponent implements OnInit {

  submitedParent: Parent;


  constructor(private parentService: ParentService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.submitedParent = form.value;
    this.submitedParent.id = this.parentService.parents.length;
    this.parentService.parents.push(this.submitedParent);
    form.reset();
  }

}
