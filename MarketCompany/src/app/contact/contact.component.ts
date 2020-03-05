import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup;
  constructor(private contactservice:ContactService,  private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.contactForm = this.formBuilder.group({
       id:[''],
      name: ['', Validators.required],
      email: ['', [Validators.email]],
      phone: ['',Validators.required],
      subject: ['',Validators.required],
    });
  }
  saveFeedback()
  {
    this.contactservice.saveFeedback(this.contactForm.value).subscribe(data=>{
       alert('Feedback added Successfully.');
    });
}
}

