import { Component} from '@angular/core';
import { Passengers } from '../zippy/passengers';
import{PassengersService} from '../zippy/passengers.service';

@Component({
    selector: 'passengers-table',
    template: `
        
            <div class="panel panel-info">
               
            <div class="panel-heading">
                Passengers
            </div>
                <table class="table">
                <thead>
                    <tr>
                        <th>Name</th><th>Last Name</th><th>Age</th>
                    </tr>
                </thead> 
                <tbody *ngFor = "let passenger of passengers">
                    <tr>
                        <td>{{passenger.name}}</td>
                        <td>{{passenger.lastName}}</td>
                        <td>{{passenger.age}}</td>
                    </tr>
                <tbody>
                </table>
           </div>
        
    `,
    providers: [PassengersService]
})

export class TableComponent {
      passengers:Passengers[];

    constructor(passengerService:PassengersService){
           this.passengers = passengerService.getPassengers();//esto se reemplaza por el get que va a traer la info del server / json
    }
    
}