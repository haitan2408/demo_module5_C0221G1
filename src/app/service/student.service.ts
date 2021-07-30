import {Injectable} from '@angular/core';
import {Student} from "../model/student";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public api_url ="http://localhost:3000/student"


  constructor(private http: HttpClient) {
  }

  createStudent(value: any): Observable<any> {
    return this.http.post(this.api_url, value);
  }
  findAll():Observable<any> {
    return this.http.get(this.api_url);
  }

  findById(id: number) {
  }

  search(textSearch: string): Observable<any> {
    return this.http.get(this.api_url+"?name_like="+textSearch)
  }
}
