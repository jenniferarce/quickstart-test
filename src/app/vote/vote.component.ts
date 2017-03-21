import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'vote',
    template: ` 
    <i class="glyphicon glyphicon-menu-up vote-pointer default-style"
    [class.ColorChange] = "myVote==1"
    (click)="onClickUp()"></i>
    <p>
    <span class="default-style">{{voteCount + myVote}}</span>
   <p>
    <i class="glyphicon glyphicon-menu-down vote-pointer default-style"
    [class.ColorChange] = "myVote== -1"
    (click)="onClickDown()"></i>
    <p>
    `,
    styles: [`
        .default-style{
            color: #a5a8ab;
            width: 20px;
        }
        .ColorChange{
            color: orange;
        }
        .vote-pointer{
            cursor: pointer;
        }
    `]
})

export class VoteComponent{
@Input() voteCount= 0;
@Input() myVote = 0;
@Output() vote= new EventEmitter();

onClickUp(){
     if (this.myVote == 1)
            return;//asegura que solo se pueda votar 1 vez
        
        this.myVote++;

        this.vote.emit({ myVote: this.myVote });
}
onClickDown(){
     if (this.myVote == -1)
            return; //asegura que solo se pueda votar 1 vez
            
        this.myVote--;
        
        this.vote.emit({ myVote: this.myVote });
}
}