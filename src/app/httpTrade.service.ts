import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TradeInterface } from './data/tradeInterface';

@Injectable({
  providedIn: 'root'
})
export class HttpTradeService {

  httpClient = inject(HttpClient);

  getAllTrades(): Observable<TradeInterface[]> {
    return this.httpClient.get<TradeInterface[]>('http://localhost:8080/api/trades');
  }
  
  addTrade(trade: TradeInterface): Observable<TradeInterface> {
    return this.httpClient.post<TradeInterface>('http://localhost:8080/api/trades', trade);
  }   
}
