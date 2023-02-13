import { Component, OnInit } from '@angular/core';
import { user } from './user';

@Component({
  selector: 'app-bind-data-to-usermodel',
  templateUrl: './bind-data-to-usermodel.component.html',
  styleUrls: ['./bind-data-to-usermodel.component.css']
})
export class BindDataToUsermodelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userModel = new user('RSK', 'vamsi@gmail.com', 'Developer', '', true );
  course =  ['Angular', 'Java', 'Pega', 'Inside sales', "React JS", "Devops", "Mulesoft", "Javascript" ]

  // employee: any = [
  //   { name : "Vamsi",
  //     Designation:"Angular developer",
  //     age: 23
  // },
  // { name : "Ram",
  //     Designation:"Java developer",
  //     age: 24
  // },
  // { name : "Ganesh",
  //     Designation:"Automation Testing",
  //     age: 23
  // },
  // { name : "Navaz",
  //     Designation:"Python developer",
  //     age: 25
  // }
  // ]
  
  //   result = this.employee.filter((value:any) => {
  //     return value.age < 24;
  //   })
    
  //   demo = this.result.innerHTML

  // finally  = this.result.value;

  // finally = document.getElementById("demo");

         

}
