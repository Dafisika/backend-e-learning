
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tutor
 * 
 */
export type Tutor = $Result.DefaultSelection<Prisma.$TutorPayload>
/**
 * Model Category_Class
 * 
 */
export type Category_Class = $Result.DefaultSelection<Prisma.$Category_ClassPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model My_Class
 * 
 */
export type My_Class = $Result.DefaultSelection<Prisma.$My_ClassPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Summary
 * 
 */
export type Summary = $Result.DefaultSelection<Prisma.$SummaryPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Quiz_Item
 * 
 */
export type Quiz_Item = $Result.DefaultSelection<Prisma.$Quiz_ItemPayload>
/**
 * Model Option_Quiz
 * 
 */
export type Option_Quiz = $Result.DefaultSelection<Prisma.$Option_QuizPayload>
/**
 * Model Answered_Quiz
 * 
 */
export type Answered_Quiz = $Result.DefaultSelection<Prisma.$Answered_QuizPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ModuleType: {
  video: 'video',
  summary: 'summary',
  quiz: 'quiz'
};

export type ModuleType = (typeof ModuleType)[keyof typeof ModuleType]


export const QuizType: {
  pretest: 'pretest',
  quiz: 'quiz',
  final_test: 'final_test'
};

export type QuizType = (typeof QuizType)[keyof typeof QuizType]

}

export type ModuleType = $Enums.ModuleType

export const ModuleType: typeof $Enums.ModuleType

export type QuizType = $Enums.QuizType

export const QuizType: typeof $Enums.QuizType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutor`: Exposes CRUD operations for the **Tutor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tutors
    * const tutors = await prisma.tutor.findMany()
    * ```
    */
  get tutor(): Prisma.TutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category_Class`: Exposes CRUD operations for the **Category_Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Category_Classes
    * const category_Classes = await prisma.category_Class.findMany()
    * ```
    */
  get category_Class(): Prisma.Category_ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.my_Class`: Exposes CRUD operations for the **My_Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more My_Classes
    * const my_Classes = await prisma.my_Class.findMany()
    * ```
    */
  get my_Class(): Prisma.My_ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.summary`: Exposes CRUD operations for the **Summary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Summaries
    * const summaries = await prisma.summary.findMany()
    * ```
    */
  get summary(): Prisma.SummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz_Item`: Exposes CRUD operations for the **Quiz_Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quiz_Items
    * const quiz_Items = await prisma.quiz_Item.findMany()
    * ```
    */
  get quiz_Item(): Prisma.Quiz_ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.option_Quiz`: Exposes CRUD operations for the **Option_Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Option_Quizs
    * const option_Quizs = await prisma.option_Quiz.findMany()
    * ```
    */
  get option_Quiz(): Prisma.Option_QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answered_Quiz`: Exposes CRUD operations for the **Answered_Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answered_Quizs
    * const answered_Quizs = await prisma.answered_Quiz.findMany()
    * ```
    */
  get answered_Quiz(): Prisma.Answered_QuizDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tutor: 'Tutor',
    Category_Class: 'Category_Class',
    Class: 'Class',
    My_Class: 'My_Class',
    Payment: 'Payment',
    Order: 'Order',
    Module: 'Module',
    Video: 'Video',
    Summary: 'Summary',
    Quiz: 'Quiz',
    Quiz_Item: 'Quiz_Item',
    Option_Quiz: 'Option_Quiz',
    Answered_Quiz: 'Answered_Quiz'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tutor" | "category_Class" | "class" | "my_Class" | "payment" | "order" | "module" | "video" | "summary" | "quiz" | "quiz_Item" | "option_Quiz" | "answered_Quiz"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tutor: {
        payload: Prisma.$TutorPayload<ExtArgs>
        fields: Prisma.TutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          findFirst: {
            args: Prisma.TutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          findMany: {
            args: Prisma.TutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>[]
          }
          create: {
            args: Prisma.TutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          createMany: {
            args: Prisma.TutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          update: {
            args: Prisma.TutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          deleteMany: {
            args: Prisma.TutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          aggregate: {
            args: Prisma.TutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutor>
          }
          groupBy: {
            args: Prisma.TutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorCountArgs<ExtArgs>
            result: $Utils.Optional<TutorCountAggregateOutputType> | number
          }
        }
      }
      Category_Class: {
        payload: Prisma.$Category_ClassPayload<ExtArgs>
        fields: Prisma.Category_ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Category_ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Category_ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_ClassPayload>
          }
          findFirst: {
            args: Prisma.Category_ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Category_ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_ClassPayload>
          }
          findMany: {
            args: Prisma.Category_ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_ClassPayload>[]
          }
          create: {
            args: Prisma.Category_ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_ClassPayload>
          }
          createMany: {
            args: Prisma.Category_ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Category_ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_ClassPayload>
          }
          update: {
            args: Prisma.Category_ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_ClassPayload>
          }
          deleteMany: {
            args: Prisma.Category_ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Category_ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Category_ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_ClassPayload>
          }
          aggregate: {
            args: Prisma.Category_ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory_Class>
          }
          groupBy: {
            args: Prisma.Category_ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<Category_ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.Category_ClassCountArgs<ExtArgs>
            result: $Utils.Optional<Category_ClassCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      My_Class: {
        payload: Prisma.$My_ClassPayload<ExtArgs>
        fields: Prisma.My_ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.My_ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.My_ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ClassPayload>
          }
          findFirst: {
            args: Prisma.My_ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.My_ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ClassPayload>
          }
          findMany: {
            args: Prisma.My_ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ClassPayload>[]
          }
          create: {
            args: Prisma.My_ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ClassPayload>
          }
          createMany: {
            args: Prisma.My_ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.My_ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ClassPayload>
          }
          update: {
            args: Prisma.My_ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ClassPayload>
          }
          deleteMany: {
            args: Prisma.My_ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.My_ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.My_ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$My_ClassPayload>
          }
          aggregate: {
            args: Prisma.My_ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMy_Class>
          }
          groupBy: {
            args: Prisma.My_ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<My_ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.My_ClassCountArgs<ExtArgs>
            result: $Utils.Optional<My_ClassCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Summary: {
        payload: Prisma.$SummaryPayload<ExtArgs>
        fields: Prisma.SummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          findFirst: {
            args: Prisma.SummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          findMany: {
            args: Prisma.SummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>[]
          }
          create: {
            args: Prisma.SummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          createMany: {
            args: Prisma.SummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          update: {
            args: Prisma.SummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          deleteMany: {
            args: Prisma.SummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          aggregate: {
            args: Prisma.SummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSummary>
          }
          groupBy: {
            args: Prisma.SummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SummaryCountArgs<ExtArgs>
            result: $Utils.Optional<SummaryCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Quiz_Item: {
        payload: Prisma.$Quiz_ItemPayload<ExtArgs>
        fields: Prisma.Quiz_ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Quiz_ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Quiz_ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_ItemPayload>
          }
          findFirst: {
            args: Prisma.Quiz_ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Quiz_ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_ItemPayload>
          }
          findMany: {
            args: Prisma.Quiz_ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_ItemPayload>[]
          }
          create: {
            args: Prisma.Quiz_ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_ItemPayload>
          }
          createMany: {
            args: Prisma.Quiz_ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Quiz_ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_ItemPayload>
          }
          update: {
            args: Prisma.Quiz_ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_ItemPayload>
          }
          deleteMany: {
            args: Prisma.Quiz_ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Quiz_ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Quiz_ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Quiz_ItemPayload>
          }
          aggregate: {
            args: Prisma.Quiz_ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz_Item>
          }
          groupBy: {
            args: Prisma.Quiz_ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Quiz_ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.Quiz_ItemCountArgs<ExtArgs>
            result: $Utils.Optional<Quiz_ItemCountAggregateOutputType> | number
          }
        }
      }
      Option_Quiz: {
        payload: Prisma.$Option_QuizPayload<ExtArgs>
        fields: Prisma.Option_QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Option_QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Option_QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Option_QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Option_QuizPayload>
          }
          findFirst: {
            args: Prisma.Option_QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Option_QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Option_QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Option_QuizPayload>
          }
          findMany: {
            args: Prisma.Option_QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Option_QuizPayload>[]
          }
          create: {
            args: Prisma.Option_QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Option_QuizPayload>
          }
          createMany: {
            args: Prisma.Option_QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Option_QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Option_QuizPayload>
          }
          update: {
            args: Prisma.Option_QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Option_QuizPayload>
          }
          deleteMany: {
            args: Prisma.Option_QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Option_QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Option_QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Option_QuizPayload>
          }
          aggregate: {
            args: Prisma.Option_QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption_Quiz>
          }
          groupBy: {
            args: Prisma.Option_QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<Option_QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.Option_QuizCountArgs<ExtArgs>
            result: $Utils.Optional<Option_QuizCountAggregateOutputType> | number
          }
        }
      }
      Answered_Quiz: {
        payload: Prisma.$Answered_QuizPayload<ExtArgs>
        fields: Prisma.Answered_QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Answered_QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Answered_QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Answered_QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Answered_QuizPayload>
          }
          findFirst: {
            args: Prisma.Answered_QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Answered_QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Answered_QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Answered_QuizPayload>
          }
          findMany: {
            args: Prisma.Answered_QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Answered_QuizPayload>[]
          }
          create: {
            args: Prisma.Answered_QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Answered_QuizPayload>
          }
          createMany: {
            args: Prisma.Answered_QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Answered_QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Answered_QuizPayload>
          }
          update: {
            args: Prisma.Answered_QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Answered_QuizPayload>
          }
          deleteMany: {
            args: Prisma.Answered_QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Answered_QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Answered_QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Answered_QuizPayload>
          }
          aggregate: {
            args: Prisma.Answered_QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswered_Quiz>
          }
          groupBy: {
            args: Prisma.Answered_QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<Answered_QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.Answered_QuizCountArgs<ExtArgs>
            result: $Utils.Optional<Answered_QuizCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tutor?: TutorOmit
    category_Class?: Category_ClassOmit
    class?: ClassOmit
    my_Class?: My_ClassOmit
    payment?: PaymentOmit
    order?: OrderOmit
    module?: ModuleOmit
    video?: VideoOmit
    summary?: SummaryOmit
    quiz?: QuizOmit
    quiz_Item?: Quiz_ItemOmit
    option_Quiz?: Option_QuizOmit
    answered_Quiz?: Answered_QuizOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    answeredQuiz: number
    myClass: number
    payment: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answeredQuiz?: boolean | UserCountOutputTypeCountAnsweredQuizArgs
    myClass?: boolean | UserCountOutputTypeCountMyClassArgs
    payment?: boolean | UserCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnsweredQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Answered_QuizWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMyClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: My_ClassWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type TutorCountOutputType
   */

  export type TutorCountOutputType = {
    class: number
  }

  export type TutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | TutorCountOutputTypeCountClassArgs
  }

  // Custom InputTypes
  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCountOutputType
     */
    select?: TutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeCountClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Count Type Category_ClassCountOutputType
   */

  export type Category_ClassCountOutputType = {
    class: number
  }

  export type Category_ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | Category_ClassCountOutputTypeCountClassArgs
  }

  // Custom InputTypes
  /**
   * Category_ClassCountOutputType without action
   */
  export type Category_ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_ClassCountOutputType
     */
    select?: Category_ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Category_ClassCountOutputType without action
   */
  export type Category_ClassCountOutputTypeCountClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    module: number
    myClass: number
    order: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ClassCountOutputTypeCountModuleArgs
    myClass?: boolean | ClassCountOutputTypeCountMyClassArgs
    order?: boolean | ClassCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountMyClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: My_ClassWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    order: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | PaymentCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    video: number
    quiz: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | ModuleCountOutputTypeCountVideoArgs
    quiz?: boolean | ModuleCountOutputTypeCountQuizArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountVideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    quiz: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizCountOutputTypeCountQuizArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Quiz_ItemWhereInput
  }


  /**
   * Count Type Quiz_ItemCountOutputType
   */

  export type Quiz_ItemCountOutputType = {
    optionQuiz: number
  }

  export type Quiz_ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    optionQuiz?: boolean | Quiz_ItemCountOutputTypeCountOptionQuizArgs
  }

  // Custom InputTypes
  /**
   * Quiz_ItemCountOutputType without action
   */
  export type Quiz_ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_ItemCountOutputType
     */
    select?: Quiz_ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Quiz_ItemCountOutputType without action
   */
  export type Quiz_ItemCountOutputTypeCountOptionQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Option_QuizWhereInput
  }


  /**
   * Count Type Option_QuizCountOutputType
   */

  export type Option_QuizCountOutputType = {
    answeredQuiz: number
  }

  export type Option_QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answeredQuiz?: boolean | Option_QuizCountOutputTypeCountAnsweredQuizArgs
  }

  // Custom InputTypes
  /**
   * Option_QuizCountOutputType without action
   */
  export type Option_QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option_QuizCountOutputType
     */
    select?: Option_QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Option_QuizCountOutputType without action
   */
  export type Option_QuizCountOutputTypeCountAnsweredQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Answered_QuizWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    isActive: boolean | null
    verifyToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    isActive: boolean | null
    verifyToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    isActive: number
    verifyToken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    isActive?: true
    verifyToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    isActive?: true
    verifyToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    isActive?: true
    verifyToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    name: string
    email: string
    password: string
    phone: string
    isActive: boolean
    verifyToken: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    isActive?: boolean
    verifyToken?: boolean
    answeredQuiz?: boolean | User$answeredQuizArgs<ExtArgs>
    myClass?: boolean | User$myClassArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    isActive?: boolean
    verifyToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "isActive" | "verifyToken", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answeredQuiz?: boolean | User$answeredQuizArgs<ExtArgs>
    myClass?: boolean | User$myClassArgs<ExtArgs>
    payment?: boolean | User$paymentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      answeredQuiz: Prisma.$Answered_QuizPayload<ExtArgs>[]
      myClass: Prisma.$My_ClassPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      email: string
      password: string
      phone: string
      isActive: boolean
      verifyToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answeredQuiz<T extends User$answeredQuizArgs<ExtArgs> = {}>(args?: Subset<T, User$answeredQuizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Answered_QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    myClass<T extends User$myClassArgs<ExtArgs> = {}>(args?: Subset<T, User$myClassArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$My_ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends User$paymentArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly verifyToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.answeredQuiz
   */
  export type User$answeredQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answered_Quiz
     */
    select?: Answered_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answered_Quiz
     */
    omit?: Answered_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Answered_QuizInclude<ExtArgs> | null
    where?: Answered_QuizWhereInput
    orderBy?: Answered_QuizOrderByWithRelationInput | Answered_QuizOrderByWithRelationInput[]
    cursor?: Answered_QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Answered_QuizScalarFieldEnum | Answered_QuizScalarFieldEnum[]
  }

  /**
   * User.myClass
   */
  export type User$myClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Class
     */
    select?: My_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Class
     */
    omit?: My_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ClassInclude<ExtArgs> | null
    where?: My_ClassWhereInput
    orderBy?: My_ClassOrderByWithRelationInput | My_ClassOrderByWithRelationInput[]
    cursor?: My_ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: My_ClassScalarFieldEnum | My_ClassScalarFieldEnum[]
  }

  /**
   * User.payment
   */
  export type User$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tutor
   */

  export type AggregateTutor = {
    _count: TutorCountAggregateOutputType | null
    _avg: TutorAvgAggregateOutputType | null
    _sum: TutorSumAggregateOutputType | null
    _min: TutorMinAggregateOutputType | null
    _max: TutorMaxAggregateOutputType | null
  }

  export type TutorAvgAggregateOutputType = {
    id: number | null
  }

  export type TutorSumAggregateOutputType = {
    id: bigint | null
  }

  export type TutorMinAggregateOutputType = {
    id: bigint | null
    avatar: string | null
    name: string | null
    position: string | null
    company: string | null
    experience: string | null
  }

  export type TutorMaxAggregateOutputType = {
    id: bigint | null
    avatar: string | null
    name: string | null
    position: string | null
    company: string | null
    experience: string | null
  }

  export type TutorCountAggregateOutputType = {
    id: number
    avatar: number
    name: number
    position: number
    company: number
    experience: number
    _all: number
  }


  export type TutorAvgAggregateInputType = {
    id?: true
  }

  export type TutorSumAggregateInputType = {
    id?: true
  }

  export type TutorMinAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    position?: true
    company?: true
    experience?: true
  }

  export type TutorMaxAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    position?: true
    company?: true
    experience?: true
  }

  export type TutorCountAggregateInputType = {
    id?: true
    avatar?: true
    name?: true
    position?: true
    company?: true
    experience?: true
    _all?: true
  }

  export type TutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tutor to aggregate.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tutors
    **/
    _count?: true | TutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorMaxAggregateInputType
  }

  export type GetTutorAggregateType<T extends TutorAggregateArgs> = {
        [P in keyof T & keyof AggregateTutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutor[P]>
      : GetScalarType<T[P], AggregateTutor[P]>
  }




  export type TutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorWhereInput
    orderBy?: TutorOrderByWithAggregationInput | TutorOrderByWithAggregationInput[]
    by: TutorScalarFieldEnum[] | TutorScalarFieldEnum
    having?: TutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorCountAggregateInputType | true
    _avg?: TutorAvgAggregateInputType
    _sum?: TutorSumAggregateInputType
    _min?: TutorMinAggregateInputType
    _max?: TutorMaxAggregateInputType
  }

  export type TutorGroupByOutputType = {
    id: bigint
    avatar: string | null
    name: string
    position: string
    company: string
    experience: string
    _count: TutorCountAggregateOutputType | null
    _avg: TutorAvgAggregateOutputType | null
    _sum: TutorSumAggregateOutputType | null
    _min: TutorMinAggregateOutputType | null
    _max: TutorMaxAggregateOutputType | null
  }

  type GetTutorGroupByPayload<T extends TutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorGroupByOutputType[P]>
            : GetScalarType<T[P], TutorGroupByOutputType[P]>
        }
      >
    >


  export type TutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    avatar?: boolean
    name?: boolean
    position?: boolean
    company?: boolean
    experience?: boolean
    class?: boolean | Tutor$classArgs<ExtArgs>
    _count?: boolean | TutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor"]>



  export type TutorSelectScalar = {
    id?: boolean
    avatar?: boolean
    name?: boolean
    position?: boolean
    company?: boolean
    experience?: boolean
  }

  export type TutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "avatar" | "name" | "position" | "company" | "experience", ExtArgs["result"]["tutor"]>
  export type TutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | Tutor$classArgs<ExtArgs>
    _count?: boolean | TutorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tutor"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      avatar: string | null
      name: string
      position: string
      company: string
      experience: string
    }, ExtArgs["result"]["tutor"]>
    composites: {}
  }

  type TutorGetPayload<S extends boolean | null | undefined | TutorDefaultArgs> = $Result.GetResult<Prisma.$TutorPayload, S>

  type TutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorCountAggregateInputType | true
    }

  export interface TutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tutor'], meta: { name: 'Tutor' } }
    /**
     * Find zero or one Tutor that matches the filter.
     * @param {TutorFindUniqueArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorFindUniqueArgs>(args: SelectSubset<T, TutorFindUniqueArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tutor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorFindUniqueOrThrowArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindFirstArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorFindFirstArgs>(args?: SelectSubset<T, TutorFindFirstArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindFirstOrThrowArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tutors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutors
     * const tutors = await prisma.tutor.findMany()
     * 
     * // Get first 10 Tutors
     * const tutors = await prisma.tutor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorWithIdOnly = await prisma.tutor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorFindManyArgs>(args?: SelectSubset<T, TutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tutor.
     * @param {TutorCreateArgs} args - Arguments to create a Tutor.
     * @example
     * // Create one Tutor
     * const Tutor = await prisma.tutor.create({
     *   data: {
     *     // ... data to create a Tutor
     *   }
     * })
     * 
     */
    create<T extends TutorCreateArgs>(args: SelectSubset<T, TutorCreateArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tutors.
     * @param {TutorCreateManyArgs} args - Arguments to create many Tutors.
     * @example
     * // Create many Tutors
     * const tutor = await prisma.tutor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorCreateManyArgs>(args?: SelectSubset<T, TutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tutor.
     * @param {TutorDeleteArgs} args - Arguments to delete one Tutor.
     * @example
     * // Delete one Tutor
     * const Tutor = await prisma.tutor.delete({
     *   where: {
     *     // ... filter to delete one Tutor
     *   }
     * })
     * 
     */
    delete<T extends TutorDeleteArgs>(args: SelectSubset<T, TutorDeleteArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tutor.
     * @param {TutorUpdateArgs} args - Arguments to update one Tutor.
     * @example
     * // Update one Tutor
     * const tutor = await prisma.tutor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorUpdateArgs>(args: SelectSubset<T, TutorUpdateArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tutors.
     * @param {TutorDeleteManyArgs} args - Arguments to filter Tutors to delete.
     * @example
     * // Delete a few Tutors
     * const { count } = await prisma.tutor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorDeleteManyArgs>(args?: SelectSubset<T, TutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutors
     * const tutor = await prisma.tutor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorUpdateManyArgs>(args: SelectSubset<T, TutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tutor.
     * @param {TutorUpsertArgs} args - Arguments to update or create a Tutor.
     * @example
     * // Update or create a Tutor
     * const tutor = await prisma.tutor.upsert({
     *   create: {
     *     // ... data to create a Tutor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutor we want to update
     *   }
     * })
     */
    upsert<T extends TutorUpsertArgs>(args: SelectSubset<T, TutorUpsertArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorCountArgs} args - Arguments to filter Tutors to count.
     * @example
     * // Count the number of Tutors
     * const count = await prisma.tutor.count({
     *   where: {
     *     // ... the filter for the Tutors we want to count
     *   }
     * })
    **/
    count<T extends TutorCountArgs>(
      args?: Subset<T, TutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TutorAggregateArgs>(args: Subset<T, TutorAggregateArgs>): Prisma.PrismaPromise<GetTutorAggregateType<T>>

    /**
     * Group by Tutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorGroupByArgs['orderBy'] }
        : { orderBy?: TutorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tutor model
   */
  readonly fields: TutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tutor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends Tutor$classArgs<ExtArgs> = {}>(args?: Subset<T, Tutor$classArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tutor model
   */
  interface TutorFieldRefs {
    readonly id: FieldRef<"Tutor", 'BigInt'>
    readonly avatar: FieldRef<"Tutor", 'String'>
    readonly name: FieldRef<"Tutor", 'String'>
    readonly position: FieldRef<"Tutor", 'String'>
    readonly company: FieldRef<"Tutor", 'String'>
    readonly experience: FieldRef<"Tutor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tutor findUnique
   */
  export type TutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor findUniqueOrThrow
   */
  export type TutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor findFirst
   */
  export type TutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tutors.
     */
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
  }

  /**
   * Tutor findFirstOrThrow
   */
  export type TutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tutors.
     */
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
  }

  /**
   * Tutor findMany
   */
  export type TutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutors to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
  }

  /**
   * Tutor create
   */
  export type TutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Tutor.
     */
    data: XOR<TutorCreateInput, TutorUncheckedCreateInput>
  }

  /**
   * Tutor createMany
   */
  export type TutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tutors.
     */
    data: TutorCreateManyInput | TutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tutor update
   */
  export type TutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Tutor.
     */
    data: XOR<TutorUpdateInput, TutorUncheckedUpdateInput>
    /**
     * Choose, which Tutor to update.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor updateMany
   */
  export type TutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tutors.
     */
    data: XOR<TutorUpdateManyMutationInput, TutorUncheckedUpdateManyInput>
    /**
     * Filter which Tutors to update
     */
    where?: TutorWhereInput
    /**
     * Limit how many Tutors to update.
     */
    limit?: number
  }

  /**
   * Tutor upsert
   */
  export type TutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Tutor to update in case it exists.
     */
    where: TutorWhereUniqueInput
    /**
     * In case the Tutor found by the `where` argument doesn't exist, create a new Tutor with this data.
     */
    create: XOR<TutorCreateInput, TutorUncheckedCreateInput>
    /**
     * In case the Tutor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorUpdateInput, TutorUncheckedUpdateInput>
  }

  /**
   * Tutor delete
   */
  export type TutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter which Tutor to delete.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor deleteMany
   */
  export type TutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tutors to delete
     */
    where?: TutorWhereInput
    /**
     * Limit how many Tutors to delete.
     */
    limit?: number
  }

  /**
   * Tutor.class
   */
  export type Tutor$classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Tutor without action
   */
  export type TutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
  }


  /**
   * Model Category_Class
   */

  export type AggregateCategory_Class = {
    _count: Category_ClassCountAggregateOutputType | null
    _avg: Category_ClassAvgAggregateOutputType | null
    _sum: Category_ClassSumAggregateOutputType | null
    _min: Category_ClassMinAggregateOutputType | null
    _max: Category_ClassMaxAggregateOutputType | null
  }

  export type Category_ClassAvgAggregateOutputType = {
    id: number | null
  }

  export type Category_ClassSumAggregateOutputType = {
    id: bigint | null
  }

  export type Category_ClassMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type Category_ClassMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type Category_ClassCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Category_ClassAvgAggregateInputType = {
    id?: true
  }

  export type Category_ClassSumAggregateInputType = {
    id?: true
  }

  export type Category_ClassMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Category_ClassMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Category_ClassCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Category_ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category_Class to aggregate.
     */
    where?: Category_ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_Classes to fetch.
     */
    orderBy?: Category_ClassOrderByWithRelationInput | Category_ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Category_ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Category_Classes
    **/
    _count?: true | Category_ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Category_ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Category_ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Category_ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Category_ClassMaxAggregateInputType
  }

  export type GetCategory_ClassAggregateType<T extends Category_ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory_Class]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory_Class[P]>
      : GetScalarType<T[P], AggregateCategory_Class[P]>
  }




  export type Category_ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Category_ClassWhereInput
    orderBy?: Category_ClassOrderByWithAggregationInput | Category_ClassOrderByWithAggregationInput[]
    by: Category_ClassScalarFieldEnum[] | Category_ClassScalarFieldEnum
    having?: Category_ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Category_ClassCountAggregateInputType | true
    _avg?: Category_ClassAvgAggregateInputType
    _sum?: Category_ClassSumAggregateInputType
    _min?: Category_ClassMinAggregateInputType
    _max?: Category_ClassMaxAggregateInputType
  }

  export type Category_ClassGroupByOutputType = {
    id: bigint
    name: string
    _count: Category_ClassCountAggregateOutputType | null
    _avg: Category_ClassAvgAggregateOutputType | null
    _sum: Category_ClassSumAggregateOutputType | null
    _min: Category_ClassMinAggregateOutputType | null
    _max: Category_ClassMaxAggregateOutputType | null
  }

  type GetCategory_ClassGroupByPayload<T extends Category_ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Category_ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Category_ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Category_ClassGroupByOutputType[P]>
            : GetScalarType<T[P], Category_ClassGroupByOutputType[P]>
        }
      >
    >


  export type Category_ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class?: boolean | Category_Class$classArgs<ExtArgs>
    _count?: boolean | Category_ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category_Class"]>



  export type Category_ClassSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type Category_ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category_Class"]>
  export type Category_ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | Category_Class$classArgs<ExtArgs>
    _count?: boolean | Category_ClassCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Category_ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category_Class"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["category_Class"]>
    composites: {}
  }

  type Category_ClassGetPayload<S extends boolean | null | undefined | Category_ClassDefaultArgs> = $Result.GetResult<Prisma.$Category_ClassPayload, S>

  type Category_ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Category_ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Category_ClassCountAggregateInputType | true
    }

  export interface Category_ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category_Class'], meta: { name: 'Category_Class' } }
    /**
     * Find zero or one Category_Class that matches the filter.
     * @param {Category_ClassFindUniqueArgs} args - Arguments to find a Category_Class
     * @example
     * // Get one Category_Class
     * const category_Class = await prisma.category_Class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Category_ClassFindUniqueArgs>(args: SelectSubset<T, Category_ClassFindUniqueArgs<ExtArgs>>): Prisma__Category_ClassClient<$Result.GetResult<Prisma.$Category_ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category_Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Category_ClassFindUniqueOrThrowArgs} args - Arguments to find a Category_Class
     * @example
     * // Get one Category_Class
     * const category_Class = await prisma.category_Class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Category_ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, Category_ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Category_ClassClient<$Result.GetResult<Prisma.$Category_ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_ClassFindFirstArgs} args - Arguments to find a Category_Class
     * @example
     * // Get one Category_Class
     * const category_Class = await prisma.category_Class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Category_ClassFindFirstArgs>(args?: SelectSubset<T, Category_ClassFindFirstArgs<ExtArgs>>): Prisma__Category_ClassClient<$Result.GetResult<Prisma.$Category_ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_ClassFindFirstOrThrowArgs} args - Arguments to find a Category_Class
     * @example
     * // Get one Category_Class
     * const category_Class = await prisma.category_Class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Category_ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, Category_ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__Category_ClassClient<$Result.GetResult<Prisma.$Category_ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Category_Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Category_Classes
     * const category_Classes = await prisma.category_Class.findMany()
     * 
     * // Get first 10 Category_Classes
     * const category_Classes = await prisma.category_Class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const category_ClassWithIdOnly = await prisma.category_Class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Category_ClassFindManyArgs>(args?: SelectSubset<T, Category_ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category_Class.
     * @param {Category_ClassCreateArgs} args - Arguments to create a Category_Class.
     * @example
     * // Create one Category_Class
     * const Category_Class = await prisma.category_Class.create({
     *   data: {
     *     // ... data to create a Category_Class
     *   }
     * })
     * 
     */
    create<T extends Category_ClassCreateArgs>(args: SelectSubset<T, Category_ClassCreateArgs<ExtArgs>>): Prisma__Category_ClassClient<$Result.GetResult<Prisma.$Category_ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Category_Classes.
     * @param {Category_ClassCreateManyArgs} args - Arguments to create many Category_Classes.
     * @example
     * // Create many Category_Classes
     * const category_Class = await prisma.category_Class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Category_ClassCreateManyArgs>(args?: SelectSubset<T, Category_ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category_Class.
     * @param {Category_ClassDeleteArgs} args - Arguments to delete one Category_Class.
     * @example
     * // Delete one Category_Class
     * const Category_Class = await prisma.category_Class.delete({
     *   where: {
     *     // ... filter to delete one Category_Class
     *   }
     * })
     * 
     */
    delete<T extends Category_ClassDeleteArgs>(args: SelectSubset<T, Category_ClassDeleteArgs<ExtArgs>>): Prisma__Category_ClassClient<$Result.GetResult<Prisma.$Category_ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category_Class.
     * @param {Category_ClassUpdateArgs} args - Arguments to update one Category_Class.
     * @example
     * // Update one Category_Class
     * const category_Class = await prisma.category_Class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Category_ClassUpdateArgs>(args: SelectSubset<T, Category_ClassUpdateArgs<ExtArgs>>): Prisma__Category_ClassClient<$Result.GetResult<Prisma.$Category_ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Category_Classes.
     * @param {Category_ClassDeleteManyArgs} args - Arguments to filter Category_Classes to delete.
     * @example
     * // Delete a few Category_Classes
     * const { count } = await prisma.category_Class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Category_ClassDeleteManyArgs>(args?: SelectSubset<T, Category_ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Category_Classes
     * const category_Class = await prisma.category_Class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Category_ClassUpdateManyArgs>(args: SelectSubset<T, Category_ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category_Class.
     * @param {Category_ClassUpsertArgs} args - Arguments to update or create a Category_Class.
     * @example
     * // Update or create a Category_Class
     * const category_Class = await prisma.category_Class.upsert({
     *   create: {
     *     // ... data to create a Category_Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category_Class we want to update
     *   }
     * })
     */
    upsert<T extends Category_ClassUpsertArgs>(args: SelectSubset<T, Category_ClassUpsertArgs<ExtArgs>>): Prisma__Category_ClassClient<$Result.GetResult<Prisma.$Category_ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Category_Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_ClassCountArgs} args - Arguments to filter Category_Classes to count.
     * @example
     * // Count the number of Category_Classes
     * const count = await prisma.category_Class.count({
     *   where: {
     *     // ... the filter for the Category_Classes we want to count
     *   }
     * })
    **/
    count<T extends Category_ClassCountArgs>(
      args?: Subset<T, Category_ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Category_ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category_Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Category_ClassAggregateArgs>(args: Subset<T, Category_ClassAggregateArgs>): Prisma.PrismaPromise<GetCategory_ClassAggregateType<T>>

    /**
     * Group by Category_Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Category_ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Category_ClassGroupByArgs['orderBy'] }
        : { orderBy?: Category_ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Category_ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategory_ClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category_Class model
   */
  readonly fields: Category_ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category_Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Category_ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends Category_Class$classArgs<ExtArgs> = {}>(args?: Subset<T, Category_Class$classArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category_Class model
   */
  interface Category_ClassFieldRefs {
    readonly id: FieldRef<"Category_Class", 'BigInt'>
    readonly name: FieldRef<"Category_Class", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category_Class findUnique
   */
  export type Category_ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_Class
     */
    select?: Category_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_Class
     */
    omit?: Category_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_ClassInclude<ExtArgs> | null
    /**
     * Filter, which Category_Class to fetch.
     */
    where: Category_ClassWhereUniqueInput
  }

  /**
   * Category_Class findUniqueOrThrow
   */
  export type Category_ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_Class
     */
    select?: Category_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_Class
     */
    omit?: Category_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_ClassInclude<ExtArgs> | null
    /**
     * Filter, which Category_Class to fetch.
     */
    where: Category_ClassWhereUniqueInput
  }

  /**
   * Category_Class findFirst
   */
  export type Category_ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_Class
     */
    select?: Category_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_Class
     */
    omit?: Category_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_ClassInclude<ExtArgs> | null
    /**
     * Filter, which Category_Class to fetch.
     */
    where?: Category_ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_Classes to fetch.
     */
    orderBy?: Category_ClassOrderByWithRelationInput | Category_ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Category_Classes.
     */
    cursor?: Category_ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Category_Classes.
     */
    distinct?: Category_ClassScalarFieldEnum | Category_ClassScalarFieldEnum[]
  }

  /**
   * Category_Class findFirstOrThrow
   */
  export type Category_ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_Class
     */
    select?: Category_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_Class
     */
    omit?: Category_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_ClassInclude<ExtArgs> | null
    /**
     * Filter, which Category_Class to fetch.
     */
    where?: Category_ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_Classes to fetch.
     */
    orderBy?: Category_ClassOrderByWithRelationInput | Category_ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Category_Classes.
     */
    cursor?: Category_ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Category_Classes.
     */
    distinct?: Category_ClassScalarFieldEnum | Category_ClassScalarFieldEnum[]
  }

  /**
   * Category_Class findMany
   */
  export type Category_ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_Class
     */
    select?: Category_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_Class
     */
    omit?: Category_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_ClassInclude<ExtArgs> | null
    /**
     * Filter, which Category_Classes to fetch.
     */
    where?: Category_ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_Classes to fetch.
     */
    orderBy?: Category_ClassOrderByWithRelationInput | Category_ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Category_Classes.
     */
    cursor?: Category_ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_Classes.
     */
    skip?: number
    distinct?: Category_ClassScalarFieldEnum | Category_ClassScalarFieldEnum[]
  }

  /**
   * Category_Class create
   */
  export type Category_ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_Class
     */
    select?: Category_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_Class
     */
    omit?: Category_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Category_Class.
     */
    data: XOR<Category_ClassCreateInput, Category_ClassUncheckedCreateInput>
  }

  /**
   * Category_Class createMany
   */
  export type Category_ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Category_Classes.
     */
    data: Category_ClassCreateManyInput | Category_ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category_Class update
   */
  export type Category_ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_Class
     */
    select?: Category_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_Class
     */
    omit?: Category_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Category_Class.
     */
    data: XOR<Category_ClassUpdateInput, Category_ClassUncheckedUpdateInput>
    /**
     * Choose, which Category_Class to update.
     */
    where: Category_ClassWhereUniqueInput
  }

  /**
   * Category_Class updateMany
   */
  export type Category_ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Category_Classes.
     */
    data: XOR<Category_ClassUpdateManyMutationInput, Category_ClassUncheckedUpdateManyInput>
    /**
     * Filter which Category_Classes to update
     */
    where?: Category_ClassWhereInput
    /**
     * Limit how many Category_Classes to update.
     */
    limit?: number
  }

  /**
   * Category_Class upsert
   */
  export type Category_ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_Class
     */
    select?: Category_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_Class
     */
    omit?: Category_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Category_Class to update in case it exists.
     */
    where: Category_ClassWhereUniqueInput
    /**
     * In case the Category_Class found by the `where` argument doesn't exist, create a new Category_Class with this data.
     */
    create: XOR<Category_ClassCreateInput, Category_ClassUncheckedCreateInput>
    /**
     * In case the Category_Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Category_ClassUpdateInput, Category_ClassUncheckedUpdateInput>
  }

  /**
   * Category_Class delete
   */
  export type Category_ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_Class
     */
    select?: Category_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_Class
     */
    omit?: Category_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_ClassInclude<ExtArgs> | null
    /**
     * Filter which Category_Class to delete.
     */
    where: Category_ClassWhereUniqueInput
  }

  /**
   * Category_Class deleteMany
   */
  export type Category_ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category_Classes to delete
     */
    where?: Category_ClassWhereInput
    /**
     * Limit how many Category_Classes to delete.
     */
    limit?: number
  }

  /**
   * Category_Class.class
   */
  export type Category_Class$classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Category_Class without action
   */
  export type Category_ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_Class
     */
    select?: Category_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category_Class
     */
    omit?: Category_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Category_ClassInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    id: number | null
    tutorId: number | null
    categoryClassId: number | null
  }

  export type ClassSumAggregateOutputType = {
    id: bigint | null
    tutorId: bigint | null
    categoryClassId: bigint | null
  }

  export type ClassMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    image: string | null
    description: string | null
    tutorId: bigint | null
    categoryClassId: bigint | null
  }

  export type ClassMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    image: string | null
    description: string | null
    tutorId: bigint | null
    categoryClassId: bigint | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    title: number
    image: number
    description: number
    tutorId: number
    categoryClassId: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    id?: true
    tutorId?: true
    categoryClassId?: true
  }

  export type ClassSumAggregateInputType = {
    id?: true
    tutorId?: true
    categoryClassId?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    title?: true
    image?: true
    description?: true
    tutorId?: true
    categoryClassId?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    title?: true
    image?: true
    description?: true
    tutorId?: true
    categoryClassId?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    title?: true
    image?: true
    description?: true
    tutorId?: true
    categoryClassId?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: bigint
    title: string
    image: string | null
    description: string
    tutorId: bigint
    categoryClassId: bigint
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    description?: boolean
    tutorId?: boolean
    categoryClassId?: boolean
    tutor?: boolean | TutorDefaultArgs<ExtArgs>
    categoryClass?: boolean | Category_ClassDefaultArgs<ExtArgs>
    module?: boolean | Class$moduleArgs<ExtArgs>
    myClass?: boolean | Class$myClassArgs<ExtArgs>
    order?: boolean | Class$orderArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>



  export type ClassSelectScalar = {
    id?: boolean
    title?: boolean
    image?: boolean
    description?: boolean
    tutorId?: boolean
    categoryClassId?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "image" | "description" | "tutorId" | "categoryClassId", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorDefaultArgs<ExtArgs>
    categoryClass?: boolean | Category_ClassDefaultArgs<ExtArgs>
    module?: boolean | Class$moduleArgs<ExtArgs>
    myClass?: boolean | Class$myClassArgs<ExtArgs>
    order?: boolean | Class$orderArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      tutor: Prisma.$TutorPayload<ExtArgs>
      categoryClass: Prisma.$Category_ClassPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>[]
      myClass: Prisma.$My_ClassPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      image: string | null
      description: string
      tutorId: bigint
      categoryClassId: bigint
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends TutorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorDefaultArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoryClass<T extends Category_ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Category_ClassDefaultArgs<ExtArgs>>): Prisma__Category_ClassClient<$Result.GetResult<Prisma.$Category_ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends Class$moduleArgs<ExtArgs> = {}>(args?: Subset<T, Class$moduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    myClass<T extends Class$myClassArgs<ExtArgs> = {}>(args?: Subset<T, Class$myClassArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$My_ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends Class$orderArgs<ExtArgs> = {}>(args?: Subset<T, Class$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'BigInt'>
    readonly title: FieldRef<"Class", 'String'>
    readonly image: FieldRef<"Class", 'String'>
    readonly description: FieldRef<"Class", 'String'>
    readonly tutorId: FieldRef<"Class", 'BigInt'>
    readonly categoryClassId: FieldRef<"Class", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.module
   */
  export type Class$moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Class.myClass
   */
  export type Class$myClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Class
     */
    select?: My_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Class
     */
    omit?: My_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ClassInclude<ExtArgs> | null
    where?: My_ClassWhereInput
    orderBy?: My_ClassOrderByWithRelationInput | My_ClassOrderByWithRelationInput[]
    cursor?: My_ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: My_ClassScalarFieldEnum | My_ClassScalarFieldEnum[]
  }

  /**
   * Class.order
   */
  export type Class$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model My_Class
   */

  export type AggregateMy_Class = {
    _count: My_ClassCountAggregateOutputType | null
    _avg: My_ClassAvgAggregateOutputType | null
    _sum: My_ClassSumAggregateOutputType | null
    _min: My_ClassMinAggregateOutputType | null
    _max: My_ClassMaxAggregateOutputType | null
  }

  export type My_ClassAvgAggregateOutputType = {
    id: number | null
    progress: number | null
    totalModule: number | null
    totalTime: number | null
    userId: number | null
    classId: number | null
  }

  export type My_ClassSumAggregateOutputType = {
    id: bigint | null
    progress: number | null
    totalModule: number | null
    totalTime: number | null
    userId: bigint | null
    classId: bigint | null
  }

  export type My_ClassMinAggregateOutputType = {
    id: bigint | null
    status: boolean | null
    progress: number | null
    totalModule: number | null
    totalTime: number | null
    userId: bigint | null
    classId: bigint | null
  }

  export type My_ClassMaxAggregateOutputType = {
    id: bigint | null
    status: boolean | null
    progress: number | null
    totalModule: number | null
    totalTime: number | null
    userId: bigint | null
    classId: bigint | null
  }

  export type My_ClassCountAggregateOutputType = {
    id: number
    status: number
    progress: number
    totalModule: number
    totalTime: number
    userId: number
    classId: number
    _all: number
  }


  export type My_ClassAvgAggregateInputType = {
    id?: true
    progress?: true
    totalModule?: true
    totalTime?: true
    userId?: true
    classId?: true
  }

  export type My_ClassSumAggregateInputType = {
    id?: true
    progress?: true
    totalModule?: true
    totalTime?: true
    userId?: true
    classId?: true
  }

  export type My_ClassMinAggregateInputType = {
    id?: true
    status?: true
    progress?: true
    totalModule?: true
    totalTime?: true
    userId?: true
    classId?: true
  }

  export type My_ClassMaxAggregateInputType = {
    id?: true
    status?: true
    progress?: true
    totalModule?: true
    totalTime?: true
    userId?: true
    classId?: true
  }

  export type My_ClassCountAggregateInputType = {
    id?: true
    status?: true
    progress?: true
    totalModule?: true
    totalTime?: true
    userId?: true
    classId?: true
    _all?: true
  }

  export type My_ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which My_Class to aggregate.
     */
    where?: My_ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of My_Classes to fetch.
     */
    orderBy?: My_ClassOrderByWithRelationInput | My_ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: My_ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` My_Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` My_Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned My_Classes
    **/
    _count?: true | My_ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: My_ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: My_ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: My_ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: My_ClassMaxAggregateInputType
  }

  export type GetMy_ClassAggregateType<T extends My_ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateMy_Class]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMy_Class[P]>
      : GetScalarType<T[P], AggregateMy_Class[P]>
  }




  export type My_ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: My_ClassWhereInput
    orderBy?: My_ClassOrderByWithAggregationInput | My_ClassOrderByWithAggregationInput[]
    by: My_ClassScalarFieldEnum[] | My_ClassScalarFieldEnum
    having?: My_ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: My_ClassCountAggregateInputType | true
    _avg?: My_ClassAvgAggregateInputType
    _sum?: My_ClassSumAggregateInputType
    _min?: My_ClassMinAggregateInputType
    _max?: My_ClassMaxAggregateInputType
  }

  export type My_ClassGroupByOutputType = {
    id: bigint
    status: boolean
    progress: number
    totalModule: number
    totalTime: number
    userId: bigint
    classId: bigint
    _count: My_ClassCountAggregateOutputType | null
    _avg: My_ClassAvgAggregateOutputType | null
    _sum: My_ClassSumAggregateOutputType | null
    _min: My_ClassMinAggregateOutputType | null
    _max: My_ClassMaxAggregateOutputType | null
  }

  type GetMy_ClassGroupByPayload<T extends My_ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<My_ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof My_ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], My_ClassGroupByOutputType[P]>
            : GetScalarType<T[P], My_ClassGroupByOutputType[P]>
        }
      >
    >


  export type My_ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    progress?: boolean
    totalModule?: boolean
    totalTime?: boolean
    userId?: boolean
    classId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["my_Class"]>



  export type My_ClassSelectScalar = {
    id?: boolean
    status?: boolean
    progress?: boolean
    totalModule?: boolean
    totalTime?: boolean
    userId?: boolean
    classId?: boolean
  }

  export type My_ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "progress" | "totalModule" | "totalTime" | "userId" | "classId", ExtArgs["result"]["my_Class"]>
  export type My_ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $My_ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "My_Class"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      status: boolean
      progress: number
      totalModule: number
      totalTime: number
      userId: bigint
      classId: bigint
    }, ExtArgs["result"]["my_Class"]>
    composites: {}
  }

  type My_ClassGetPayload<S extends boolean | null | undefined | My_ClassDefaultArgs> = $Result.GetResult<Prisma.$My_ClassPayload, S>

  type My_ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<My_ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: My_ClassCountAggregateInputType | true
    }

  export interface My_ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['My_Class'], meta: { name: 'My_Class' } }
    /**
     * Find zero or one My_Class that matches the filter.
     * @param {My_ClassFindUniqueArgs} args - Arguments to find a My_Class
     * @example
     * // Get one My_Class
     * const my_Class = await prisma.my_Class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends My_ClassFindUniqueArgs>(args: SelectSubset<T, My_ClassFindUniqueArgs<ExtArgs>>): Prisma__My_ClassClient<$Result.GetResult<Prisma.$My_ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one My_Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {My_ClassFindUniqueOrThrowArgs} args - Arguments to find a My_Class
     * @example
     * // Get one My_Class
     * const my_Class = await prisma.my_Class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends My_ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, My_ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__My_ClassClient<$Result.GetResult<Prisma.$My_ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first My_Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ClassFindFirstArgs} args - Arguments to find a My_Class
     * @example
     * // Get one My_Class
     * const my_Class = await prisma.my_Class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends My_ClassFindFirstArgs>(args?: SelectSubset<T, My_ClassFindFirstArgs<ExtArgs>>): Prisma__My_ClassClient<$Result.GetResult<Prisma.$My_ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first My_Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ClassFindFirstOrThrowArgs} args - Arguments to find a My_Class
     * @example
     * // Get one My_Class
     * const my_Class = await prisma.my_Class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends My_ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, My_ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__My_ClassClient<$Result.GetResult<Prisma.$My_ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more My_Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all My_Classes
     * const my_Classes = await prisma.my_Class.findMany()
     * 
     * // Get first 10 My_Classes
     * const my_Classes = await prisma.my_Class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const my_ClassWithIdOnly = await prisma.my_Class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends My_ClassFindManyArgs>(args?: SelectSubset<T, My_ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$My_ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a My_Class.
     * @param {My_ClassCreateArgs} args - Arguments to create a My_Class.
     * @example
     * // Create one My_Class
     * const My_Class = await prisma.my_Class.create({
     *   data: {
     *     // ... data to create a My_Class
     *   }
     * })
     * 
     */
    create<T extends My_ClassCreateArgs>(args: SelectSubset<T, My_ClassCreateArgs<ExtArgs>>): Prisma__My_ClassClient<$Result.GetResult<Prisma.$My_ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many My_Classes.
     * @param {My_ClassCreateManyArgs} args - Arguments to create many My_Classes.
     * @example
     * // Create many My_Classes
     * const my_Class = await prisma.my_Class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends My_ClassCreateManyArgs>(args?: SelectSubset<T, My_ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a My_Class.
     * @param {My_ClassDeleteArgs} args - Arguments to delete one My_Class.
     * @example
     * // Delete one My_Class
     * const My_Class = await prisma.my_Class.delete({
     *   where: {
     *     // ... filter to delete one My_Class
     *   }
     * })
     * 
     */
    delete<T extends My_ClassDeleteArgs>(args: SelectSubset<T, My_ClassDeleteArgs<ExtArgs>>): Prisma__My_ClassClient<$Result.GetResult<Prisma.$My_ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one My_Class.
     * @param {My_ClassUpdateArgs} args - Arguments to update one My_Class.
     * @example
     * // Update one My_Class
     * const my_Class = await prisma.my_Class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends My_ClassUpdateArgs>(args: SelectSubset<T, My_ClassUpdateArgs<ExtArgs>>): Prisma__My_ClassClient<$Result.GetResult<Prisma.$My_ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more My_Classes.
     * @param {My_ClassDeleteManyArgs} args - Arguments to filter My_Classes to delete.
     * @example
     * // Delete a few My_Classes
     * const { count } = await prisma.my_Class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends My_ClassDeleteManyArgs>(args?: SelectSubset<T, My_ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more My_Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many My_Classes
     * const my_Class = await prisma.my_Class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends My_ClassUpdateManyArgs>(args: SelectSubset<T, My_ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one My_Class.
     * @param {My_ClassUpsertArgs} args - Arguments to update or create a My_Class.
     * @example
     * // Update or create a My_Class
     * const my_Class = await prisma.my_Class.upsert({
     *   create: {
     *     // ... data to create a My_Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the My_Class we want to update
     *   }
     * })
     */
    upsert<T extends My_ClassUpsertArgs>(args: SelectSubset<T, My_ClassUpsertArgs<ExtArgs>>): Prisma__My_ClassClient<$Result.GetResult<Prisma.$My_ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of My_Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ClassCountArgs} args - Arguments to filter My_Classes to count.
     * @example
     * // Count the number of My_Classes
     * const count = await prisma.my_Class.count({
     *   where: {
     *     // ... the filter for the My_Classes we want to count
     *   }
     * })
    **/
    count<T extends My_ClassCountArgs>(
      args?: Subset<T, My_ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], My_ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a My_Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends My_ClassAggregateArgs>(args: Subset<T, My_ClassAggregateArgs>): Prisma.PrismaPromise<GetMy_ClassAggregateType<T>>

    /**
     * Group by My_Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {My_ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends My_ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: My_ClassGroupByArgs['orderBy'] }
        : { orderBy?: My_ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, My_ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMy_ClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the My_Class model
   */
  readonly fields: My_ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for My_Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__My_ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the My_Class model
   */
  interface My_ClassFieldRefs {
    readonly id: FieldRef<"My_Class", 'BigInt'>
    readonly status: FieldRef<"My_Class", 'Boolean'>
    readonly progress: FieldRef<"My_Class", 'Int'>
    readonly totalModule: FieldRef<"My_Class", 'Int'>
    readonly totalTime: FieldRef<"My_Class", 'Int'>
    readonly userId: FieldRef<"My_Class", 'BigInt'>
    readonly classId: FieldRef<"My_Class", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * My_Class findUnique
   */
  export type My_ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Class
     */
    select?: My_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Class
     */
    omit?: My_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ClassInclude<ExtArgs> | null
    /**
     * Filter, which My_Class to fetch.
     */
    where: My_ClassWhereUniqueInput
  }

  /**
   * My_Class findUniqueOrThrow
   */
  export type My_ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Class
     */
    select?: My_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Class
     */
    omit?: My_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ClassInclude<ExtArgs> | null
    /**
     * Filter, which My_Class to fetch.
     */
    where: My_ClassWhereUniqueInput
  }

  /**
   * My_Class findFirst
   */
  export type My_ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Class
     */
    select?: My_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Class
     */
    omit?: My_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ClassInclude<ExtArgs> | null
    /**
     * Filter, which My_Class to fetch.
     */
    where?: My_ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of My_Classes to fetch.
     */
    orderBy?: My_ClassOrderByWithRelationInput | My_ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for My_Classes.
     */
    cursor?: My_ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` My_Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` My_Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of My_Classes.
     */
    distinct?: My_ClassScalarFieldEnum | My_ClassScalarFieldEnum[]
  }

  /**
   * My_Class findFirstOrThrow
   */
  export type My_ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Class
     */
    select?: My_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Class
     */
    omit?: My_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ClassInclude<ExtArgs> | null
    /**
     * Filter, which My_Class to fetch.
     */
    where?: My_ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of My_Classes to fetch.
     */
    orderBy?: My_ClassOrderByWithRelationInput | My_ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for My_Classes.
     */
    cursor?: My_ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` My_Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` My_Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of My_Classes.
     */
    distinct?: My_ClassScalarFieldEnum | My_ClassScalarFieldEnum[]
  }

  /**
   * My_Class findMany
   */
  export type My_ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Class
     */
    select?: My_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Class
     */
    omit?: My_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ClassInclude<ExtArgs> | null
    /**
     * Filter, which My_Classes to fetch.
     */
    where?: My_ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of My_Classes to fetch.
     */
    orderBy?: My_ClassOrderByWithRelationInput | My_ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing My_Classes.
     */
    cursor?: My_ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` My_Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` My_Classes.
     */
    skip?: number
    distinct?: My_ClassScalarFieldEnum | My_ClassScalarFieldEnum[]
  }

  /**
   * My_Class create
   */
  export type My_ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Class
     */
    select?: My_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Class
     */
    omit?: My_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a My_Class.
     */
    data: XOR<My_ClassCreateInput, My_ClassUncheckedCreateInput>
  }

  /**
   * My_Class createMany
   */
  export type My_ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many My_Classes.
     */
    data: My_ClassCreateManyInput | My_ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * My_Class update
   */
  export type My_ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Class
     */
    select?: My_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Class
     */
    omit?: My_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a My_Class.
     */
    data: XOR<My_ClassUpdateInput, My_ClassUncheckedUpdateInput>
    /**
     * Choose, which My_Class to update.
     */
    where: My_ClassWhereUniqueInput
  }

  /**
   * My_Class updateMany
   */
  export type My_ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update My_Classes.
     */
    data: XOR<My_ClassUpdateManyMutationInput, My_ClassUncheckedUpdateManyInput>
    /**
     * Filter which My_Classes to update
     */
    where?: My_ClassWhereInput
    /**
     * Limit how many My_Classes to update.
     */
    limit?: number
  }

  /**
   * My_Class upsert
   */
  export type My_ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Class
     */
    select?: My_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Class
     */
    omit?: My_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the My_Class to update in case it exists.
     */
    where: My_ClassWhereUniqueInput
    /**
     * In case the My_Class found by the `where` argument doesn't exist, create a new My_Class with this data.
     */
    create: XOR<My_ClassCreateInput, My_ClassUncheckedCreateInput>
    /**
     * In case the My_Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<My_ClassUpdateInput, My_ClassUncheckedUpdateInput>
  }

  /**
   * My_Class delete
   */
  export type My_ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Class
     */
    select?: My_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Class
     */
    omit?: My_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ClassInclude<ExtArgs> | null
    /**
     * Filter which My_Class to delete.
     */
    where: My_ClassWhereUniqueInput
  }

  /**
   * My_Class deleteMany
   */
  export type My_ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which My_Classes to delete
     */
    where?: My_ClassWhereInput
    /**
     * Limit how many My_Classes to delete.
     */
    limit?: number
  }

  /**
   * My_Class without action
   */
  export type My_ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the My_Class
     */
    select?: My_ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the My_Class
     */
    omit?: My_ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: My_ClassInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    totalPayment: number | null
    totalPrice: number | null
    userId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: bigint | null
    totalPayment: number | null
    totalPrice: number | null
    userId: bigint | null
  }

  export type PaymentMinAggregateOutputType = {
    id: bigint | null
    totalPayment: number | null
    totalPrice: number | null
    userId: bigint | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: bigint | null
    totalPayment: number | null
    totalPrice: number | null
    userId: bigint | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    totalPayment: number
    totalPrice: number
    userId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    totalPayment?: true
    totalPrice?: true
    userId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    totalPayment?: true
    totalPrice?: true
    userId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    totalPayment?: true
    totalPrice?: true
    userId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    totalPayment?: true
    totalPrice?: true
    userId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    totalPayment?: true
    totalPrice?: true
    userId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: bigint
    totalPayment: number
    totalPrice: number
    userId: bigint
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalPayment?: boolean
    totalPrice?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | Payment$orderArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    totalPayment?: boolean
    totalPrice?: boolean
    userId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "totalPayment" | "totalPrice" | "userId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | Payment$orderArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      totalPayment: number
      totalPrice: number
      userId: bigint
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends Payment$orderArgs<ExtArgs> = {}>(args?: Subset<T, Payment$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'BigInt'>
    readonly totalPayment: FieldRef<"Payment", 'Int'>
    readonly totalPrice: FieldRef<"Payment", 'Int'>
    readonly userId: FieldRef<"Payment", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.order
   */
  export type Payment$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    price: number | null
    paymentId: number | null
    ClassId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: bigint | null
    price: number | null
    paymentId: bigint | null
    ClassId: bigint | null
  }

  export type OrderMinAggregateOutputType = {
    id: bigint | null
    price: number | null
    paymentId: bigint | null
    ClassId: bigint | null
  }

  export type OrderMaxAggregateOutputType = {
    id: bigint | null
    price: number | null
    paymentId: bigint | null
    ClassId: bigint | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    price: number
    paymentId: number
    ClassId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    price?: true
    paymentId?: true
    ClassId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    price?: true
    paymentId?: true
    ClassId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    price?: true
    paymentId?: true
    ClassId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    price?: true
    paymentId?: true
    ClassId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    price?: true
    paymentId?: true
    ClassId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: bigint
    price: number
    paymentId: bigint
    ClassId: bigint
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    paymentId?: boolean
    ClassId?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    price?: boolean
    paymentId?: boolean
    ClassId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "paymentId" | "ClassId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      price: number
      paymentId: bigint
      ClassId: bigint
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'BigInt'>
    readonly price: FieldRef<"Order", 'Int'>
    readonly paymentId: FieldRef<"Order", 'BigInt'>
    readonly ClassId: FieldRef<"Order", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    id: number | null
    number: number | null
    classId: number | null
  }

  export type ModuleSumAggregateOutputType = {
    id: bigint | null
    number: number | null
    classId: bigint | null
  }

  export type ModuleMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    type: $Enums.ModuleType | null
    note: string | null
    number: number | null
    classId: bigint | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    type: $Enums.ModuleType | null
    note: string | null
    number: number | null
    classId: bigint | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    name: number
    type: number
    note: number
    number: number
    classId: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    id?: true
    number?: true
    classId?: true
  }

  export type ModuleSumAggregateInputType = {
    id?: true
    number?: true
    classId?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    note?: true
    number?: true
    classId?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    note?: true
    number?: true
    classId?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    note?: true
    number?: true
    classId?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: bigint
    name: string
    type: $Enums.ModuleType
    note: string
    number: number
    classId: bigint
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    note?: boolean
    number?: boolean
    classId?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    video?: boolean | Module$videoArgs<ExtArgs>
    summary?: boolean | Module$summaryArgs<ExtArgs>
    quiz?: boolean | Module$quizArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>



  export type ModuleSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    note?: boolean
    number?: boolean
    classId?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "note" | "number" | "classId", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    video?: boolean | Module$videoArgs<ExtArgs>
    summary?: boolean | Module$summaryArgs<ExtArgs>
    quiz?: boolean | Module$quizArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      video: Prisma.$VideoPayload<ExtArgs>[]
      summary: Prisma.$SummaryPayload<ExtArgs> | null
      quiz: Prisma.$QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      type: $Enums.ModuleType
      note: string
      number: number
      classId: bigint
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    video<T extends Module$videoArgs<ExtArgs> = {}>(args?: Subset<T, Module$videoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    summary<T extends Module$summaryArgs<ExtArgs> = {}>(args?: Subset<T, Module$summaryArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    quiz<T extends Module$quizArgs<ExtArgs> = {}>(args?: Subset<T, Module$quizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'BigInt'>
    readonly name: FieldRef<"Module", 'String'>
    readonly type: FieldRef<"Module", 'ModuleType'>
    readonly note: FieldRef<"Module", 'String'>
    readonly number: FieldRef<"Module", 'Int'>
    readonly classId: FieldRef<"Module", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.video
   */
  export type Module$videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Module.summary
   */
  export type Module$summaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    where?: SummaryWhereInput
  }

  /**
   * Module.quiz
   */
  export type Module$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    moduleId: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: bigint | null
    moduleId: bigint | null
  }

  export type VideoMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    video_url: string | null
    description: string | null
    moduleId: bigint | null
  }

  export type VideoMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    video_url: string | null
    description: string | null
    moduleId: bigint | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    name: number
    video_url: number
    description: number
    moduleId: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    moduleId?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    moduleId?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    name?: true
    video_url?: true
    description?: true
    moduleId?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    name?: true
    video_url?: true
    description?: true
    moduleId?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    name?: true
    video_url?: true
    description?: true
    moduleId?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: bigint
    name: string
    video_url: string
    description: string
    moduleId: bigint
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    video_url?: boolean
    description?: boolean
    moduleId?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>



  export type VideoSelectScalar = {
    id?: boolean
    name?: boolean
    video_url?: boolean
    description?: boolean
    moduleId?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "video_url" | "description" | "moduleId", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      video_url: string
      description: string
      moduleId: bigint
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'BigInt'>
    readonly name: FieldRef<"Video", 'String'>
    readonly video_url: FieldRef<"Video", 'String'>
    readonly description: FieldRef<"Video", 'String'>
    readonly moduleId: FieldRef<"Video", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Summary
   */

  export type AggregateSummary = {
    _count: SummaryCountAggregateOutputType | null
    _avg: SummaryAvgAggregateOutputType | null
    _sum: SummarySumAggregateOutputType | null
    _min: SummaryMinAggregateOutputType | null
    _max: SummaryMaxAggregateOutputType | null
  }

  export type SummaryAvgAggregateOutputType = {
    id: number | null
    moduleId: number | null
  }

  export type SummarySumAggregateOutputType = {
    id: bigint | null
    moduleId: bigint | null
  }

  export type SummaryMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    content: string | null
    moduleId: bigint | null
  }

  export type SummaryMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    content: string | null
    moduleId: bigint | null
  }

  export type SummaryCountAggregateOutputType = {
    id: number
    title: number
    content: number
    moduleId: number
    _all: number
  }


  export type SummaryAvgAggregateInputType = {
    id?: true
    moduleId?: true
  }

  export type SummarySumAggregateInputType = {
    id?: true
    moduleId?: true
  }

  export type SummaryMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    moduleId?: true
  }

  export type SummaryMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    moduleId?: true
  }

  export type SummaryCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    moduleId?: true
    _all?: true
  }

  export type SummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Summary to aggregate.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Summaries
    **/
    _count?: true | SummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SummaryMaxAggregateInputType
  }

  export type GetSummaryAggregateType<T extends SummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSummary[P]>
      : GetScalarType<T[P], AggregateSummary[P]>
  }




  export type SummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryWhereInput
    orderBy?: SummaryOrderByWithAggregationInput | SummaryOrderByWithAggregationInput[]
    by: SummaryScalarFieldEnum[] | SummaryScalarFieldEnum
    having?: SummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SummaryCountAggregateInputType | true
    _avg?: SummaryAvgAggregateInputType
    _sum?: SummarySumAggregateInputType
    _min?: SummaryMinAggregateInputType
    _max?: SummaryMaxAggregateInputType
  }

  export type SummaryGroupByOutputType = {
    id: bigint
    title: string
    content: string
    moduleId: bigint
    _count: SummaryCountAggregateOutputType | null
    _avg: SummaryAvgAggregateOutputType | null
    _sum: SummarySumAggregateOutputType | null
    _min: SummaryMinAggregateOutputType | null
    _max: SummaryMaxAggregateOutputType | null
  }

  type GetSummaryGroupByPayload<T extends SummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SummaryGroupByOutputType[P]>
            : GetScalarType<T[P], SummaryGroupByOutputType[P]>
        }
      >
    >


  export type SummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    moduleId?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["summary"]>



  export type SummarySelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    moduleId?: boolean
  }

  export type SummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "moduleId", ExtArgs["result"]["summary"]>
  export type SummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $SummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Summary"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      content: string
      moduleId: bigint
    }, ExtArgs["result"]["summary"]>
    composites: {}
  }

  type SummaryGetPayload<S extends boolean | null | undefined | SummaryDefaultArgs> = $Result.GetResult<Prisma.$SummaryPayload, S>

  type SummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SummaryCountAggregateInputType | true
    }

  export interface SummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Summary'], meta: { name: 'Summary' } }
    /**
     * Find zero or one Summary that matches the filter.
     * @param {SummaryFindUniqueArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SummaryFindUniqueArgs>(args: SelectSubset<T, SummaryFindUniqueArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Summary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SummaryFindUniqueOrThrowArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, SummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Summary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindFirstArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SummaryFindFirstArgs>(args?: SelectSubset<T, SummaryFindFirstArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Summary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindFirstOrThrowArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, SummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Summaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Summaries
     * const summaries = await prisma.summary.findMany()
     * 
     * // Get first 10 Summaries
     * const summaries = await prisma.summary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const summaryWithIdOnly = await prisma.summary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SummaryFindManyArgs>(args?: SelectSubset<T, SummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Summary.
     * @param {SummaryCreateArgs} args - Arguments to create a Summary.
     * @example
     * // Create one Summary
     * const Summary = await prisma.summary.create({
     *   data: {
     *     // ... data to create a Summary
     *   }
     * })
     * 
     */
    create<T extends SummaryCreateArgs>(args: SelectSubset<T, SummaryCreateArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Summaries.
     * @param {SummaryCreateManyArgs} args - Arguments to create many Summaries.
     * @example
     * // Create many Summaries
     * const summary = await prisma.summary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SummaryCreateManyArgs>(args?: SelectSubset<T, SummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Summary.
     * @param {SummaryDeleteArgs} args - Arguments to delete one Summary.
     * @example
     * // Delete one Summary
     * const Summary = await prisma.summary.delete({
     *   where: {
     *     // ... filter to delete one Summary
     *   }
     * })
     * 
     */
    delete<T extends SummaryDeleteArgs>(args: SelectSubset<T, SummaryDeleteArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Summary.
     * @param {SummaryUpdateArgs} args - Arguments to update one Summary.
     * @example
     * // Update one Summary
     * const summary = await prisma.summary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SummaryUpdateArgs>(args: SelectSubset<T, SummaryUpdateArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Summaries.
     * @param {SummaryDeleteManyArgs} args - Arguments to filter Summaries to delete.
     * @example
     * // Delete a few Summaries
     * const { count } = await prisma.summary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SummaryDeleteManyArgs>(args?: SelectSubset<T, SummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Summaries
     * const summary = await prisma.summary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SummaryUpdateManyArgs>(args: SelectSubset<T, SummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Summary.
     * @param {SummaryUpsertArgs} args - Arguments to update or create a Summary.
     * @example
     * // Update or create a Summary
     * const summary = await prisma.summary.upsert({
     *   create: {
     *     // ... data to create a Summary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Summary we want to update
     *   }
     * })
     */
    upsert<T extends SummaryUpsertArgs>(args: SelectSubset<T, SummaryUpsertArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryCountArgs} args - Arguments to filter Summaries to count.
     * @example
     * // Count the number of Summaries
     * const count = await prisma.summary.count({
     *   where: {
     *     // ... the filter for the Summaries we want to count
     *   }
     * })
    **/
    count<T extends SummaryCountArgs>(
      args?: Subset<T, SummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SummaryAggregateArgs>(args: Subset<T, SummaryAggregateArgs>): Prisma.PrismaPromise<GetSummaryAggregateType<T>>

    /**
     * Group by Summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SummaryGroupByArgs['orderBy'] }
        : { orderBy?: SummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Summary model
   */
  readonly fields: SummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Summary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Summary model
   */
  interface SummaryFieldRefs {
    readonly id: FieldRef<"Summary", 'BigInt'>
    readonly title: FieldRef<"Summary", 'String'>
    readonly content: FieldRef<"Summary", 'String'>
    readonly moduleId: FieldRef<"Summary", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Summary findUnique
   */
  export type SummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary findUniqueOrThrow
   */
  export type SummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary findFirst
   */
  export type SummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Summaries.
     */
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary findFirstOrThrow
   */
  export type SummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Summaries.
     */
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary findMany
   */
  export type SummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summaries to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary create
   */
  export type SummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a Summary.
     */
    data: XOR<SummaryCreateInput, SummaryUncheckedCreateInput>
  }

  /**
   * Summary createMany
   */
  export type SummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Summaries.
     */
    data: SummaryCreateManyInput | SummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Summary update
   */
  export type SummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a Summary.
     */
    data: XOR<SummaryUpdateInput, SummaryUncheckedUpdateInput>
    /**
     * Choose, which Summary to update.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary updateMany
   */
  export type SummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Summaries.
     */
    data: XOR<SummaryUpdateManyMutationInput, SummaryUncheckedUpdateManyInput>
    /**
     * Filter which Summaries to update
     */
    where?: SummaryWhereInput
    /**
     * Limit how many Summaries to update.
     */
    limit?: number
  }

  /**
   * Summary upsert
   */
  export type SummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the Summary to update in case it exists.
     */
    where: SummaryWhereUniqueInput
    /**
     * In case the Summary found by the `where` argument doesn't exist, create a new Summary with this data.
     */
    create: XOR<SummaryCreateInput, SummaryUncheckedCreateInput>
    /**
     * In case the Summary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SummaryUpdateInput, SummaryUncheckedUpdateInput>
  }

  /**
   * Summary delete
   */
  export type SummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter which Summary to delete.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary deleteMany
   */
  export type SummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Summaries to delete
     */
    where?: SummaryWhereInput
    /**
     * Limit how many Summaries to delete.
     */
    limit?: number
  }

  /**
   * Summary without action
   */
  export type SummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    id: number | null
    moduleId: number | null
  }

  export type QuizSumAggregateOutputType = {
    id: bigint | null
    moduleId: bigint | null
  }

  export type QuizMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    type: $Enums.QuizType | null
    moduleId: bigint | null
  }

  export type QuizMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    type: $Enums.QuizType | null
    moduleId: bigint | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    name: number
    type: number
    moduleId: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    id?: true
    moduleId?: true
  }

  export type QuizSumAggregateInputType = {
    id?: true
    moduleId?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    moduleId?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    moduleId?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    moduleId?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: bigint
    name: string
    type: $Enums.QuizType
    moduleId: bigint
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    moduleId?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    quiz?: boolean | Quiz$quizArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>



  export type QuizSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    moduleId?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "moduleId", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    quiz?: boolean | Quiz$quizArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
      quiz: Prisma.$Quiz_ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      type: $Enums.QuizType
      moduleId: bigint
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends Quiz$quizArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$quizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Quiz_ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'BigInt'>
    readonly name: FieldRef<"Quiz", 'String'>
    readonly type: FieldRef<"Quiz", 'QuizType'>
    readonly moduleId: FieldRef<"Quiz", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.quiz
   */
  export type Quiz$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_Item
     */
    select?: Quiz_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_Item
     */
    omit?: Quiz_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_ItemInclude<ExtArgs> | null
    where?: Quiz_ItemWhereInput
    orderBy?: Quiz_ItemOrderByWithRelationInput | Quiz_ItemOrderByWithRelationInput[]
    cursor?: Quiz_ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Quiz_ItemScalarFieldEnum | Quiz_ItemScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Quiz_Item
   */

  export type AggregateQuiz_Item = {
    _count: Quiz_ItemCountAggregateOutputType | null
    _avg: Quiz_ItemAvgAggregateOutputType | null
    _sum: Quiz_ItemSumAggregateOutputType | null
    _min: Quiz_ItemMinAggregateOutputType | null
    _max: Quiz_ItemMaxAggregateOutputType | null
  }

  export type Quiz_ItemAvgAggregateOutputType = {
    id: number | null
    quizId: number | null
  }

  export type Quiz_ItemSumAggregateOutputType = {
    id: bigint | null
    quizId: bigint | null
  }

  export type Quiz_ItemMinAggregateOutputType = {
    id: bigint | null
    question: string | null
    quizId: bigint | null
  }

  export type Quiz_ItemMaxAggregateOutputType = {
    id: bigint | null
    question: string | null
    quizId: bigint | null
  }

  export type Quiz_ItemCountAggregateOutputType = {
    id: number
    question: number
    quizId: number
    _all: number
  }


  export type Quiz_ItemAvgAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type Quiz_ItemSumAggregateInputType = {
    id?: true
    quizId?: true
  }

  export type Quiz_ItemMinAggregateInputType = {
    id?: true
    question?: true
    quizId?: true
  }

  export type Quiz_ItemMaxAggregateInputType = {
    id?: true
    question?: true
    quizId?: true
  }

  export type Quiz_ItemCountAggregateInputType = {
    id?: true
    question?: true
    quizId?: true
    _all?: true
  }

  export type Quiz_ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz_Item to aggregate.
     */
    where?: Quiz_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quiz_Items to fetch.
     */
    orderBy?: Quiz_ItemOrderByWithRelationInput | Quiz_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Quiz_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quiz_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quiz_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quiz_Items
    **/
    _count?: true | Quiz_ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Quiz_ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Quiz_ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Quiz_ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Quiz_ItemMaxAggregateInputType
  }

  export type GetQuiz_ItemAggregateType<T extends Quiz_ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz_Item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz_Item[P]>
      : GetScalarType<T[P], AggregateQuiz_Item[P]>
  }




  export type Quiz_ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Quiz_ItemWhereInput
    orderBy?: Quiz_ItemOrderByWithAggregationInput | Quiz_ItemOrderByWithAggregationInput[]
    by: Quiz_ItemScalarFieldEnum[] | Quiz_ItemScalarFieldEnum
    having?: Quiz_ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Quiz_ItemCountAggregateInputType | true
    _avg?: Quiz_ItemAvgAggregateInputType
    _sum?: Quiz_ItemSumAggregateInputType
    _min?: Quiz_ItemMinAggregateInputType
    _max?: Quiz_ItemMaxAggregateInputType
  }

  export type Quiz_ItemGroupByOutputType = {
    id: bigint
    question: string
    quizId: bigint
    _count: Quiz_ItemCountAggregateOutputType | null
    _avg: Quiz_ItemAvgAggregateOutputType | null
    _sum: Quiz_ItemSumAggregateOutputType | null
    _min: Quiz_ItemMinAggregateOutputType | null
    _max: Quiz_ItemMaxAggregateOutputType | null
  }

  type GetQuiz_ItemGroupByPayload<T extends Quiz_ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Quiz_ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Quiz_ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Quiz_ItemGroupByOutputType[P]>
            : GetScalarType<T[P], Quiz_ItemGroupByOutputType[P]>
        }
      >
    >


  export type Quiz_ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    quizId?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    optionQuiz?: boolean | Quiz_Item$optionQuizArgs<ExtArgs>
    _count?: boolean | Quiz_ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz_Item"]>



  export type Quiz_ItemSelectScalar = {
    id?: boolean
    question?: boolean
    quizId?: boolean
  }

  export type Quiz_ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "quizId", ExtArgs["result"]["quiz_Item"]>
  export type Quiz_ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    optionQuiz?: boolean | Quiz_Item$optionQuizArgs<ExtArgs>
    _count?: boolean | Quiz_ItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Quiz_ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz_Item"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      optionQuiz: Prisma.$Option_QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      question: string
      quizId: bigint
    }, ExtArgs["result"]["quiz_Item"]>
    composites: {}
  }

  type Quiz_ItemGetPayload<S extends boolean | null | undefined | Quiz_ItemDefaultArgs> = $Result.GetResult<Prisma.$Quiz_ItemPayload, S>

  type Quiz_ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Quiz_ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Quiz_ItemCountAggregateInputType | true
    }

  export interface Quiz_ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz_Item'], meta: { name: 'Quiz_Item' } }
    /**
     * Find zero or one Quiz_Item that matches the filter.
     * @param {Quiz_ItemFindUniqueArgs} args - Arguments to find a Quiz_Item
     * @example
     * // Get one Quiz_Item
     * const quiz_Item = await prisma.quiz_Item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Quiz_ItemFindUniqueArgs>(args: SelectSubset<T, Quiz_ItemFindUniqueArgs<ExtArgs>>): Prisma__Quiz_ItemClient<$Result.GetResult<Prisma.$Quiz_ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz_Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Quiz_ItemFindUniqueOrThrowArgs} args - Arguments to find a Quiz_Item
     * @example
     * // Get one Quiz_Item
     * const quiz_Item = await prisma.quiz_Item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Quiz_ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, Quiz_ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Quiz_ItemClient<$Result.GetResult<Prisma.$Quiz_ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz_Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_ItemFindFirstArgs} args - Arguments to find a Quiz_Item
     * @example
     * // Get one Quiz_Item
     * const quiz_Item = await prisma.quiz_Item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Quiz_ItemFindFirstArgs>(args?: SelectSubset<T, Quiz_ItemFindFirstArgs<ExtArgs>>): Prisma__Quiz_ItemClient<$Result.GetResult<Prisma.$Quiz_ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz_Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_ItemFindFirstOrThrowArgs} args - Arguments to find a Quiz_Item
     * @example
     * // Get one Quiz_Item
     * const quiz_Item = await prisma.quiz_Item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Quiz_ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, Quiz_ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__Quiz_ItemClient<$Result.GetResult<Prisma.$Quiz_ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quiz_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quiz_Items
     * const quiz_Items = await prisma.quiz_Item.findMany()
     * 
     * // Get first 10 Quiz_Items
     * const quiz_Items = await prisma.quiz_Item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quiz_ItemWithIdOnly = await prisma.quiz_Item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Quiz_ItemFindManyArgs>(args?: SelectSubset<T, Quiz_ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Quiz_ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz_Item.
     * @param {Quiz_ItemCreateArgs} args - Arguments to create a Quiz_Item.
     * @example
     * // Create one Quiz_Item
     * const Quiz_Item = await prisma.quiz_Item.create({
     *   data: {
     *     // ... data to create a Quiz_Item
     *   }
     * })
     * 
     */
    create<T extends Quiz_ItemCreateArgs>(args: SelectSubset<T, Quiz_ItemCreateArgs<ExtArgs>>): Prisma__Quiz_ItemClient<$Result.GetResult<Prisma.$Quiz_ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quiz_Items.
     * @param {Quiz_ItemCreateManyArgs} args - Arguments to create many Quiz_Items.
     * @example
     * // Create many Quiz_Items
     * const quiz_Item = await prisma.quiz_Item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Quiz_ItemCreateManyArgs>(args?: SelectSubset<T, Quiz_ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz_Item.
     * @param {Quiz_ItemDeleteArgs} args - Arguments to delete one Quiz_Item.
     * @example
     * // Delete one Quiz_Item
     * const Quiz_Item = await prisma.quiz_Item.delete({
     *   where: {
     *     // ... filter to delete one Quiz_Item
     *   }
     * })
     * 
     */
    delete<T extends Quiz_ItemDeleteArgs>(args: SelectSubset<T, Quiz_ItemDeleteArgs<ExtArgs>>): Prisma__Quiz_ItemClient<$Result.GetResult<Prisma.$Quiz_ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz_Item.
     * @param {Quiz_ItemUpdateArgs} args - Arguments to update one Quiz_Item.
     * @example
     * // Update one Quiz_Item
     * const quiz_Item = await prisma.quiz_Item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Quiz_ItemUpdateArgs>(args: SelectSubset<T, Quiz_ItemUpdateArgs<ExtArgs>>): Prisma__Quiz_ItemClient<$Result.GetResult<Prisma.$Quiz_ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quiz_Items.
     * @param {Quiz_ItemDeleteManyArgs} args - Arguments to filter Quiz_Items to delete.
     * @example
     * // Delete a few Quiz_Items
     * const { count } = await prisma.quiz_Item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Quiz_ItemDeleteManyArgs>(args?: SelectSubset<T, Quiz_ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quiz_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quiz_Items
     * const quiz_Item = await prisma.quiz_Item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Quiz_ItemUpdateManyArgs>(args: SelectSubset<T, Quiz_ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz_Item.
     * @param {Quiz_ItemUpsertArgs} args - Arguments to update or create a Quiz_Item.
     * @example
     * // Update or create a Quiz_Item
     * const quiz_Item = await prisma.quiz_Item.upsert({
     *   create: {
     *     // ... data to create a Quiz_Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz_Item we want to update
     *   }
     * })
     */
    upsert<T extends Quiz_ItemUpsertArgs>(args: SelectSubset<T, Quiz_ItemUpsertArgs<ExtArgs>>): Prisma__Quiz_ItemClient<$Result.GetResult<Prisma.$Quiz_ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quiz_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_ItemCountArgs} args - Arguments to filter Quiz_Items to count.
     * @example
     * // Count the number of Quiz_Items
     * const count = await prisma.quiz_Item.count({
     *   where: {
     *     // ... the filter for the Quiz_Items we want to count
     *   }
     * })
    **/
    count<T extends Quiz_ItemCountArgs>(
      args?: Subset<T, Quiz_ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Quiz_ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Quiz_ItemAggregateArgs>(args: Subset<T, Quiz_ItemAggregateArgs>): Prisma.PrismaPromise<GetQuiz_ItemAggregateType<T>>

    /**
     * Group by Quiz_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quiz_ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Quiz_ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Quiz_ItemGroupByArgs['orderBy'] }
        : { orderBy?: Quiz_ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Quiz_ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuiz_ItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz_Item model
   */
  readonly fields: Quiz_ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz_Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Quiz_ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    optionQuiz<T extends Quiz_Item$optionQuizArgs<ExtArgs> = {}>(args?: Subset<T, Quiz_Item$optionQuizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Option_QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz_Item model
   */
  interface Quiz_ItemFieldRefs {
    readonly id: FieldRef<"Quiz_Item", 'BigInt'>
    readonly question: FieldRef<"Quiz_Item", 'String'>
    readonly quizId: FieldRef<"Quiz_Item", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Quiz_Item findUnique
   */
  export type Quiz_ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_Item
     */
    select?: Quiz_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_Item
     */
    omit?: Quiz_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Quiz_Item to fetch.
     */
    where: Quiz_ItemWhereUniqueInput
  }

  /**
   * Quiz_Item findUniqueOrThrow
   */
  export type Quiz_ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_Item
     */
    select?: Quiz_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_Item
     */
    omit?: Quiz_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Quiz_Item to fetch.
     */
    where: Quiz_ItemWhereUniqueInput
  }

  /**
   * Quiz_Item findFirst
   */
  export type Quiz_ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_Item
     */
    select?: Quiz_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_Item
     */
    omit?: Quiz_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Quiz_Item to fetch.
     */
    where?: Quiz_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quiz_Items to fetch.
     */
    orderBy?: Quiz_ItemOrderByWithRelationInput | Quiz_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quiz_Items.
     */
    cursor?: Quiz_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quiz_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quiz_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quiz_Items.
     */
    distinct?: Quiz_ItemScalarFieldEnum | Quiz_ItemScalarFieldEnum[]
  }

  /**
   * Quiz_Item findFirstOrThrow
   */
  export type Quiz_ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_Item
     */
    select?: Quiz_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_Item
     */
    omit?: Quiz_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Quiz_Item to fetch.
     */
    where?: Quiz_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quiz_Items to fetch.
     */
    orderBy?: Quiz_ItemOrderByWithRelationInput | Quiz_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quiz_Items.
     */
    cursor?: Quiz_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quiz_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quiz_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quiz_Items.
     */
    distinct?: Quiz_ItemScalarFieldEnum | Quiz_ItemScalarFieldEnum[]
  }

  /**
   * Quiz_Item findMany
   */
  export type Quiz_ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_Item
     */
    select?: Quiz_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_Item
     */
    omit?: Quiz_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Quiz_Items to fetch.
     */
    where?: Quiz_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quiz_Items to fetch.
     */
    orderBy?: Quiz_ItemOrderByWithRelationInput | Quiz_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quiz_Items.
     */
    cursor?: Quiz_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quiz_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quiz_Items.
     */
    skip?: number
    distinct?: Quiz_ItemScalarFieldEnum | Quiz_ItemScalarFieldEnum[]
  }

  /**
   * Quiz_Item create
   */
  export type Quiz_ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_Item
     */
    select?: Quiz_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_Item
     */
    omit?: Quiz_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz_Item.
     */
    data: XOR<Quiz_ItemCreateInput, Quiz_ItemUncheckedCreateInput>
  }

  /**
   * Quiz_Item createMany
   */
  export type Quiz_ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quiz_Items.
     */
    data: Quiz_ItemCreateManyInput | Quiz_ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz_Item update
   */
  export type Quiz_ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_Item
     */
    select?: Quiz_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_Item
     */
    omit?: Quiz_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz_Item.
     */
    data: XOR<Quiz_ItemUpdateInput, Quiz_ItemUncheckedUpdateInput>
    /**
     * Choose, which Quiz_Item to update.
     */
    where: Quiz_ItemWhereUniqueInput
  }

  /**
   * Quiz_Item updateMany
   */
  export type Quiz_ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quiz_Items.
     */
    data: XOR<Quiz_ItemUpdateManyMutationInput, Quiz_ItemUncheckedUpdateManyInput>
    /**
     * Filter which Quiz_Items to update
     */
    where?: Quiz_ItemWhereInput
    /**
     * Limit how many Quiz_Items to update.
     */
    limit?: number
  }

  /**
   * Quiz_Item upsert
   */
  export type Quiz_ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_Item
     */
    select?: Quiz_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_Item
     */
    omit?: Quiz_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz_Item to update in case it exists.
     */
    where: Quiz_ItemWhereUniqueInput
    /**
     * In case the Quiz_Item found by the `where` argument doesn't exist, create a new Quiz_Item with this data.
     */
    create: XOR<Quiz_ItemCreateInput, Quiz_ItemUncheckedCreateInput>
    /**
     * In case the Quiz_Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Quiz_ItemUpdateInput, Quiz_ItemUncheckedUpdateInput>
  }

  /**
   * Quiz_Item delete
   */
  export type Quiz_ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_Item
     */
    select?: Quiz_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_Item
     */
    omit?: Quiz_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_ItemInclude<ExtArgs> | null
    /**
     * Filter which Quiz_Item to delete.
     */
    where: Quiz_ItemWhereUniqueInput
  }

  /**
   * Quiz_Item deleteMany
   */
  export type Quiz_ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz_Items to delete
     */
    where?: Quiz_ItemWhereInput
    /**
     * Limit how many Quiz_Items to delete.
     */
    limit?: number
  }

  /**
   * Quiz_Item.optionQuiz
   */
  export type Quiz_Item$optionQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option_Quiz
     */
    select?: Option_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option_Quiz
     */
    omit?: Option_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Option_QuizInclude<ExtArgs> | null
    where?: Option_QuizWhereInput
    orderBy?: Option_QuizOrderByWithRelationInput | Option_QuizOrderByWithRelationInput[]
    cursor?: Option_QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Option_QuizScalarFieldEnum | Option_QuizScalarFieldEnum[]
  }

  /**
   * Quiz_Item without action
   */
  export type Quiz_ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz_Item
     */
    select?: Quiz_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz_Item
     */
    omit?: Quiz_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Quiz_ItemInclude<ExtArgs> | null
  }


  /**
   * Model Option_Quiz
   */

  export type AggregateOption_Quiz = {
    _count: Option_QuizCountAggregateOutputType | null
    _avg: Option_QuizAvgAggregateOutputType | null
    _sum: Option_QuizSumAggregateOutputType | null
    _min: Option_QuizMinAggregateOutputType | null
    _max: Option_QuizMaxAggregateOutputType | null
  }

  export type Option_QuizAvgAggregateOutputType = {
    id: number | null
    quizItemId: number | null
  }

  export type Option_QuizSumAggregateOutputType = {
    id: bigint | null
    quizItemId: bigint | null
  }

  export type Option_QuizMinAggregateOutputType = {
    id: bigint | null
    isCorrect: boolean | null
    quizItemId: bigint | null
  }

  export type Option_QuizMaxAggregateOutputType = {
    id: bigint | null
    isCorrect: boolean | null
    quizItemId: bigint | null
  }

  export type Option_QuizCountAggregateOutputType = {
    id: number
    isCorrect: number
    quizItemId: number
    _all: number
  }


  export type Option_QuizAvgAggregateInputType = {
    id?: true
    quizItemId?: true
  }

  export type Option_QuizSumAggregateInputType = {
    id?: true
    quizItemId?: true
  }

  export type Option_QuizMinAggregateInputType = {
    id?: true
    isCorrect?: true
    quizItemId?: true
  }

  export type Option_QuizMaxAggregateInputType = {
    id?: true
    isCorrect?: true
    quizItemId?: true
  }

  export type Option_QuizCountAggregateInputType = {
    id?: true
    isCorrect?: true
    quizItemId?: true
    _all?: true
  }

  export type Option_QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option_Quiz to aggregate.
     */
    where?: Option_QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Option_Quizs to fetch.
     */
    orderBy?: Option_QuizOrderByWithRelationInput | Option_QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Option_QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Option_Quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Option_Quizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Option_Quizs
    **/
    _count?: true | Option_QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Option_QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Option_QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Option_QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Option_QuizMaxAggregateInputType
  }

  export type GetOption_QuizAggregateType<T extends Option_QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateOption_Quiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption_Quiz[P]>
      : GetScalarType<T[P], AggregateOption_Quiz[P]>
  }




  export type Option_QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Option_QuizWhereInput
    orderBy?: Option_QuizOrderByWithAggregationInput | Option_QuizOrderByWithAggregationInput[]
    by: Option_QuizScalarFieldEnum[] | Option_QuizScalarFieldEnum
    having?: Option_QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Option_QuizCountAggregateInputType | true
    _avg?: Option_QuizAvgAggregateInputType
    _sum?: Option_QuizSumAggregateInputType
    _min?: Option_QuizMinAggregateInputType
    _max?: Option_QuizMaxAggregateInputType
  }

  export type Option_QuizGroupByOutputType = {
    id: bigint
    isCorrect: boolean
    quizItemId: bigint
    _count: Option_QuizCountAggregateOutputType | null
    _avg: Option_QuizAvgAggregateOutputType | null
    _sum: Option_QuizSumAggregateOutputType | null
    _min: Option_QuizMinAggregateOutputType | null
    _max: Option_QuizMaxAggregateOutputType | null
  }

  type GetOption_QuizGroupByPayload<T extends Option_QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Option_QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Option_QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Option_QuizGroupByOutputType[P]>
            : GetScalarType<T[P], Option_QuizGroupByOutputType[P]>
        }
      >
    >


  export type Option_QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isCorrect?: boolean
    quizItemId?: boolean
    quizItem?: boolean | Quiz_ItemDefaultArgs<ExtArgs>
    answeredQuiz?: boolean | Option_Quiz$answeredQuizArgs<ExtArgs>
    _count?: boolean | Option_QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option_Quiz"]>



  export type Option_QuizSelectScalar = {
    id?: boolean
    isCorrect?: boolean
    quizItemId?: boolean
  }

  export type Option_QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isCorrect" | "quizItemId", ExtArgs["result"]["option_Quiz"]>
  export type Option_QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizItem?: boolean | Quiz_ItemDefaultArgs<ExtArgs>
    answeredQuiz?: boolean | Option_Quiz$answeredQuizArgs<ExtArgs>
    _count?: boolean | Option_QuizCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Option_QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option_Quiz"
    objects: {
      quizItem: Prisma.$Quiz_ItemPayload<ExtArgs>
      answeredQuiz: Prisma.$Answered_QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      isCorrect: boolean
      quizItemId: bigint
    }, ExtArgs["result"]["option_Quiz"]>
    composites: {}
  }

  type Option_QuizGetPayload<S extends boolean | null | undefined | Option_QuizDefaultArgs> = $Result.GetResult<Prisma.$Option_QuizPayload, S>

  type Option_QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Option_QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Option_QuizCountAggregateInputType | true
    }

  export interface Option_QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option_Quiz'], meta: { name: 'Option_Quiz' } }
    /**
     * Find zero or one Option_Quiz that matches the filter.
     * @param {Option_QuizFindUniqueArgs} args - Arguments to find a Option_Quiz
     * @example
     * // Get one Option_Quiz
     * const option_Quiz = await prisma.option_Quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Option_QuizFindUniqueArgs>(args: SelectSubset<T, Option_QuizFindUniqueArgs<ExtArgs>>): Prisma__Option_QuizClient<$Result.GetResult<Prisma.$Option_QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Option_Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Option_QuizFindUniqueOrThrowArgs} args - Arguments to find a Option_Quiz
     * @example
     * // Get one Option_Quiz
     * const option_Quiz = await prisma.option_Quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Option_QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, Option_QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Option_QuizClient<$Result.GetResult<Prisma.$Option_QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option_Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Option_QuizFindFirstArgs} args - Arguments to find a Option_Quiz
     * @example
     * // Get one Option_Quiz
     * const option_Quiz = await prisma.option_Quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Option_QuizFindFirstArgs>(args?: SelectSubset<T, Option_QuizFindFirstArgs<ExtArgs>>): Prisma__Option_QuizClient<$Result.GetResult<Prisma.$Option_QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option_Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Option_QuizFindFirstOrThrowArgs} args - Arguments to find a Option_Quiz
     * @example
     * // Get one Option_Quiz
     * const option_Quiz = await prisma.option_Quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Option_QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, Option_QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__Option_QuizClient<$Result.GetResult<Prisma.$Option_QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Option_Quizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Option_QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Option_Quizs
     * const option_Quizs = await prisma.option_Quiz.findMany()
     * 
     * // Get first 10 Option_Quizs
     * const option_Quizs = await prisma.option_Quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const option_QuizWithIdOnly = await prisma.option_Quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Option_QuizFindManyArgs>(args?: SelectSubset<T, Option_QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Option_QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Option_Quiz.
     * @param {Option_QuizCreateArgs} args - Arguments to create a Option_Quiz.
     * @example
     * // Create one Option_Quiz
     * const Option_Quiz = await prisma.option_Quiz.create({
     *   data: {
     *     // ... data to create a Option_Quiz
     *   }
     * })
     * 
     */
    create<T extends Option_QuizCreateArgs>(args: SelectSubset<T, Option_QuizCreateArgs<ExtArgs>>): Prisma__Option_QuizClient<$Result.GetResult<Prisma.$Option_QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Option_Quizs.
     * @param {Option_QuizCreateManyArgs} args - Arguments to create many Option_Quizs.
     * @example
     * // Create many Option_Quizs
     * const option_Quiz = await prisma.option_Quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Option_QuizCreateManyArgs>(args?: SelectSubset<T, Option_QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Option_Quiz.
     * @param {Option_QuizDeleteArgs} args - Arguments to delete one Option_Quiz.
     * @example
     * // Delete one Option_Quiz
     * const Option_Quiz = await prisma.option_Quiz.delete({
     *   where: {
     *     // ... filter to delete one Option_Quiz
     *   }
     * })
     * 
     */
    delete<T extends Option_QuizDeleteArgs>(args: SelectSubset<T, Option_QuizDeleteArgs<ExtArgs>>): Prisma__Option_QuizClient<$Result.GetResult<Prisma.$Option_QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Option_Quiz.
     * @param {Option_QuizUpdateArgs} args - Arguments to update one Option_Quiz.
     * @example
     * // Update one Option_Quiz
     * const option_Quiz = await prisma.option_Quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Option_QuizUpdateArgs>(args: SelectSubset<T, Option_QuizUpdateArgs<ExtArgs>>): Prisma__Option_QuizClient<$Result.GetResult<Prisma.$Option_QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Option_Quizs.
     * @param {Option_QuizDeleteManyArgs} args - Arguments to filter Option_Quizs to delete.
     * @example
     * // Delete a few Option_Quizs
     * const { count } = await prisma.option_Quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Option_QuizDeleteManyArgs>(args?: SelectSubset<T, Option_QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Option_Quizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Option_QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Option_Quizs
     * const option_Quiz = await prisma.option_Quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Option_QuizUpdateManyArgs>(args: SelectSubset<T, Option_QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Option_Quiz.
     * @param {Option_QuizUpsertArgs} args - Arguments to update or create a Option_Quiz.
     * @example
     * // Update or create a Option_Quiz
     * const option_Quiz = await prisma.option_Quiz.upsert({
     *   create: {
     *     // ... data to create a Option_Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option_Quiz we want to update
     *   }
     * })
     */
    upsert<T extends Option_QuizUpsertArgs>(args: SelectSubset<T, Option_QuizUpsertArgs<ExtArgs>>): Prisma__Option_QuizClient<$Result.GetResult<Prisma.$Option_QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Option_Quizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Option_QuizCountArgs} args - Arguments to filter Option_Quizs to count.
     * @example
     * // Count the number of Option_Quizs
     * const count = await prisma.option_Quiz.count({
     *   where: {
     *     // ... the filter for the Option_Quizs we want to count
     *   }
     * })
    **/
    count<T extends Option_QuizCountArgs>(
      args?: Subset<T, Option_QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Option_QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option_Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Option_QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Option_QuizAggregateArgs>(args: Subset<T, Option_QuizAggregateArgs>): Prisma.PrismaPromise<GetOption_QuizAggregateType<T>>

    /**
     * Group by Option_Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Option_QuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Option_QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Option_QuizGroupByArgs['orderBy'] }
        : { orderBy?: Option_QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Option_QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOption_QuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option_Quiz model
   */
  readonly fields: Option_QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option_Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Option_QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizItem<T extends Quiz_ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Quiz_ItemDefaultArgs<ExtArgs>>): Prisma__Quiz_ItemClient<$Result.GetResult<Prisma.$Quiz_ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answeredQuiz<T extends Option_Quiz$answeredQuizArgs<ExtArgs> = {}>(args?: Subset<T, Option_Quiz$answeredQuizArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Answered_QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Option_Quiz model
   */
  interface Option_QuizFieldRefs {
    readonly id: FieldRef<"Option_Quiz", 'BigInt'>
    readonly isCorrect: FieldRef<"Option_Quiz", 'Boolean'>
    readonly quizItemId: FieldRef<"Option_Quiz", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Option_Quiz findUnique
   */
  export type Option_QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option_Quiz
     */
    select?: Option_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option_Quiz
     */
    omit?: Option_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Option_QuizInclude<ExtArgs> | null
    /**
     * Filter, which Option_Quiz to fetch.
     */
    where: Option_QuizWhereUniqueInput
  }

  /**
   * Option_Quiz findUniqueOrThrow
   */
  export type Option_QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option_Quiz
     */
    select?: Option_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option_Quiz
     */
    omit?: Option_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Option_QuizInclude<ExtArgs> | null
    /**
     * Filter, which Option_Quiz to fetch.
     */
    where: Option_QuizWhereUniqueInput
  }

  /**
   * Option_Quiz findFirst
   */
  export type Option_QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option_Quiz
     */
    select?: Option_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option_Quiz
     */
    omit?: Option_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Option_QuizInclude<ExtArgs> | null
    /**
     * Filter, which Option_Quiz to fetch.
     */
    where?: Option_QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Option_Quizs to fetch.
     */
    orderBy?: Option_QuizOrderByWithRelationInput | Option_QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Option_Quizs.
     */
    cursor?: Option_QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Option_Quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Option_Quizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Option_Quizs.
     */
    distinct?: Option_QuizScalarFieldEnum | Option_QuizScalarFieldEnum[]
  }

  /**
   * Option_Quiz findFirstOrThrow
   */
  export type Option_QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option_Quiz
     */
    select?: Option_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option_Quiz
     */
    omit?: Option_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Option_QuizInclude<ExtArgs> | null
    /**
     * Filter, which Option_Quiz to fetch.
     */
    where?: Option_QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Option_Quizs to fetch.
     */
    orderBy?: Option_QuizOrderByWithRelationInput | Option_QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Option_Quizs.
     */
    cursor?: Option_QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Option_Quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Option_Quizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Option_Quizs.
     */
    distinct?: Option_QuizScalarFieldEnum | Option_QuizScalarFieldEnum[]
  }

  /**
   * Option_Quiz findMany
   */
  export type Option_QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option_Quiz
     */
    select?: Option_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option_Quiz
     */
    omit?: Option_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Option_QuizInclude<ExtArgs> | null
    /**
     * Filter, which Option_Quizs to fetch.
     */
    where?: Option_QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Option_Quizs to fetch.
     */
    orderBy?: Option_QuizOrderByWithRelationInput | Option_QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Option_Quizs.
     */
    cursor?: Option_QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Option_Quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Option_Quizs.
     */
    skip?: number
    distinct?: Option_QuizScalarFieldEnum | Option_QuizScalarFieldEnum[]
  }

  /**
   * Option_Quiz create
   */
  export type Option_QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option_Quiz
     */
    select?: Option_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option_Quiz
     */
    omit?: Option_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Option_QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Option_Quiz.
     */
    data: XOR<Option_QuizCreateInput, Option_QuizUncheckedCreateInput>
  }

  /**
   * Option_Quiz createMany
   */
  export type Option_QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Option_Quizs.
     */
    data: Option_QuizCreateManyInput | Option_QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Option_Quiz update
   */
  export type Option_QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option_Quiz
     */
    select?: Option_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option_Quiz
     */
    omit?: Option_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Option_QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Option_Quiz.
     */
    data: XOR<Option_QuizUpdateInput, Option_QuizUncheckedUpdateInput>
    /**
     * Choose, which Option_Quiz to update.
     */
    where: Option_QuizWhereUniqueInput
  }

  /**
   * Option_Quiz updateMany
   */
  export type Option_QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Option_Quizs.
     */
    data: XOR<Option_QuizUpdateManyMutationInput, Option_QuizUncheckedUpdateManyInput>
    /**
     * Filter which Option_Quizs to update
     */
    where?: Option_QuizWhereInput
    /**
     * Limit how many Option_Quizs to update.
     */
    limit?: number
  }

  /**
   * Option_Quiz upsert
   */
  export type Option_QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option_Quiz
     */
    select?: Option_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option_Quiz
     */
    omit?: Option_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Option_QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Option_Quiz to update in case it exists.
     */
    where: Option_QuizWhereUniqueInput
    /**
     * In case the Option_Quiz found by the `where` argument doesn't exist, create a new Option_Quiz with this data.
     */
    create: XOR<Option_QuizCreateInput, Option_QuizUncheckedCreateInput>
    /**
     * In case the Option_Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Option_QuizUpdateInput, Option_QuizUncheckedUpdateInput>
  }

  /**
   * Option_Quiz delete
   */
  export type Option_QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option_Quiz
     */
    select?: Option_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option_Quiz
     */
    omit?: Option_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Option_QuizInclude<ExtArgs> | null
    /**
     * Filter which Option_Quiz to delete.
     */
    where: Option_QuizWhereUniqueInput
  }

  /**
   * Option_Quiz deleteMany
   */
  export type Option_QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option_Quizs to delete
     */
    where?: Option_QuizWhereInput
    /**
     * Limit how many Option_Quizs to delete.
     */
    limit?: number
  }

  /**
   * Option_Quiz.answeredQuiz
   */
  export type Option_Quiz$answeredQuizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answered_Quiz
     */
    select?: Answered_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answered_Quiz
     */
    omit?: Answered_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Answered_QuizInclude<ExtArgs> | null
    where?: Answered_QuizWhereInput
    orderBy?: Answered_QuizOrderByWithRelationInput | Answered_QuizOrderByWithRelationInput[]
    cursor?: Answered_QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Answered_QuizScalarFieldEnum | Answered_QuizScalarFieldEnum[]
  }

  /**
   * Option_Quiz without action
   */
  export type Option_QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option_Quiz
     */
    select?: Option_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option_Quiz
     */
    omit?: Option_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Option_QuizInclude<ExtArgs> | null
  }


  /**
   * Model Answered_Quiz
   */

  export type AggregateAnswered_Quiz = {
    _count: Answered_QuizCountAggregateOutputType | null
    _avg: Answered_QuizAvgAggregateOutputType | null
    _sum: Answered_QuizSumAggregateOutputType | null
    _min: Answered_QuizMinAggregateOutputType | null
    _max: Answered_QuizMaxAggregateOutputType | null
  }

  export type Answered_QuizAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    optionQuizId: number | null
  }

  export type Answered_QuizSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    optionQuizId: bigint | null
  }

  export type Answered_QuizMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    optionQuizId: bigint | null
  }

  export type Answered_QuizMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    optionQuizId: bigint | null
  }

  export type Answered_QuizCountAggregateOutputType = {
    id: number
    userId: number
    optionQuizId: number
    _all: number
  }


  export type Answered_QuizAvgAggregateInputType = {
    id?: true
    userId?: true
    optionQuizId?: true
  }

  export type Answered_QuizSumAggregateInputType = {
    id?: true
    userId?: true
    optionQuizId?: true
  }

  export type Answered_QuizMinAggregateInputType = {
    id?: true
    userId?: true
    optionQuizId?: true
  }

  export type Answered_QuizMaxAggregateInputType = {
    id?: true
    userId?: true
    optionQuizId?: true
  }

  export type Answered_QuizCountAggregateInputType = {
    id?: true
    userId?: true
    optionQuizId?: true
    _all?: true
  }

  export type Answered_QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answered_Quiz to aggregate.
     */
    where?: Answered_QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answered_Quizs to fetch.
     */
    orderBy?: Answered_QuizOrderByWithRelationInput | Answered_QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Answered_QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answered_Quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answered_Quizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answered_Quizs
    **/
    _count?: true | Answered_QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Answered_QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Answered_QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Answered_QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Answered_QuizMaxAggregateInputType
  }

  export type GetAnswered_QuizAggregateType<T extends Answered_QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswered_Quiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswered_Quiz[P]>
      : GetScalarType<T[P], AggregateAnswered_Quiz[P]>
  }




  export type Answered_QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Answered_QuizWhereInput
    orderBy?: Answered_QuizOrderByWithAggregationInput | Answered_QuizOrderByWithAggregationInput[]
    by: Answered_QuizScalarFieldEnum[] | Answered_QuizScalarFieldEnum
    having?: Answered_QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Answered_QuizCountAggregateInputType | true
    _avg?: Answered_QuizAvgAggregateInputType
    _sum?: Answered_QuizSumAggregateInputType
    _min?: Answered_QuizMinAggregateInputType
    _max?: Answered_QuizMaxAggregateInputType
  }

  export type Answered_QuizGroupByOutputType = {
    id: bigint
    userId: bigint
    optionQuizId: bigint
    _count: Answered_QuizCountAggregateOutputType | null
    _avg: Answered_QuizAvgAggregateOutputType | null
    _sum: Answered_QuizSumAggregateOutputType | null
    _min: Answered_QuizMinAggregateOutputType | null
    _max: Answered_QuizMaxAggregateOutputType | null
  }

  type GetAnswered_QuizGroupByPayload<T extends Answered_QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Answered_QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Answered_QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Answered_QuizGroupByOutputType[P]>
            : GetScalarType<T[P], Answered_QuizGroupByOutputType[P]>
        }
      >
    >


  export type Answered_QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    optionQuizId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    optionQuiz?: boolean | Option_QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answered_Quiz"]>



  export type Answered_QuizSelectScalar = {
    id?: boolean
    userId?: boolean
    optionQuizId?: boolean
  }

  export type Answered_QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "optionQuizId", ExtArgs["result"]["answered_Quiz"]>
  export type Answered_QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    optionQuiz?: boolean | Option_QuizDefaultArgs<ExtArgs>
  }

  export type $Answered_QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answered_Quiz"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      optionQuiz: Prisma.$Option_QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      optionQuizId: bigint
    }, ExtArgs["result"]["answered_Quiz"]>
    composites: {}
  }

  type Answered_QuizGetPayload<S extends boolean | null | undefined | Answered_QuizDefaultArgs> = $Result.GetResult<Prisma.$Answered_QuizPayload, S>

  type Answered_QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Answered_QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Answered_QuizCountAggregateInputType | true
    }

  export interface Answered_QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answered_Quiz'], meta: { name: 'Answered_Quiz' } }
    /**
     * Find zero or one Answered_Quiz that matches the filter.
     * @param {Answered_QuizFindUniqueArgs} args - Arguments to find a Answered_Quiz
     * @example
     * // Get one Answered_Quiz
     * const answered_Quiz = await prisma.answered_Quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Answered_QuizFindUniqueArgs>(args: SelectSubset<T, Answered_QuizFindUniqueArgs<ExtArgs>>): Prisma__Answered_QuizClient<$Result.GetResult<Prisma.$Answered_QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answered_Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Answered_QuizFindUniqueOrThrowArgs} args - Arguments to find a Answered_Quiz
     * @example
     * // Get one Answered_Quiz
     * const answered_Quiz = await prisma.answered_Quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Answered_QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, Answered_QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Answered_QuizClient<$Result.GetResult<Prisma.$Answered_QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answered_Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Answered_QuizFindFirstArgs} args - Arguments to find a Answered_Quiz
     * @example
     * // Get one Answered_Quiz
     * const answered_Quiz = await prisma.answered_Quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Answered_QuizFindFirstArgs>(args?: SelectSubset<T, Answered_QuizFindFirstArgs<ExtArgs>>): Prisma__Answered_QuizClient<$Result.GetResult<Prisma.$Answered_QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answered_Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Answered_QuizFindFirstOrThrowArgs} args - Arguments to find a Answered_Quiz
     * @example
     * // Get one Answered_Quiz
     * const answered_Quiz = await prisma.answered_Quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Answered_QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, Answered_QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__Answered_QuizClient<$Result.GetResult<Prisma.$Answered_QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answered_Quizs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Answered_QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answered_Quizs
     * const answered_Quizs = await prisma.answered_Quiz.findMany()
     * 
     * // Get first 10 Answered_Quizs
     * const answered_Quizs = await prisma.answered_Quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answered_QuizWithIdOnly = await prisma.answered_Quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Answered_QuizFindManyArgs>(args?: SelectSubset<T, Answered_QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Answered_QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answered_Quiz.
     * @param {Answered_QuizCreateArgs} args - Arguments to create a Answered_Quiz.
     * @example
     * // Create one Answered_Quiz
     * const Answered_Quiz = await prisma.answered_Quiz.create({
     *   data: {
     *     // ... data to create a Answered_Quiz
     *   }
     * })
     * 
     */
    create<T extends Answered_QuizCreateArgs>(args: SelectSubset<T, Answered_QuizCreateArgs<ExtArgs>>): Prisma__Answered_QuizClient<$Result.GetResult<Prisma.$Answered_QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answered_Quizs.
     * @param {Answered_QuizCreateManyArgs} args - Arguments to create many Answered_Quizs.
     * @example
     * // Create many Answered_Quizs
     * const answered_Quiz = await prisma.answered_Quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Answered_QuizCreateManyArgs>(args?: SelectSubset<T, Answered_QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Answered_Quiz.
     * @param {Answered_QuizDeleteArgs} args - Arguments to delete one Answered_Quiz.
     * @example
     * // Delete one Answered_Quiz
     * const Answered_Quiz = await prisma.answered_Quiz.delete({
     *   where: {
     *     // ... filter to delete one Answered_Quiz
     *   }
     * })
     * 
     */
    delete<T extends Answered_QuizDeleteArgs>(args: SelectSubset<T, Answered_QuizDeleteArgs<ExtArgs>>): Prisma__Answered_QuizClient<$Result.GetResult<Prisma.$Answered_QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answered_Quiz.
     * @param {Answered_QuizUpdateArgs} args - Arguments to update one Answered_Quiz.
     * @example
     * // Update one Answered_Quiz
     * const answered_Quiz = await prisma.answered_Quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Answered_QuizUpdateArgs>(args: SelectSubset<T, Answered_QuizUpdateArgs<ExtArgs>>): Prisma__Answered_QuizClient<$Result.GetResult<Prisma.$Answered_QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answered_Quizs.
     * @param {Answered_QuizDeleteManyArgs} args - Arguments to filter Answered_Quizs to delete.
     * @example
     * // Delete a few Answered_Quizs
     * const { count } = await prisma.answered_Quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Answered_QuizDeleteManyArgs>(args?: SelectSubset<T, Answered_QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answered_Quizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Answered_QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answered_Quizs
     * const answered_Quiz = await prisma.answered_Quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Answered_QuizUpdateManyArgs>(args: SelectSubset<T, Answered_QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Answered_Quiz.
     * @param {Answered_QuizUpsertArgs} args - Arguments to update or create a Answered_Quiz.
     * @example
     * // Update or create a Answered_Quiz
     * const answered_Quiz = await prisma.answered_Quiz.upsert({
     *   create: {
     *     // ... data to create a Answered_Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answered_Quiz we want to update
     *   }
     * })
     */
    upsert<T extends Answered_QuizUpsertArgs>(args: SelectSubset<T, Answered_QuizUpsertArgs<ExtArgs>>): Prisma__Answered_QuizClient<$Result.GetResult<Prisma.$Answered_QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answered_Quizs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Answered_QuizCountArgs} args - Arguments to filter Answered_Quizs to count.
     * @example
     * // Count the number of Answered_Quizs
     * const count = await prisma.answered_Quiz.count({
     *   where: {
     *     // ... the filter for the Answered_Quizs we want to count
     *   }
     * })
    **/
    count<T extends Answered_QuizCountArgs>(
      args?: Subset<T, Answered_QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Answered_QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answered_Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Answered_QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Answered_QuizAggregateArgs>(args: Subset<T, Answered_QuizAggregateArgs>): Prisma.PrismaPromise<GetAnswered_QuizAggregateType<T>>

    /**
     * Group by Answered_Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Answered_QuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Answered_QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Answered_QuizGroupByArgs['orderBy'] }
        : { orderBy?: Answered_QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Answered_QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswered_QuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answered_Quiz model
   */
  readonly fields: Answered_QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answered_Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Answered_QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    optionQuiz<T extends Option_QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Option_QuizDefaultArgs<ExtArgs>>): Prisma__Option_QuizClient<$Result.GetResult<Prisma.$Option_QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Answered_Quiz model
   */
  interface Answered_QuizFieldRefs {
    readonly id: FieldRef<"Answered_Quiz", 'BigInt'>
    readonly userId: FieldRef<"Answered_Quiz", 'BigInt'>
    readonly optionQuizId: FieldRef<"Answered_Quiz", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Answered_Quiz findUnique
   */
  export type Answered_QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answered_Quiz
     */
    select?: Answered_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answered_Quiz
     */
    omit?: Answered_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Answered_QuizInclude<ExtArgs> | null
    /**
     * Filter, which Answered_Quiz to fetch.
     */
    where: Answered_QuizWhereUniqueInput
  }

  /**
   * Answered_Quiz findUniqueOrThrow
   */
  export type Answered_QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answered_Quiz
     */
    select?: Answered_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answered_Quiz
     */
    omit?: Answered_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Answered_QuizInclude<ExtArgs> | null
    /**
     * Filter, which Answered_Quiz to fetch.
     */
    where: Answered_QuizWhereUniqueInput
  }

  /**
   * Answered_Quiz findFirst
   */
  export type Answered_QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answered_Quiz
     */
    select?: Answered_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answered_Quiz
     */
    omit?: Answered_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Answered_QuizInclude<ExtArgs> | null
    /**
     * Filter, which Answered_Quiz to fetch.
     */
    where?: Answered_QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answered_Quizs to fetch.
     */
    orderBy?: Answered_QuizOrderByWithRelationInput | Answered_QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answered_Quizs.
     */
    cursor?: Answered_QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answered_Quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answered_Quizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answered_Quizs.
     */
    distinct?: Answered_QuizScalarFieldEnum | Answered_QuizScalarFieldEnum[]
  }

  /**
   * Answered_Quiz findFirstOrThrow
   */
  export type Answered_QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answered_Quiz
     */
    select?: Answered_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answered_Quiz
     */
    omit?: Answered_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Answered_QuizInclude<ExtArgs> | null
    /**
     * Filter, which Answered_Quiz to fetch.
     */
    where?: Answered_QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answered_Quizs to fetch.
     */
    orderBy?: Answered_QuizOrderByWithRelationInput | Answered_QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answered_Quizs.
     */
    cursor?: Answered_QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answered_Quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answered_Quizs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answered_Quizs.
     */
    distinct?: Answered_QuizScalarFieldEnum | Answered_QuizScalarFieldEnum[]
  }

  /**
   * Answered_Quiz findMany
   */
  export type Answered_QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answered_Quiz
     */
    select?: Answered_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answered_Quiz
     */
    omit?: Answered_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Answered_QuizInclude<ExtArgs> | null
    /**
     * Filter, which Answered_Quizs to fetch.
     */
    where?: Answered_QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answered_Quizs to fetch.
     */
    orderBy?: Answered_QuizOrderByWithRelationInput | Answered_QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answered_Quizs.
     */
    cursor?: Answered_QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answered_Quizs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answered_Quizs.
     */
    skip?: number
    distinct?: Answered_QuizScalarFieldEnum | Answered_QuizScalarFieldEnum[]
  }

  /**
   * Answered_Quiz create
   */
  export type Answered_QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answered_Quiz
     */
    select?: Answered_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answered_Quiz
     */
    omit?: Answered_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Answered_QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Answered_Quiz.
     */
    data: XOR<Answered_QuizCreateInput, Answered_QuizUncheckedCreateInput>
  }

  /**
   * Answered_Quiz createMany
   */
  export type Answered_QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answered_Quizs.
     */
    data: Answered_QuizCreateManyInput | Answered_QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answered_Quiz update
   */
  export type Answered_QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answered_Quiz
     */
    select?: Answered_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answered_Quiz
     */
    omit?: Answered_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Answered_QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Answered_Quiz.
     */
    data: XOR<Answered_QuizUpdateInput, Answered_QuizUncheckedUpdateInput>
    /**
     * Choose, which Answered_Quiz to update.
     */
    where: Answered_QuizWhereUniqueInput
  }

  /**
   * Answered_Quiz updateMany
   */
  export type Answered_QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answered_Quizs.
     */
    data: XOR<Answered_QuizUpdateManyMutationInput, Answered_QuizUncheckedUpdateManyInput>
    /**
     * Filter which Answered_Quizs to update
     */
    where?: Answered_QuizWhereInput
    /**
     * Limit how many Answered_Quizs to update.
     */
    limit?: number
  }

  /**
   * Answered_Quiz upsert
   */
  export type Answered_QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answered_Quiz
     */
    select?: Answered_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answered_Quiz
     */
    omit?: Answered_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Answered_QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Answered_Quiz to update in case it exists.
     */
    where: Answered_QuizWhereUniqueInput
    /**
     * In case the Answered_Quiz found by the `where` argument doesn't exist, create a new Answered_Quiz with this data.
     */
    create: XOR<Answered_QuizCreateInput, Answered_QuizUncheckedCreateInput>
    /**
     * In case the Answered_Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Answered_QuizUpdateInput, Answered_QuizUncheckedUpdateInput>
  }

  /**
   * Answered_Quiz delete
   */
  export type Answered_QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answered_Quiz
     */
    select?: Answered_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answered_Quiz
     */
    omit?: Answered_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Answered_QuizInclude<ExtArgs> | null
    /**
     * Filter which Answered_Quiz to delete.
     */
    where: Answered_QuizWhereUniqueInput
  }

  /**
   * Answered_Quiz deleteMany
   */
  export type Answered_QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answered_Quizs to delete
     */
    where?: Answered_QuizWhereInput
    /**
     * Limit how many Answered_Quizs to delete.
     */
    limit?: number
  }

  /**
   * Answered_Quiz without action
   */
  export type Answered_QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answered_Quiz
     */
    select?: Answered_QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answered_Quiz
     */
    omit?: Answered_QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Answered_QuizInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    isActive: 'isActive',
    verifyToken: 'verifyToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TutorScalarFieldEnum: {
    id: 'id',
    avatar: 'avatar',
    name: 'name',
    position: 'position',
    company: 'company',
    experience: 'experience'
  };

  export type TutorScalarFieldEnum = (typeof TutorScalarFieldEnum)[keyof typeof TutorScalarFieldEnum]


  export const Category_ClassScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Category_ClassScalarFieldEnum = (typeof Category_ClassScalarFieldEnum)[keyof typeof Category_ClassScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image: 'image',
    description: 'description',
    tutorId: 'tutorId',
    categoryClassId: 'categoryClassId'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const My_ClassScalarFieldEnum: {
    id: 'id',
    status: 'status',
    progress: 'progress',
    totalModule: 'totalModule',
    totalTime: 'totalTime',
    userId: 'userId',
    classId: 'classId'
  };

  export type My_ClassScalarFieldEnum = (typeof My_ClassScalarFieldEnum)[keyof typeof My_ClassScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    totalPayment: 'totalPayment',
    totalPrice: 'totalPrice',
    userId: 'userId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    price: 'price',
    paymentId: 'paymentId',
    ClassId: 'ClassId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    note: 'note',
    number: 'number',
    classId: 'classId'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    video_url: 'video_url',
    description: 'description',
    moduleId: 'moduleId'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const SummaryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    moduleId: 'moduleId'
  };

  export type SummaryScalarFieldEnum = (typeof SummaryScalarFieldEnum)[keyof typeof SummaryScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    moduleId: 'moduleId'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const Quiz_ItemScalarFieldEnum: {
    id: 'id',
    question: 'question',
    quizId: 'quizId'
  };

  export type Quiz_ItemScalarFieldEnum = (typeof Quiz_ItemScalarFieldEnum)[keyof typeof Quiz_ItemScalarFieldEnum]


  export const Option_QuizScalarFieldEnum: {
    id: 'id',
    isCorrect: 'isCorrect',
    quizItemId: 'quizItemId'
  };

  export type Option_QuizScalarFieldEnum = (typeof Option_QuizScalarFieldEnum)[keyof typeof Option_QuizScalarFieldEnum]


  export const Answered_QuizScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    optionQuizId: 'optionQuizId'
  };

  export type Answered_QuizScalarFieldEnum = (typeof Answered_QuizScalarFieldEnum)[keyof typeof Answered_QuizScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    verifyToken: 'verifyToken'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TutorOrderByRelevanceFieldEnum: {
    avatar: 'avatar',
    name: 'name',
    position: 'position',
    company: 'company',
    experience: 'experience'
  };

  export type TutorOrderByRelevanceFieldEnum = (typeof TutorOrderByRelevanceFieldEnum)[keyof typeof TutorOrderByRelevanceFieldEnum]


  export const Category_ClassOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type Category_ClassOrderByRelevanceFieldEnum = (typeof Category_ClassOrderByRelevanceFieldEnum)[keyof typeof Category_ClassOrderByRelevanceFieldEnum]


  export const ClassOrderByRelevanceFieldEnum: {
    title: 'title',
    image: 'image',
    description: 'description'
  };

  export type ClassOrderByRelevanceFieldEnum = (typeof ClassOrderByRelevanceFieldEnum)[keyof typeof ClassOrderByRelevanceFieldEnum]


  export const ModuleOrderByRelevanceFieldEnum: {
    name: 'name',
    note: 'note'
  };

  export type ModuleOrderByRelevanceFieldEnum = (typeof ModuleOrderByRelevanceFieldEnum)[keyof typeof ModuleOrderByRelevanceFieldEnum]


  export const VideoOrderByRelevanceFieldEnum: {
    name: 'name',
    video_url: 'video_url',
    description: 'description'
  };

  export type VideoOrderByRelevanceFieldEnum = (typeof VideoOrderByRelevanceFieldEnum)[keyof typeof VideoOrderByRelevanceFieldEnum]


  export const SummaryOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type SummaryOrderByRelevanceFieldEnum = (typeof SummaryOrderByRelevanceFieldEnum)[keyof typeof SummaryOrderByRelevanceFieldEnum]


  export const QuizOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type QuizOrderByRelevanceFieldEnum = (typeof QuizOrderByRelevanceFieldEnum)[keyof typeof QuizOrderByRelevanceFieldEnum]


  export const Quiz_ItemOrderByRelevanceFieldEnum: {
    question: 'question'
  };

  export type Quiz_ItemOrderByRelevanceFieldEnum = (typeof Quiz_ItemOrderByRelevanceFieldEnum)[keyof typeof Quiz_ItemOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'ModuleType'
   */
  export type EnumModuleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModuleType'>
    


  /**
   * Reference to a field of type 'QuizType'
   */
  export type EnumQuizTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuizType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    verifyToken?: StringNullableFilter<"User"> | string | null
    answeredQuiz?: Answered_QuizListRelationFilter
    myClass?: My_ClassListRelationFilter
    payment?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    verifyToken?: SortOrderInput | SortOrder
    answeredQuiz?: Answered_QuizOrderByRelationAggregateInput
    myClass?: My_ClassOrderByRelationAggregateInput
    payment?: PaymentOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    verifyToken?: StringNullableFilter<"User"> | string | null
    answeredQuiz?: Answered_QuizListRelationFilter
    myClass?: My_ClassListRelationFilter
    payment?: PaymentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    verifyToken?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    verifyToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TutorWhereInput = {
    AND?: TutorWhereInput | TutorWhereInput[]
    OR?: TutorWhereInput[]
    NOT?: TutorWhereInput | TutorWhereInput[]
    id?: BigIntFilter<"Tutor"> | bigint | number
    avatar?: StringNullableFilter<"Tutor"> | string | null
    name?: StringFilter<"Tutor"> | string
    position?: StringFilter<"Tutor"> | string
    company?: StringFilter<"Tutor"> | string
    experience?: StringFilter<"Tutor"> | string
    class?: ClassListRelationFilter
  }

  export type TutorOrderByWithRelationInput = {
    id?: SortOrder
    avatar?: SortOrderInput | SortOrder
    name?: SortOrder
    position?: SortOrder
    company?: SortOrder
    experience?: SortOrder
    class?: ClassOrderByRelationAggregateInput
    _relevance?: TutorOrderByRelevanceInput
  }

  export type TutorWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: TutorWhereInput | TutorWhereInput[]
    OR?: TutorWhereInput[]
    NOT?: TutorWhereInput | TutorWhereInput[]
    avatar?: StringNullableFilter<"Tutor"> | string | null
    name?: StringFilter<"Tutor"> | string
    position?: StringFilter<"Tutor"> | string
    company?: StringFilter<"Tutor"> | string
    experience?: StringFilter<"Tutor"> | string
    class?: ClassListRelationFilter
  }, "id">

  export type TutorOrderByWithAggregationInput = {
    id?: SortOrder
    avatar?: SortOrderInput | SortOrder
    name?: SortOrder
    position?: SortOrder
    company?: SortOrder
    experience?: SortOrder
    _count?: TutorCountOrderByAggregateInput
    _avg?: TutorAvgOrderByAggregateInput
    _max?: TutorMaxOrderByAggregateInput
    _min?: TutorMinOrderByAggregateInput
    _sum?: TutorSumOrderByAggregateInput
  }

  export type TutorScalarWhereWithAggregatesInput = {
    AND?: TutorScalarWhereWithAggregatesInput | TutorScalarWhereWithAggregatesInput[]
    OR?: TutorScalarWhereWithAggregatesInput[]
    NOT?: TutorScalarWhereWithAggregatesInput | TutorScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Tutor"> | bigint | number
    avatar?: StringNullableWithAggregatesFilter<"Tutor"> | string | null
    name?: StringWithAggregatesFilter<"Tutor"> | string
    position?: StringWithAggregatesFilter<"Tutor"> | string
    company?: StringWithAggregatesFilter<"Tutor"> | string
    experience?: StringWithAggregatesFilter<"Tutor"> | string
  }

  export type Category_ClassWhereInput = {
    AND?: Category_ClassWhereInput | Category_ClassWhereInput[]
    OR?: Category_ClassWhereInput[]
    NOT?: Category_ClassWhereInput | Category_ClassWhereInput[]
    id?: BigIntFilter<"Category_Class"> | bigint | number
    name?: StringFilter<"Category_Class"> | string
    class?: ClassListRelationFilter
  }

  export type Category_ClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    class?: ClassOrderByRelationAggregateInput
    _relevance?: Category_ClassOrderByRelevanceInput
  }

  export type Category_ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Category_ClassWhereInput | Category_ClassWhereInput[]
    OR?: Category_ClassWhereInput[]
    NOT?: Category_ClassWhereInput | Category_ClassWhereInput[]
    name?: StringFilter<"Category_Class"> | string
    class?: ClassListRelationFilter
  }, "id">

  export type Category_ClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: Category_ClassCountOrderByAggregateInput
    _avg?: Category_ClassAvgOrderByAggregateInput
    _max?: Category_ClassMaxOrderByAggregateInput
    _min?: Category_ClassMinOrderByAggregateInput
    _sum?: Category_ClassSumOrderByAggregateInput
  }

  export type Category_ClassScalarWhereWithAggregatesInput = {
    AND?: Category_ClassScalarWhereWithAggregatesInput | Category_ClassScalarWhereWithAggregatesInput[]
    OR?: Category_ClassScalarWhereWithAggregatesInput[]
    NOT?: Category_ClassScalarWhereWithAggregatesInput | Category_ClassScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Category_Class"> | bigint | number
    name?: StringWithAggregatesFilter<"Category_Class"> | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: BigIntFilter<"Class"> | bigint | number
    title?: StringFilter<"Class"> | string
    image?: StringNullableFilter<"Class"> | string | null
    description?: StringFilter<"Class"> | string
    tutorId?: BigIntFilter<"Class"> | bigint | number
    categoryClassId?: BigIntFilter<"Class"> | bigint | number
    tutor?: XOR<TutorScalarRelationFilter, TutorWhereInput>
    categoryClass?: XOR<Category_ClassScalarRelationFilter, Category_ClassWhereInput>
    module?: ModuleListRelationFilter
    myClass?: My_ClassListRelationFilter
    order?: OrderListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrder
    tutorId?: SortOrder
    categoryClassId?: SortOrder
    tutor?: TutorOrderByWithRelationInput
    categoryClass?: Category_ClassOrderByWithRelationInput
    module?: ModuleOrderByRelationAggregateInput
    myClass?: My_ClassOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
    _relevance?: ClassOrderByRelevanceInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    title?: StringFilter<"Class"> | string
    image?: StringNullableFilter<"Class"> | string | null
    description?: StringFilter<"Class"> | string
    tutorId?: BigIntFilter<"Class"> | bigint | number
    categoryClassId?: BigIntFilter<"Class"> | bigint | number
    tutor?: XOR<TutorScalarRelationFilter, TutorWhereInput>
    categoryClass?: XOR<Category_ClassScalarRelationFilter, Category_ClassWhereInput>
    module?: ModuleListRelationFilter
    myClass?: My_ClassListRelationFilter
    order?: OrderListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrder
    tutorId?: SortOrder
    categoryClassId?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Class"> | bigint | number
    title?: StringWithAggregatesFilter<"Class"> | string
    image?: StringNullableWithAggregatesFilter<"Class"> | string | null
    description?: StringWithAggregatesFilter<"Class"> | string
    tutorId?: BigIntWithAggregatesFilter<"Class"> | bigint | number
    categoryClassId?: BigIntWithAggregatesFilter<"Class"> | bigint | number
  }

  export type My_ClassWhereInput = {
    AND?: My_ClassWhereInput | My_ClassWhereInput[]
    OR?: My_ClassWhereInput[]
    NOT?: My_ClassWhereInput | My_ClassWhereInput[]
    id?: BigIntFilter<"My_Class"> | bigint | number
    status?: BoolFilter<"My_Class"> | boolean
    progress?: IntFilter<"My_Class"> | number
    totalModule?: IntFilter<"My_Class"> | number
    totalTime?: IntFilter<"My_Class"> | number
    userId?: BigIntFilter<"My_Class"> | bigint | number
    classId?: BigIntFilter<"My_Class"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type My_ClassOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalModule?: SortOrder
    totalTime?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
    user?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type My_ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: My_ClassWhereInput | My_ClassWhereInput[]
    OR?: My_ClassWhereInput[]
    NOT?: My_ClassWhereInput | My_ClassWhereInput[]
    status?: BoolFilter<"My_Class"> | boolean
    progress?: IntFilter<"My_Class"> | number
    totalModule?: IntFilter<"My_Class"> | number
    totalTime?: IntFilter<"My_Class"> | number
    userId?: BigIntFilter<"My_Class"> | bigint | number
    classId?: BigIntFilter<"My_Class"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "id">

  export type My_ClassOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalModule?: SortOrder
    totalTime?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
    _count?: My_ClassCountOrderByAggregateInput
    _avg?: My_ClassAvgOrderByAggregateInput
    _max?: My_ClassMaxOrderByAggregateInput
    _min?: My_ClassMinOrderByAggregateInput
    _sum?: My_ClassSumOrderByAggregateInput
  }

  export type My_ClassScalarWhereWithAggregatesInput = {
    AND?: My_ClassScalarWhereWithAggregatesInput | My_ClassScalarWhereWithAggregatesInput[]
    OR?: My_ClassScalarWhereWithAggregatesInput[]
    NOT?: My_ClassScalarWhereWithAggregatesInput | My_ClassScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"My_Class"> | bigint | number
    status?: BoolWithAggregatesFilter<"My_Class"> | boolean
    progress?: IntWithAggregatesFilter<"My_Class"> | number
    totalModule?: IntWithAggregatesFilter<"My_Class"> | number
    totalTime?: IntWithAggregatesFilter<"My_Class"> | number
    userId?: BigIntWithAggregatesFilter<"My_Class"> | bigint | number
    classId?: BigIntWithAggregatesFilter<"My_Class"> | bigint | number
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: BigIntFilter<"Payment"> | bigint | number
    totalPayment?: IntFilter<"Payment"> | number
    totalPrice?: IntFilter<"Payment"> | number
    userId?: BigIntFilter<"Payment"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: OrderListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    totalPayment?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    order?: OrderOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    totalPayment?: IntFilter<"Payment"> | number
    totalPrice?: IntFilter<"Payment"> | number
    userId?: BigIntFilter<"Payment"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: OrderListRelationFilter
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    totalPayment?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Payment"> | bigint | number
    totalPayment?: IntWithAggregatesFilter<"Payment"> | number
    totalPrice?: IntWithAggregatesFilter<"Payment"> | number
    userId?: BigIntWithAggregatesFilter<"Payment"> | bigint | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: BigIntFilter<"Order"> | bigint | number
    price?: IntFilter<"Order"> | number
    paymentId?: BigIntFilter<"Order"> | bigint | number
    ClassId?: BigIntFilter<"Order"> | bigint | number
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    paymentId?: SortOrder
    ClassId?: SortOrder
    payment?: PaymentOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    price?: IntFilter<"Order"> | number
    paymentId?: BigIntFilter<"Order"> | bigint | number
    ClassId?: BigIntFilter<"Order"> | bigint | number
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    paymentId?: SortOrder
    ClassId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Order"> | bigint | number
    price?: IntWithAggregatesFilter<"Order"> | number
    paymentId?: BigIntWithAggregatesFilter<"Order"> | bigint | number
    ClassId?: BigIntWithAggregatesFilter<"Order"> | bigint | number
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: BigIntFilter<"Module"> | bigint | number
    name?: StringFilter<"Module"> | string
    type?: EnumModuleTypeFilter<"Module"> | $Enums.ModuleType
    note?: StringFilter<"Module"> | string
    number?: IntFilter<"Module"> | number
    classId?: BigIntFilter<"Module"> | bigint | number
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    video?: VideoListRelationFilter
    summary?: XOR<SummaryNullableScalarRelationFilter, SummaryWhereInput> | null
    quiz?: QuizListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    note?: SortOrder
    number?: SortOrder
    classId?: SortOrder
    class?: ClassOrderByWithRelationInput
    video?: VideoOrderByRelationAggregateInput
    summary?: SummaryOrderByWithRelationInput
    quiz?: QuizOrderByRelationAggregateInput
    _relevance?: ModuleOrderByRelevanceInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    name?: StringFilter<"Module"> | string
    type?: EnumModuleTypeFilter<"Module"> | $Enums.ModuleType
    note?: StringFilter<"Module"> | string
    number?: IntFilter<"Module"> | number
    classId?: BigIntFilter<"Module"> | bigint | number
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    video?: VideoListRelationFilter
    summary?: XOR<SummaryNullableScalarRelationFilter, SummaryWhereInput> | null
    quiz?: QuizListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    note?: SortOrder
    number?: SortOrder
    classId?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Module"> | bigint | number
    name?: StringWithAggregatesFilter<"Module"> | string
    type?: EnumModuleTypeWithAggregatesFilter<"Module"> | $Enums.ModuleType
    note?: StringWithAggregatesFilter<"Module"> | string
    number?: IntWithAggregatesFilter<"Module"> | number
    classId?: BigIntWithAggregatesFilter<"Module"> | bigint | number
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: BigIntFilter<"Video"> | bigint | number
    name?: StringFilter<"Video"> | string
    video_url?: StringFilter<"Video"> | string
    description?: StringFilter<"Video"> | string
    moduleId?: BigIntFilter<"Video"> | bigint | number
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    video_url?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
    module?: ModuleOrderByWithRelationInput
    _relevance?: VideoOrderByRelevanceInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    name?: StringFilter<"Video"> | string
    video_url?: StringFilter<"Video"> | string
    description?: StringFilter<"Video"> | string
    moduleId?: BigIntFilter<"Video"> | bigint | number
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    video_url?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Video"> | bigint | number
    name?: StringWithAggregatesFilter<"Video"> | string
    video_url?: StringWithAggregatesFilter<"Video"> | string
    description?: StringWithAggregatesFilter<"Video"> | string
    moduleId?: BigIntWithAggregatesFilter<"Video"> | bigint | number
  }

  export type SummaryWhereInput = {
    AND?: SummaryWhereInput | SummaryWhereInput[]
    OR?: SummaryWhereInput[]
    NOT?: SummaryWhereInput | SummaryWhereInput[]
    id?: BigIntFilter<"Summary"> | bigint | number
    title?: StringFilter<"Summary"> | string
    content?: StringFilter<"Summary"> | string
    moduleId?: BigIntFilter<"Summary"> | bigint | number
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type SummaryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    moduleId?: SortOrder
    module?: ModuleOrderByWithRelationInput
    _relevance?: SummaryOrderByRelevanceInput
  }

  export type SummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    moduleId?: bigint | number
    AND?: SummaryWhereInput | SummaryWhereInput[]
    OR?: SummaryWhereInput[]
    NOT?: SummaryWhereInput | SummaryWhereInput[]
    title?: StringFilter<"Summary"> | string
    content?: StringFilter<"Summary"> | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id" | "moduleId">

  export type SummaryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    moduleId?: SortOrder
    _count?: SummaryCountOrderByAggregateInput
    _avg?: SummaryAvgOrderByAggregateInput
    _max?: SummaryMaxOrderByAggregateInput
    _min?: SummaryMinOrderByAggregateInput
    _sum?: SummarySumOrderByAggregateInput
  }

  export type SummaryScalarWhereWithAggregatesInput = {
    AND?: SummaryScalarWhereWithAggregatesInput | SummaryScalarWhereWithAggregatesInput[]
    OR?: SummaryScalarWhereWithAggregatesInput[]
    NOT?: SummaryScalarWhereWithAggregatesInput | SummaryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Summary"> | bigint | number
    title?: StringWithAggregatesFilter<"Summary"> | string
    content?: StringWithAggregatesFilter<"Summary"> | string
    moduleId?: BigIntWithAggregatesFilter<"Summary"> | bigint | number
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: BigIntFilter<"Quiz"> | bigint | number
    name?: StringFilter<"Quiz"> | string
    type?: EnumQuizTypeFilter<"Quiz"> | $Enums.QuizType
    moduleId?: BigIntFilter<"Quiz"> | bigint | number
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    quiz?: Quiz_ItemListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    moduleId?: SortOrder
    module?: ModuleOrderByWithRelationInput
    quiz?: Quiz_ItemOrderByRelationAggregateInput
    _relevance?: QuizOrderByRelevanceInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    name?: StringFilter<"Quiz"> | string
    type?: EnumQuizTypeFilter<"Quiz"> | $Enums.QuizType
    moduleId?: BigIntFilter<"Quiz"> | bigint | number
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    quiz?: Quiz_ItemListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    moduleId?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Quiz"> | bigint | number
    name?: StringWithAggregatesFilter<"Quiz"> | string
    type?: EnumQuizTypeWithAggregatesFilter<"Quiz"> | $Enums.QuizType
    moduleId?: BigIntWithAggregatesFilter<"Quiz"> | bigint | number
  }

  export type Quiz_ItemWhereInput = {
    AND?: Quiz_ItemWhereInput | Quiz_ItemWhereInput[]
    OR?: Quiz_ItemWhereInput[]
    NOT?: Quiz_ItemWhereInput | Quiz_ItemWhereInput[]
    id?: BigIntFilter<"Quiz_Item"> | bigint | number
    question?: StringFilter<"Quiz_Item"> | string
    quizId?: BigIntFilter<"Quiz_Item"> | bigint | number
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    optionQuiz?: Option_QuizListRelationFilter
  }

  export type Quiz_ItemOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    quizId?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    optionQuiz?: Option_QuizOrderByRelationAggregateInput
    _relevance?: Quiz_ItemOrderByRelevanceInput
  }

  export type Quiz_ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Quiz_ItemWhereInput | Quiz_ItemWhereInput[]
    OR?: Quiz_ItemWhereInput[]
    NOT?: Quiz_ItemWhereInput | Quiz_ItemWhereInput[]
    question?: StringFilter<"Quiz_Item"> | string
    quizId?: BigIntFilter<"Quiz_Item"> | bigint | number
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    optionQuiz?: Option_QuizListRelationFilter
  }, "id">

  export type Quiz_ItemOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    quizId?: SortOrder
    _count?: Quiz_ItemCountOrderByAggregateInput
    _avg?: Quiz_ItemAvgOrderByAggregateInput
    _max?: Quiz_ItemMaxOrderByAggregateInput
    _min?: Quiz_ItemMinOrderByAggregateInput
    _sum?: Quiz_ItemSumOrderByAggregateInput
  }

  export type Quiz_ItemScalarWhereWithAggregatesInput = {
    AND?: Quiz_ItemScalarWhereWithAggregatesInput | Quiz_ItemScalarWhereWithAggregatesInput[]
    OR?: Quiz_ItemScalarWhereWithAggregatesInput[]
    NOT?: Quiz_ItemScalarWhereWithAggregatesInput | Quiz_ItemScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Quiz_Item"> | bigint | number
    question?: StringWithAggregatesFilter<"Quiz_Item"> | string
    quizId?: BigIntWithAggregatesFilter<"Quiz_Item"> | bigint | number
  }

  export type Option_QuizWhereInput = {
    AND?: Option_QuizWhereInput | Option_QuizWhereInput[]
    OR?: Option_QuizWhereInput[]
    NOT?: Option_QuizWhereInput | Option_QuizWhereInput[]
    id?: BigIntFilter<"Option_Quiz"> | bigint | number
    isCorrect?: BoolFilter<"Option_Quiz"> | boolean
    quizItemId?: BigIntFilter<"Option_Quiz"> | bigint | number
    quizItem?: XOR<Quiz_ItemScalarRelationFilter, Quiz_ItemWhereInput>
    answeredQuiz?: Answered_QuizListRelationFilter
  }

  export type Option_QuizOrderByWithRelationInput = {
    id?: SortOrder
    isCorrect?: SortOrder
    quizItemId?: SortOrder
    quizItem?: Quiz_ItemOrderByWithRelationInput
    answeredQuiz?: Answered_QuizOrderByRelationAggregateInput
  }

  export type Option_QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Option_QuizWhereInput | Option_QuizWhereInput[]
    OR?: Option_QuizWhereInput[]
    NOT?: Option_QuizWhereInput | Option_QuizWhereInput[]
    isCorrect?: BoolFilter<"Option_Quiz"> | boolean
    quizItemId?: BigIntFilter<"Option_Quiz"> | bigint | number
    quizItem?: XOR<Quiz_ItemScalarRelationFilter, Quiz_ItemWhereInput>
    answeredQuiz?: Answered_QuizListRelationFilter
  }, "id">

  export type Option_QuizOrderByWithAggregationInput = {
    id?: SortOrder
    isCorrect?: SortOrder
    quizItemId?: SortOrder
    _count?: Option_QuizCountOrderByAggregateInput
    _avg?: Option_QuizAvgOrderByAggregateInput
    _max?: Option_QuizMaxOrderByAggregateInput
    _min?: Option_QuizMinOrderByAggregateInput
    _sum?: Option_QuizSumOrderByAggregateInput
  }

  export type Option_QuizScalarWhereWithAggregatesInput = {
    AND?: Option_QuizScalarWhereWithAggregatesInput | Option_QuizScalarWhereWithAggregatesInput[]
    OR?: Option_QuizScalarWhereWithAggregatesInput[]
    NOT?: Option_QuizScalarWhereWithAggregatesInput | Option_QuizScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Option_Quiz"> | bigint | number
    isCorrect?: BoolWithAggregatesFilter<"Option_Quiz"> | boolean
    quizItemId?: BigIntWithAggregatesFilter<"Option_Quiz"> | bigint | number
  }

  export type Answered_QuizWhereInput = {
    AND?: Answered_QuizWhereInput | Answered_QuizWhereInput[]
    OR?: Answered_QuizWhereInput[]
    NOT?: Answered_QuizWhereInput | Answered_QuizWhereInput[]
    id?: BigIntFilter<"Answered_Quiz"> | bigint | number
    userId?: BigIntFilter<"Answered_Quiz"> | bigint | number
    optionQuizId?: BigIntFilter<"Answered_Quiz"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    optionQuiz?: XOR<Option_QuizScalarRelationFilter, Option_QuizWhereInput>
  }

  export type Answered_QuizOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    optionQuizId?: SortOrder
    user?: UserOrderByWithRelationInput
    optionQuiz?: Option_QuizOrderByWithRelationInput
  }

  export type Answered_QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Answered_QuizWhereInput | Answered_QuizWhereInput[]
    OR?: Answered_QuizWhereInput[]
    NOT?: Answered_QuizWhereInput | Answered_QuizWhereInput[]
    userId?: BigIntFilter<"Answered_Quiz"> | bigint | number
    optionQuizId?: BigIntFilter<"Answered_Quiz"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    optionQuiz?: XOR<Option_QuizScalarRelationFilter, Option_QuizWhereInput>
  }, "id">

  export type Answered_QuizOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    optionQuizId?: SortOrder
    _count?: Answered_QuizCountOrderByAggregateInput
    _avg?: Answered_QuizAvgOrderByAggregateInput
    _max?: Answered_QuizMaxOrderByAggregateInput
    _min?: Answered_QuizMinOrderByAggregateInput
    _sum?: Answered_QuizSumOrderByAggregateInput
  }

  export type Answered_QuizScalarWhereWithAggregatesInput = {
    AND?: Answered_QuizScalarWhereWithAggregatesInput | Answered_QuizScalarWhereWithAggregatesInput[]
    OR?: Answered_QuizScalarWhereWithAggregatesInput[]
    NOT?: Answered_QuizScalarWhereWithAggregatesInput | Answered_QuizScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Answered_Quiz"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"Answered_Quiz"> | bigint | number
    optionQuizId?: BigIntWithAggregatesFilter<"Answered_Quiz"> | bigint | number
  }

  export type UserCreateInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    phone: string
    isActive?: boolean
    verifyToken?: string | null
    answeredQuiz?: Answered_QuizCreateNestedManyWithoutUserInput
    myClass?: My_ClassCreateNestedManyWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    phone: string
    isActive?: boolean
    verifyToken?: string | null
    answeredQuiz?: Answered_QuizUncheckedCreateNestedManyWithoutUserInput
    myClass?: My_ClassUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    answeredQuiz?: Answered_QuizUpdateManyWithoutUserNestedInput
    myClass?: My_ClassUpdateManyWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    answeredQuiz?: Answered_QuizUncheckedUpdateManyWithoutUserNestedInput
    myClass?: My_ClassUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    phone: string
    isActive?: boolean
    verifyToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TutorCreateInput = {
    id?: bigint | number
    avatar?: string | null
    name: string
    position: string
    company: string
    experience: string
    class?: ClassCreateNestedManyWithoutTutorInput
  }

  export type TutorUncheckedCreateInput = {
    id?: bigint | number
    avatar?: string | null
    name: string
    position: string
    company: string
    experience: string
    class?: ClassUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    class?: ClassUpdateManyWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    class?: ClassUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type TutorCreateManyInput = {
    id?: bigint | number
    avatar?: string | null
    name: string
    position: string
    company: string
    experience: string
  }

  export type TutorUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
  }

  export type TutorUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
  }

  export type Category_ClassCreateInput = {
    id?: bigint | number
    name: string
    class?: ClassCreateNestedManyWithoutCategoryClassInput
  }

  export type Category_ClassUncheckedCreateInput = {
    id?: bigint | number
    name: string
    class?: ClassUncheckedCreateNestedManyWithoutCategoryClassInput
  }

  export type Category_ClassUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    class?: ClassUpdateManyWithoutCategoryClassNestedInput
  }

  export type Category_ClassUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    class?: ClassUncheckedUpdateManyWithoutCategoryClassNestedInput
  }

  export type Category_ClassCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type Category_ClassUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Category_ClassUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClassCreateInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    tutor: TutorCreateNestedOneWithoutClassInput
    categoryClass: Category_ClassCreateNestedOneWithoutClassInput
    module?: ModuleCreateNestedManyWithoutClassInput
    myClass?: My_ClassCreateNestedManyWithoutClassInput
    order?: OrderCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    tutorId: bigint | number
    categoryClassId: bigint | number
    module?: ModuleUncheckedCreateNestedManyWithoutClassInput
    myClass?: My_ClassUncheckedCreateNestedManyWithoutClassInput
    order?: OrderUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tutor?: TutorUpdateOneRequiredWithoutClassNestedInput
    categoryClass?: Category_ClassUpdateOneRequiredWithoutClassNestedInput
    module?: ModuleUpdateManyWithoutClassNestedInput
    myClass?: My_ClassUpdateManyWithoutClassNestedInput
    order?: OrderUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tutorId?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryClassId?: BigIntFieldUpdateOperationsInput | bigint | number
    module?: ModuleUncheckedUpdateManyWithoutClassNestedInput
    myClass?: My_ClassUncheckedUpdateManyWithoutClassNestedInput
    order?: OrderUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    tutorId: bigint | number
    categoryClassId: bigint | number
  }

  export type ClassUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tutorId?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryClassId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type My_ClassCreateInput = {
    id?: bigint | number
    status: boolean
    progress: number
    totalModule: number
    totalTime: number
    user: UserCreateNestedOneWithoutMyClassInput
    class: ClassCreateNestedOneWithoutMyClassInput
  }

  export type My_ClassUncheckedCreateInput = {
    id?: bigint | number
    status: boolean
    progress: number
    totalModule: number
    totalTime: number
    userId: bigint | number
    classId: bigint | number
  }

  export type My_ClassUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    totalModule?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutMyClassNestedInput
    class?: ClassUpdateOneRequiredWithoutMyClassNestedInput
  }

  export type My_ClassUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    totalModule?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type My_ClassCreateManyInput = {
    id?: bigint | number
    status: boolean
    progress: number
    totalModule: number
    totalTime: number
    userId: bigint | number
    classId: bigint | number
  }

  export type My_ClassUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    totalModule?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
  }

  export type My_ClassUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    totalModule?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PaymentCreateInput = {
    id?: bigint | number
    totalPayment: number
    totalPrice: number
    user: UserCreateNestedOneWithoutPaymentInput
    order?: OrderCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: bigint | number
    totalPayment: number
    totalPrice: number
    userId: bigint | number
    order?: OrderUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPayment?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
    order?: OrderUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPayment?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    order?: OrderUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: bigint | number
    totalPayment: number
    totalPrice: number
    userId: bigint | number
  }

  export type PaymentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPayment?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPayment?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type OrderCreateInput = {
    id?: bigint | number
    price: number
    payment: PaymentCreateNestedOneWithoutOrderInput
    class: ClassCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: bigint | number
    price: number
    paymentId: bigint | number
    ClassId: bigint | number
  }

  export type OrderUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: IntFieldUpdateOperationsInput | number
    payment?: PaymentUpdateOneRequiredWithoutOrderNestedInput
    class?: ClassUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: IntFieldUpdateOperationsInput | number
    paymentId?: BigIntFieldUpdateOperationsInput | bigint | number
    ClassId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type OrderCreateManyInput = {
    id?: bigint | number
    price: number
    paymentId: bigint | number
    ClassId: bigint | number
  }

  export type OrderUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: IntFieldUpdateOperationsInput | number
    paymentId?: BigIntFieldUpdateOperationsInput | bigint | number
    ClassId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ModuleCreateInput = {
    id?: bigint | number
    name: string
    type?: $Enums.ModuleType
    note: string
    number: number
    class: ClassCreateNestedOneWithoutModuleInput
    video?: VideoCreateNestedManyWithoutModuleInput
    summary?: SummaryCreateNestedOneWithoutModuleInput
    quiz?: QuizCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: bigint | number
    name: string
    type?: $Enums.ModuleType
    note: string
    number: number
    classId: bigint | number
    video?: VideoUncheckedCreateNestedManyWithoutModuleInput
    summary?: SummaryUncheckedCreateNestedOneWithoutModuleInput
    quiz?: QuizUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    class?: ClassUpdateOneRequiredWithoutModuleNestedInput
    video?: VideoUpdateManyWithoutModuleNestedInput
    summary?: SummaryUpdateOneWithoutModuleNestedInput
    quiz?: QuizUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: VideoUncheckedUpdateManyWithoutModuleNestedInput
    summary?: SummaryUncheckedUpdateOneWithoutModuleNestedInput
    quiz?: QuizUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: bigint | number
    name: string
    type?: $Enums.ModuleType
    note: string
    number: number
    classId: bigint | number
  }

  export type ModuleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type VideoCreateInput = {
    id?: bigint | number
    name: string
    video_url: string
    description: string
    module: ModuleCreateNestedOneWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: bigint | number
    name: string
    video_url: string
    description: string
    moduleId: bigint | number
  }

  export type VideoUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    module?: ModuleUpdateOneRequiredWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type VideoCreateManyInput = {
    id?: bigint | number
    name: string
    video_url: string
    description: string
    moduleId: bigint | number
  }

  export type VideoUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SummaryCreateInput = {
    id?: bigint | number
    title: string
    content: string
    module: ModuleCreateNestedOneWithoutSummaryInput
  }

  export type SummaryUncheckedCreateInput = {
    id?: bigint | number
    title: string
    content: string
    moduleId: bigint | number
  }

  export type SummaryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    module?: ModuleUpdateOneRequiredWithoutSummaryNestedInput
  }

  export type SummaryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SummaryCreateManyInput = {
    id?: bigint | number
    title: string
    content: string
    moduleId: bigint | number
  }

  export type SummaryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SummaryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type QuizCreateInput = {
    id?: bigint | number
    name: string
    type: $Enums.QuizType
    module: ModuleCreateNestedOneWithoutQuizInput
    quiz?: Quiz_ItemCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: bigint | number
    name: string
    type: $Enums.QuizType
    moduleId: bigint | number
    quiz?: Quiz_ItemUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    module?: ModuleUpdateOneRequiredWithoutQuizNestedInput
    quiz?: Quiz_ItemUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
    quiz?: Quiz_ItemUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: bigint | number
    name: string
    type: $Enums.QuizType
    moduleId: bigint | number
  }

  export type QuizUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Quiz_ItemCreateInput = {
    id?: bigint | number
    question: string
    quiz: QuizCreateNestedOneWithoutQuizInput
    optionQuiz?: Option_QuizCreateNestedManyWithoutQuizItemInput
  }

  export type Quiz_ItemUncheckedCreateInput = {
    id?: bigint | number
    question: string
    quizId: bigint | number
    optionQuiz?: Option_QuizUncheckedCreateNestedManyWithoutQuizItemInput
  }

  export type Quiz_ItemUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneRequiredWithoutQuizNestedInput
    optionQuiz?: Option_QuizUpdateManyWithoutQuizItemNestedInput
  }

  export type Quiz_ItemUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    quizId?: BigIntFieldUpdateOperationsInput | bigint | number
    optionQuiz?: Option_QuizUncheckedUpdateManyWithoutQuizItemNestedInput
  }

  export type Quiz_ItemCreateManyInput = {
    id?: bigint | number
    question: string
    quizId: bigint | number
  }

  export type Quiz_ItemUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
  }

  export type Quiz_ItemUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    quizId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Option_QuizCreateInput = {
    id?: bigint | number
    isCorrect: boolean
    quizItem: Quiz_ItemCreateNestedOneWithoutOptionQuizInput
    answeredQuiz?: Answered_QuizCreateNestedManyWithoutOptionQuizInput
  }

  export type Option_QuizUncheckedCreateInput = {
    id?: bigint | number
    isCorrect: boolean
    quizItemId: bigint | number
    answeredQuiz?: Answered_QuizUncheckedCreateNestedManyWithoutOptionQuizInput
  }

  export type Option_QuizUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    quizItem?: Quiz_ItemUpdateOneRequiredWithoutOptionQuizNestedInput
    answeredQuiz?: Answered_QuizUpdateManyWithoutOptionQuizNestedInput
  }

  export type Option_QuizUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    quizItemId?: BigIntFieldUpdateOperationsInput | bigint | number
    answeredQuiz?: Answered_QuizUncheckedUpdateManyWithoutOptionQuizNestedInput
  }

  export type Option_QuizCreateManyInput = {
    id?: bigint | number
    isCorrect: boolean
    quizItemId: bigint | number
  }

  export type Option_QuizUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Option_QuizUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    quizItemId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Answered_QuizCreateInput = {
    id?: bigint | number
    user: UserCreateNestedOneWithoutAnsweredQuizInput
    optionQuiz: Option_QuizCreateNestedOneWithoutAnsweredQuizInput
  }

  export type Answered_QuizUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    optionQuizId: bigint | number
  }

  export type Answered_QuizUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutAnsweredQuizNestedInput
    optionQuiz?: Option_QuizUpdateOneRequiredWithoutAnsweredQuizNestedInput
  }

  export type Answered_QuizUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    optionQuizId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Answered_QuizCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    optionQuizId: bigint | number
  }

  export type Answered_QuizUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Answered_QuizUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    optionQuizId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Answered_QuizListRelationFilter = {
    every?: Answered_QuizWhereInput
    some?: Answered_QuizWhereInput
    none?: Answered_QuizWhereInput
  }

  export type My_ClassListRelationFilter = {
    every?: My_ClassWhereInput
    some?: My_ClassWhereInput
    none?: My_ClassWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Answered_QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type My_ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    verifyToken?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    verifyToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isActive?: SortOrder
    verifyToken?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorOrderByRelevanceInput = {
    fields: TutorOrderByRelevanceFieldEnum | TutorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TutorCountOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    position?: SortOrder
    company?: SortOrder
    experience?: SortOrder
  }

  export type TutorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TutorMaxOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    position?: SortOrder
    company?: SortOrder
    experience?: SortOrder
  }

  export type TutorMinOrderByAggregateInput = {
    id?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    position?: SortOrder
    company?: SortOrder
    experience?: SortOrder
  }

  export type TutorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Category_ClassOrderByRelevanceInput = {
    fields: Category_ClassOrderByRelevanceFieldEnum | Category_ClassOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Category_ClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Category_ClassAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Category_ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Category_ClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type Category_ClassSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TutorScalarRelationFilter = {
    is?: TutorWhereInput
    isNot?: TutorWhereInput
  }

  export type Category_ClassScalarRelationFilter = {
    is?: Category_ClassWhereInput
    isNot?: Category_ClassWhereInput
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassOrderByRelevanceInput = {
    fields: ClassOrderByRelevanceFieldEnum | ClassOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrder
    tutorId?: SortOrder
    categoryClassId?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryClassId?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrder
    tutorId?: SortOrder
    categoryClassId?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    description?: SortOrder
    tutorId?: SortOrder
    categoryClassId?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryClassId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type My_ClassCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalModule?: SortOrder
    totalTime?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type My_ClassAvgOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    totalModule?: SortOrder
    totalTime?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type My_ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalModule?: SortOrder
    totalTime?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type My_ClassMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalModule?: SortOrder
    totalTime?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type My_ClassSumOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    totalModule?: SortOrder
    totalTime?: SortOrder
    userId?: SortOrder
    classId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    totalPayment?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPayment?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    totalPayment?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    totalPayment?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    totalPayment?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
  }

  export type PaymentScalarRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    paymentId?: SortOrder
    ClassId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    paymentId?: SortOrder
    ClassId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    paymentId?: SortOrder
    ClassId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    paymentId?: SortOrder
    ClassId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    paymentId?: SortOrder
    ClassId?: SortOrder
  }

  export type EnumModuleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleType | EnumModuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModuleType[]
    notIn?: $Enums.ModuleType[]
    not?: NestedEnumModuleTypeFilter<$PrismaModel> | $Enums.ModuleType
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type SummaryNullableScalarRelationFilter = {
    is?: SummaryWhereInput | null
    isNot?: SummaryWhereInput | null
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleOrderByRelevanceInput = {
    fields: ModuleOrderByRelevanceFieldEnum | ModuleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    note?: SortOrder
    number?: SortOrder
    classId?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    classId?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    note?: SortOrder
    number?: SortOrder
    classId?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    note?: SortOrder
    number?: SortOrder
    classId?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    classId?: SortOrder
  }

  export type EnumModuleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleType | EnumModuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModuleType[]
    notIn?: $Enums.ModuleType[]
    not?: NestedEnumModuleTypeWithAggregatesFilter<$PrismaModel> | $Enums.ModuleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModuleTypeFilter<$PrismaModel>
    _max?: NestedEnumModuleTypeFilter<$PrismaModel>
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type VideoOrderByRelevanceInput = {
    fields: VideoOrderByRelevanceFieldEnum | VideoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    video_url?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    video_url?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    video_url?: SortOrder
    description?: SortOrder
    moduleId?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
  }

  export type SummaryOrderByRelevanceInput = {
    fields: SummaryOrderByRelevanceFieldEnum | SummaryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SummaryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    moduleId?: SortOrder
  }

  export type SummaryAvgOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
  }

  export type SummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    moduleId?: SortOrder
  }

  export type SummaryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    moduleId?: SortOrder
  }

  export type SummarySumOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
  }

  export type EnumQuizTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizType | EnumQuizTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuizType[]
    notIn?: $Enums.QuizType[]
    not?: NestedEnumQuizTypeFilter<$PrismaModel> | $Enums.QuizType
  }

  export type Quiz_ItemListRelationFilter = {
    every?: Quiz_ItemWhereInput
    some?: Quiz_ItemWhereInput
    none?: Quiz_ItemWhereInput
  }

  export type Quiz_ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelevanceInput = {
    fields: QuizOrderByRelevanceFieldEnum | QuizOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    moduleId?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    moduleId?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    moduleId?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    id?: SortOrder
    moduleId?: SortOrder
  }

  export type EnumQuizTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizType | EnumQuizTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuizType[]
    notIn?: $Enums.QuizType[]
    not?: NestedEnumQuizTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuizType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizTypeFilter<$PrismaModel>
    _max?: NestedEnumQuizTypeFilter<$PrismaModel>
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type Option_QuizListRelationFilter = {
    every?: Option_QuizWhereInput
    some?: Option_QuizWhereInput
    none?: Option_QuizWhereInput
  }

  export type Option_QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Quiz_ItemOrderByRelevanceInput = {
    fields: Quiz_ItemOrderByRelevanceFieldEnum | Quiz_ItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Quiz_ItemCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    quizId?: SortOrder
  }

  export type Quiz_ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type Quiz_ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    quizId?: SortOrder
  }

  export type Quiz_ItemMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    quizId?: SortOrder
  }

  export type Quiz_ItemSumOrderByAggregateInput = {
    id?: SortOrder
    quizId?: SortOrder
  }

  export type Quiz_ItemScalarRelationFilter = {
    is?: Quiz_ItemWhereInput
    isNot?: Quiz_ItemWhereInput
  }

  export type Option_QuizCountOrderByAggregateInput = {
    id?: SortOrder
    isCorrect?: SortOrder
    quizItemId?: SortOrder
  }

  export type Option_QuizAvgOrderByAggregateInput = {
    id?: SortOrder
    quizItemId?: SortOrder
  }

  export type Option_QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    isCorrect?: SortOrder
    quizItemId?: SortOrder
  }

  export type Option_QuizMinOrderByAggregateInput = {
    id?: SortOrder
    isCorrect?: SortOrder
    quizItemId?: SortOrder
  }

  export type Option_QuizSumOrderByAggregateInput = {
    id?: SortOrder
    quizItemId?: SortOrder
  }

  export type Option_QuizScalarRelationFilter = {
    is?: Option_QuizWhereInput
    isNot?: Option_QuizWhereInput
  }

  export type Answered_QuizCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    optionQuizId?: SortOrder
  }

  export type Answered_QuizAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    optionQuizId?: SortOrder
  }

  export type Answered_QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    optionQuizId?: SortOrder
  }

  export type Answered_QuizMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    optionQuizId?: SortOrder
  }

  export type Answered_QuizSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    optionQuizId?: SortOrder
  }

  export type Answered_QuizCreateNestedManyWithoutUserInput = {
    create?: XOR<Answered_QuizCreateWithoutUserInput, Answered_QuizUncheckedCreateWithoutUserInput> | Answered_QuizCreateWithoutUserInput[] | Answered_QuizUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Answered_QuizCreateOrConnectWithoutUserInput | Answered_QuizCreateOrConnectWithoutUserInput[]
    createMany?: Answered_QuizCreateManyUserInputEnvelope
    connect?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
  }

  export type My_ClassCreateNestedManyWithoutUserInput = {
    create?: XOR<My_ClassCreateWithoutUserInput, My_ClassUncheckedCreateWithoutUserInput> | My_ClassCreateWithoutUserInput[] | My_ClassUncheckedCreateWithoutUserInput[]
    connectOrCreate?: My_ClassCreateOrConnectWithoutUserInput | My_ClassCreateOrConnectWithoutUserInput[]
    createMany?: My_ClassCreateManyUserInputEnvelope
    connect?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type Answered_QuizUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Answered_QuizCreateWithoutUserInput, Answered_QuizUncheckedCreateWithoutUserInput> | Answered_QuizCreateWithoutUserInput[] | Answered_QuizUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Answered_QuizCreateOrConnectWithoutUserInput | Answered_QuizCreateOrConnectWithoutUserInput[]
    createMany?: Answered_QuizCreateManyUserInputEnvelope
    connect?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
  }

  export type My_ClassUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<My_ClassCreateWithoutUserInput, My_ClassUncheckedCreateWithoutUserInput> | My_ClassCreateWithoutUserInput[] | My_ClassUncheckedCreateWithoutUserInput[]
    connectOrCreate?: My_ClassCreateOrConnectWithoutUserInput | My_ClassCreateOrConnectWithoutUserInput[]
    createMany?: My_ClassCreateManyUserInputEnvelope
    connect?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Answered_QuizUpdateManyWithoutUserNestedInput = {
    create?: XOR<Answered_QuizCreateWithoutUserInput, Answered_QuizUncheckedCreateWithoutUserInput> | Answered_QuizCreateWithoutUserInput[] | Answered_QuizUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Answered_QuizCreateOrConnectWithoutUserInput | Answered_QuizCreateOrConnectWithoutUserInput[]
    upsert?: Answered_QuizUpsertWithWhereUniqueWithoutUserInput | Answered_QuizUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Answered_QuizCreateManyUserInputEnvelope
    set?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    disconnect?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    delete?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    connect?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    update?: Answered_QuizUpdateWithWhereUniqueWithoutUserInput | Answered_QuizUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Answered_QuizUpdateManyWithWhereWithoutUserInput | Answered_QuizUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Answered_QuizScalarWhereInput | Answered_QuizScalarWhereInput[]
  }

  export type My_ClassUpdateManyWithoutUserNestedInput = {
    create?: XOR<My_ClassCreateWithoutUserInput, My_ClassUncheckedCreateWithoutUserInput> | My_ClassCreateWithoutUserInput[] | My_ClassUncheckedCreateWithoutUserInput[]
    connectOrCreate?: My_ClassCreateOrConnectWithoutUserInput | My_ClassCreateOrConnectWithoutUserInput[]
    upsert?: My_ClassUpsertWithWhereUniqueWithoutUserInput | My_ClassUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: My_ClassCreateManyUserInputEnvelope
    set?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    disconnect?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    delete?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    connect?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    update?: My_ClassUpdateWithWhereUniqueWithoutUserInput | My_ClassUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: My_ClassUpdateManyWithWhereWithoutUserInput | My_ClassUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: My_ClassScalarWhereInput | My_ClassScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type Answered_QuizUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Answered_QuizCreateWithoutUserInput, Answered_QuizUncheckedCreateWithoutUserInput> | Answered_QuizCreateWithoutUserInput[] | Answered_QuizUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Answered_QuizCreateOrConnectWithoutUserInput | Answered_QuizCreateOrConnectWithoutUserInput[]
    upsert?: Answered_QuizUpsertWithWhereUniqueWithoutUserInput | Answered_QuizUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Answered_QuizCreateManyUserInputEnvelope
    set?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    disconnect?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    delete?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    connect?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    update?: Answered_QuizUpdateWithWhereUniqueWithoutUserInput | Answered_QuizUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Answered_QuizUpdateManyWithWhereWithoutUserInput | Answered_QuizUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Answered_QuizScalarWhereInput | Answered_QuizScalarWhereInput[]
  }

  export type My_ClassUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<My_ClassCreateWithoutUserInput, My_ClassUncheckedCreateWithoutUserInput> | My_ClassCreateWithoutUserInput[] | My_ClassUncheckedCreateWithoutUserInput[]
    connectOrCreate?: My_ClassCreateOrConnectWithoutUserInput | My_ClassCreateOrConnectWithoutUserInput[]
    upsert?: My_ClassUpsertWithWhereUniqueWithoutUserInput | My_ClassUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: My_ClassCreateManyUserInputEnvelope
    set?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    disconnect?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    delete?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    connect?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    update?: My_ClassUpdateWithWhereUniqueWithoutUserInput | My_ClassUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: My_ClassUpdateManyWithWhereWithoutUserInput | My_ClassUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: My_ClassScalarWhereInput | My_ClassScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ClassCreateNestedManyWithoutTutorInput = {
    create?: XOR<ClassCreateWithoutTutorInput, ClassUncheckedCreateWithoutTutorInput> | ClassCreateWithoutTutorInput[] | ClassUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTutorInput | ClassCreateOrConnectWithoutTutorInput[]
    createMany?: ClassCreateManyTutorInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<ClassCreateWithoutTutorInput, ClassUncheckedCreateWithoutTutorInput> | ClassCreateWithoutTutorInput[] | ClassUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTutorInput | ClassCreateOrConnectWithoutTutorInput[]
    createMany?: ClassCreateManyTutorInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ClassCreateWithoutTutorInput, ClassUncheckedCreateWithoutTutorInput> | ClassCreateWithoutTutorInput[] | ClassUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTutorInput | ClassCreateOrConnectWithoutTutorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTutorInput | ClassUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ClassCreateManyTutorInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTutorInput | ClassUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTutorInput | ClassUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ClassCreateWithoutTutorInput, ClassUncheckedCreateWithoutTutorInput> | ClassCreateWithoutTutorInput[] | ClassUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTutorInput | ClassCreateOrConnectWithoutTutorInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTutorInput | ClassUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ClassCreateManyTutorInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTutorInput | ClassUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTutorInput | ClassUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassCreateNestedManyWithoutCategoryClassInput = {
    create?: XOR<ClassCreateWithoutCategoryClassInput, ClassUncheckedCreateWithoutCategoryClassInput> | ClassCreateWithoutCategoryClassInput[] | ClassUncheckedCreateWithoutCategoryClassInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCategoryClassInput | ClassCreateOrConnectWithoutCategoryClassInput[]
    createMany?: ClassCreateManyCategoryClassInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutCategoryClassInput = {
    create?: XOR<ClassCreateWithoutCategoryClassInput, ClassUncheckedCreateWithoutCategoryClassInput> | ClassCreateWithoutCategoryClassInput[] | ClassUncheckedCreateWithoutCategoryClassInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCategoryClassInput | ClassCreateOrConnectWithoutCategoryClassInput[]
    createMany?: ClassCreateManyCategoryClassInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUpdateManyWithoutCategoryClassNestedInput = {
    create?: XOR<ClassCreateWithoutCategoryClassInput, ClassUncheckedCreateWithoutCategoryClassInput> | ClassCreateWithoutCategoryClassInput[] | ClassUncheckedCreateWithoutCategoryClassInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCategoryClassInput | ClassCreateOrConnectWithoutCategoryClassInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutCategoryClassInput | ClassUpsertWithWhereUniqueWithoutCategoryClassInput[]
    createMany?: ClassCreateManyCategoryClassInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutCategoryClassInput | ClassUpdateWithWhereUniqueWithoutCategoryClassInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutCategoryClassInput | ClassUpdateManyWithWhereWithoutCategoryClassInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutCategoryClassNestedInput = {
    create?: XOR<ClassCreateWithoutCategoryClassInput, ClassUncheckedCreateWithoutCategoryClassInput> | ClassCreateWithoutCategoryClassInput[] | ClassUncheckedCreateWithoutCategoryClassInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCategoryClassInput | ClassCreateOrConnectWithoutCategoryClassInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutCategoryClassInput | ClassUpsertWithWhereUniqueWithoutCategoryClassInput[]
    createMany?: ClassCreateManyCategoryClassInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutCategoryClassInput | ClassUpdateWithWhereUniqueWithoutCategoryClassInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutCategoryClassInput | ClassUpdateManyWithWhereWithoutCategoryClassInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type TutorCreateNestedOneWithoutClassInput = {
    create?: XOR<TutorCreateWithoutClassInput, TutorUncheckedCreateWithoutClassInput>
    connectOrCreate?: TutorCreateOrConnectWithoutClassInput
    connect?: TutorWhereUniqueInput
  }

  export type Category_ClassCreateNestedOneWithoutClassInput = {
    create?: XOR<Category_ClassCreateWithoutClassInput, Category_ClassUncheckedCreateWithoutClassInput>
    connectOrCreate?: Category_ClassCreateOrConnectWithoutClassInput
    connect?: Category_ClassWhereUniqueInput
  }

  export type ModuleCreateNestedManyWithoutClassInput = {
    create?: XOR<ModuleCreateWithoutClassInput, ModuleUncheckedCreateWithoutClassInput> | ModuleCreateWithoutClassInput[] | ModuleUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutClassInput | ModuleCreateOrConnectWithoutClassInput[]
    createMany?: ModuleCreateManyClassInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type My_ClassCreateNestedManyWithoutClassInput = {
    create?: XOR<My_ClassCreateWithoutClassInput, My_ClassUncheckedCreateWithoutClassInput> | My_ClassCreateWithoutClassInput[] | My_ClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: My_ClassCreateOrConnectWithoutClassInput | My_ClassCreateOrConnectWithoutClassInput[]
    createMany?: My_ClassCreateManyClassInputEnvelope
    connect?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutClassInput = {
    create?: XOR<OrderCreateWithoutClassInput, OrderUncheckedCreateWithoutClassInput> | OrderCreateWithoutClassInput[] | OrderUncheckedCreateWithoutClassInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClassInput | OrderCreateOrConnectWithoutClassInput[]
    createMany?: OrderCreateManyClassInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ModuleUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<ModuleCreateWithoutClassInput, ModuleUncheckedCreateWithoutClassInput> | ModuleCreateWithoutClassInput[] | ModuleUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutClassInput | ModuleCreateOrConnectWithoutClassInput[]
    createMany?: ModuleCreateManyClassInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type My_ClassUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<My_ClassCreateWithoutClassInput, My_ClassUncheckedCreateWithoutClassInput> | My_ClassCreateWithoutClassInput[] | My_ClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: My_ClassCreateOrConnectWithoutClassInput | My_ClassCreateOrConnectWithoutClassInput[]
    createMany?: My_ClassCreateManyClassInputEnvelope
    connect?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<OrderCreateWithoutClassInput, OrderUncheckedCreateWithoutClassInput> | OrderCreateWithoutClassInput[] | OrderUncheckedCreateWithoutClassInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClassInput | OrderCreateOrConnectWithoutClassInput[]
    createMany?: OrderCreateManyClassInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TutorUpdateOneRequiredWithoutClassNestedInput = {
    create?: XOR<TutorCreateWithoutClassInput, TutorUncheckedCreateWithoutClassInput>
    connectOrCreate?: TutorCreateOrConnectWithoutClassInput
    upsert?: TutorUpsertWithoutClassInput
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutClassInput, TutorUpdateWithoutClassInput>, TutorUncheckedUpdateWithoutClassInput>
  }

  export type Category_ClassUpdateOneRequiredWithoutClassNestedInput = {
    create?: XOR<Category_ClassCreateWithoutClassInput, Category_ClassUncheckedCreateWithoutClassInput>
    connectOrCreate?: Category_ClassCreateOrConnectWithoutClassInput
    upsert?: Category_ClassUpsertWithoutClassInput
    connect?: Category_ClassWhereUniqueInput
    update?: XOR<XOR<Category_ClassUpdateToOneWithWhereWithoutClassInput, Category_ClassUpdateWithoutClassInput>, Category_ClassUncheckedUpdateWithoutClassInput>
  }

  export type ModuleUpdateManyWithoutClassNestedInput = {
    create?: XOR<ModuleCreateWithoutClassInput, ModuleUncheckedCreateWithoutClassInput> | ModuleCreateWithoutClassInput[] | ModuleUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutClassInput | ModuleCreateOrConnectWithoutClassInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutClassInput | ModuleUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ModuleCreateManyClassInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutClassInput | ModuleUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutClassInput | ModuleUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type My_ClassUpdateManyWithoutClassNestedInput = {
    create?: XOR<My_ClassCreateWithoutClassInput, My_ClassUncheckedCreateWithoutClassInput> | My_ClassCreateWithoutClassInput[] | My_ClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: My_ClassCreateOrConnectWithoutClassInput | My_ClassCreateOrConnectWithoutClassInput[]
    upsert?: My_ClassUpsertWithWhereUniqueWithoutClassInput | My_ClassUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: My_ClassCreateManyClassInputEnvelope
    set?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    disconnect?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    delete?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    connect?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    update?: My_ClassUpdateWithWhereUniqueWithoutClassInput | My_ClassUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: My_ClassUpdateManyWithWhereWithoutClassInput | My_ClassUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: My_ClassScalarWhereInput | My_ClassScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutClassNestedInput = {
    create?: XOR<OrderCreateWithoutClassInput, OrderUncheckedCreateWithoutClassInput> | OrderCreateWithoutClassInput[] | OrderUncheckedCreateWithoutClassInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClassInput | OrderCreateOrConnectWithoutClassInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutClassInput | OrderUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: OrderCreateManyClassInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutClassInput | OrderUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutClassInput | OrderUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ModuleUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<ModuleCreateWithoutClassInput, ModuleUncheckedCreateWithoutClassInput> | ModuleCreateWithoutClassInput[] | ModuleUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutClassInput | ModuleCreateOrConnectWithoutClassInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutClassInput | ModuleUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ModuleCreateManyClassInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutClassInput | ModuleUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutClassInput | ModuleUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type My_ClassUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<My_ClassCreateWithoutClassInput, My_ClassUncheckedCreateWithoutClassInput> | My_ClassCreateWithoutClassInput[] | My_ClassUncheckedCreateWithoutClassInput[]
    connectOrCreate?: My_ClassCreateOrConnectWithoutClassInput | My_ClassCreateOrConnectWithoutClassInput[]
    upsert?: My_ClassUpsertWithWhereUniqueWithoutClassInput | My_ClassUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: My_ClassCreateManyClassInputEnvelope
    set?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    disconnect?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    delete?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    connect?: My_ClassWhereUniqueInput | My_ClassWhereUniqueInput[]
    update?: My_ClassUpdateWithWhereUniqueWithoutClassInput | My_ClassUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: My_ClassUpdateManyWithWhereWithoutClassInput | My_ClassUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: My_ClassScalarWhereInput | My_ClassScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<OrderCreateWithoutClassInput, OrderUncheckedCreateWithoutClassInput> | OrderCreateWithoutClassInput[] | OrderUncheckedCreateWithoutClassInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClassInput | OrderCreateOrConnectWithoutClassInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutClassInput | OrderUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: OrderCreateManyClassInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutClassInput | OrderUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutClassInput | OrderUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMyClassInput = {
    create?: XOR<UserCreateWithoutMyClassInput, UserUncheckedCreateWithoutMyClassInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyClassInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutMyClassInput = {
    create?: XOR<ClassCreateWithoutMyClassInput, ClassUncheckedCreateWithoutMyClassInput>
    connectOrCreate?: ClassCreateOrConnectWithoutMyClassInput
    connect?: ClassWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMyClassNestedInput = {
    create?: XOR<UserCreateWithoutMyClassInput, UserUncheckedCreateWithoutMyClassInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyClassInput
    upsert?: UserUpsertWithoutMyClassInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMyClassInput, UserUpdateWithoutMyClassInput>, UserUncheckedUpdateWithoutMyClassInput>
  }

  export type ClassUpdateOneRequiredWithoutMyClassNestedInput = {
    create?: XOR<ClassCreateWithoutMyClassInput, ClassUncheckedCreateWithoutMyClassInput>
    connectOrCreate?: ClassCreateOrConnectWithoutMyClassInput
    upsert?: ClassUpsertWithoutMyClassInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutMyClassInput, ClassUpdateWithoutMyClassInput>, ClassUncheckedUpdateWithoutMyClassInput>
  }

  export type UserCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput> | OrderCreateWithoutPaymentInput[] | OrderUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput | OrderCreateOrConnectWithoutPaymentInput[]
    createMany?: OrderCreateManyPaymentInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput> | OrderCreateWithoutPaymentInput[] | OrderUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput | OrderCreateOrConnectWithoutPaymentInput[]
    createMany?: OrderCreateManyPaymentInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput> | OrderCreateWithoutPaymentInput[] | OrderUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput | OrderCreateOrConnectWithoutPaymentInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPaymentInput | OrderUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: OrderCreateManyPaymentInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPaymentInput | OrderUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPaymentInput | OrderUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput> | OrderCreateWithoutPaymentInput[] | OrderUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput | OrderCreateOrConnectWithoutPaymentInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPaymentInput | OrderUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: OrderCreateManyPaymentInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPaymentInput | OrderUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPaymentInput | OrderUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PaymentCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutOrderInput = {
    create?: XOR<ClassCreateWithoutOrderInput, ClassUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ClassCreateOrConnectWithoutOrderInput
    connect?: ClassWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type ClassUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<ClassCreateWithoutOrderInput, ClassUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ClassCreateOrConnectWithoutOrderInput
    upsert?: ClassUpsertWithoutOrderInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutOrderInput, ClassUpdateWithoutOrderInput>, ClassUncheckedUpdateWithoutOrderInput>
  }

  export type ClassCreateNestedOneWithoutModuleInput = {
    create?: XOR<ClassCreateWithoutModuleInput, ClassUncheckedCreateWithoutModuleInput>
    connectOrCreate?: ClassCreateOrConnectWithoutModuleInput
    connect?: ClassWhereUniqueInput
  }

  export type VideoCreateNestedManyWithoutModuleInput = {
    create?: XOR<VideoCreateWithoutModuleInput, VideoUncheckedCreateWithoutModuleInput> | VideoCreateWithoutModuleInput[] | VideoUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuleInput | VideoCreateOrConnectWithoutModuleInput[]
    createMany?: VideoCreateManyModuleInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type SummaryCreateNestedOneWithoutModuleInput = {
    create?: XOR<SummaryCreateWithoutModuleInput, SummaryUncheckedCreateWithoutModuleInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutModuleInput
    connect?: SummaryWhereUniqueInput
  }

  export type QuizCreateNestedManyWithoutModuleInput = {
    create?: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput> | QuizCreateWithoutModuleInput[] | QuizUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutModuleInput | QuizCreateOrConnectWithoutModuleInput[]
    createMany?: QuizCreateManyModuleInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<VideoCreateWithoutModuleInput, VideoUncheckedCreateWithoutModuleInput> | VideoCreateWithoutModuleInput[] | VideoUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuleInput | VideoCreateOrConnectWithoutModuleInput[]
    createMany?: VideoCreateManyModuleInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type SummaryUncheckedCreateNestedOneWithoutModuleInput = {
    create?: XOR<SummaryCreateWithoutModuleInput, SummaryUncheckedCreateWithoutModuleInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutModuleInput
    connect?: SummaryWhereUniqueInput
  }

  export type QuizUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput> | QuizCreateWithoutModuleInput[] | QuizUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutModuleInput | QuizCreateOrConnectWithoutModuleInput[]
    createMany?: QuizCreateManyModuleInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type EnumModuleTypeFieldUpdateOperationsInput = {
    set?: $Enums.ModuleType
  }

  export type ClassUpdateOneRequiredWithoutModuleNestedInput = {
    create?: XOR<ClassCreateWithoutModuleInput, ClassUncheckedCreateWithoutModuleInput>
    connectOrCreate?: ClassCreateOrConnectWithoutModuleInput
    upsert?: ClassUpsertWithoutModuleInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutModuleInput, ClassUpdateWithoutModuleInput>, ClassUncheckedUpdateWithoutModuleInput>
  }

  export type VideoUpdateManyWithoutModuleNestedInput = {
    create?: XOR<VideoCreateWithoutModuleInput, VideoUncheckedCreateWithoutModuleInput> | VideoCreateWithoutModuleInput[] | VideoUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuleInput | VideoCreateOrConnectWithoutModuleInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutModuleInput | VideoUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: VideoCreateManyModuleInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutModuleInput | VideoUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutModuleInput | VideoUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type SummaryUpdateOneWithoutModuleNestedInput = {
    create?: XOR<SummaryCreateWithoutModuleInput, SummaryUncheckedCreateWithoutModuleInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutModuleInput
    upsert?: SummaryUpsertWithoutModuleInput
    disconnect?: SummaryWhereInput | boolean
    delete?: SummaryWhereInput | boolean
    connect?: SummaryWhereUniqueInput
    update?: XOR<XOR<SummaryUpdateToOneWithWhereWithoutModuleInput, SummaryUpdateWithoutModuleInput>, SummaryUncheckedUpdateWithoutModuleInput>
  }

  export type QuizUpdateManyWithoutModuleNestedInput = {
    create?: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput> | QuizCreateWithoutModuleInput[] | QuizUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutModuleInput | QuizCreateOrConnectWithoutModuleInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutModuleInput | QuizUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: QuizCreateManyModuleInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutModuleInput | QuizUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutModuleInput | QuizUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<VideoCreateWithoutModuleInput, VideoUncheckedCreateWithoutModuleInput> | VideoCreateWithoutModuleInput[] | VideoUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutModuleInput | VideoCreateOrConnectWithoutModuleInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutModuleInput | VideoUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: VideoCreateManyModuleInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutModuleInput | VideoUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutModuleInput | VideoUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type SummaryUncheckedUpdateOneWithoutModuleNestedInput = {
    create?: XOR<SummaryCreateWithoutModuleInput, SummaryUncheckedCreateWithoutModuleInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutModuleInput
    upsert?: SummaryUpsertWithoutModuleInput
    disconnect?: SummaryWhereInput | boolean
    delete?: SummaryWhereInput | boolean
    connect?: SummaryWhereUniqueInput
    update?: XOR<XOR<SummaryUpdateToOneWithWhereWithoutModuleInput, SummaryUpdateWithoutModuleInput>, SummaryUncheckedUpdateWithoutModuleInput>
  }

  export type QuizUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput> | QuizCreateWithoutModuleInput[] | QuizUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutModuleInput | QuizCreateOrConnectWithoutModuleInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutModuleInput | QuizUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: QuizCreateManyModuleInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutModuleInput | QuizUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutModuleInput | QuizUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type ModuleCreateNestedOneWithoutVideoInput = {
    create?: XOR<ModuleCreateWithoutVideoInput, ModuleUncheckedCreateWithoutVideoInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutVideoInput
    connect?: ModuleWhereUniqueInput
  }

  export type ModuleUpdateOneRequiredWithoutVideoNestedInput = {
    create?: XOR<ModuleCreateWithoutVideoInput, ModuleUncheckedCreateWithoutVideoInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutVideoInput
    upsert?: ModuleUpsertWithoutVideoInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutVideoInput, ModuleUpdateWithoutVideoInput>, ModuleUncheckedUpdateWithoutVideoInput>
  }

  export type ModuleCreateNestedOneWithoutSummaryInput = {
    create?: XOR<ModuleCreateWithoutSummaryInput, ModuleUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutSummaryInput
    connect?: ModuleWhereUniqueInput
  }

  export type ModuleUpdateOneRequiredWithoutSummaryNestedInput = {
    create?: XOR<ModuleCreateWithoutSummaryInput, ModuleUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutSummaryInput
    upsert?: ModuleUpsertWithoutSummaryInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutSummaryInput, ModuleUpdateWithoutSummaryInput>, ModuleUncheckedUpdateWithoutSummaryInput>
  }

  export type ModuleCreateNestedOneWithoutQuizInput = {
    create?: XOR<ModuleCreateWithoutQuizInput, ModuleUncheckedCreateWithoutQuizInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutQuizInput
    connect?: ModuleWhereUniqueInput
  }

  export type Quiz_ItemCreateNestedManyWithoutQuizInput = {
    create?: XOR<Quiz_ItemCreateWithoutQuizInput, Quiz_ItemUncheckedCreateWithoutQuizInput> | Quiz_ItemCreateWithoutQuizInput[] | Quiz_ItemUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: Quiz_ItemCreateOrConnectWithoutQuizInput | Quiz_ItemCreateOrConnectWithoutQuizInput[]
    createMany?: Quiz_ItemCreateManyQuizInputEnvelope
    connect?: Quiz_ItemWhereUniqueInput | Quiz_ItemWhereUniqueInput[]
  }

  export type Quiz_ItemUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<Quiz_ItemCreateWithoutQuizInput, Quiz_ItemUncheckedCreateWithoutQuizInput> | Quiz_ItemCreateWithoutQuizInput[] | Quiz_ItemUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: Quiz_ItemCreateOrConnectWithoutQuizInput | Quiz_ItemCreateOrConnectWithoutQuizInput[]
    createMany?: Quiz_ItemCreateManyQuizInputEnvelope
    connect?: Quiz_ItemWhereUniqueInput | Quiz_ItemWhereUniqueInput[]
  }

  export type EnumQuizTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuizType
  }

  export type ModuleUpdateOneRequiredWithoutQuizNestedInput = {
    create?: XOR<ModuleCreateWithoutQuizInput, ModuleUncheckedCreateWithoutQuizInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutQuizInput
    upsert?: ModuleUpsertWithoutQuizInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutQuizInput, ModuleUpdateWithoutQuizInput>, ModuleUncheckedUpdateWithoutQuizInput>
  }

  export type Quiz_ItemUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Quiz_ItemCreateWithoutQuizInput, Quiz_ItemUncheckedCreateWithoutQuizInput> | Quiz_ItemCreateWithoutQuizInput[] | Quiz_ItemUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: Quiz_ItemCreateOrConnectWithoutQuizInput | Quiz_ItemCreateOrConnectWithoutQuizInput[]
    upsert?: Quiz_ItemUpsertWithWhereUniqueWithoutQuizInput | Quiz_ItemUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: Quiz_ItemCreateManyQuizInputEnvelope
    set?: Quiz_ItemWhereUniqueInput | Quiz_ItemWhereUniqueInput[]
    disconnect?: Quiz_ItemWhereUniqueInput | Quiz_ItemWhereUniqueInput[]
    delete?: Quiz_ItemWhereUniqueInput | Quiz_ItemWhereUniqueInput[]
    connect?: Quiz_ItemWhereUniqueInput | Quiz_ItemWhereUniqueInput[]
    update?: Quiz_ItemUpdateWithWhereUniqueWithoutQuizInput | Quiz_ItemUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: Quiz_ItemUpdateManyWithWhereWithoutQuizInput | Quiz_ItemUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: Quiz_ItemScalarWhereInput | Quiz_ItemScalarWhereInput[]
  }

  export type Quiz_ItemUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<Quiz_ItemCreateWithoutQuizInput, Quiz_ItemUncheckedCreateWithoutQuizInput> | Quiz_ItemCreateWithoutQuizInput[] | Quiz_ItemUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: Quiz_ItemCreateOrConnectWithoutQuizInput | Quiz_ItemCreateOrConnectWithoutQuizInput[]
    upsert?: Quiz_ItemUpsertWithWhereUniqueWithoutQuizInput | Quiz_ItemUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: Quiz_ItemCreateManyQuizInputEnvelope
    set?: Quiz_ItemWhereUniqueInput | Quiz_ItemWhereUniqueInput[]
    disconnect?: Quiz_ItemWhereUniqueInput | Quiz_ItemWhereUniqueInput[]
    delete?: Quiz_ItemWhereUniqueInput | Quiz_ItemWhereUniqueInput[]
    connect?: Quiz_ItemWhereUniqueInput | Quiz_ItemWhereUniqueInput[]
    update?: Quiz_ItemUpdateWithWhereUniqueWithoutQuizInput | Quiz_ItemUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: Quiz_ItemUpdateManyWithWhereWithoutQuizInput | Quiz_ItemUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: Quiz_ItemScalarWhereInput | Quiz_ItemScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutQuizInput = {
    create?: XOR<QuizCreateWithoutQuizInput, QuizUncheckedCreateWithoutQuizInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuizInput
    connect?: QuizWhereUniqueInput
  }

  export type Option_QuizCreateNestedManyWithoutQuizItemInput = {
    create?: XOR<Option_QuizCreateWithoutQuizItemInput, Option_QuizUncheckedCreateWithoutQuizItemInput> | Option_QuizCreateWithoutQuizItemInput[] | Option_QuizUncheckedCreateWithoutQuizItemInput[]
    connectOrCreate?: Option_QuizCreateOrConnectWithoutQuizItemInput | Option_QuizCreateOrConnectWithoutQuizItemInput[]
    createMany?: Option_QuizCreateManyQuizItemInputEnvelope
    connect?: Option_QuizWhereUniqueInput | Option_QuizWhereUniqueInput[]
  }

  export type Option_QuizUncheckedCreateNestedManyWithoutQuizItemInput = {
    create?: XOR<Option_QuizCreateWithoutQuizItemInput, Option_QuizUncheckedCreateWithoutQuizItemInput> | Option_QuizCreateWithoutQuizItemInput[] | Option_QuizUncheckedCreateWithoutQuizItemInput[]
    connectOrCreate?: Option_QuizCreateOrConnectWithoutQuizItemInput | Option_QuizCreateOrConnectWithoutQuizItemInput[]
    createMany?: Option_QuizCreateManyQuizItemInputEnvelope
    connect?: Option_QuizWhereUniqueInput | Option_QuizWhereUniqueInput[]
  }

  export type QuizUpdateOneRequiredWithoutQuizNestedInput = {
    create?: XOR<QuizCreateWithoutQuizInput, QuizUncheckedCreateWithoutQuizInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuizInput
    upsert?: QuizUpsertWithoutQuizInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuizInput, QuizUpdateWithoutQuizInput>, QuizUncheckedUpdateWithoutQuizInput>
  }

  export type Option_QuizUpdateManyWithoutQuizItemNestedInput = {
    create?: XOR<Option_QuizCreateWithoutQuizItemInput, Option_QuizUncheckedCreateWithoutQuizItemInput> | Option_QuizCreateWithoutQuizItemInput[] | Option_QuizUncheckedCreateWithoutQuizItemInput[]
    connectOrCreate?: Option_QuizCreateOrConnectWithoutQuizItemInput | Option_QuizCreateOrConnectWithoutQuizItemInput[]
    upsert?: Option_QuizUpsertWithWhereUniqueWithoutQuizItemInput | Option_QuizUpsertWithWhereUniqueWithoutQuizItemInput[]
    createMany?: Option_QuizCreateManyQuizItemInputEnvelope
    set?: Option_QuizWhereUniqueInput | Option_QuizWhereUniqueInput[]
    disconnect?: Option_QuizWhereUniqueInput | Option_QuizWhereUniqueInput[]
    delete?: Option_QuizWhereUniqueInput | Option_QuizWhereUniqueInput[]
    connect?: Option_QuizWhereUniqueInput | Option_QuizWhereUniqueInput[]
    update?: Option_QuizUpdateWithWhereUniqueWithoutQuizItemInput | Option_QuizUpdateWithWhereUniqueWithoutQuizItemInput[]
    updateMany?: Option_QuizUpdateManyWithWhereWithoutQuizItemInput | Option_QuizUpdateManyWithWhereWithoutQuizItemInput[]
    deleteMany?: Option_QuizScalarWhereInput | Option_QuizScalarWhereInput[]
  }

  export type Option_QuizUncheckedUpdateManyWithoutQuizItemNestedInput = {
    create?: XOR<Option_QuizCreateWithoutQuizItemInput, Option_QuizUncheckedCreateWithoutQuizItemInput> | Option_QuizCreateWithoutQuizItemInput[] | Option_QuizUncheckedCreateWithoutQuizItemInput[]
    connectOrCreate?: Option_QuizCreateOrConnectWithoutQuizItemInput | Option_QuizCreateOrConnectWithoutQuizItemInput[]
    upsert?: Option_QuizUpsertWithWhereUniqueWithoutQuizItemInput | Option_QuizUpsertWithWhereUniqueWithoutQuizItemInput[]
    createMany?: Option_QuizCreateManyQuizItemInputEnvelope
    set?: Option_QuizWhereUniqueInput | Option_QuizWhereUniqueInput[]
    disconnect?: Option_QuizWhereUniqueInput | Option_QuizWhereUniqueInput[]
    delete?: Option_QuizWhereUniqueInput | Option_QuizWhereUniqueInput[]
    connect?: Option_QuizWhereUniqueInput | Option_QuizWhereUniqueInput[]
    update?: Option_QuizUpdateWithWhereUniqueWithoutQuizItemInput | Option_QuizUpdateWithWhereUniqueWithoutQuizItemInput[]
    updateMany?: Option_QuizUpdateManyWithWhereWithoutQuizItemInput | Option_QuizUpdateManyWithWhereWithoutQuizItemInput[]
    deleteMany?: Option_QuizScalarWhereInput | Option_QuizScalarWhereInput[]
  }

  export type Quiz_ItemCreateNestedOneWithoutOptionQuizInput = {
    create?: XOR<Quiz_ItemCreateWithoutOptionQuizInput, Quiz_ItemUncheckedCreateWithoutOptionQuizInput>
    connectOrCreate?: Quiz_ItemCreateOrConnectWithoutOptionQuizInput
    connect?: Quiz_ItemWhereUniqueInput
  }

  export type Answered_QuizCreateNestedManyWithoutOptionQuizInput = {
    create?: XOR<Answered_QuizCreateWithoutOptionQuizInput, Answered_QuizUncheckedCreateWithoutOptionQuizInput> | Answered_QuizCreateWithoutOptionQuizInput[] | Answered_QuizUncheckedCreateWithoutOptionQuizInput[]
    connectOrCreate?: Answered_QuizCreateOrConnectWithoutOptionQuizInput | Answered_QuizCreateOrConnectWithoutOptionQuizInput[]
    createMany?: Answered_QuizCreateManyOptionQuizInputEnvelope
    connect?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
  }

  export type Answered_QuizUncheckedCreateNestedManyWithoutOptionQuizInput = {
    create?: XOR<Answered_QuizCreateWithoutOptionQuizInput, Answered_QuizUncheckedCreateWithoutOptionQuizInput> | Answered_QuizCreateWithoutOptionQuizInput[] | Answered_QuizUncheckedCreateWithoutOptionQuizInput[]
    connectOrCreate?: Answered_QuizCreateOrConnectWithoutOptionQuizInput | Answered_QuizCreateOrConnectWithoutOptionQuizInput[]
    createMany?: Answered_QuizCreateManyOptionQuizInputEnvelope
    connect?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
  }

  export type Quiz_ItemUpdateOneRequiredWithoutOptionQuizNestedInput = {
    create?: XOR<Quiz_ItemCreateWithoutOptionQuizInput, Quiz_ItemUncheckedCreateWithoutOptionQuizInput>
    connectOrCreate?: Quiz_ItemCreateOrConnectWithoutOptionQuizInput
    upsert?: Quiz_ItemUpsertWithoutOptionQuizInput
    connect?: Quiz_ItemWhereUniqueInput
    update?: XOR<XOR<Quiz_ItemUpdateToOneWithWhereWithoutOptionQuizInput, Quiz_ItemUpdateWithoutOptionQuizInput>, Quiz_ItemUncheckedUpdateWithoutOptionQuizInput>
  }

  export type Answered_QuizUpdateManyWithoutOptionQuizNestedInput = {
    create?: XOR<Answered_QuizCreateWithoutOptionQuizInput, Answered_QuizUncheckedCreateWithoutOptionQuizInput> | Answered_QuizCreateWithoutOptionQuizInput[] | Answered_QuizUncheckedCreateWithoutOptionQuizInput[]
    connectOrCreate?: Answered_QuizCreateOrConnectWithoutOptionQuizInput | Answered_QuizCreateOrConnectWithoutOptionQuizInput[]
    upsert?: Answered_QuizUpsertWithWhereUniqueWithoutOptionQuizInput | Answered_QuizUpsertWithWhereUniqueWithoutOptionQuizInput[]
    createMany?: Answered_QuizCreateManyOptionQuizInputEnvelope
    set?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    disconnect?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    delete?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    connect?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    update?: Answered_QuizUpdateWithWhereUniqueWithoutOptionQuizInput | Answered_QuizUpdateWithWhereUniqueWithoutOptionQuizInput[]
    updateMany?: Answered_QuizUpdateManyWithWhereWithoutOptionQuizInput | Answered_QuizUpdateManyWithWhereWithoutOptionQuizInput[]
    deleteMany?: Answered_QuizScalarWhereInput | Answered_QuizScalarWhereInput[]
  }

  export type Answered_QuizUncheckedUpdateManyWithoutOptionQuizNestedInput = {
    create?: XOR<Answered_QuizCreateWithoutOptionQuizInput, Answered_QuizUncheckedCreateWithoutOptionQuizInput> | Answered_QuizCreateWithoutOptionQuizInput[] | Answered_QuizUncheckedCreateWithoutOptionQuizInput[]
    connectOrCreate?: Answered_QuizCreateOrConnectWithoutOptionQuizInput | Answered_QuizCreateOrConnectWithoutOptionQuizInput[]
    upsert?: Answered_QuizUpsertWithWhereUniqueWithoutOptionQuizInput | Answered_QuizUpsertWithWhereUniqueWithoutOptionQuizInput[]
    createMany?: Answered_QuizCreateManyOptionQuizInputEnvelope
    set?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    disconnect?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    delete?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    connect?: Answered_QuizWhereUniqueInput | Answered_QuizWhereUniqueInput[]
    update?: Answered_QuizUpdateWithWhereUniqueWithoutOptionQuizInput | Answered_QuizUpdateWithWhereUniqueWithoutOptionQuizInput[]
    updateMany?: Answered_QuizUpdateManyWithWhereWithoutOptionQuizInput | Answered_QuizUpdateManyWithWhereWithoutOptionQuizInput[]
    deleteMany?: Answered_QuizScalarWhereInput | Answered_QuizScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAnsweredQuizInput = {
    create?: XOR<UserCreateWithoutAnsweredQuizInput, UserUncheckedCreateWithoutAnsweredQuizInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnsweredQuizInput
    connect?: UserWhereUniqueInput
  }

  export type Option_QuizCreateNestedOneWithoutAnsweredQuizInput = {
    create?: XOR<Option_QuizCreateWithoutAnsweredQuizInput, Option_QuizUncheckedCreateWithoutAnsweredQuizInput>
    connectOrCreate?: Option_QuizCreateOrConnectWithoutAnsweredQuizInput
    connect?: Option_QuizWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAnsweredQuizNestedInput = {
    create?: XOR<UserCreateWithoutAnsweredQuizInput, UserUncheckedCreateWithoutAnsweredQuizInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnsweredQuizInput
    upsert?: UserUpsertWithoutAnsweredQuizInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnsweredQuizInput, UserUpdateWithoutAnsweredQuizInput>, UserUncheckedUpdateWithoutAnsweredQuizInput>
  }

  export type Option_QuizUpdateOneRequiredWithoutAnsweredQuizNestedInput = {
    create?: XOR<Option_QuizCreateWithoutAnsweredQuizInput, Option_QuizUncheckedCreateWithoutAnsweredQuizInput>
    connectOrCreate?: Option_QuizCreateOrConnectWithoutAnsweredQuizInput
    upsert?: Option_QuizUpsertWithoutAnsweredQuizInput
    connect?: Option_QuizWhereUniqueInput
    update?: XOR<XOR<Option_QuizUpdateToOneWithWhereWithoutAnsweredQuizInput, Option_QuizUpdateWithoutAnsweredQuizInput>, Option_QuizUncheckedUpdateWithoutAnsweredQuizInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumModuleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleType | EnumModuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModuleType[]
    notIn?: $Enums.ModuleType[]
    not?: NestedEnumModuleTypeFilter<$PrismaModel> | $Enums.ModuleType
  }

  export type NestedEnumModuleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModuleType | EnumModuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ModuleType[]
    notIn?: $Enums.ModuleType[]
    not?: NestedEnumModuleTypeWithAggregatesFilter<$PrismaModel> | $Enums.ModuleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModuleTypeFilter<$PrismaModel>
    _max?: NestedEnumModuleTypeFilter<$PrismaModel>
  }

  export type NestedEnumQuizTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizType | EnumQuizTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuizType[]
    notIn?: $Enums.QuizType[]
    not?: NestedEnumQuizTypeFilter<$PrismaModel> | $Enums.QuizType
  }

  export type NestedEnumQuizTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuizType | EnumQuizTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuizType[]
    notIn?: $Enums.QuizType[]
    not?: NestedEnumQuizTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuizType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuizTypeFilter<$PrismaModel>
    _max?: NestedEnumQuizTypeFilter<$PrismaModel>
  }

  export type Answered_QuizCreateWithoutUserInput = {
    id?: bigint | number
    optionQuiz: Option_QuizCreateNestedOneWithoutAnsweredQuizInput
  }

  export type Answered_QuizUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    optionQuizId: bigint | number
  }

  export type Answered_QuizCreateOrConnectWithoutUserInput = {
    where: Answered_QuizWhereUniqueInput
    create: XOR<Answered_QuizCreateWithoutUserInput, Answered_QuizUncheckedCreateWithoutUserInput>
  }

  export type Answered_QuizCreateManyUserInputEnvelope = {
    data: Answered_QuizCreateManyUserInput | Answered_QuizCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type My_ClassCreateWithoutUserInput = {
    id?: bigint | number
    status: boolean
    progress: number
    totalModule: number
    totalTime: number
    class: ClassCreateNestedOneWithoutMyClassInput
  }

  export type My_ClassUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    status: boolean
    progress: number
    totalModule: number
    totalTime: number
    classId: bigint | number
  }

  export type My_ClassCreateOrConnectWithoutUserInput = {
    where: My_ClassWhereUniqueInput
    create: XOR<My_ClassCreateWithoutUserInput, My_ClassUncheckedCreateWithoutUserInput>
  }

  export type My_ClassCreateManyUserInputEnvelope = {
    data: My_ClassCreateManyUserInput | My_ClassCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: bigint | number
    totalPayment: number
    totalPrice: number
    order?: OrderCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    totalPayment: number
    totalPrice: number
    order?: OrderUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Answered_QuizUpsertWithWhereUniqueWithoutUserInput = {
    where: Answered_QuizWhereUniqueInput
    update: XOR<Answered_QuizUpdateWithoutUserInput, Answered_QuizUncheckedUpdateWithoutUserInput>
    create: XOR<Answered_QuizCreateWithoutUserInput, Answered_QuizUncheckedCreateWithoutUserInput>
  }

  export type Answered_QuizUpdateWithWhereUniqueWithoutUserInput = {
    where: Answered_QuizWhereUniqueInput
    data: XOR<Answered_QuizUpdateWithoutUserInput, Answered_QuizUncheckedUpdateWithoutUserInput>
  }

  export type Answered_QuizUpdateManyWithWhereWithoutUserInput = {
    where: Answered_QuizScalarWhereInput
    data: XOR<Answered_QuizUpdateManyMutationInput, Answered_QuizUncheckedUpdateManyWithoutUserInput>
  }

  export type Answered_QuizScalarWhereInput = {
    AND?: Answered_QuizScalarWhereInput | Answered_QuizScalarWhereInput[]
    OR?: Answered_QuizScalarWhereInput[]
    NOT?: Answered_QuizScalarWhereInput | Answered_QuizScalarWhereInput[]
    id?: BigIntFilter<"Answered_Quiz"> | bigint | number
    userId?: BigIntFilter<"Answered_Quiz"> | bigint | number
    optionQuizId?: BigIntFilter<"Answered_Quiz"> | bigint | number
  }

  export type My_ClassUpsertWithWhereUniqueWithoutUserInput = {
    where: My_ClassWhereUniqueInput
    update: XOR<My_ClassUpdateWithoutUserInput, My_ClassUncheckedUpdateWithoutUserInput>
    create: XOR<My_ClassCreateWithoutUserInput, My_ClassUncheckedCreateWithoutUserInput>
  }

  export type My_ClassUpdateWithWhereUniqueWithoutUserInput = {
    where: My_ClassWhereUniqueInput
    data: XOR<My_ClassUpdateWithoutUserInput, My_ClassUncheckedUpdateWithoutUserInput>
  }

  export type My_ClassUpdateManyWithWhereWithoutUserInput = {
    where: My_ClassScalarWhereInput
    data: XOR<My_ClassUpdateManyMutationInput, My_ClassUncheckedUpdateManyWithoutUserInput>
  }

  export type My_ClassScalarWhereInput = {
    AND?: My_ClassScalarWhereInput | My_ClassScalarWhereInput[]
    OR?: My_ClassScalarWhereInput[]
    NOT?: My_ClassScalarWhereInput | My_ClassScalarWhereInput[]
    id?: BigIntFilter<"My_Class"> | bigint | number
    status?: BoolFilter<"My_Class"> | boolean
    progress?: IntFilter<"My_Class"> | number
    totalModule?: IntFilter<"My_Class"> | number
    totalTime?: IntFilter<"My_Class"> | number
    userId?: BigIntFilter<"My_Class"> | bigint | number
    classId?: BigIntFilter<"My_Class"> | bigint | number
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: BigIntFilter<"Payment"> | bigint | number
    totalPayment?: IntFilter<"Payment"> | number
    totalPrice?: IntFilter<"Payment"> | number
    userId?: BigIntFilter<"Payment"> | bigint | number
  }

  export type ClassCreateWithoutTutorInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    categoryClass: Category_ClassCreateNestedOneWithoutClassInput
    module?: ModuleCreateNestedManyWithoutClassInput
    myClass?: My_ClassCreateNestedManyWithoutClassInput
    order?: OrderCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTutorInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    categoryClassId: bigint | number
    module?: ModuleUncheckedCreateNestedManyWithoutClassInput
    myClass?: My_ClassUncheckedCreateNestedManyWithoutClassInput
    order?: OrderUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTutorInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTutorInput, ClassUncheckedCreateWithoutTutorInput>
  }

  export type ClassCreateManyTutorInputEnvelope = {
    data: ClassCreateManyTutorInput | ClassCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithWhereUniqueWithoutTutorInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutTutorInput, ClassUncheckedUpdateWithoutTutorInput>
    create: XOR<ClassCreateWithoutTutorInput, ClassUncheckedCreateWithoutTutorInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutTutorInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutTutorInput, ClassUncheckedUpdateWithoutTutorInput>
  }

  export type ClassUpdateManyWithWhereWithoutTutorInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutTutorInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: BigIntFilter<"Class"> | bigint | number
    title?: StringFilter<"Class"> | string
    image?: StringNullableFilter<"Class"> | string | null
    description?: StringFilter<"Class"> | string
    tutorId?: BigIntFilter<"Class"> | bigint | number
    categoryClassId?: BigIntFilter<"Class"> | bigint | number
  }

  export type ClassCreateWithoutCategoryClassInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    tutor: TutorCreateNestedOneWithoutClassInput
    module?: ModuleCreateNestedManyWithoutClassInput
    myClass?: My_ClassCreateNestedManyWithoutClassInput
    order?: OrderCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutCategoryClassInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    tutorId: bigint | number
    module?: ModuleUncheckedCreateNestedManyWithoutClassInput
    myClass?: My_ClassUncheckedCreateNestedManyWithoutClassInput
    order?: OrderUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutCategoryClassInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutCategoryClassInput, ClassUncheckedCreateWithoutCategoryClassInput>
  }

  export type ClassCreateManyCategoryClassInputEnvelope = {
    data: ClassCreateManyCategoryClassInput | ClassCreateManyCategoryClassInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithWhereUniqueWithoutCategoryClassInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutCategoryClassInput, ClassUncheckedUpdateWithoutCategoryClassInput>
    create: XOR<ClassCreateWithoutCategoryClassInput, ClassUncheckedCreateWithoutCategoryClassInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutCategoryClassInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutCategoryClassInput, ClassUncheckedUpdateWithoutCategoryClassInput>
  }

  export type ClassUpdateManyWithWhereWithoutCategoryClassInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutCategoryClassInput>
  }

  export type TutorCreateWithoutClassInput = {
    id?: bigint | number
    avatar?: string | null
    name: string
    position: string
    company: string
    experience: string
  }

  export type TutorUncheckedCreateWithoutClassInput = {
    id?: bigint | number
    avatar?: string | null
    name: string
    position: string
    company: string
    experience: string
  }

  export type TutorCreateOrConnectWithoutClassInput = {
    where: TutorWhereUniqueInput
    create: XOR<TutorCreateWithoutClassInput, TutorUncheckedCreateWithoutClassInput>
  }

  export type Category_ClassCreateWithoutClassInput = {
    id?: bigint | number
    name: string
  }

  export type Category_ClassUncheckedCreateWithoutClassInput = {
    id?: bigint | number
    name: string
  }

  export type Category_ClassCreateOrConnectWithoutClassInput = {
    where: Category_ClassWhereUniqueInput
    create: XOR<Category_ClassCreateWithoutClassInput, Category_ClassUncheckedCreateWithoutClassInput>
  }

  export type ModuleCreateWithoutClassInput = {
    id?: bigint | number
    name: string
    type?: $Enums.ModuleType
    note: string
    number: number
    video?: VideoCreateNestedManyWithoutModuleInput
    summary?: SummaryCreateNestedOneWithoutModuleInput
    quiz?: QuizCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutClassInput = {
    id?: bigint | number
    name: string
    type?: $Enums.ModuleType
    note: string
    number: number
    video?: VideoUncheckedCreateNestedManyWithoutModuleInput
    summary?: SummaryUncheckedCreateNestedOneWithoutModuleInput
    quiz?: QuizUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutClassInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutClassInput, ModuleUncheckedCreateWithoutClassInput>
  }

  export type ModuleCreateManyClassInputEnvelope = {
    data: ModuleCreateManyClassInput | ModuleCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type My_ClassCreateWithoutClassInput = {
    id?: bigint | number
    status: boolean
    progress: number
    totalModule: number
    totalTime: number
    user: UserCreateNestedOneWithoutMyClassInput
  }

  export type My_ClassUncheckedCreateWithoutClassInput = {
    id?: bigint | number
    status: boolean
    progress: number
    totalModule: number
    totalTime: number
    userId: bigint | number
  }

  export type My_ClassCreateOrConnectWithoutClassInput = {
    where: My_ClassWhereUniqueInput
    create: XOR<My_ClassCreateWithoutClassInput, My_ClassUncheckedCreateWithoutClassInput>
  }

  export type My_ClassCreateManyClassInputEnvelope = {
    data: My_ClassCreateManyClassInput | My_ClassCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutClassInput = {
    id?: bigint | number
    price: number
    payment: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutClassInput = {
    id?: bigint | number
    price: number
    paymentId: bigint | number
  }

  export type OrderCreateOrConnectWithoutClassInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutClassInput, OrderUncheckedCreateWithoutClassInput>
  }

  export type OrderCreateManyClassInputEnvelope = {
    data: OrderCreateManyClassInput | OrderCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type TutorUpsertWithoutClassInput = {
    update: XOR<TutorUpdateWithoutClassInput, TutorUncheckedUpdateWithoutClassInput>
    create: XOR<TutorCreateWithoutClassInput, TutorUncheckedCreateWithoutClassInput>
    where?: TutorWhereInput
  }

  export type TutorUpdateToOneWithWhereWithoutClassInput = {
    where?: TutorWhereInput
    data: XOR<TutorUpdateWithoutClassInput, TutorUncheckedUpdateWithoutClassInput>
  }

  export type TutorUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
  }

  export type TutorUncheckedUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
  }

  export type Category_ClassUpsertWithoutClassInput = {
    update: XOR<Category_ClassUpdateWithoutClassInput, Category_ClassUncheckedUpdateWithoutClassInput>
    create: XOR<Category_ClassCreateWithoutClassInput, Category_ClassUncheckedCreateWithoutClassInput>
    where?: Category_ClassWhereInput
  }

  export type Category_ClassUpdateToOneWithWhereWithoutClassInput = {
    where?: Category_ClassWhereInput
    data: XOR<Category_ClassUpdateWithoutClassInput, Category_ClassUncheckedUpdateWithoutClassInput>
  }

  export type Category_ClassUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Category_ClassUncheckedUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModuleUpsertWithWhereUniqueWithoutClassInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutClassInput, ModuleUncheckedUpdateWithoutClassInput>
    create: XOR<ModuleCreateWithoutClassInput, ModuleUncheckedCreateWithoutClassInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutClassInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutClassInput, ModuleUncheckedUpdateWithoutClassInput>
  }

  export type ModuleUpdateManyWithWhereWithoutClassInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutClassInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    OR?: ModuleScalarWhereInput[]
    NOT?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    id?: BigIntFilter<"Module"> | bigint | number
    name?: StringFilter<"Module"> | string
    type?: EnumModuleTypeFilter<"Module"> | $Enums.ModuleType
    note?: StringFilter<"Module"> | string
    number?: IntFilter<"Module"> | number
    classId?: BigIntFilter<"Module"> | bigint | number
  }

  export type My_ClassUpsertWithWhereUniqueWithoutClassInput = {
    where: My_ClassWhereUniqueInput
    update: XOR<My_ClassUpdateWithoutClassInput, My_ClassUncheckedUpdateWithoutClassInput>
    create: XOR<My_ClassCreateWithoutClassInput, My_ClassUncheckedCreateWithoutClassInput>
  }

  export type My_ClassUpdateWithWhereUniqueWithoutClassInput = {
    where: My_ClassWhereUniqueInput
    data: XOR<My_ClassUpdateWithoutClassInput, My_ClassUncheckedUpdateWithoutClassInput>
  }

  export type My_ClassUpdateManyWithWhereWithoutClassInput = {
    where: My_ClassScalarWhereInput
    data: XOR<My_ClassUpdateManyMutationInput, My_ClassUncheckedUpdateManyWithoutClassInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutClassInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutClassInput, OrderUncheckedUpdateWithoutClassInput>
    create: XOR<OrderCreateWithoutClassInput, OrderUncheckedCreateWithoutClassInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutClassInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutClassInput, OrderUncheckedUpdateWithoutClassInput>
  }

  export type OrderUpdateManyWithWhereWithoutClassInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutClassInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: BigIntFilter<"Order"> | bigint | number
    price?: IntFilter<"Order"> | number
    paymentId?: BigIntFilter<"Order"> | bigint | number
    ClassId?: BigIntFilter<"Order"> | bigint | number
  }

  export type UserCreateWithoutMyClassInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    phone: string
    isActive?: boolean
    verifyToken?: string | null
    answeredQuiz?: Answered_QuizCreateNestedManyWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMyClassInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    phone: string
    isActive?: boolean
    verifyToken?: string | null
    answeredQuiz?: Answered_QuizUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMyClassInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMyClassInput, UserUncheckedCreateWithoutMyClassInput>
  }

  export type ClassCreateWithoutMyClassInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    tutor: TutorCreateNestedOneWithoutClassInput
    categoryClass: Category_ClassCreateNestedOneWithoutClassInput
    module?: ModuleCreateNestedManyWithoutClassInput
    order?: OrderCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutMyClassInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    tutorId: bigint | number
    categoryClassId: bigint | number
    module?: ModuleUncheckedCreateNestedManyWithoutClassInput
    order?: OrderUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutMyClassInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutMyClassInput, ClassUncheckedCreateWithoutMyClassInput>
  }

  export type UserUpsertWithoutMyClassInput = {
    update: XOR<UserUpdateWithoutMyClassInput, UserUncheckedUpdateWithoutMyClassInput>
    create: XOR<UserCreateWithoutMyClassInput, UserUncheckedCreateWithoutMyClassInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMyClassInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMyClassInput, UserUncheckedUpdateWithoutMyClassInput>
  }

  export type UserUpdateWithoutMyClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    answeredQuiz?: Answered_QuizUpdateManyWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMyClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    answeredQuiz?: Answered_QuizUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassUpsertWithoutMyClassInput = {
    update: XOR<ClassUpdateWithoutMyClassInput, ClassUncheckedUpdateWithoutMyClassInput>
    create: XOR<ClassCreateWithoutMyClassInput, ClassUncheckedCreateWithoutMyClassInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutMyClassInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutMyClassInput, ClassUncheckedUpdateWithoutMyClassInput>
  }

  export type ClassUpdateWithoutMyClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tutor?: TutorUpdateOneRequiredWithoutClassNestedInput
    categoryClass?: Category_ClassUpdateOneRequiredWithoutClassNestedInput
    module?: ModuleUpdateManyWithoutClassNestedInput
    order?: OrderUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutMyClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tutorId?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryClassId?: BigIntFieldUpdateOperationsInput | bigint | number
    module?: ModuleUncheckedUpdateManyWithoutClassNestedInput
    order?: OrderUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserCreateWithoutPaymentInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    phone: string
    isActive?: boolean
    verifyToken?: string | null
    answeredQuiz?: Answered_QuizCreateNestedManyWithoutUserInput
    myClass?: My_ClassCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    phone: string
    isActive?: boolean
    verifyToken?: string | null
    answeredQuiz?: Answered_QuizUncheckedCreateNestedManyWithoutUserInput
    myClass?: My_ClassUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type OrderCreateWithoutPaymentInput = {
    id?: bigint | number
    price: number
    class: ClassCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentInput = {
    id?: bigint | number
    price: number
    ClassId: bigint | number
  }

  export type OrderCreateOrConnectWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type OrderCreateManyPaymentInputEnvelope = {
    data: OrderCreateManyPaymentInput | OrderCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPaymentInput = {
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateWithoutPaymentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    answeredQuiz?: Answered_QuizUpdateManyWithoutUserNestedInput
    myClass?: My_ClassUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    answeredQuiz?: Answered_QuizUncheckedUpdateManyWithoutUserNestedInput
    myClass?: My_ClassUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderUpdateManyWithWhereWithoutPaymentInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutPaymentInput>
  }

  export type PaymentCreateWithoutOrderInput = {
    id?: bigint | number
    totalPayment: number
    totalPrice: number
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: bigint | number
    totalPayment: number
    totalPrice: number
    userId: bigint | number
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type ClassCreateWithoutOrderInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    tutor: TutorCreateNestedOneWithoutClassInput
    categoryClass: Category_ClassCreateNestedOneWithoutClassInput
    module?: ModuleCreateNestedManyWithoutClassInput
    myClass?: My_ClassCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutOrderInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    tutorId: bigint | number
    categoryClassId: bigint | number
    module?: ModuleUncheckedCreateNestedManyWithoutClassInput
    myClass?: My_ClassUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutOrderInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutOrderInput, ClassUncheckedCreateWithoutOrderInput>
  }

  export type PaymentUpsertWithoutOrderInput = {
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateWithoutOrderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPayment?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPayment?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ClassUpsertWithoutOrderInput = {
    update: XOR<ClassUpdateWithoutOrderInput, ClassUncheckedUpdateWithoutOrderInput>
    create: XOR<ClassCreateWithoutOrderInput, ClassUncheckedCreateWithoutOrderInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutOrderInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutOrderInput, ClassUncheckedUpdateWithoutOrderInput>
  }

  export type ClassUpdateWithoutOrderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tutor?: TutorUpdateOneRequiredWithoutClassNestedInput
    categoryClass?: Category_ClassUpdateOneRequiredWithoutClassNestedInput
    module?: ModuleUpdateManyWithoutClassNestedInput
    myClass?: My_ClassUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutOrderInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tutorId?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryClassId?: BigIntFieldUpdateOperationsInput | bigint | number
    module?: ModuleUncheckedUpdateManyWithoutClassNestedInput
    myClass?: My_ClassUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateWithoutModuleInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    tutor: TutorCreateNestedOneWithoutClassInput
    categoryClass: Category_ClassCreateNestedOneWithoutClassInput
    myClass?: My_ClassCreateNestedManyWithoutClassInput
    order?: OrderCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutModuleInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    tutorId: bigint | number
    categoryClassId: bigint | number
    myClass?: My_ClassUncheckedCreateNestedManyWithoutClassInput
    order?: OrderUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutModuleInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutModuleInput, ClassUncheckedCreateWithoutModuleInput>
  }

  export type VideoCreateWithoutModuleInput = {
    id?: bigint | number
    name: string
    video_url: string
    description: string
  }

  export type VideoUncheckedCreateWithoutModuleInput = {
    id?: bigint | number
    name: string
    video_url: string
    description: string
  }

  export type VideoCreateOrConnectWithoutModuleInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutModuleInput, VideoUncheckedCreateWithoutModuleInput>
  }

  export type VideoCreateManyModuleInputEnvelope = {
    data: VideoCreateManyModuleInput | VideoCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type SummaryCreateWithoutModuleInput = {
    id?: bigint | number
    title: string
    content: string
  }

  export type SummaryUncheckedCreateWithoutModuleInput = {
    id?: bigint | number
    title: string
    content: string
  }

  export type SummaryCreateOrConnectWithoutModuleInput = {
    where: SummaryWhereUniqueInput
    create: XOR<SummaryCreateWithoutModuleInput, SummaryUncheckedCreateWithoutModuleInput>
  }

  export type QuizCreateWithoutModuleInput = {
    id?: bigint | number
    name: string
    type: $Enums.QuizType
    quiz?: Quiz_ItemCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutModuleInput = {
    id?: bigint | number
    name: string
    type: $Enums.QuizType
    quiz?: Quiz_ItemUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutModuleInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput>
  }

  export type QuizCreateManyModuleInputEnvelope = {
    data: QuizCreateManyModuleInput | QuizCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutModuleInput = {
    update: XOR<ClassUpdateWithoutModuleInput, ClassUncheckedUpdateWithoutModuleInput>
    create: XOR<ClassCreateWithoutModuleInput, ClassUncheckedCreateWithoutModuleInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutModuleInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutModuleInput, ClassUncheckedUpdateWithoutModuleInput>
  }

  export type ClassUpdateWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tutor?: TutorUpdateOneRequiredWithoutClassNestedInput
    categoryClass?: Category_ClassUpdateOneRequiredWithoutClassNestedInput
    myClass?: My_ClassUpdateManyWithoutClassNestedInput
    order?: OrderUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tutorId?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryClassId?: BigIntFieldUpdateOperationsInput | bigint | number
    myClass?: My_ClassUncheckedUpdateManyWithoutClassNestedInput
    order?: OrderUncheckedUpdateManyWithoutClassNestedInput
  }

  export type VideoUpsertWithWhereUniqueWithoutModuleInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutModuleInput, VideoUncheckedUpdateWithoutModuleInput>
    create: XOR<VideoCreateWithoutModuleInput, VideoUncheckedCreateWithoutModuleInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutModuleInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutModuleInput, VideoUncheckedUpdateWithoutModuleInput>
  }

  export type VideoUpdateManyWithWhereWithoutModuleInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutModuleInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: BigIntFilter<"Video"> | bigint | number
    name?: StringFilter<"Video"> | string
    video_url?: StringFilter<"Video"> | string
    description?: StringFilter<"Video"> | string
    moduleId?: BigIntFilter<"Video"> | bigint | number
  }

  export type SummaryUpsertWithoutModuleInput = {
    update: XOR<SummaryUpdateWithoutModuleInput, SummaryUncheckedUpdateWithoutModuleInput>
    create: XOR<SummaryCreateWithoutModuleInput, SummaryUncheckedCreateWithoutModuleInput>
    where?: SummaryWhereInput
  }

  export type SummaryUpdateToOneWithWhereWithoutModuleInput = {
    where?: SummaryWhereInput
    data: XOR<SummaryUpdateWithoutModuleInput, SummaryUncheckedUpdateWithoutModuleInput>
  }

  export type SummaryUpdateWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type SummaryUncheckedUpdateWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type QuizUpsertWithWhereUniqueWithoutModuleInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutModuleInput, QuizUncheckedUpdateWithoutModuleInput>
    create: XOR<QuizCreateWithoutModuleInput, QuizUncheckedCreateWithoutModuleInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutModuleInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutModuleInput, QuizUncheckedUpdateWithoutModuleInput>
  }

  export type QuizUpdateManyWithWhereWithoutModuleInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutModuleInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: BigIntFilter<"Quiz"> | bigint | number
    name?: StringFilter<"Quiz"> | string
    type?: EnumQuizTypeFilter<"Quiz"> | $Enums.QuizType
    moduleId?: BigIntFilter<"Quiz"> | bigint | number
  }

  export type ModuleCreateWithoutVideoInput = {
    id?: bigint | number
    name: string
    type?: $Enums.ModuleType
    note: string
    number: number
    class: ClassCreateNestedOneWithoutModuleInput
    summary?: SummaryCreateNestedOneWithoutModuleInput
    quiz?: QuizCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutVideoInput = {
    id?: bigint | number
    name: string
    type?: $Enums.ModuleType
    note: string
    number: number
    classId: bigint | number
    summary?: SummaryUncheckedCreateNestedOneWithoutModuleInput
    quiz?: QuizUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutVideoInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutVideoInput, ModuleUncheckedCreateWithoutVideoInput>
  }

  export type ModuleUpsertWithoutVideoInput = {
    update: XOR<ModuleUpdateWithoutVideoInput, ModuleUncheckedUpdateWithoutVideoInput>
    create: XOR<ModuleCreateWithoutVideoInput, ModuleUncheckedCreateWithoutVideoInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutVideoInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutVideoInput, ModuleUncheckedUpdateWithoutVideoInput>
  }

  export type ModuleUpdateWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    class?: ClassUpdateOneRequiredWithoutModuleNestedInput
    summary?: SummaryUpdateOneWithoutModuleNestedInput
    quiz?: QuizUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutVideoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    summary?: SummaryUncheckedUpdateOneWithoutModuleNestedInput
    quiz?: QuizUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateWithoutSummaryInput = {
    id?: bigint | number
    name: string
    type?: $Enums.ModuleType
    note: string
    number: number
    class: ClassCreateNestedOneWithoutModuleInput
    video?: VideoCreateNestedManyWithoutModuleInput
    quiz?: QuizCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutSummaryInput = {
    id?: bigint | number
    name: string
    type?: $Enums.ModuleType
    note: string
    number: number
    classId: bigint | number
    video?: VideoUncheckedCreateNestedManyWithoutModuleInput
    quiz?: QuizUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutSummaryInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutSummaryInput, ModuleUncheckedCreateWithoutSummaryInput>
  }

  export type ModuleUpsertWithoutSummaryInput = {
    update: XOR<ModuleUpdateWithoutSummaryInput, ModuleUncheckedUpdateWithoutSummaryInput>
    create: XOR<ModuleCreateWithoutSummaryInput, ModuleUncheckedCreateWithoutSummaryInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutSummaryInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutSummaryInput, ModuleUncheckedUpdateWithoutSummaryInput>
  }

  export type ModuleUpdateWithoutSummaryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    class?: ClassUpdateOneRequiredWithoutModuleNestedInput
    video?: VideoUpdateManyWithoutModuleNestedInput
    quiz?: QuizUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutSummaryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: VideoUncheckedUpdateManyWithoutModuleNestedInput
    quiz?: QuizUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateWithoutQuizInput = {
    id?: bigint | number
    name: string
    type?: $Enums.ModuleType
    note: string
    number: number
    class: ClassCreateNestedOneWithoutModuleInput
    video?: VideoCreateNestedManyWithoutModuleInput
    summary?: SummaryCreateNestedOneWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutQuizInput = {
    id?: bigint | number
    name: string
    type?: $Enums.ModuleType
    note: string
    number: number
    classId: bigint | number
    video?: VideoUncheckedCreateNestedManyWithoutModuleInput
    summary?: SummaryUncheckedCreateNestedOneWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutQuizInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutQuizInput, ModuleUncheckedCreateWithoutQuizInput>
  }

  export type Quiz_ItemCreateWithoutQuizInput = {
    id?: bigint | number
    question: string
    optionQuiz?: Option_QuizCreateNestedManyWithoutQuizItemInput
  }

  export type Quiz_ItemUncheckedCreateWithoutQuizInput = {
    id?: bigint | number
    question: string
    optionQuiz?: Option_QuizUncheckedCreateNestedManyWithoutQuizItemInput
  }

  export type Quiz_ItemCreateOrConnectWithoutQuizInput = {
    where: Quiz_ItemWhereUniqueInput
    create: XOR<Quiz_ItemCreateWithoutQuizInput, Quiz_ItemUncheckedCreateWithoutQuizInput>
  }

  export type Quiz_ItemCreateManyQuizInputEnvelope = {
    data: Quiz_ItemCreateManyQuizInput | Quiz_ItemCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type ModuleUpsertWithoutQuizInput = {
    update: XOR<ModuleUpdateWithoutQuizInput, ModuleUncheckedUpdateWithoutQuizInput>
    create: XOR<ModuleCreateWithoutQuizInput, ModuleUncheckedCreateWithoutQuizInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutQuizInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutQuizInput, ModuleUncheckedUpdateWithoutQuizInput>
  }

  export type ModuleUpdateWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    class?: ClassUpdateOneRequiredWithoutModuleNestedInput
    video?: VideoUpdateManyWithoutModuleNestedInput
    summary?: SummaryUpdateOneWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
    video?: VideoUncheckedUpdateManyWithoutModuleNestedInput
    summary?: SummaryUncheckedUpdateOneWithoutModuleNestedInput
  }

  export type Quiz_ItemUpsertWithWhereUniqueWithoutQuizInput = {
    where: Quiz_ItemWhereUniqueInput
    update: XOR<Quiz_ItemUpdateWithoutQuizInput, Quiz_ItemUncheckedUpdateWithoutQuizInput>
    create: XOR<Quiz_ItemCreateWithoutQuizInput, Quiz_ItemUncheckedCreateWithoutQuizInput>
  }

  export type Quiz_ItemUpdateWithWhereUniqueWithoutQuizInput = {
    where: Quiz_ItemWhereUniqueInput
    data: XOR<Quiz_ItemUpdateWithoutQuizInput, Quiz_ItemUncheckedUpdateWithoutQuizInput>
  }

  export type Quiz_ItemUpdateManyWithWhereWithoutQuizInput = {
    where: Quiz_ItemScalarWhereInput
    data: XOR<Quiz_ItemUpdateManyMutationInput, Quiz_ItemUncheckedUpdateManyWithoutQuizInput>
  }

  export type Quiz_ItemScalarWhereInput = {
    AND?: Quiz_ItemScalarWhereInput | Quiz_ItemScalarWhereInput[]
    OR?: Quiz_ItemScalarWhereInput[]
    NOT?: Quiz_ItemScalarWhereInput | Quiz_ItemScalarWhereInput[]
    id?: BigIntFilter<"Quiz_Item"> | bigint | number
    question?: StringFilter<"Quiz_Item"> | string
    quizId?: BigIntFilter<"Quiz_Item"> | bigint | number
  }

  export type QuizCreateWithoutQuizInput = {
    id?: bigint | number
    name: string
    type: $Enums.QuizType
    module: ModuleCreateNestedOneWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutQuizInput = {
    id?: bigint | number
    name: string
    type: $Enums.QuizType
    moduleId: bigint | number
  }

  export type QuizCreateOrConnectWithoutQuizInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuizInput, QuizUncheckedCreateWithoutQuizInput>
  }

  export type Option_QuizCreateWithoutQuizItemInput = {
    id?: bigint | number
    isCorrect: boolean
    answeredQuiz?: Answered_QuizCreateNestedManyWithoutOptionQuizInput
  }

  export type Option_QuizUncheckedCreateWithoutQuizItemInput = {
    id?: bigint | number
    isCorrect: boolean
    answeredQuiz?: Answered_QuizUncheckedCreateNestedManyWithoutOptionQuizInput
  }

  export type Option_QuizCreateOrConnectWithoutQuizItemInput = {
    where: Option_QuizWhereUniqueInput
    create: XOR<Option_QuizCreateWithoutQuizItemInput, Option_QuizUncheckedCreateWithoutQuizItemInput>
  }

  export type Option_QuizCreateManyQuizItemInputEnvelope = {
    data: Option_QuizCreateManyQuizItemInput | Option_QuizCreateManyQuizItemInput[]
    skipDuplicates?: boolean
  }

  export type QuizUpsertWithoutQuizInput = {
    update: XOR<QuizUpdateWithoutQuizInput, QuizUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizCreateWithoutQuizInput, QuizUncheckedCreateWithoutQuizInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuizInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuizInput, QuizUncheckedUpdateWithoutQuizInput>
  }

  export type QuizUpdateWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    module?: ModuleUpdateOneRequiredWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    moduleId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Option_QuizUpsertWithWhereUniqueWithoutQuizItemInput = {
    where: Option_QuizWhereUniqueInput
    update: XOR<Option_QuizUpdateWithoutQuizItemInput, Option_QuizUncheckedUpdateWithoutQuizItemInput>
    create: XOR<Option_QuizCreateWithoutQuizItemInput, Option_QuizUncheckedCreateWithoutQuizItemInput>
  }

  export type Option_QuizUpdateWithWhereUniqueWithoutQuizItemInput = {
    where: Option_QuizWhereUniqueInput
    data: XOR<Option_QuizUpdateWithoutQuizItemInput, Option_QuizUncheckedUpdateWithoutQuizItemInput>
  }

  export type Option_QuizUpdateManyWithWhereWithoutQuizItemInput = {
    where: Option_QuizScalarWhereInput
    data: XOR<Option_QuizUpdateManyMutationInput, Option_QuizUncheckedUpdateManyWithoutQuizItemInput>
  }

  export type Option_QuizScalarWhereInput = {
    AND?: Option_QuizScalarWhereInput | Option_QuizScalarWhereInput[]
    OR?: Option_QuizScalarWhereInput[]
    NOT?: Option_QuizScalarWhereInput | Option_QuizScalarWhereInput[]
    id?: BigIntFilter<"Option_Quiz"> | bigint | number
    isCorrect?: BoolFilter<"Option_Quiz"> | boolean
    quizItemId?: BigIntFilter<"Option_Quiz"> | bigint | number
  }

  export type Quiz_ItemCreateWithoutOptionQuizInput = {
    id?: bigint | number
    question: string
    quiz: QuizCreateNestedOneWithoutQuizInput
  }

  export type Quiz_ItemUncheckedCreateWithoutOptionQuizInput = {
    id?: bigint | number
    question: string
    quizId: bigint | number
  }

  export type Quiz_ItemCreateOrConnectWithoutOptionQuizInput = {
    where: Quiz_ItemWhereUniqueInput
    create: XOR<Quiz_ItemCreateWithoutOptionQuizInput, Quiz_ItemUncheckedCreateWithoutOptionQuizInput>
  }

  export type Answered_QuizCreateWithoutOptionQuizInput = {
    id?: bigint | number
    user: UserCreateNestedOneWithoutAnsweredQuizInput
  }

  export type Answered_QuizUncheckedCreateWithoutOptionQuizInput = {
    id?: bigint | number
    userId: bigint | number
  }

  export type Answered_QuizCreateOrConnectWithoutOptionQuizInput = {
    where: Answered_QuizWhereUniqueInput
    create: XOR<Answered_QuizCreateWithoutOptionQuizInput, Answered_QuizUncheckedCreateWithoutOptionQuizInput>
  }

  export type Answered_QuizCreateManyOptionQuizInputEnvelope = {
    data: Answered_QuizCreateManyOptionQuizInput | Answered_QuizCreateManyOptionQuizInput[]
    skipDuplicates?: boolean
  }

  export type Quiz_ItemUpsertWithoutOptionQuizInput = {
    update: XOR<Quiz_ItemUpdateWithoutOptionQuizInput, Quiz_ItemUncheckedUpdateWithoutOptionQuizInput>
    create: XOR<Quiz_ItemCreateWithoutOptionQuizInput, Quiz_ItemUncheckedCreateWithoutOptionQuizInput>
    where?: Quiz_ItemWhereInput
  }

  export type Quiz_ItemUpdateToOneWithWhereWithoutOptionQuizInput = {
    where?: Quiz_ItemWhereInput
    data: XOR<Quiz_ItemUpdateWithoutOptionQuizInput, Quiz_ItemUncheckedUpdateWithoutOptionQuizInput>
  }

  export type Quiz_ItemUpdateWithoutOptionQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    quiz?: QuizUpdateOneRequiredWithoutQuizNestedInput
  }

  export type Quiz_ItemUncheckedUpdateWithoutOptionQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    quizId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Answered_QuizUpsertWithWhereUniqueWithoutOptionQuizInput = {
    where: Answered_QuizWhereUniqueInput
    update: XOR<Answered_QuizUpdateWithoutOptionQuizInput, Answered_QuizUncheckedUpdateWithoutOptionQuizInput>
    create: XOR<Answered_QuizCreateWithoutOptionQuizInput, Answered_QuizUncheckedCreateWithoutOptionQuizInput>
  }

  export type Answered_QuizUpdateWithWhereUniqueWithoutOptionQuizInput = {
    where: Answered_QuizWhereUniqueInput
    data: XOR<Answered_QuizUpdateWithoutOptionQuizInput, Answered_QuizUncheckedUpdateWithoutOptionQuizInput>
  }

  export type Answered_QuizUpdateManyWithWhereWithoutOptionQuizInput = {
    where: Answered_QuizScalarWhereInput
    data: XOR<Answered_QuizUpdateManyMutationInput, Answered_QuizUncheckedUpdateManyWithoutOptionQuizInput>
  }

  export type UserCreateWithoutAnsweredQuizInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    phone: string
    isActive?: boolean
    verifyToken?: string | null
    myClass?: My_ClassCreateNestedManyWithoutUserInput
    payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnsweredQuizInput = {
    id?: bigint | number
    name: string
    email: string
    password: string
    phone: string
    isActive?: boolean
    verifyToken?: string | null
    myClass?: My_ClassUncheckedCreateNestedManyWithoutUserInput
    payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnsweredQuizInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnsweredQuizInput, UserUncheckedCreateWithoutAnsweredQuizInput>
  }

  export type Option_QuizCreateWithoutAnsweredQuizInput = {
    id?: bigint | number
    isCorrect: boolean
    quizItem: Quiz_ItemCreateNestedOneWithoutOptionQuizInput
  }

  export type Option_QuizUncheckedCreateWithoutAnsweredQuizInput = {
    id?: bigint | number
    isCorrect: boolean
    quizItemId: bigint | number
  }

  export type Option_QuizCreateOrConnectWithoutAnsweredQuizInput = {
    where: Option_QuizWhereUniqueInput
    create: XOR<Option_QuizCreateWithoutAnsweredQuizInput, Option_QuizUncheckedCreateWithoutAnsweredQuizInput>
  }

  export type UserUpsertWithoutAnsweredQuizInput = {
    update: XOR<UserUpdateWithoutAnsweredQuizInput, UserUncheckedUpdateWithoutAnsweredQuizInput>
    create: XOR<UserCreateWithoutAnsweredQuizInput, UserUncheckedCreateWithoutAnsweredQuizInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnsweredQuizInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnsweredQuizInput, UserUncheckedUpdateWithoutAnsweredQuizInput>
  }

  export type UserUpdateWithoutAnsweredQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    myClass?: My_ClassUpdateManyWithoutUserNestedInput
    payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnsweredQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    myClass?: My_ClassUncheckedUpdateManyWithoutUserNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Option_QuizUpsertWithoutAnsweredQuizInput = {
    update: XOR<Option_QuizUpdateWithoutAnsweredQuizInput, Option_QuizUncheckedUpdateWithoutAnsweredQuizInput>
    create: XOR<Option_QuizCreateWithoutAnsweredQuizInput, Option_QuizUncheckedCreateWithoutAnsweredQuizInput>
    where?: Option_QuizWhereInput
  }

  export type Option_QuizUpdateToOneWithWhereWithoutAnsweredQuizInput = {
    where?: Option_QuizWhereInput
    data: XOR<Option_QuizUpdateWithoutAnsweredQuizInput, Option_QuizUncheckedUpdateWithoutAnsweredQuizInput>
  }

  export type Option_QuizUpdateWithoutAnsweredQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    quizItem?: Quiz_ItemUpdateOneRequiredWithoutOptionQuizNestedInput
  }

  export type Option_QuizUncheckedUpdateWithoutAnsweredQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    quizItemId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Answered_QuizCreateManyUserInput = {
    id?: bigint | number
    optionQuizId: bigint | number
  }

  export type My_ClassCreateManyUserInput = {
    id?: bigint | number
    status: boolean
    progress: number
    totalModule: number
    totalTime: number
    classId: bigint | number
  }

  export type PaymentCreateManyUserInput = {
    id?: bigint | number
    totalPayment: number
    totalPrice: number
  }

  export type Answered_QuizUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    optionQuiz?: Option_QuizUpdateOneRequiredWithoutAnsweredQuizNestedInput
  }

  export type Answered_QuizUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    optionQuizId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Answered_QuizUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    optionQuizId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type My_ClassUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    totalModule?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    class?: ClassUpdateOneRequiredWithoutMyClassNestedInput
  }

  export type My_ClassUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    totalModule?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type My_ClassUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    totalModule?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    classId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPayment?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPayment?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    order?: OrderUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    totalPayment?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
  }

  export type ClassCreateManyTutorInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    categoryClassId: bigint | number
  }

  export type ClassUpdateWithoutTutorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    categoryClass?: Category_ClassUpdateOneRequiredWithoutClassNestedInput
    module?: ModuleUpdateManyWithoutClassNestedInput
    myClass?: My_ClassUpdateManyWithoutClassNestedInput
    order?: OrderUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTutorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    categoryClassId?: BigIntFieldUpdateOperationsInput | bigint | number
    module?: ModuleUncheckedUpdateManyWithoutClassNestedInput
    myClass?: My_ClassUncheckedUpdateManyWithoutClassNestedInput
    order?: OrderUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutTutorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    categoryClassId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ClassCreateManyCategoryClassInput = {
    id?: bigint | number
    title: string
    image?: string | null
    description: string
    tutorId: bigint | number
  }

  export type ClassUpdateWithoutCategoryClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tutor?: TutorUpdateOneRequiredWithoutClassNestedInput
    module?: ModuleUpdateManyWithoutClassNestedInput
    myClass?: My_ClassUpdateManyWithoutClassNestedInput
    order?: OrderUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutCategoryClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tutorId?: BigIntFieldUpdateOperationsInput | bigint | number
    module?: ModuleUncheckedUpdateManyWithoutClassNestedInput
    myClass?: My_ClassUncheckedUpdateManyWithoutClassNestedInput
    order?: OrderUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutCategoryClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    tutorId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ModuleCreateManyClassInput = {
    id?: bigint | number
    name: string
    type?: $Enums.ModuleType
    note: string
    number: number
  }

  export type My_ClassCreateManyClassInput = {
    id?: bigint | number
    status: boolean
    progress: number
    totalModule: number
    totalTime: number
    userId: bigint | number
  }

  export type OrderCreateManyClassInput = {
    id?: bigint | number
    price: number
    paymentId: bigint | number
  }

  export type ModuleUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    video?: VideoUpdateManyWithoutModuleNestedInput
    summary?: SummaryUpdateOneWithoutModuleNestedInput
    quiz?: QuizUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    video?: VideoUncheckedUpdateManyWithoutModuleNestedInput
    summary?: SummaryUncheckedUpdateOneWithoutModuleNestedInput
    quiz?: QuizUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumModuleTypeFieldUpdateOperationsInput | $Enums.ModuleType
    note?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type My_ClassUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    totalModule?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutMyClassNestedInput
  }

  export type My_ClassUncheckedUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    totalModule?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type My_ClassUncheckedUpdateManyWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: BoolFieldUpdateOperationsInput | boolean
    progress?: IntFieldUpdateOperationsInput | number
    totalModule?: IntFieldUpdateOperationsInput | number
    totalTime?: IntFieldUpdateOperationsInput | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type OrderUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: IntFieldUpdateOperationsInput | number
    payment?: PaymentUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: IntFieldUpdateOperationsInput | number
    paymentId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type OrderUncheckedUpdateManyWithoutClassInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: IntFieldUpdateOperationsInput | number
    paymentId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type OrderCreateManyPaymentInput = {
    id?: bigint | number
    price: number
    ClassId: bigint | number
  }

  export type OrderUpdateWithoutPaymentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: IntFieldUpdateOperationsInput | number
    class?: ClassUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: IntFieldUpdateOperationsInput | number
    ClassId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type OrderUncheckedUpdateManyWithoutPaymentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: IntFieldUpdateOperationsInput | number
    ClassId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type VideoCreateManyModuleInput = {
    id?: bigint | number
    name: string
    video_url: string
    description: string
  }

  export type QuizCreateManyModuleInput = {
    id?: bigint | number
    name: string
    type: $Enums.QuizType
  }

  export type VideoUpdateWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUncheckedUpdateManyWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type QuizUpdateWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    quiz?: Quiz_ItemUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
    quiz?: Quiz_ItemUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutModuleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumQuizTypeFieldUpdateOperationsInput | $Enums.QuizType
  }

  export type Quiz_ItemCreateManyQuizInput = {
    id?: bigint | number
    question: string
  }

  export type Quiz_ItemUpdateWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    optionQuiz?: Option_QuizUpdateManyWithoutQuizItemNestedInput
  }

  export type Quiz_ItemUncheckedUpdateWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
    optionQuiz?: Option_QuizUncheckedUpdateManyWithoutQuizItemNestedInput
  }

  export type Quiz_ItemUncheckedUpdateManyWithoutQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    question?: StringFieldUpdateOperationsInput | string
  }

  export type Option_QuizCreateManyQuizItemInput = {
    id?: bigint | number
    isCorrect: boolean
  }

  export type Option_QuizUpdateWithoutQuizItemInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    answeredQuiz?: Answered_QuizUpdateManyWithoutOptionQuizNestedInput
  }

  export type Option_QuizUncheckedUpdateWithoutQuizItemInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    answeredQuiz?: Answered_QuizUncheckedUpdateManyWithoutOptionQuizNestedInput
  }

  export type Option_QuizUncheckedUpdateManyWithoutQuizItemInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Answered_QuizCreateManyOptionQuizInput = {
    id?: bigint | number
    userId: bigint | number
  }

  export type Answered_QuizUpdateWithoutOptionQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutAnsweredQuizNestedInput
  }

  export type Answered_QuizUncheckedUpdateWithoutOptionQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Answered_QuizUncheckedUpdateManyWithoutOptionQuizInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}