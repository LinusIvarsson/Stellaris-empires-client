import { CivicsUtils } from './../../../core/utils/civics-utils';
import { Component, OnInit } from '@angular/core';
import { ICivic } from 'src/app/core/models/ICivic';

@Component({
  selector: 'app-civics',
  templateUrl: './civics.component.html',
  styleUrls: ['./civics.component.scss']
})
export class CivicsComponent implements OnInit {
  availableCivics: ICivic[];
  constructor() {}

  ngOnInit() {
    this.availableCivics = CivicsUtils.getStandardEthics();
  }
}
