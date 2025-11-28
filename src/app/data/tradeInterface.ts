export interface TradeStatus{
    id: number;
    statusCode: number;
}
export interface TradeInterface {
    id: number;
    stockTicker: string;
    volume: number;
    buyOrSell: string;
    price: number;
    tradeStatus: TradeStatus;
   
}

