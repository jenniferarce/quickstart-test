import { Component } from '@angular/core';
import { TweetsComponent } from './tweets.component';
import { TweetService } from './tweets.service';
import { Tweet } from './tweet';

@Component({
  selector: 'my-app',
  template: `
    <div *ngFor="let data of tweets">
    <tweetList [data]="data"></tweetList>
    </div>
  `,
    providers: [TweetService]
})

export class AppComponent {
  tweets: Tweet[];
  constructor(tweetServices: TweetService) {
        this.tweets = tweetServices.getTweets();
    }
}
//es lo que iria en  el component ROOT * de aca, el app.component
