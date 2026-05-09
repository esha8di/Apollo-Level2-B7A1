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

`unknown` force to check before use
```ts
let value:unknown="Esha"
value.toUpperCase()// give an type error
```

## type narrowing
`type narrowing` reducing a big type into a small one by checking it's type before 

It checks uisng typeof or instanceof 

`typeof`

```ts
function check(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
```
here typescript initially don't know check function value's type
then checks one at a time if matches it take the output

`instanceof`
```ts
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const user = new Person("Esha");

console.log(user instanceof Person);
```
`output` will be true becuase user is a instanceof Person
