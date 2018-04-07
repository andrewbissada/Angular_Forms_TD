import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  meats = ['Beef', 'Chicken', 'Pork'];
  defaultNumber = '2';
 // answer = '';

  order = {
    name: '',
    number: '',
    meat: ''
  };

  submitted = false;

  @ViewChild('f') signupForm: NgForm;

  onSubmit() {
    this.submitted = true;
    this.order.name = this.signupForm.value.name;
    this.order.number = this.signupForm.value.number;
    this.order.meat = this.signupForm.value.meat;
  }
}
