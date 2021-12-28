import { Component } from "@angular/core";


@Component({
    selector: 'inputs-component',
    templateUrl: './inputs.component.html'
})
export class InputsComponent{
    username = 'test';

    isUsernameEmpty(){
        return this.username === '';
    }

    resetUsername(){
        this.username='';
    }

}