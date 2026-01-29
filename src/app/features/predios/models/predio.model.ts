export interface Predio {
  id: number;
  claveCatastral: string;
  propietario: string;
  superficieTerreno: number;
  tipoPredio: 'URBANO' | 'RURAL';
}
