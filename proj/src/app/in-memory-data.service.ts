import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
		   new User(0,'User0', 'pass'),
		   new User(1,'User1', 'pass'),
		   new User(2,'User2', 'pass'),
		   new User(3,'User3', 'pass'),
		   new User(4,'User4', 'pass'),
		   new User(5,'User5', 'pass'),
		   new User(6,'User6', 'pass'),
		   new User(7,'User7', 'pass'),
		   new User(8,'User8', 'pass'),
		   new User(9,'User9', 'pass'),
		   new User(10,'User10', 'pass')
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a user always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // user id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}