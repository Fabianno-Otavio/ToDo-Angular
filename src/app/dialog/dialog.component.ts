import { ListService } from './../list/list.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public formControlInputAltered: FormControl = new FormControl();

  @Output() newTask = new EventEmitter();

  constructor(private listService: ListService) { }

  getNewTask(): void{
    console.log(this.formControlInputAltered.value);
    this.listService.existeNaLista(this.formControlInputAltered.value) ? window.alert('Tarefa já existente, digite uma nova.') :
    this.newTask.emit(this.formControlInputAltered.value);
  }

  ngOnInit(): void {
  }

}
