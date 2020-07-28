# nx-plugin-boule

## Install
```bash
 yarn add @m2s-dev/nx-plugin-boule
```

## Add ngrx
if workspace does not installed ngrx
```bash
ng g @m2s-dev/nx-plugin-boule:ngrx products --module=libs/products/src/lib/products.module.ts --directory +state/products --defaults --facade true
```
Legenda
products - name of lib
--module - where you want to add redux
--directory - folder where you want to save all files


Run `ng test nx-plugin-boule` to execute the unit tests via [Jest](https://jestjs.io).
