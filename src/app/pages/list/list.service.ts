import { Injectable } from '@angular/core';
import { IItemToDoList } from '../../models/toDoList.interface';
import { GeradorStringAleatoria } from '../../shared/util/geradorStringAleatoria';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  items: IItemToDoList[] = [];
  geradorStringAleatoria: GeradorStringAleatoria = new GeradorStringAleatoria();
  constructor() { }

  getItemList(): IItemToDoList[]{
    return this.items;
  }

  adicionarItem(item: string): void{
    this.items.push({id: this.geradorStringAleatoria.geraString(), valor: item, isEdit: false});
  }

  removerItem(id: string): void{
    this.items = this.items.filter(item => item.id !== id);
  }

  alterarItem(id: string, valor: string): void{
    this.items.map(item => {
      if (item.id === id) {
        item.valor = valor;
      }
    });
  }

  existeNaLista(valor: string): boolean {

    let existe: boolean = false;

    this.items.map(item => {
      if (item.valor === valor){
        existe = true;
      }
    });
    return existe;
  }

}
