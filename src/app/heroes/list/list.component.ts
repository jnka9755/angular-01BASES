import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América']
  public heroeDelete: string = '';


  deleteHeroe(){
    const heroe = this.heroes.splice(3,1);
    this.heroeDelete = heroe[0];
  }
}
