import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'failure-component',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.css']
})
export class FailureComponent{
  failureStatus = 404;

  getFailureStatus(){
    return this.failureStatus;
  }

}
