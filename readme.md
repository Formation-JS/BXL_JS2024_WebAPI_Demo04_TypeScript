# Demo 04 - Web API avec Express et TypeScript

## Utilisation du TypeScript
Solution possible:
 - Via la transcompilation de "typescript"
 - Via un "runner" typeScript (ts-node, tsx)
 - Via un environnement différent (bun.js, deno)
 - **(New)** En natif, via le "strip-types" (experimental)

[Documentation TypeScript en Node](https://nodejs.org/en/learn/typescript/introduction) \
Choix pour la démo : le runner « tsx »

## Packages
```
npm i express@5 morgan cors
npm i -D typescript tsx
npm i -D @types/express@5 @types/node @types/morgan @types/cors
```

### Config de TypeScript
```
npx tsc --init
```