import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor (private service: LoginService,private route:Router) {}

  logOut() {
    this.service.getLogOut()
    this.route.navigate([''])
  }

}
