import { LoaderService } from './services/loader.service';
import { YoutubePipe } from './pipes/youtube.pipe';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ParticlesModule } from 'angular-particle';
import { ParticlesService } from './services/particles.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    YoutubePipe,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    RouterModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ScrollToModule.forRoot(),
    MDBBootstrapModule.forRoot()

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ParticlesService, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
