# TypeScript: any vs unknown + Type Narrowing

## Why is any labeled a "type safety hole"?

`any` disables typescript's type checking

```ts
let value: any = "hello";

value.toUpperCase();// ok
value.toFixed(2);// also allowed (but unsafe at runtime)
```

## why is unknown the safer choice for handling unpredictable data?

`unknown` checks type before run and give error 
`unknown` force to check before 
```ts
let value:unknown="Esha"
value.toUpperCase()// give an type error
```

