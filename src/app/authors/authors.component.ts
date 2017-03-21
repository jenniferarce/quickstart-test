import {Component} from '@angular/core';
import {AuthorService} from './authors.service';

@Component({
    selector: 'authors',
    template:
    `<h2>Authors</h2>
    {{title}}

    <ul><li *ngFor="let author of authors">
        {{author}}
        </li>
    </ul>

    `,
    providers: [AuthorService],

})

export class AuthorsComponent{
title = "The title of authors page";
authors;

constructor(authorS : AuthorService){
this.authors = authorS.getAuthors();
}

}