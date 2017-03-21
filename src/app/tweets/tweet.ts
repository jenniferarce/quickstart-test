export class Tweet {

    accountName;
    tweetHandler;
    tweetText;
    likeCounter;
    isLiked;
    imageUrl;
    
    constructor(accountName, tweetHandler, tweetText, likeCounter, isLiked, imageUrl) {

        this.accountName = accountName;
        this.tweetHandler = tweetHandler;
        this.tweetText = tweetText;
        this.likeCounter = likeCounter;
        this.isLiked = isLiked;
        this.imageUrl = imageUrl;
    }

}