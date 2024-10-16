import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  clubs: any[] = [];
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  ngOnInit() {
  }


  leagues() {
    this.data.getLeagues().subscribe(clubs => {
      console.log(clubs);
    });
  }

  kluby() {
    this.data.getClubsByLeague('czech_first_league').subscribe(clubs => {
      console.log(clubs);
    });
  }

  hraci() {
    this.data.getClubsPlayers('czech_first_league', 'banik_ostrava').subscribe(clubs => {
      console.log(clubs);
    });
  }

  zapasy() {
    this.data.getMatches('czech_first_league').subscribe(clubs => {
      console.log(clubs);
    });
  }

}
