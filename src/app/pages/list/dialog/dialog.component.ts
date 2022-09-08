import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ListService } from '../list.service';
import { ValidateValue } from 'src/app/shared/validators/validateValue';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public formControlInputAltered: FormControl = new FormControl();
  public validateValue: ValidateValue = new ValidateValue(this.listService);

  @Output() newTask = new EventEmitter();

  constructor(private listService: ListService) { }

  getNewTask(): void{
    try{
      this.validateValue.validEdit(this.formControlInputAltered.value);
      this.newTask.emit(this.formControlInputAltered.value);
    } catch (e: any){
      alert(e.message);
    }
  }

  ngOnInit(): void {
  }

}
