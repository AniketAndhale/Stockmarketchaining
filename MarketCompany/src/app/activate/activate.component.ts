import { Component, OnInit, Inject } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
    msg;
  constructor(@Inject(UserserviceService) private ser) { }

  ngOnInit() {
    console.log("init");
    this.checkActivation()
  }
  checkActivation() {
    alert("hjkhk");
    var urlad=document.URL
    var strarr=urlad.split("?")
    var str=strarr[1]
    str=str.substring(0,str.length-1);
    this.ser.serActivation({email:str}).subscribe(dt=>{
      alert("jhkkj")
      console.log("in comp;;;;");
      if(dt.result==1){
        this.msg="Activation successful,Now you can login to the site and continue"
      }
      else{
        this.msg="Already activated,enjoy ...."
      }
    })
    throw new Error("Method not implemented.");
  }
}
