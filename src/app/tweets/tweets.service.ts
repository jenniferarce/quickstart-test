import { Tweet } from './tweet';

export class TweetService {
    
    getTweets(): Tweet[] {
        return [new Tweet("Winward", "@winwardstudios", "Looking for a... ?", 0, false, "http://lorempixel.com/100/100/people/?3"),
        new Tweet("AngularJS News", "@angularjs_news", "RightRelevance:...", 20, true, "http://lorempixel.com/100/100/people/?6"),
        new Tweet("Bootstrap", "@3dwave", "Projects...", 5, false, "http://lorempixel.com/100/100/people/?2")];
    }
}
