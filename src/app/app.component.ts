import { Component } from '@angular/core';

import { ConnectionsService } from './connections.service';
import { TravelMethod } from './connection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private connectionsService: ConnectionsService) {}

  positionInput: string = '';
  position: number = 0;
  locations: number[] = [];

  reset(): void {
    this.position = 0;
    this.locations = [];
    this.positionInput = '';
  }

  newPosition(): void {
    const position: number = parseInt(this.positionInput);

    if (position) {
      if (position >= 1 && position <= 199) {
        if (this.position === 0 || this.locations.includes(position)) {
          this.positionInput = '';
          this.position = position;
          this.locations = [position];
        } else {
          alert('Position needs to be one of the possible locations!');
        }
      } else {
        alert('Position needs to be between 1 and 199!');
      }
    } else {
      alert('Position needs to be a number!');
    }
  }

  taxi(): void {
    this.travel([TravelMethod.TAXI], "Mr. X couldn't have taken a Taxi!");
  }

  bus(): void {
    this.travel([TravelMethod.BUS], "Mr. X couldn't have taken a Bus!");
  }

  underground(): void {
    this.travel([TravelMethod.UNDERGROUND], "Mr. X couldn't have taken an Underground!");
  }

  secret(): void {
    this.travel([TravelMethod.TAXI, TravelMethod.BUS, TravelMethod.UNDERGROUND, TravelMethod.FERRY]);
  }

  travel(
    travelMethods: TravelMethod[],
    errorMessage: string = 'Something went wrong...'
  ): void {
    const locations: number[] = this.connectionsService.findPossibleLocations(
      this.locations,
      travelMethods
    );

    if (locations.length > 0) {
      this.locations = locations;
    } else {
      alert(errorMessage);
    }
  }
}
