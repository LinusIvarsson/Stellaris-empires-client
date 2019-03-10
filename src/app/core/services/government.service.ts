import { IAuthority } from './../models/IAuthority';
import { ICivic } from './../models/ICivic';
import { IEthic } from '../models/IEthic';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GovernmentService {
  public activeCivics: BehaviorSubject<ICivic[]> = new BehaviorSubject<
    ICivic[]
  >([]);
  public activeEthics: BehaviorSubject<IEthic[]> = new BehaviorSubject<
    IEthic[]
  >([]);
  public activeAuthority: BehaviorSubject<IAuthority> = new BehaviorSubject<
    IAuthority
  >(undefined);
  constructor() {}
}
