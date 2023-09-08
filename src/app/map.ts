import { Connection, TravelMethod } from './connection';

export const gameBoardMap: Map<number, Connection[]> = new Map<number, Connection[]>([
  [
    1,
    [
      {
        toPoint: 8,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 9,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 58,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 46,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 46,
        travelMethod: TravelMethod.UNDERGROUND,
      },
    ],
  ],
  [
    2,
    [
      {
        toPoint: 20,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 10,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    3,
    [
      {
        toPoint: 4,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 12,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 11,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 22,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 23,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    4,
    [
      {
        toPoint: 3,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 13,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    5,
    [
      {
        toPoint: 15,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 16,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    6,
    [
      {
        toPoint: 7,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 29,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    7,
    [
      {
        toPoint: 6,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 17,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 42,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    8,
    [
      {
        toPoint: 1,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 18,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 19,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    9,
    [
      {
        toPoint: 1,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 19,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 20,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    10,
    [
      {
        toPoint: 2,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 21,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 34,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 11,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    11,
    [
      {
        toPoint: 3,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 10,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 22,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    12,
    [
      {
        toPoint: 3,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 23,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    13,
    [
      {
        toPoint: 4,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 23,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 24,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 23,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 14,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 52,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 46,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 67,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 89,
        travelMethod: TravelMethod.UNDERGROUND,
      },
    ],
  ],
  [
    14,
    [
      {
        toPoint: 15,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 25,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 15,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 13,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    15,
    [
      {
        toPoint: 5,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 16,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 28,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 26,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 14,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 14,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 29,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 41,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    16,
    [
      {
        toPoint: 5,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 15,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 28,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 29,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    17,
    [
      {
        toPoint: 7,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 29,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 30,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    18,
    [
      {
        toPoint: 8,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 31,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 43,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    19,
    [
      {
        toPoint: 8,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 9,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 32,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    20,
    [
      {
        toPoint: 9,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 2,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 33,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    21,
    [
      {
        toPoint: 10,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 33,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    22,
    [
      {
        toPoint: 11,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 34,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 35,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 23,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 3,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 34,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 65,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 23,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    23,
    [
      {
        toPoint: 12,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 22,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 37,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 13,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 3,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 22,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 13,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 67,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    24,
    [
      {
        toPoint: 13,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 37,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 38,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    25,
    [
      {
        toPoint: 14,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 39,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 38,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    26,
    [
      {
        toPoint: 15,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 27,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 39,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    27,
    [
      {
        toPoint: 26,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 28,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 40,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    28,
    [
      {
        toPoint: 15,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 16,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 27,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 41,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    29,
    [
      {
        toPoint: 41,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 16,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 6,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 17,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 42,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 15,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 41,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 55,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 42,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    30,
    [
      {
        toPoint: 17,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 42,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    31,
    [
      {
        toPoint: 18,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 43,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 44,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    32,
    [
      {
        toPoint: 19,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 44,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 33,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 45,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    33,
    [
      {
        toPoint: 20,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 21,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 32,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 46,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    34,
    [
      {
        toPoint: 10,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 47,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 22,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 48,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 46,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 22,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 63,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    35,
    [
      {
        toPoint: 22,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 36,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 48,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 65,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    36,
    [
      {
        toPoint: 35,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 37,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 49,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    37,
    [
      {
        toPoint: 36,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 23,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 24,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 50,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    38,
    [
      {
        toPoint: 24,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 25,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 50,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 51,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    39,
    [
      {
        toPoint: 25,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 26,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 52,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 51,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    40,
    [
      {
        toPoint: 27,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 52,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 53,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 41,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    41,
    [
      {
        toPoint: 28,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 40,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 54,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 29,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 15,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 52,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 87,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 29,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    42,
    [
      {
        toPoint: 29,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 30,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 56,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 72,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 7,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 29,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 72,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    43,
    [
      {
        toPoint: 18,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 31,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 57,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    44,
    [
      {
        toPoint: 31,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 32,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 58,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    45,
    [
      {
        toPoint: 32,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 58,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 59,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 60,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 46,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    46,
    [
      {
        toPoint: 33,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 45,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 61,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 47,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 1,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 58,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 78,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 34,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 1,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 74,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 79,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 13,
        travelMethod: TravelMethod.UNDERGROUND,
      },
    ],
  ],
  [
    47,
    [
      {
        toPoint: 46,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 62,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 34,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    48,
    [
      {
        toPoint: 34,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 62,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 63,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 35,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    49,
    [
      {
        toPoint: 36,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 50,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 66,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    50,
    [
      {
        toPoint: 37,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 38,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 49,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    51,
    [
      {
        toPoint: 38,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 39,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 52,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 68,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 67,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    52,
    [
      {
        toPoint: 39,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 40,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 69,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 51,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 14,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 67,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 86,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 41,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    53,
    [
      {
        toPoint: 69,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 40,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 54,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    54,
    [
      {
        toPoint: 41,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 53,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 70,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 55,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    55,
    [
      {
        toPoint: 54,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 71,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 29,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 89,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    56,
    [
      {
        toPoint: 42,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 91,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    57,
    [
      {
        toPoint: 43,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 73,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 58,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    58,
    [
      {
        toPoint: 57,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 44,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 45,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 74,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 75,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 59,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 1,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 46,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 74,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 77,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    59,
    [
      {
        toPoint: 58,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 45,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 75,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 76,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    60,
    [
      {
        toPoint: 45,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 76,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 61,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    61,
    [
      {
        toPoint: 46,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 60,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 76,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 62,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 78,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    62,
    [
      {
        toPoint: 47,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 61,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 79,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 48,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    63,
    [
      {
        toPoint: 48,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 79,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 64,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 80,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 34,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 79,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 100,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 65,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    64,
    [
      {
        toPoint: 63,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 65,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 81,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    65,
    [
      {
        toPoint: 35,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 64,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 82,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 66,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 22,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 63,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 82,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 67,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    66,
    [
      {
        toPoint: 49,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 65,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 67,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 82,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    67,
    [
      {
        toPoint: 66,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 51,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 68,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 84,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 23,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 65,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 82,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 102,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 52,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 13,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 79,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 111,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 89,
        travelMethod: TravelMethod.UNDERGROUND,
      },
    ],
  ],
  [
    68,
    [
      {
        toPoint: 51,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 69,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 67,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 85,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    69,
    [
      {
        toPoint: 52,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 53,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 68,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 86,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    70,
    [
      {
        toPoint: 54,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 71,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 87,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    71,
    [
      {
        toPoint: 70,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 55,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 72,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 89,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    72,
    [
      {
        toPoint: 71,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 42,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 90,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 91,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 42,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 105,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 107,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    73,
    [
      {
        toPoint: 57,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 74,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 92,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    74,
    [
      {
        toPoint: 73,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 92,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 58,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 75,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 94,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 58,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 46,
        travelMethod: TravelMethod.UNDERGROUND,
      },
    ],
  ],
  [
    75,
    [
      {
        toPoint: 74,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 58,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 59,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 94,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    76,
    [
      {
        toPoint: 59,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 60,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 61,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 77,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    77,
    [
      {
        toPoint: 76,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 95,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 78,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 96,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 58,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 94,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 124,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 78,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    78,
    [
      {
        toPoint: 61,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 77,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 97,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 79,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 77,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 46,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 79,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    79,
    [
      {
        toPoint: 62,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 78,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 98,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 63,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 78,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 63,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 46,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 93,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 111,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 67,
        travelMethod: TravelMethod.UNDERGROUND,
      },
    ],
  ],
  [
    80,
    [
      {
        toPoint: 63,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 99,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 100,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    81,
    [
      {
        toPoint: 64,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 82,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 100,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    82,
    [
      {
        toPoint: 65,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 81,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 101,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 66,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 65,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 100,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 140,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 67,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    83,
    [
      {
        toPoint: 101,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 102,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    84,
    [
      {
        toPoint: 67,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 85,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    85,
    [
      {
        toPoint: 68,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 84,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 103,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    86,
    [
      {
        toPoint: 69,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 103,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 104,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 52,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 102,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 116,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 87,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    87,
    [
      {
        toPoint: 70,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 88,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 41,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 86,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 105,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    88,
    [
      {
        toPoint: 87,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 89,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 117,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    89,
    [
      {
        toPoint: 88,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 71,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 105,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 55,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 105,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 13,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 67,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 140,
        travelMethod: TravelMethod.UNDERGROUND,
      },
      {
        toPoint: 128,
        travelMethod: TravelMethod.UNDERGROUND,
      },
    ],
  ],
  [
    90,
    [
      {
        toPoint: 72,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 91,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 105,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    91,
    [
      {
        toPoint: 56,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 72,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 90,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 105,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 107,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    92,
    [
      {
        toPoint: 73,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 93,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 74,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    93,
    [
      {
        toPoint: 92,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 94,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 94,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 79,
        travelMethod: TravelMethod.UNDERGROUND,
      },
    ],
  ],
  [
    94,
    [
      {
        toPoint: 93,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 75,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 95,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 93,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 74,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 77,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
  [
    95,
    [
      {
        toPoint: 94,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 77,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 122,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    96,
    [
      {
        toPoint: 77,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 97,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 109,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    97,
    [
      {
        toPoint: 78,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 96,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 109,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 98,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    98,
    [
      {
        toPoint: 79,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 97,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 110,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 99,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    99,
    [
      {
        toPoint: 98,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 80,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 110,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 112,
        travelMethod: TravelMethod.TAXI,
      },
    ],
  ],
  [
    100,
    [
      {
        toPoint: 80,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 81,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 112,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 113,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 101,
        travelMethod: TravelMethod.TAXI,
      },
      {
        toPoint: 82,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 63,
        travelMethod: TravelMethod.BUS,
      },
      {
        toPoint: 111,
        travelMethod: TravelMethod.BUS,
      },
    ],
  ],
]);
