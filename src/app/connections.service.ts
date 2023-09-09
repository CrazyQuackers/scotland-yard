import { Injectable } from '@angular/core';

import { Connection, TravelMethod } from './connection';
import { board } from './map';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {
  board: Map<number, Connection[]> = board;
}
