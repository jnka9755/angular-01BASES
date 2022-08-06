import { Component } from "@angular/core";

@Component({
    selector: 'app-herore',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    public name: string = 'Juan';
    public age: number = 25;

    get nameCap():string {
        return this.name.toLocaleUpperCase();
    }

    getName(): string {
        return `${this.name} - ${this.age}`;
    }

    changeName():void {
        this.name = 'David';
    }

    changeAge():void {
        this.age = 28;
    }
}