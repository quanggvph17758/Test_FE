import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url = 'http://localhost:8080/test/upload/images';

  constructor(private http: HttpClient) { }

  uploadImage(image: any):Observable<any> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post(this.url, formData);
  }

}
