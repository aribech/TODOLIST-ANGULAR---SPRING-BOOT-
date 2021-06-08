import { Injectable } from '@angular/core';
import {Item } from "../model/Item";
import {HttpClient} from '@angular/common/http';
import {API_URLS} from '../config/api.urls.config';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/* la classe qui contient les mothodes pour communiquer avec la partie back end*/
export class ItemService {

  items: Item[] = [];
  constructor(private httpClient: HttpClient) {
  /*
      let t1: Item = new Item(1,'tache 1',false);
      let t2: Item = new Item(1,'tache 2',false);
      let t3: Item = new Item(1,'tache 3',false);
      this.items.push(t1);
      this.items.push(t2);
      this.items.push(t3);
*/
  }

/*
    public getItems(): Item[]{
      return this.items;
    }
 */

  public getItems(): Observable<any>
  {
    return this.httpClient.get(API_URLS.ITEMS_URL);
  }
  public addItem(item: Item): Observable<any>
  {
    return this.httpClient.post(API_URLS.ITEMS_URL, item);
  }
  public updateItem(item: Item): Observable<any>
  {
    return this.httpClient.put(API_URLS.ITEMS_URL, item);
  }

  public deleteItem(id: number): Observable<any>
  {
    return this.httpClient.delete(API_URLS.ITEMS_URL + '/' + id);
  }

}
