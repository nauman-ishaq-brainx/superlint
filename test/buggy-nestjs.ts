/* eslint-disable */
/**
 * Buggy NestJS Test File
 * This file intentionally violates NestJS-specific linting rules
 */

import { Controller, Get, Post, Injectable, Module } from '@nestjs/common';

// ❌ Missing @Injectable() decorator on service class
class BadService {
  getData() {
    return 'data';
  }
}

// ❌ Controller missing proper decorators and JSDoc
@Controller()
class BadController {
  constructor(private service: BadService) {}

  // ❌ Missing HTTP method decorator
  getStuff() {
    return this.service.getData();
  }

  // ❌ Incorrect HTTP decorator usage
  @Get('/users/:id')
  async getUserById(id: string) {
    // ❌ Missing parameter decorator
    return { id };
  }

  // ❌ Not returning proper types
  @Post()
  createSomething(data: any) {
    // ❌ Using 'any' type
    return data;
  }
}

// ❌ Module not properly configured
@Module({
  controllers: [],
  providers: []
})
class EmptyModule {}

// ❌ Service without dependency injection
@Injectable()
export class ServiceWithoutConstructor {
  private readonly data = [];

  getData() {
    return this.data;
  }

  // ❌ Not using proper async/await
  fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });
  }
}

// ❌ Controller with improper error handling
@Controller('items')
export class ItemsController {
  @Get()
  getItems() {
    throw 'Error occurred'; // ❌ Throwing string instead of Error object
  }

  @Post()
  async createItem(data: any): Promise<any> {
    // ❌ Using any types
    // ❌ Not validating input
    return data;
  }
}

// ❌ Missing proper type definitions
@Injectable()
export class TypeUnsafeService {
  items: any[] = []; // ❌ Using any[]

  addItem(item: any) {
    // ❌ Using any
    this.items.push(item);
  }

  getItem(id) {
    // ❌ Missing type annotation
    return this.items.find((i) => i.id === id);
  }
}

// ❌ Circular dependency risk
@Injectable()
export class ServiceA {
  constructor(private serviceB: ServiceB) {}

  doSomething() {
    return this.serviceB.doOtherThing();
  }
}

@Injectable()
export class ServiceB {
  constructor(private serviceA: ServiceA) {} // ❌ Circular dependency

  doOtherThing() {
    return this.serviceA.doSomething();
  }
}

