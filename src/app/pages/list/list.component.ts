import { Component, OnInit } from '@angular/core';

import { ListService } from './list.service';
import { IItemToDoList } from './../../models/toDoList.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  checked: string = 'checked';

  constructor(public listService: ListService) { }
  ngOnInit(): void {
  }

  removerItem(item: IItemToDoList): void{
    this.listService.removerItem(item.id);
  }

  alterarItem(item: IItemToDoList): void{
    item.isEdit = !item.isEdit;
  }

  adicionarNewTask(task: any, item: IItemToDoList): void{
    this.listService.alterarItem(item.id, task);
    this.alterarItem(item);
  }

  checar(): void{
    this.checked === 'checked' ? this.checked = 'close' : this.checked = 'checked';
  }

}
