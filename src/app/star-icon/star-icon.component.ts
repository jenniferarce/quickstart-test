import { Component, Input ,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'staricon',
    templateUrl : 'app/star-icon/star-icon.template.html',
    styles: [` 
        .glyphicon-star{
            color: orange;
        }
    `]
    
})
/*template: `<i class="glyphicon"
    [class.glyphicon-star-empty]="!isFavorite"
    [class.glyphicon-star]="isFavorite"
    (click)="onClick()"></i>`*/ // vers. antigua

/*Decorators (input/Output)
inputs: ['isFavorite'] 
//o ->inputs: ['isFavorite:is-favorite'] //->si se le pone el alias
outputs:['change']
//o-> outputs:['change:favoriteChange']
*/

export class StarComponent {
   @Input() isFavorite : boolean; //ejemplo Input
   //o-> @Input('is-favorite') isFavorite : boolean; //-> se le pone el alias/nombre publico de isFavorite

   @Output() change = new EventEmitter();
   // @Output('favoriteChange') change = new EventEmitter();
    constructor() {
      this.isFavorite = false;
    }
    onClick() {

        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue : this.isFavorite});
    }

}