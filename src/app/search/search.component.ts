import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  public formControlInputTask: FormControl = new FormControl();
  valor!: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  adicionarItem(): void{

    this.formControlInputTask.value === '' ? window.alert('Insira uma tarefa!') :
    this.formControlInputTask.value.length < 10 ? window.alert('Insira uma tarefa com mais de 10 caracteres') :
    this.searchService.adicionarItem(this.formControlInputTask.value);

  }

}
