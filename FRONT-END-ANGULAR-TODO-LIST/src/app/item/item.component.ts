import { Component, OnInit } from '@angular/core';
import {ItemService} from "../service/Item.service";
import {Item} from "../model/Item";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
/* cette classe pour le item component qui va traiter les items*/
export class ItemComponent implements OnInit {

  items: Item[] = []; // la liste des taches affichées ( filter )
  itemsSource: Item[] = []; // la liste des taches recupérées à partire du back end
  itemForm: FormGroup;
  newItemLabel="";

  constructor(private itemService: ItemService,private formBuilder: FormBuilder) {

    this.itemService.getItems().subscribe(
      data => { this.itemsSource = data; this.items =this.itemsSource; } ,
      error => { console.log('an error'); } ,
      () => {console.log('loading produits was done') ; }
    );
    this.itemForm= this.formBuilder.group(
      {
        label: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
  }

  loadProduits()
  {
    this.itemService.getItems().subscribe(
      data => { this.itemsSource = data; } ,
      error => { console.log('an error'); } ,
      () => {console.log('loading produits was done') ; }
    );
  }

  addItem()
  {
    let item = new Item(0,this.newItemLabel,false);
    this.itemService.addItem(item).subscribe(
      res => {
        this.loadProduits();
        this.items=this.itemsSource;
      }
    );
  }

  deleteItem(item: any) {
    this.itemService.deleteItem(item.id).subscribe(
      res => {
        this.loadProduits();
        this.items=this.itemsSource;
      }
    );
  }

  updateItem(item:any) {

  }

  changeItemDone(e:any) {
    let index = e.target.value;
    if(e.target.checked)
    {
      this.items[index].done=true;
      this.itemService.updateItem(this.items[index]).subscribe(
        res => {
          this.loadProduits();
          this.items=this.itemsSource;
        }
      );
    }else{
      this.items[index].done=false;
      this.itemService.updateItem(this.items[index]).subscribe(
        res => {
          this.loadProduits();
          this.items=this.itemsSource;
        }
      );
    }
  }

  onFilterChange(e: any) {
    console.log(this.items)
    if(e.target.value=='1')
    {
      this.items=this.itemsSource.filter(i=>i.done===false);
    }
    else if(e.target.value=='2')
    {
      this.items=this.itemsSource.filter(i=>i.done===true);

    }
    else {
      this.items=this.itemsSource;
    }
  }
}
