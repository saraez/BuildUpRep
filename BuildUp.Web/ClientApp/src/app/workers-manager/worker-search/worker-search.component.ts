import { Component, OnInit } from '@angular/core';
import { Worker } from "../../models/worker.model"


@Component({
  selector: 'app-worker-search',
  templateUrl: './worker-search.component.html',
  styleUrls: ['./worker-search.component.scss']
})
export class WorkerSearchComponent implements OnInit {

  workers: Worker[] = [
    {id: 1, firstName: "אחמד", lastName: "בן סעיד", nickName: "מוחמד", imgUrl: "images111.jpg", phone: "057-6543212"},
    {id: 1, firstName: "אבו עלא", lastName: "בן סעיד", nickName: "מוחמד", imgUrl: "images111.jpg", phone: "057-6543212"},
    {id: 1, firstName: "נאסר", lastName: "בן סעיד", nickName: "מוחמד", imgUrl: "images111.jpg", phone: "057-6543212"},
    {id: 1, firstName: "מחמוד", lastName: "בן סעיד", nickName: "מוחמד", imgUrl: "images111.jpg", phone: "057-6543212"},
    {id: 1, firstName: "אחמד", lastName: "בן סעיד", nickName: "מוחמד", imgUrl: "images111.jpg", phone: "057-6543212"},
    {id: 1, firstName: "אבו עלא", lastName: "בן סעיד", nickName: "מוחמד", imgUrl: "images111.jpg", phone: "057-6543212"},
    {id: 1, firstName: "נאסר", lastName: "בן סעיד", nickName: "מוחמד", imgUrl: "images111.jpg", phone: "057-6543212"},
    {id: 1, firstName: "מחמוד", lastName: "בן סעיד", nickName: "מוחמד", imgUrl: "images111.jpg", phone: "057-6543212"},
    
  ]


  constructor() { }

  ngOnInit() {
  }

}
