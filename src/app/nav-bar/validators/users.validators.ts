import { FormControl } from '@angular/forms';

export class UsersValidators{

    static invalidEmail(emailControl : FormControl){
        //var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var pat = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/"; 
        //var pat ="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        
        if(emailControl.value.indexOf(pat) )
        return {invalidEmail : true};

        return null;
    }//ver
}