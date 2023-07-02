import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-to-string',
  templateUrl: './html-to-string.component.html',
  styleUrls: ['./html-to-string.component.css']
})
export class HtmlToStringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  GFG_Fun() {
          let up = document.getElementById('GFG_UP');
          let string = document.getElementsByTagName('html')[0].innerHTML;
          console.log(string);
        }
    

}
