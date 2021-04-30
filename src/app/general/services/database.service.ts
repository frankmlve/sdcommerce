import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(protected client: HttpClient) { }

  getAllProducts(){
    return this.client.get(environment.api_url + '/all')
  }
}
