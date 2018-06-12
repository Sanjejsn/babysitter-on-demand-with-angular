import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentService } from '../../parent-ads/parent.service';
import { Parent } from '../../models/parent';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parent-ad',
  templateUrl: './parent-ad.component.html',
  styleUrls: ['./parent-ad.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('800ms ease-in', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
})
export class ParentAdComponent implements OnInit {

  submitedParent: Parent;


  constructor(private parentService: ParentService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submitedParent = new Parent(form.value.name, form.value.email, form.value.city, form.value.description);
    this.parentService.parents.push(this.submitedParent);
    form.reset();
  }

}

