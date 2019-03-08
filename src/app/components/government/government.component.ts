import { Component, OnInit } from '@angular/core';
import { IEthic } from 'src/app/core/models/IEthic';

@Component({
  selector: 'app-government',
  templateUrl: './government.component.html',
  styleUrls: ['./government.component.scss']
})
export class GovernmentComponent implements OnInit {
  activeEthics: IEthic[] = [];
  constructor() {}

  ngOnInit() {}

  ethicsChanged(activeEthics: IEthic[]) {
    this.activeEthics = activeEthics;
  }
}
