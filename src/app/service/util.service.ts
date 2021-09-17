import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  subject = new Subject<number>();

  constructor() { }
  sendGameMode(message: number) {
    this.subject.next(message);
  }
  clearMessages() {
    this.subject.next();
  }

  getGameMode(): Observable<number> {
    return this.subject.asObservable();
  }

}
