import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loading = true;
  anon: boolean;
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = false;
    /*this.authService.userChange$.subscribe((user) => {
      this.user = user;
      this.anon = !user;
    });*/
  }

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }
}
