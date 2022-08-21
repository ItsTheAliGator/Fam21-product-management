import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/uset';
import { ProfileClientService } from './profile-client.service';

@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html',
  styleUrls: ['./profile-manager.component.scss']
})
export class ProfileManagerComponent implements OnInit {
  model = new User();

  constructor(private profileClient: ProfileClientService) { }

  ngOnInit(): void {
    this.profileClient.getProfile().subscribe(user => this.model = user)
  }

  onSubmit(form: any) {
    console.log(form.value);
  }

}
