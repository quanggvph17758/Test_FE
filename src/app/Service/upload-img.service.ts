import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {

  url = 'http://localhost:8080/test/upload/images';

  constructor(private http: HttpClient) { }

  uploadFile(uploadFile: any): Observable<any> {

    return this.http.post(this.url, uploadFile);
  }
}
