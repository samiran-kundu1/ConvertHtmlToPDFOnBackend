import { Component, OnInit } from '@angular/core';
import { NewTestService } from '../new-test.service';

@Component({
  selector: 'app-new-test-component',
  templateUrl: './new-test-component.component.html',
  styleUrls: ['./new-test-component.component.css']
})
export class NewTestComponentComponent implements OnInit {

  constructor(ntestService:NewTestService) { }

  ngOnInit(): void {
  }

}
