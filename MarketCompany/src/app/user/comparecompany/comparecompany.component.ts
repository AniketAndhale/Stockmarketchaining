import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComparecompanyService } from 'src/app/comparecompany.service';

@Component({
  selector: 'app-comparecompany',
  templateUrl: './comparecompany.component.html',
  styleUrls: ['./comparecompany.component.css']
})
export class ComparecompanyComponent implements OnInit {
comparecompanyForm:FormGroup;
  constructor(private comparecompanyservice:ComparecompanyService, private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.comparecompanyForm = this.formBuilder.group({
      id: ['', Validators.required],
       selectcompany: ['', Validators.required],
      selectstock: ['',Validators.required],
      companyname: ['',Validators.required],
      fperiod: ['', [Validators.required, Validators.email]],
      tperiod: ['', Validators.required]
    });
  }

    generateMap()
    {
      this.comparecompanyservice.saveCompareCompany(this.comparecompanyForm.value).subscribe(data=>{
        alert('Company added Successfully.');
      });
  }
}
