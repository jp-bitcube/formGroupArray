import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  demoForm: FormGroup;
  director: {
    name: string,
    number: number,
    email: string,
  };
  directorForm

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.demoForm = this.fb.group({
      randomInput: [''],
      directors: [[]]
    });
    this.director = { name: null, number: null, email: null };
    this.addFormGroupToFormArray();
    console.log(this.demoForm.get('directors'));
  }

  addFormGroupToFormArray(): void {
    const demo = this.demoForm.get('directors').value;
    const director = this.fb.group({});
    demo.push(director);
    Object.keys(this.director).forEach(field => {
      console.log(field);
      const control = this.fb.control(null, [Validators.required]);
      demo[demo.length - 1].addControl(field, control);
    });
  }

  removeFormGroupToFormArray(i: number): void {
    const demo = this.demoForm.get('directors').value;
    demo.splice(i, 1);
  }
}
