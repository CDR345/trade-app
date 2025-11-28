import { Component, Input } from '@angular/core';
import { TradeInterface } from '../data/tradeInterface';
import { CommonModule, NgSwitch } from '@angular/common';

@Component({
  selector: 'app-trade',
  imports: [NgSwitch,CommonModule],
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.css'
})
export class TradeComponent {
  @Input({required: true}) trade!: TradeInterface;

}
