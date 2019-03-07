import { Component, OnInit } from '@angular/core';
import { IEthic } from 'src/app/core/models/IEthic';
import { EthicUtils } from 'src/app/core/utils/ethic-utils';

@Component({
  selector: 'app-ethics',
  templateUrl: './ethics.component.html',
  styleUrls: ['./ethics.component.scss']
})
export class EthicsComponent implements OnInit {
  centerEthics: IEthic[];
  innerEthics: IEthic[];
  outerEthics: IEthic[];
  pickedEthicTypes: Set<Number> = new Set();
  activeEthics = [];

  ngOnInit() {
    const ethics = EthicUtils.getEthics();
    this.centerEthics = ethics.centerEthics;
    this.innerEthics = ethics.innerEthics;
    this.outerEthics = ethics.outerEthics;
  }

  click(ethic: IEthic) {
    if (this.activeEthics.find(ethicItem => ethicItem.name === ethic.name)) {
      this.activeEthics.splice(
        this.activeEthics.findIndex(ethicItem => ethicItem.name === ethic.name),
        1
      );
      this.pickedEthicTypes.delete(ethic.typeId);
    } else {
      if (
        this.activeEthics.find(ethicItem => ethicItem.typeId === ethic.typeId)
      ) {
        return;
      }
      this.activeEthics.push(ethic);
      this.pickedEthicTypes.add(ethic.typeId);
    }
  }

  isActive(ethic: string) {
    if (
      this.activeEthics.findIndex(ethicItem => ethicItem.name === ethic) > -1
    ) {
      return true;
    }

    return false;
  }

  isDisabled(ethic: string) {
    if (ethic === 'fanatic_authoritarian') {
      if (this.activeEthics.indexOf('fanatic_eqalitarian') > -1) {
        return true;
      }
    }
    return false;
  }
}
