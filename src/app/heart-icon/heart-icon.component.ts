import {Component} from '@angular/core';

@Component({
    selector: 'hearticon',
    templateUrl: 'app/heart-icon/heart-icon.template.html',
    styles: [`
    .glyphicon-heart {
        color: #ccc;
        cursor: pointer;
    }
    .HeartPink{
        color: deeppink;
    }
    `]
})

export class HeartComponent{
    likeCounter : number = 10;
    isLiked : Boolean = false;

    onClick()
    {
        this.isLiked = !this.isLiked;
        this.isLiked ? this.likeCounter +=1 :this.likeCounter -= 1 ;
    }
}