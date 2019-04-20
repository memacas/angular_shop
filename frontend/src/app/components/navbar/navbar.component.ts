import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private flash_messages_service: FlashMessagesService
  ) { }


  onLogoutClick(){
    this.flash_messages_service.show('Cerraste sesión', {cssClass: 'alert-info'});
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
