import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <form [formGroup]="form">
  <div>
    <label>
      ISBN
      <span *ngIf="isRequired('isbn')">*</span>
    </label>
    <input type="text" formControlName="isbn">

    Required:
    <button type="button" (click)="removeRequired('isbn')">0</button>
    <button type="button" (click)="addRequired('isbn')">1</button>
  </div>

  <div>
    <label>
      Title
      <span *ngIf="isRequired('title')">*</span>
    </label>
    <input type="text" formControlName="title">

    Required:
    <button type="button" (click)="removeRequired('title')">0</button>
    <button type="button" (click)="addRequired('title')">1</button>
  </div>

  <div>
    <label>
      Description
      <span *ngIf="isRequired('description')">*</span>
    </label>
    <input type="text" formControlName="description">

    Required:
    <button type="button" (click)="removeRequired('description')">0</button>
    <button type="button" (click)="addRequired('description')">1</button>
  </div>
</form>`,
})
export class AppComponent {
  form = new FormGroup({
    isbn: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    description: new FormControl(),
  });

  isRequired(controlName: string) {
    const control = this.form.get(controlName)!;
    return control.hasValidator(Validators.required)
  }

  removeRequired(controlName: string) {
    const control = this.form.get(controlName)!;

    control.removeValidators(Validators.required);
    control.updateValueAndValidity();
  }

  addRequired(controlName: string) {
    const control = this.form.get(controlName)!;

    control.addValidators(Validators.required);
    control.updateValueAndValidity();
  }
}
