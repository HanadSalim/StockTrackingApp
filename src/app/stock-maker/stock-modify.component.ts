import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import{ICompany} from '../shared/company';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../shared/company-service/company.service';
import {Router} from '@angular/router';

@Component({
    selector: 'pm-stock-modify',
    templateUrl: './stock-modify.component.html',
    styleUrls: ['./stock-modify.component.css']
})

export class StockModify implements OnInit, OnChanges{
    pageTitle: string = "Modify Stock";
    company: ICompany;
    errorMessage: string;
    companyName: string;
    companyStock: number;
    companyShortHand: string;


    constructor(private route: ActivatedRoute, private companyService: CompanyService, private router: Router){}

    
    ngOnInit(){
        let id = +this.route.snapshot.paramMap.get('id');
        this.pageTitle += `: ${id}`;
        this.getCompany(id);    
    } 

    getCompany(id: number): void{
        this.companyService.getCompany(id)
        .subscribe({
            next: (company: ICompany) => {
                this.company = company;
                this.displayCompany(company); },
                error: err => this.errorMessage = err
        })
    }

    displayCompany(company: ICompany): void{
        this.companyName = company.companyName;
        this.companyStock = company.stockPriceCurrent;
        this.companyShortHand = company.companyShortHand;
    }
    ngOnChanges(changes: SimpleChanges): void {
    }

    onSave(): void{


        this.router.navigate(['/stockmaker']);
    }
}