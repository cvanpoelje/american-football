import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  title = "hello";
  password = "password";
  username = "username";

  onSubmit() {
    alert(this.username);
  }
  constructor() { }

  ngOnInit() {
  }

}
