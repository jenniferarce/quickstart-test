import { Component, Input } from '@angular/core';
import { Passengers } from './passengers';

@Component({
    selector: 'zippy',
    template: `
    
    <div>
    <div class="panel panel-default">
        <div class="panel-heading pointerCursor"> {{passenger.name}},  {{passenger.lastName}}
            
            <i class = "glyphicon"
                [ngClass] = "{  
                        'glyphicon-chevron-down': ishidden,
                        'glyphicon-chevron-up': !ishidden }" (click)="onClick()"> 
 </i> 
        </div>
        <div *ngIf="!ishidden" class="panel-body"  >
            Age: {{passenger.age}}
            <ng-content></ng-content>
            </div>
    </div>
    </div>
 `,
    styles: [`
    .pointerCursor{cursor: pointer;}
 `]
})

export class ZippyComponent {
    ishidden = true;
    @Input() passenger;
    @Input() title; 

    onClick() {
        this.ishidden = !this.ishidden;
    }
}