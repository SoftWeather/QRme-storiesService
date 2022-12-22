export namespace BaseEntityRepository {
  export const constructorPropertiesRegExp = new RegExp('^_.*');
  export type constructorProperties = `_${string}`;
}
