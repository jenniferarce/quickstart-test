import {Component} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import{UsernameValidators} from './UsernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form/signup-form.component.html'
})
export class SignUpFormComponent {
    signupForm : FormGroup;

    constructor(fb : FormBuilder){
        this.signupForm = fb.group({
            username: ['',Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace])
            ],
            password: ['',Validators.required]
        });
    }

    signup(){
        this.signupForm.get('username').setErrors({invalidLogin : true});

        console.log(this.signupForm.value);
    }
}