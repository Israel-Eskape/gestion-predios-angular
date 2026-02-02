import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Predio } from '../../features/predios/models/predio.model';

@Injectable({
  providedIn: 'root'
})
export class PrediosService {

  private apiUrl = 'http://localhost:3000/predios'; 

  private refreshSginal = signal(0);


  constructor(private http: HttpClient) {}

  get RefreshSignal(){
    return this.refreshSginal;
  }
  triggerRefreshSignal(){
    this.refreshSginal.update(v => v + 1);
  }

  getAll(): Observable<Predio[]> {
    return this.http.get<Predio[]>(this.apiUrl);
  }

  create(predio: Predio): Observable<Predio> {
    return this.http.post<Predio>(this.apiUrl, predio);
  }

  update(id: number, predio: Predio): Observable<Predio> {
    return this.http.put<Predio>(`${this.apiUrl}/${id}`, predio);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
