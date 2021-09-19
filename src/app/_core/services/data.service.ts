import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

let DOMAIN = '';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
    DOMAIN = environment.DOMAIN;
  }

  //example uri= QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom
  //get api
  get(uri: any): Observable<any> {
    const url = `${DOMAIN}/${uri}`;
    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }
  //post api
  post(uri: any, data: any): Observable<any> {
    const url = `${DOMAIN}/${uri}`;
    return this.http.post(url, data).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  // hàm báo lỗi
  handleError(error: any) {
    switch (error.status) {
      case 300:
        break;

      case 401:
        alert('Bạn không có quyền thêm');
        break;

      case 500:
        alert(error.error);
        break;

      default:
        break;
    }
    return throwError(error);
  }
}
