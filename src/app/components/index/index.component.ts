import { LoaderService } from './../../services/loader.service';
import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { ParticlesService } from '../../services/particles.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  myParams: object = {};
  public isActive = false;
  width = 100;
  height = 100;
  viewMode = 'tab1';
  videoUrl = 'SSo_EIwHSd4';

  constructor(private particles: ParticlesService, private loaderService: LoaderService) {}


  ngOnInit() {
    this.myParams = this.particles.getParticles();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // for header
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 30) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
    // for back to top button
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('myBtn').style.display = 'block';
    } else {
        document.getElementById('myBtn').style.display = 'none';
    }

  }

// When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
