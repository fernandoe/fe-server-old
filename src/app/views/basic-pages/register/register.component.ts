import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../sdk/auth.service';
import {Response} from '@angular/http';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  onRegister(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.register(email, password)
      .subscribe(
        (response: Response) => {
          const data = response.json;
        },
        (error) => console.log(error)
      );
  }

  ngOnInit() {
  }

}
