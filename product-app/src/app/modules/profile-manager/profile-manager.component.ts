import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ProfileClientService } from './profile-client.service';

@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html',
  styleUrls: ['./profile-manager.component.scss'],
})
export class ProfileManagerComponent implements OnInit {
  userModel = new User();

  constructor(
    private profileClient: ProfileClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileClient
      .getProfile()
      .subscribe((user) => (this.userModel = user));
  }

  onSubmit() {
    this.profileClient
      .putProfile(this.userModel)
      .subscribe(user => this.router.navigate(['/login']));
  }
}
