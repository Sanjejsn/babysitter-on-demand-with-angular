import { Component, OnInit } from '@angular/core';
import { Bebysitter } from '../../models/bebysitter';
import { BebysitterService } from '../../babysitter-ads/bebysitter.service';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

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

  submitedSitter: Bebysitter;

  constructor(private bebysitterService: BebysitterService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.submitedSitter = form.value;
    this.submitedSitter.id = this.bebysitterService.bebysitters.length;
    this.bebysitterService.bebysitters.push(this.submitedSitter);
    form.reset();
  }

}
