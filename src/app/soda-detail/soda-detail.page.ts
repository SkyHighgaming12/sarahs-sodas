import { SodaService } from './../soda.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Soda } from '../types';
import { ActivatedRoute } from '@angular/router';
import { SocialSharing } from "@ionic-native/social-sharing/ngx"


@Component({
  selector: 'app-soda-detail',
  templateUrl: './soda-detail.page.html',
  styleUrls: ['./soda-detail.page.scss'],
})
export class SodaDetailPage implements OnInit {
  sodaDetail: Observable<Soda>;
  constructor(
    private _socialSharing: SocialSharing,
    sodaService: SodaService,
    activatedRoute: ActivatedRoute
    ) {
      const sodaID = activatedRoute.snapshot.params["sodaID"];
      this.sodaDetail = sodaService.getSoda(sodaID);
      console.log(sodaID);
     }

  ngOnInit() {
  }
  share(){
    this.sodaDetail.subscribe((soda)=>{
      this._socialSharing.share("LOOK What I found!", soda.name, "", soda.image);
    });
  }

}
