import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  feedbackForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  this.feedbackForm = new FormGroup({
      'Events': new FormGroup({
        'Angular': new FormControl(),
        'React': new FormControl(),
        'Javascript': new FormControl(),
      }),
      'name1': new FormControl(),
      'name2': new FormControl(),
      'name3': new FormControl(),
    });
  }

  submit(){
    console.log(this.feedbackForm['controls'].name);
    console.log(this.feedbackForm.value)
  }

}
