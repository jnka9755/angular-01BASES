import { Component } from '@angular/core'

@Component({
    selector: 'app-counter',
    template: `<h1>{{title}}</h1>
    <h3>La base es: 
      <strong>{{base}}</strong>
    </h3>
    
    <button (click)="operate(base)">+{{base}}</button>

    <span>{{number}}</span>   
    
    <button (click)="operate(-base)">-{{base}}</button>`
})
export class CounterComponent {


    public title: string = 'Contador App';
    public number: number = 0;
    public base: number = 5;

    operate(value: number) {
        this.number += value;
    }
}