# Pick and Omit Utility Types in TypeScript

## What are Pick and Omit?

`Pick` and `Omit` are TypeScript utility types used to create smaller or specialized versions of an existing interface without rewriting code.


# Master Interface

```ts
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}
```

Instead of creating multiple similar interfaces manually, we can reuse this

# Pick Utility Type

`Pick` selects specific properties from the interface

```ts
Pick<Type, Keys>
```

## Example

```ts
type UserPreview = Pick<User, "id" | "name">;
```

## Result

```ts
{
    id: number;
    name: string;
}
```
# Omit Utility Type

`Omit` removes specific properties from the interface

## Syntax
```ts
Omit<Type, Keys>
```

## Example
```ts
type PublicUser = Omit<User, "password">;
```
## Result

```ts
{
    id: number;
    name: string;
    email: string;
}
```

# How Pick and Omit Prevent Code Duplication

Without utility types, we might manually rewrite interfaces

```ts
interface PublicUser {
    id: number;
    name: string;
    email: string;
}
```

This duplicates properties already defined in `User`.

# DRY Principle

DRY means:

Using `Pick` and `Omit`:
- keeps one source of truth
- reduces repeated code

