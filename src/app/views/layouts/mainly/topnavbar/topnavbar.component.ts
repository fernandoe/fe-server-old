import {Component} from '@angular/core';
import {AuthService} from "../../../../sdk/auth.service";
import {Router} from "@angular/router";

declare var jQuery:any;

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent {

  constructor(private auth: AuthService, private router: Router) {
  }

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    // smoothlyMenu();
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['login'])
  }

}
