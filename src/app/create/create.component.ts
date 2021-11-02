import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  registerForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  get Name() {
    return this.registerForm.get('Name');
  }
  get mail() {
    return this.registerForm.get('mail');
  }
  get password() {
    return this.registerForm.get('password');
  }
  constructor() {}

  ngOnInit(): void {}
}
