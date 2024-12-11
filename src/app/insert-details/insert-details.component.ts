import { Component,OnInit,Input } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-details',
  templateUrl: './insert-details.component.html',
  styleUrls: ['./insert-details.component.css']
})

export class InsertDetailsComponent implements OnInit {
@Input() userData={Name:'',Age:0,Mark:0};
constructor(private service:MyServiceService, private router:Router){}

ngOnInit():void{

}

adduserdata():void{
  this.service.addWebApiTab(this.userData).subscribe((result)=>{
  this.router.navigate(['/AllDetails']);
  },(err)=>{
    console.log(err);
  });
}
}
