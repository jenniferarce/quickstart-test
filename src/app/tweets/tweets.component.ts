import { Component,Input } from '@angular/core';
import { Tweet } from './tweet';

@Component({
    selector: 'tweetList',
    templateUrl: 'app/tweets/tweets.template.html',
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

export class TweetsComponent {

    @Input() data;

    onClickHeart() {
        this.data.isLiked = !this.data.isLiked;
        this.data.isLiked ? this.data.likeCounter += 1 : this.data.likeCounter -= 1;
    }
}