import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';
import { ValidateValue } from 'src/app/shared/validators/validateValue';
import { ListService } from '../../pages/list/list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  public formControlInputTask: FormControl = new FormControl();
  public validateValue: ValidateValue = new ValidateValue(this.listService);

  constructor(private searchService: SearchService, private listService: ListService) { }

  ngOnInit(): void {
  }

  adicionarItem(): void{

    try{
      this.validateValue.valid(this.formControlInputTask.value);
      this.searchService.adicionarItem(this.formControlInputTask.value);
    } catch (e: any){
      alert(e.message);
    }
  }

}
