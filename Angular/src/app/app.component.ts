import { Component } from '@angular/core';
//import {FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {TODO} from "./Todo";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProjectHitesh';
  date = new Date();
  todoValue:string;
  list:TODO[];
  isDisabled:boolean =true;
  constructor(private http: HttpClient) { }

  ngOnInit()
  {
    this.list = [];
    this.todoValue="";
  }

  addItem()
  {
    if (this.todoValue !=="")
    {
      const newItem:TODO = {
        id:Date.now(),
        value:this.todoValue,
        isDone:false 
      };
      this.list.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem(id:number)
  {
    this.list = this.list.filter(item=> item.id!==id);
  }

  Oncheck()
  {
    console.log("Its checked",this.isDisabled);
    this.isDisabled = false;
  }

  GFG_Fun() {
    let up = document.getElementById('PrintPDF')?.textContent;
    if (up == null)
    {
      up = "test"
    } 
    let string = document.getElementsByTagName('html')[0].innerText
    let base64String = window.btoa(up);//innerHTML;
    //alert(string);
    console.log("up:",up,"upbase64:",base64String)
    this.http.get('https://localhost:44391/Home/ConvertToPdf/?base64String=' + base64String ).subscribe();
    alert(base64String);
    

  }
}
