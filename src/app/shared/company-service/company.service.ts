import {Injectable} from '@angular/core';
import {ICompany} from '../company';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Observable, throwError, of } from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class CompanyService{

    private clientUrl  = 'www.WebService.com/api/companies'

    constructor(private http: HttpClient){}

    //Modify this for the web server
    getCompanies():Observable<ICompany[]>{
        return this.http.get<ICompany[]>(this.clientUrl)
        .pipe(
            tap(data => console.log('getCompanies: ' + JSON.stringify(data))),
            catchError(this.handleError)
        ); 
    }

    //Modify this for the web server
    getCompany(id:number):Observable<ICompany>{
        const url = `${this.clientUrl}/${id}`;
        return this.http.get<ICompany>(url)
        .pipe(
            tap(data => console.log('getCompany: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    //Modify this for the web server
    //modify an existing company
    modifyCompany(company:ICompany): Observable<ICompany>{
        return this.http.patch<ICompany>(this.clientUrl, company).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){

        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured: ${err.error.message}`;
        }else{
            errorMessage = `Server returned code: ${err.status}, error message
            is: ${err.message}`; 
        }
        console.error(errorMessage);
        return throwError(errorMessage)
    }
}