import { Injectable } from '@angular/core';

import { Connection, TravelMethod } from './connection';
import { board } from './map';

@Injectable({
  providedIn: 'root',
})
export class ConnectionsService {
  board: Map<number, Connection[]> = board;

  findPossibleLocations(
    locations: number[],
    travelMethods: TravelMethod[]
  ): number[] {
    const possibleLocations: number[] = [];

    locations.forEach((location) => {
      const connections: Connection[] | undefined = board.get(location);

      if (connections) {
        const possibleConnections: number[] = connections
          .filter((connection) =>
            travelMethods.includes(connection.travelMethod)
          )
          .map((connection) => connection.toPoint);

        possibleConnections.forEach((possibleConnection) => {
          if (!possibleLocations.includes(possibleConnection)) {
            possibleLocations.push(possibleConnection);
          }
        });
      }
    });

    return possibleLocations.sort((a, b) => a - b);
  }
}
