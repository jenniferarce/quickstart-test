import {Component} from '@angular/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form/contact-form.template.html'
})

export class ContactFormComponent{
    log(x)
    {
        console.log(x);
    }
    onSubmit(form){
        console.log(form);
    }
}