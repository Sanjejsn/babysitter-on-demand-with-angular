import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Bebysitter } from '../../models/bebysitter';
import { NgForm } from '@angular/forms';
import { BebysitterService } from '../bebysitter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bebysitter-ads-list',
  templateUrl: './bebysitter-ads-list.component.html',
  styleUrls: ['./bebysitter-ads-list.component.css']
})
export class BebysitterAdsListComponent implements OnInit {

  qualifications = ['Enter qualifications', 'Elementary school', 'High school', 'Student', 'Graduate'];
  qualification = 'Enter qualifications';
  city = '';
  bebysitters: Bebysitter[];



  constructor(private bebysitterService: BebysitterService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.bebysitters = this.bebysitterService.bebysitters;
  }


  onSubmit(form: NgForm) {
    this.qualification = form.value.qualifications;
    this.city = form.value.city.toLowerCase();
  }

}

