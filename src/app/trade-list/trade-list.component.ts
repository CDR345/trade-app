import { Component, inject } from '@angular/core';
import { TradeAddComponent } from "../trade-add/trade-add.component";
import { TradeInterface } from '../data/tradeInterface';
import { HttpTradeService } from '../httpTrade.service';
import { TradeComponent } from "../trade/trade.component";

@Component({
  selector: 'app-trade-list',
  imports: [TradeAddComponent, TradeComponent],
  templateUrl: './trade-list.component.html',
  styleUrl: './trade-list.component.css'
})
export class TradeListComponent {

  httpTradeService = inject(HttpTradeService);
  trades: TradeInterface[] = []

  constructor() { 
    this.httpTradeService.getAllTrades().subscribe(m => this.trades = m)
    // this.httpTradeService.getAllTrades().subscribe({
    //   next: (data: TradeInterface[]) => {
    //     this.trades = data;
    //   },
    //   error: (error) => {
    //     console.error('Error fetching trades:', error);
    //   }
    // });
  }
}
