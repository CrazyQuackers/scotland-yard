import { TestBed } from '@angular/core/testing';

import { ConnectionsService } from './connections.service';
import { Connection, TravelMethod, travelMethodName } from './connection';

describe('ConnectionsService', () => {
  let service: ConnectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('board should be correct', () => {
    const board = service.board;
    let errors: string = '';

    for (let fromPoint = 1; fromPoint <= 199; fromPoint++) {
      const connections: Connection[] | undefined = board.get(fromPoint);

      if (connections) {
        connections.forEach((connection) => {
          const toPoint: number = connection.toPoint;
          const travelMethod: TravelMethod = connection.travelMethod;
          const backwardsConnections: Connection[] | undefined =
            board.get(toPoint);

          if (backwardsConnections) {
            const backwardConnection: Connection | undefined =
              backwardsConnections.find(
                (connection) =>
                  connection.toPoint === fromPoint &&
                  connection.travelMethod === travelMethod
              );

            if (!backwardConnection) {
              errors += `\nNo backward connection found for connection: ${fromPoint} -> ${toPoint} using ${travelMethodName(
                travelMethod
              )}`;
            }
          }
        });
      } else {
        errors += `\nNo point ${fromPoint}`;
      }
    }

    if (errors !== '') {
      errors += '\n';
    }

    expect(errors).toEqual('');
  });
});
