import {Component} from '@angular/core';
import {CourseService} from './courses.service';
import {AutoGrowDirective} from '../autogrow/auto-grow.directive';

@Component({
    selector: 'courses',
    template: `
    <u><h2>Courses </h2></u>
    <mark>{{title}}</mark>
    <input type="text" autoGrow />
    <ul>
        <li *ngFor="let course of courses">
          <i>  {{course}} </i>
        </li>
    </ul>
    <button (click)="onClick($event)" [style.backgroundColor]="'gray'">EventBinding </button>
    `,
    providers: [CourseService]
    //<button class="btn btn-primary" [class.active]=“isActive”> ClassBinding </button> //no
    // [style.backgroundColor]="'blue'"
    //directives: [AutoGrowDirective] -- para versiones viejas
})

export class CoursesComponent{
    title = "The title of courses page";
    courses;

    constructor(courseService:CourseService){
        //new CourseService();
        this.courses = courseService.getCourses();
    }

    onClick($event){
        console.log("Clicked",$event);} //EventBinding
        
   // isActive = true; //ClassBinding

}

///