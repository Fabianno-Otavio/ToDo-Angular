import { Injectable } from '@angular/core';

import { ListService } from './../list/list.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private listService: ListService) { }
  adicionarItem(item: string): void{
    this.listService.adicionarItem(item);
  }
}
