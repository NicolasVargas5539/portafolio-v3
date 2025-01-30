import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./curriculum/components/navbar/navbar.component";
import { FooterComponent } from "./curriculum/components/footer/footer.component";
import { ParticlesComponent } from "./curriculum/components/particles/particles.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ParticlesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curriculum';
}
