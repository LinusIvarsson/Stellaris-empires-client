import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  activeEthics = [];

  click(ethic: string) {
    if (this.activeEthics.find(ethicItem => ethicItem === ethic)) {
      this.activeEthics.splice(this.activeEthics.indexOf(ethic), 1);
    } else {
      const disabled = this.isDisabled(ethic);
      if (!disabled) {
        this.activeEthics.push(ethic);
      }
    }
  }

  isActive(ethic: string) {
    if (this.activeEthics.indexOf(ethic) > -1) {
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
