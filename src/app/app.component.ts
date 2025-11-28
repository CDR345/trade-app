import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TradeListComponent } from "./trade-list/trade-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TradeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Trades';
}
