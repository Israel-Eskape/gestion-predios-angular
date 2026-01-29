# Gestión de Predios 🏡

Aplicación frontend desarrollada con **Angular**, **Angular Material** y **TailwindCSS**  
para la gestión básica de predios (CRUD).

## 🚀 Funcionalidades

- Listado de predios en tabla (Angular Material Table)
- Paginación
- Alta de predio (formulario reactivo con validaciones)
- Edición de predio (reutilizando formulario)
- Eliminación con confirmación
- Consumo de API REST con HttpClient

## 🧱 Entidad Predio

```ts
Predio {
  id: number;
  claveCatastral: string;
  propietario: string;
  superficieTerreno: number;
  tipoPredio: 'URBANO' | 'RURAL';
}
Tecnologías usadas

Angular 21

Angular Material

TailwindCSS

RxJS

JSON Server (API mock)

Ejecución del proyecto
Instalar dependencias
npm install

Levantar API mock
npx json-server --watch db.json --port 3000

 Levantar aplicación
ng serve