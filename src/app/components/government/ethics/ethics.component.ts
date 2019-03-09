import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEthic } from 'src/app/core/models/IEthic';
import { EthicStatus, EthicUtils } from 'src/app/core/utils/ethics-utils';

@Component({
  selector: 'app-ethics',
  templateUrl: './ethics.component.html',
  styleUrls: ['./ethics.component.scss']
})
export class EthicsComponent implements OnInit {
  @Output() ethicChanged: EventEmitter<IEthic[]> = new EventEmitter<IEthic[]>();
  loaded: boolean;
  ethicStatus = EthicStatus;
  centerEthics: IEthic[];
  innerEthics: IEthic[];
  outerEthics: IEthic[];
  pickedEthicTypes: Set<Number> = new Set();
  activeEthics: IEthic[] = [];

  ngOnInit() {
    const ethics = EthicUtils.getEthics();
    this.centerEthics = ethics.centerEthics;
    this.innerEthics = ethics.innerEthics;
    this.outerEthics = ethics.outerEthics;
  }

  click(ethic: IEthic) {
    if (ethic.status === EthicStatus.disabled) {
      return;
    }
    // Check is user is removing an already added item
    const existingEthosIndex = this.activeEthics.findIndex(
      ethicItem => ethicItem.name === ethic.name
    );
    // Remove already added itenm
    if (existingEthosIndex > -1) {
      ethic.status = EthicStatus.available;
      this.activeEthics.splice(existingEthosIndex, 1);
      this.pickedEthicTypes.delete(ethic.typeId);
      // Make sure edicts total cost + new edict not costs more than 3
    } else {
      this.activeEthics.push(ethic);
      ethic.status = EthicStatus.active;
      this.pickedEthicTypes.add(ethic.typeId);
    }

    // Loop all ethics to manage status changes based on user input
    const allEthics = [
      ...this.centerEthics,
      ...this.innerEthics,
      ...this.outerEthics
    ];
    for (const currentEthic of allEthics) {
      if (
        this.pickedEthicTypes.has(currentEthic.typeId) &&
        currentEthic.status !== EthicStatus.active
      ) {
        currentEthic.status = EthicStatus.disabled;
      } else if (currentEthic.status === EthicStatus.active) {
        continue;
      } else {
        if (this.getTotalEdictCost() + currentEthic.cost > 3) {
          currentEthic.status = EthicStatus.disabled;
        } else {
          currentEthic.status = EthicStatus.available;
        }
      }
    }
    this.ethicChanged.emit(this.activeEthics);
  }

  getTotalEdictCost() {
    return this.activeEthics.reduce((acc, x: IEthic) => {
      return (acc += x.cost);
    }, 0);
  }
}
