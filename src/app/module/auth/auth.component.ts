import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  ngOnInit(): void {
  }

  
  isLoggedIn=true;

 
  changeTemplate=()=>{
    this.isLoggedIn=!this.isLoggedIn;
  }

}
