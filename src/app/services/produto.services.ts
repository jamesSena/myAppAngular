import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Produto } from '../model/produto.model';
import { Observable } from 'rxjs';
@Injectable()
export class ProdutoService
{
    /**
     *
     */
    constructor(private http: HttpClient) {}

    protected UrlServiceV1: string = 'http://localhost:8080/';
    obterPets() : Observable<Produto[]>{
        return this.http.get<Produto[]>(this.UrlServiceV1+"pets");
    }    
}