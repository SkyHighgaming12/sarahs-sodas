import { SodaService } from '../soda.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Soda } from '../types';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  sodaList: Observable<Soda[]>;

  constructor(SodaService : SodaService) {
    this.sodaList = SodaService.getAllSodas();
  }

}
