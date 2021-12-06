import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] | undefined;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
  viewUser(id: number) {
    this.router.navigate(['/user/detail', id]);
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.reloadData();
        },
        (error: any) => console.log(error));
  }

}
