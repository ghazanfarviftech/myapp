import 'rxjs/add/operator/map';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AppService {
    constructor(private http: Http) {
    }

    public config = 'chainayena.net/revo/api/';
    public get(_apiUrl): Observable<any> {
        return this.http.get(`${this.config}` + _apiUrl, this._header())
            .map(this.extractData)
           // .catch(this.handleError);

    }

    public post(_apiUrl, item: any): Observable<any> {
        return this.http.post(`${this.config}` + _apiUrl, item, this._header())
            .map(this.extractData);
           // .catch(this.handleError)
    }

    public put(_apiUrl, itemId: number, item: any): Observable<any> {
        return this.http.put(`${this.config}` + _apiUrl + itemId, item, this._header())
            .map(this.extractData)
            //.catch(this.handleError);
    }

    public delete(_apiUrl, item: any): Observable<any> {
        return this.http.delete(`${this.config}` + _apiUrl + item, this._header())
            .map(this.extractData
            )
           // .catch(this.handleError);
    }


    _header() {
        let user = localStorage.getItem('User');
        let temp = JSON.parse(user)
        let token = temp['token']
        const headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'jwt ' + token });
        const options = new RequestOptions({ headers: headers });
        return options;
    }


    public extractData(res: Response) {
        let body = res.json();
        return body;

    }
    public handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }


}