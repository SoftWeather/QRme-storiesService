import {
  Type,
  DynamicModule,
  ForwardReference,
  Abstract,
  Provider,
} from '@nestjs/common';

export namespace NestjsRepository {
  export type Import =
    | Type<any>
    | DynamicModule
    | Promise<DynamicModule>
    | ForwardReference<any>;

  export type Export =
    | DynamicModule
    | Promise<DynamicModule>
    | string
    | symbol
    | Provider
    | ForwardReference
    | Abstract<any>;
}
