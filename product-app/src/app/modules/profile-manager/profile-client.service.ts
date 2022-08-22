import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileClientService {
  constructor(private http: HttpClient) {}

  getProfile(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/profile`);
  }

  putProfile(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/profile`, {
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }
}
