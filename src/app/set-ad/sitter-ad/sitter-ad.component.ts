import { Component, OnInit } from '@angular/core';
import { Babysitter } from '../../models/babysitter';
import { BabysitterService } from '../../babysitter-ads/babysitter.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sitter-ad',
  templateUrl: './sitter-ad.component.html',
  styleUrls: ['./sitter-ad.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('800ms ease-in', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
})

export class SitterAdComponent implements OnInit {

  qualifications = ['enter qualifications', 'Elementary school', 'High school', 'Student', 'Graduate'];
  qualification = 'enter qualifications';

  submitedSitter: Babysitter;

  constructor(private babysitterService: BabysitterService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submitedSitter = form.value;
    this.submitedSitter.id = this.babysitterService.babysitters.length;
    this.babysitterService.babysitters.push(this.submitedSitter);
    form.reset();
  }



}
