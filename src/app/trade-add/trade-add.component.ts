import { Component,inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpTradeService } from '../httpTrade.service';

@Component({
  selector: 'app-trade-add',
  imports: [ReactiveFormsModule],
  templateUrl: './trade-add.component.html',
  styleUrl: './trade-add.component.css'
})
export class TradeAddComponent {

  fb = inject(FormBuilder);
  httpTradeService: HttpTradeService = inject(HttpTradeService);

  tradeForm: FormGroup = this.fb.group({
    stockTicker: "",
    buyOrSell: "",
    volume: [0],
    price: [0]
    
  });

submitForm() {
   // const newTrade = this.tradeForm.value;  
   // this.httpTradeService.addTrade(this.tradeForm.value).subscribe(v=>console.log(v));
    this.httpTradeService.addTrade(this.tradeForm.value).subscribe(v=>console.log("Trade added:", v));  
}
}
