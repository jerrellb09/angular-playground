import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from './person';

const people: Person[] = [
  {
    firstName: 'john',
    lastName: 'doe',
    age: 50,
  },
  {
    firstName: 'Papa',
    lastName: 'John',
    age: 70,
  },
];

@Injectable()
export class PersonService {
  constructor() {}

  getPeoplePromise(): Promise<Person[]> {
    return new Promise((resolve) => {
      return resolve(people);
    });
  }

  getPeopleObservable(): Observable<Person[]> {
    return of(people);
  }
}
