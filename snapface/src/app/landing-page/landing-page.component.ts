import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  // injection du routeur
  constructor(private router: Router){}

  // methode pour router vers url "facesnaps"
  onRedirect():void{
    this.router.navigateByUrl("facesnaps")
  }
}
