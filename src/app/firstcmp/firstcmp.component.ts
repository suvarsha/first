import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstcmp',
  templateUrl: './firstcmp.component.html',
  styleUrls: ['./firstcmp.component.css']
})
export class FirstcmpComponent implements OnInit {
  newcomponent = "Entered in new component created";
  constructor() { }

  ngOnInit() {
  }

}
