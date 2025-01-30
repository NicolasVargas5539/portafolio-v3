// particles.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-particles',
  standalone: true,
  template: `
    <div class="particles-container">
      <div id="particles-js"></div>
      <div class="content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .particles-container {
      position: relative;
      width: 100%;
      min-height: 100vh;
    }

    #particles-js {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #000000;
      z-index: 0;
    }

    .content {
      position: relative;
      z-index: 1;
      width: 100%;
      min-height: 100vh;
    }

    /* Estilos base recomendados para componentes */
    :host ::ng-deep {
      /* Asegura que los textos sean legibles */
      color: white;

      /* Estilo base para elementos interactivos */
      a, button, input, select, textarea {
        position: relative;
        z-index: 2;
      }

      /* Contenedores de componentes */
      .component-container {
        background-color: rgba(0, 0, 0, 0.5);
        padding: 20px;
        border-radius: 8px;
        backdrop-filter: blur(5px);
      }
    }
  `]
})
export class ParticlesComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    this.loadParticlesScript();
  }

  ngAfterViewInit() {
    this.initParticles();
  }

  private loadParticlesScript() {
    // Evita cargar el script múltiples veces
    if (document.querySelector('script[src*="particles.min.js"]')) {
      this.initParticles();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => this.initParticles();
    document.body.appendChild(script);
  }

  private initParticles() {
    // @ts-ignore
    if (typeof particlesJS !== 'undefined') {
      // @ts-ignore
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 200,  // Reducido para mejor rendimiento
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 0.7,  // Reducida para no distraer tanto
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "window",  // Cambiado a window para mejor detección
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            }
          }
        },
        "retina_detect": true
      });
    }
  }
}
