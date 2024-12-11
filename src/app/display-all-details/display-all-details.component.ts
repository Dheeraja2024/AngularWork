import { Component ,OnInit} from '@angular/core';
import { MyServiceService,tbl_User } from '../my-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display-all-details',
  templateUrl: './display-all-details.component.html',
  styleUrls: ['./display-all-details.component.css']
})
export class DisplayAllDetailsComponent implements OnInit {
//  creating array
Getdata:tbl_User[]=[];

constructor(public details:MyServiceService,private router:Router)
{

}

ngOnInit(): void {
  this.GetAllDetails();
}

GetAllDetails():void{
  this.details.getAllWebApiTabs().subscribe((resp:any)=> {});
}
}
