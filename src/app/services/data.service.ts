import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private firestore: AngularFirestore) {}

  allDocuments: any[] = [];

  getLeagues(): Observable<any[]> {
    return this.firestore
      .collection(`fotbal`)
      .valueChanges({ idField: 'id' });
  }

  getClubsByLeague(league:string): Observable<any[]> {
    return this.firestore
      .collection(`fotbal/${league}/clubs`)
      .valueChanges({ idField: 'id' });
  }

  getClubsPlayers(league:string, clubid: string): Observable<any[]> {
    return this.firestore
      .collection(`fotbal/${league}/clubs/${clubid}/players`)
      .valueChanges({ idField: 'id' });
  }

  getMatches(league:string): Observable<any[]> {
    return this.firestore
      .collection(`fotbal/${league}/matches`)
      .valueChanges({ idField: 'id' });
  }

}
