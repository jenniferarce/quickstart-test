import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './passwordValidators';

@Component({
    selector: 'password-form',
    templateUrl: 'app/password-form/password-form.template.html'
})

export class PasswordComponent {
    passwordForm: FormGroup;
    sonIguales: boolean;
    constructor(fb: FormBuilder) {

        this.passwordForm = fb.group({
            oldpassword: ['', Validators.compose([
                Validators.required
            ])],
            newpassword: ['', Validators.compose([
                Validators.required, PasswordValidators.passwordMinLength
            ])],
            renewpassword: ['', Validators.compose([
                Validators.required
            ])]

        }, { validator : PasswordValidators.equalPassword  }); 



        console.log(this.passwordForm.valid);
        console.log(this.passwordForm);
    }

}