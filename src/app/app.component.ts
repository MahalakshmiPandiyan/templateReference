import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'templateReference';
  users=[1,2,3]
  callPhone(phone:string){
    console.log(phone);
  }
  addition(){
    alert ("HELLO WORLD")
  }
}
