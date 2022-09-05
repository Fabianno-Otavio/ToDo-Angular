import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { IAdvice } from '../model/advice.interface';

@Injectable({
  providedIn: 'root'
})
export class HtmlGetService {

  constructor(private httpClient: HttpClient) {  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  async getAdvice(): Promise<IAdvice>{

    return await lastValueFrom(this.httpClient.get('https://api.adviceslip.com/advice')) as Promise<any>;

  }
}
