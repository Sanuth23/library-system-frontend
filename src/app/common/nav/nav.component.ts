import { Component } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LoginComponent,RouterLink,RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
