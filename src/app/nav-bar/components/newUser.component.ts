import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import{Component} from '@angular/core';

@Component({
    //templateUrl: 'app/nav-bar/templates/newUser.template.html'
    templateUrl:'app/nav-bar/templates/newUser.template.html'
})

export class NewUserComponent{
    newUserGroup : FormGroup;
    user;
    constructor ( fb : FormBuilder){
        this.newUserGroup = fb.group({
            name:['',Validators.compose([ Validators.required, Validators.minLength(3)])],//Validators.compose([Validators.required])
            phone:[],
            email: ['', Validators.required],
            street:[],
            suite: [],
            city:[],
            zipcode:[]
        });
    }
    // if usuario != null EDIT...
    //Add user > Modify User
    //Recorrés todos los controles y seteas los values = a user. name ... etc.


    //se puede hacer con enrutamiento por parámetro y pasar la id del usuario seleccionado.


    
}