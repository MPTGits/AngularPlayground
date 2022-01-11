import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { InputsComponent } from './inputs/inputs.component'
import { FormsModule } from '@angular/forms';
import { OddComponent } from './gameOddEvenTask/Odd/odd.component';
import { EvenComponent } from './gameOddEvenTask/Even/even.component';
import { GameControlComponent } from './gameOddEvenTask/GameControl/game-control.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessComponent,
    FailureComponent,
    InputsComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
