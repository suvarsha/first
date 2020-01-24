import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
            isavailable = true;
            myClickFunction(event) { 
              alert("Button is clicked");
              console.log(event);
           }
           changemonths(event) {
            alert("Changed month from the Dropdown");
            console.log(event);
         }
         todaydate = new Date();
}

