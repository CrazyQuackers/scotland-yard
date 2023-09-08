import { Injectable } from '@angular/core';

import { Connection, TravelMethod } from './connection';
import { gameBoardMap } from './map';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {
  map: Map<number, Connection[]> = gameBoardMap;
}
