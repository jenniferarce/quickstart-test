import {Component} from '@angular/core';

@Component({
    selector: 'subscribe-form',
    templateUrl: 'app/subscribe-form/subscribe-form.template.html'
})


export class SubscribeComponent{

    times : string[] = ["Daily", "Weekly", "Monthly" ];  

    onSubmit(form){
        console.log(form);
    }
}