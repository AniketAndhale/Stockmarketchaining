import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from 'src/modals/User';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userService:UserserviceService) { }

  users:User[];

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data=>{
      this.users=data;
    })
  }

  deleteUser(user:User){
    this.userService.deleteUser(user.id).subscribe(data=>{
      alert('User Deleted successfully');
    })
  }

}
