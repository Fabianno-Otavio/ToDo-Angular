import { IAdvice } from '../model/advice.interface';
import { HtmlGetService } from './http-get.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.scss']
})
export class HttpGetComponent implements OnInit {

  advice!: IAdvice;

  constructor(private htmlGetService: HtmlGetService) { }

  async ngOnInit(): Promise<void> {
    await this.getAdvice();
  }

  async getAdvice(): Promise<void>{
    try {
      this.advice = await this.htmlGetService.getAdvice();
    } catch ( erro: any ){
      console.log(`Erro: ${erro}`);
    }
  }
}
