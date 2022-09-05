import { Injectable } from '@angular/core';
import { IItemToDoList } from '../model/toDoList.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  items: IItemToDoList[] = [];
  constructor() { }

  getItemList(): IItemToDoList[]{
    return this.items;
  }

  adicionarItem(item: string): void{
    this.items.push({id: this.geradorStringAleartoria(), valor: item, isEdit: false});
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

  public geradorStringAleartoria(): string {
    let stringAleatoria = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
      stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
  }

  existeNaLista(valor: string): boolean {

    let existe: boolean = false;

    console.log(valor);
    this.items.map(item => {
      console.log(item.valor);
      if (item.valor === valor){
        existe = true;
      }
    });
    return existe;
  }

}
