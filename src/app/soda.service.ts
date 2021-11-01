
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Soda } from './types';



@Injectable({
  providedIn: 'root'
})
export class SodaService {

  constructor(private _httpClient: HttpClient) { }

  getSoda(sodaID: string): Observable<Soda>{
    return this._httpClient.get<Soda>(API + '/id/' + sodaID);
  }

  getAllSodas(): Observable<Soda[]>{
    return this._httpClient.get<Soda[]>(API);
  }
 
}

const API = 'http://jamesltc.com/mobile1/soda.php';
