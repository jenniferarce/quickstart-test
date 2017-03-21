import { Component, AfterViewInit } from '@angular/core';
import{Observable} from 'rxjs/Rx';
import{FormGroup,FormBuilder} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

//import * as $ from 'jquery';

////<reference path="./observable-test/typings/tsd.d.ts"/>

@Component({
  selector: 'my-app',
  template: `
    <form [formGroup]="form">
      <input type="text" formControlName="search">
    </form>  
  `
})

export class AppComponent implements AfterViewInit {

  form : FormGroup;

   constructor(fb : FormBuilder){
    //Angular - observable 
    this.form = fb.group({
        search: []
    });

    var search = this.form.get('search');
    search.valueChanges
    .debounceTime(400)
    .map(str => (<string>str).replace(' ','-'))
    .subscribe(x => console.log(x)
    );

    //Array Observable
    var startDates = [];
    var startDate = new Date();

    for(var day = -2; day <=2 ; day++){
      var date = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()+day
      );

      startDates.push(date);
    }
    var observableDate = Observable
    .from(startDates)
    .map(date => {console.log("Getting deals for date "+date);
                return [1, 2, 3]; 
                })
    //.subscribe(x => console.log(x));
    ;

    //Implementing a timer
    var observableTimer = Observable.interval(1000);
    observableTimer
    .flatMap( x => { console.log("Calling de server to get the lastest news");
        return [1,2,3]})
    //.subscribe(news => console.log(news))
    ;

    //Running parallel operations
    var userStream = Observable.of({
          userId : 1, username : 'mosh'
    })
    .delay(2000);

    var tweetStream = Observable.of([1,2,3])
    .delay(1500);

    var observableUserInfo = Observable
            .forkJoin(userStream,tweetStream)
            .map(joined => new Object({user: joined[0], tweets:joined[1]}))
            //.subscribe(result => console.log(result))
            ;

    //Handling errors:
    var observableError = Observable.throw(new Error("Something failed. :O"));

   // observableError.subscribe(
     //     x => console.log(x),
       //   error => console.error(error)
    //);

    
    //Retrying an error
    var counter =0;
    var ajaxCall = Observable.of('url')
        .flatMap(()=> {
            if(++counter <2)
              return Observable.throw(new Error("Request failed."));

            return Observable.of([1,2,3]);  
        });
    
    //ajaxCall
      //  .retry(3)
        //.subscribe(
          //x => console.log(x),
          //error => console.error(error)
        //);
        
     //catching and continuing
     var remoteDataStream = Observable.of([5,6,7]); 
     //Observable.throw(new Error("Something failed."));

     remoteDataStream
          .catch(err => {
            var localDataStream = Observable.of([1,2,3,4]);
            return localDataStream;
          })
          //.subscribe(x=>console.log(x))
          ;

    //Timeouts
    var observableTimeout = Observable.of([7,8,9]).delay(5000);
    //observableTimeout.timeout(1000)
      //               .subscribe(
        //                x=>console.log(x),
          //              error=>console.error(error)
            //         );

  //Complete notified 
   var observableComplete = Observable.from([1,4,7])
                                      //.throw(new Error("error..."))
                                      ;
   observableComplete.subscribe(
                x => console.log(x),
                error => console.log(error),
                () => console.log("Complete.")
   );
  }


  ngAfterViewInit(){
//....
  /*var keyups = Observable.fromEvent($("#search"),"keyup")
  .map(e => e.target.value)
  .filter(text=> text.length >= 3)
  .debounceTime(400)
  .distinctUntilChanged() 
  .flatMap(searchTerm => {
      var url = "https://api.spotify.com/v1/search?type=artist&q="+searchTerm;
      var promise = $.getJSON(url);
      return Observable.fromPromise(promise);
  })
  ;

    keyups.subscribe(data => console.log(data));
*/
  }

 

}

//<input id="search" type="text" class="form-control" placeholder="Search...">