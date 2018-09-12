import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotteryHeaderComponent } from './lottery-header/lottery-header.component';
import { LotteryFooterComponent } from './lottery-footer/lottery-footer.component';
import { HomeGameComponent } from './home-game/home-game.component';
import { GameComponent } from './game/game.component';
import { InstantComponent } from './instant/instant.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LotteryHeaderComponent,
    LotteryFooterComponent,
    HomeGameComponent,
    GameComponent,
    InstantComponent,
  ],
  exports: [HomeGameComponent]
})
export class BitwinsGameModule { }
