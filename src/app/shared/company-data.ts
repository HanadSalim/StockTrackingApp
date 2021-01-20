import {InMemoryDbService} from 'angular-in-memory-web-api';

import {ICompany} from './company';

export class CompanyData implements InMemoryDbService{
    
    createDb(){
        const companies:ICompany[] = [
            {
                id:1,
                companyName: "Chair Industries",
                companyShortHand:"CHIN",
                stockPriceCurrent: 123.00,
                stockPriceDate: "18/01/2021",
                stockPriceTime: "12:28:30",
                stockPriceNew:123.00,
                stockCurrency: "USD"
            },
            {
                id:2,
                companyName: "Capita",
                companyShortHand:"CAPA",
                stockPriceCurrent: 482.00,
                stockPriceDate: "18/01/2021",
                stockPriceTime: "12:28:30",
                stockPriceNew:482.00,
                stockCurrency: "USD"
            },
            {
                id:3,
                companyName: "Microsoft",
                companyShortHand:"MSFT",
                stockPriceCurrent: 800.00,
                stockPriceDate: "18/01/2021",
                stockPriceTime: "12:28:30",
                stockPriceNew:800.00,
                stockCurrency: "USD"
            },
            {
                id:4,
                companyName: "Ramen Studios",
                companyShortHand:"RAMN",
                stockPriceCurrent: 135.00,
                stockPriceDate: "18/01/2021",
                stockPriceTime: "12:28:30",
                stockPriceNew:135.00,
                stockCurrency: "USD"
            },
            {
                id:5,
                companyName: "Wallem Company",
                companyShortHand:"WALM",
                stockPriceCurrent: 903.00,
                stockPriceDate: "18/01/2021",
                stockPriceTime: "12:28:30",
                stockPriceNew:903.00,
                stockCurrency: "USD"
            }
        ]

        return {companies};
    }
}