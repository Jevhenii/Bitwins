import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  logo: any = '../../../../assets/img/BitWins-Ethereum-Lottery.png';
  public isActive = false;
  constructor() { }

  ngOnInit() {
  }

  openNav() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 30) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }
}
