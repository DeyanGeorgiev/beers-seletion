import { Component, OnInit } from '@angular/core';

import { data }  from  '../assets/beers.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent implements OnInit {
  title = 'task2';
  beers : any;
  input: string;

  order = "";
  ascDsc= false;

  ngOnInit(){
  this.beers = data;
  }

  onChange(event){
    this.order = event.target.title;
    this.ascDsc = event.target.value;  
  }
  
}
