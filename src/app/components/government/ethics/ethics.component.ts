import { GovernmentService } from './../../../core/services/government.service';
import { Component, OnInit } from '@angular/core';
import { IEthic } from 'src/app/core/models/IEthic';
import { EthicStatus, EthicsUtils } from 'src/app/core/utils/ethics-utils';

@Component({
  selector: 'app-ethics',
  templateUrl: './ethics.component.html',
  styleUrls: ['./ethics.component.scss']
})
export class EthicsComponent implements OnInit {
  loaded: boolean;
  ethicStatus = EthicStatus;
  centerEthics: IEthic[];
  innerEthics: IEthic[];
  outerEthics: IEthic[];
  pickedEthicTypes: Set<Number> = new Set();
  activeEthics: IEthic[] = [];

  public constructor(private governmentService: GovernmentService) {}

  ngOnInit() {
    const allEthics = EthicsUtils.getEthics();
    this.centerEthics = allEthics.centerEthics;
    this.innerEthics = allEthics.innerEthics;
    this.outerEthics = allEthics.outerEthics;
    this.governmentService.activeEthics.subscribe(ethics => {
      this.activeEthics = ethics;
    });
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
      this.pickedEthicTypes.delete(ethic.typeId);

      this.activeEthics.splice(existingEthosIndex, 1);
      this.governmentService.activeEthics.next(this.activeEthics);
      // Make sure edicts total cost + new edict not costs more than 3
    } else {
      ethic.status = EthicStatus.active;
      this.pickedEthicTypes.add(ethic.typeId);
      this.governmentService.activeEthics.next([
        ...this.governmentService.activeEthics.getValue(),
        ethic
      ]);
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
  }

  getTotalEdictCost() {
    return this.activeEthics.reduce((acc, x: IEthic) => {
      return (acc += x.cost);
    }, 0);
  }
}
