import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PlayerType } from '../evolutionOfTrust/enum/PlayerTypes';

@Injectable({
  providedIn: 'root'
})
export class PlayerSubjectService {

  subject = new Subject<Map<PlayerType, number>>();

  constructor() { }


  sendMessage(message: Map<PlayerType, number>) {
    this.subject.next(message);
  }
  clearMessages() {
    this.subject.next();
  }

  getMessage(): Observable<Map<PlayerType, number>> {
    return this.subject.asObservable();
  }
}
