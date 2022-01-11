import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent{
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;
  time;
  timeEnabled = false;

  constructor() { }


  onStopGame(){
    this.timeEnabled = false;
    console.log("Game stoped");
    clearInterval(this.time);
  }

  onStartGame(){
    this.timeEnabled = true;
    console.log("Game started")
    this.time = setInterval(() => {
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
    }, 1000)
  }
}
