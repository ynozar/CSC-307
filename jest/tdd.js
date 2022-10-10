class Portfolio {
    constructor() {
      this.tickers = [];
      this.numShares=[];
    }

    isEmpty(){

        return this.numShares.length==0? true :false ;
    }
    numUnique(){

        return this.tickers.length
    }

    buy(ticker, numShares){
        const inPort=this.tickers.indexOf(ticker)
        if (inPort>-1){
        this.numShares[inPort]+=numShares
        }
        else{
        this.tickers.push(ticker)
        this.numShares.push(numShares)}
    }
    sell(ticker, numShares){
        const inPort=this.tickers.indexOf(ticker)
        if (inPort>-1){
        this.numShares[inPort]-=numShares
        
        if(this.numShares[inPort]<0){
            throw 'ShareSaleException'
        }
        if(this.numShares[inPort]<1){
            this.tickers.splice(inPort,1)
            this.numShares.splice(inPort,1)
        }


        }
        else{

        }
    }

    getNumShares(ticker){
        return this.numShares[this.tickers.indexOf(ticker)];
    }
    
}






exports.Portfolio = Portfolio;
