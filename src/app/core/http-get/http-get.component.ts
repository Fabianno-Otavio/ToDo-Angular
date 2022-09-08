import { Component, OnInit } from '@angular/core';

import { IAdvice } from '../../models/advice.interface';
import { HttpGetService } from '../../shared/services/http-get.service';

@Component({
  selector: 'app-html-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.scss']
})
export class HttpGetComponent implements OnInit {

  advice!: IAdvice;

  constructor(private httpGetService: HttpGetService) { }

  async ngOnInit(): Promise<void> {
    await this.getAdvice();
  }

  async getAdvice(): Promise<void>{

    try {
      this.advice = await this.httpGetService.getAdvice();
    } catch ( erro: any ){
      console.log(`Erro: ${erro}`);
    }
  }

}
