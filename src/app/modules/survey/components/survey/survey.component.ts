import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QUESTIONS } from 'src/assets/questions';
import { RadioButtonItem } from '../../entities/radio-button-item.model';
import { RadioType } from '../../entities/radio-type.enum';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  
  isSubmitted = false;
  radioType = RadioType;
  questions = QUESTIONS;

  selectedItem: any = 'radio2';

  registrationForm = this.fb.group({
    answer: ['']
  });

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value))
    }
  }
}
