import { JSONOutput } from 'typedoc';
declare function isArrayType(value: any): value is JSONOutput.ArrayType;
declare function isConditionalType(value: any): value is JSONOutput.ConditionalType;
declare function isIndexedAccessType(value: any): value is JSONOutput.IndexedAccessType;
declare function isInferredType(value: any): value is JSONOutput.InferredType;
declare function isIntersectionType(value: any): value is JSONOutput.IntersectionType;
declare function isIntrinsicType(value: any): value is JSONOutput.IntrinsicType;
declare function isPredicateType(value: any): value is JSONOutput.PredicateType;
declare function isReferenceType(value: any): value is JSONOutput.ReferenceType;
declare function isReflectionType(value: any): value is JSONOutput.ReflectionType;
declare function isStringLiteralType(value: any): value is JSONOutput.StringLiteralType;
declare function isTupleType(value: any): value is JSONOutput.TupleType;
declare function isTypeOperatorType(value: any): value is JSONOutput.TypeOperatorType;
declare function isTypeParameterType(value: any): value is JSONOutput.TypeParameterType;
declare function isUnionType(value: any): value is JSONOutput.UnionType;
declare function isUnknownType(value: any): value is JSONOutput.UnknownType;
export declare const typeUtil: {
    isArrayType: typeof isArrayType;
    isConditionalType: typeof isConditionalType;
    isIndexedAccessType: typeof isIndexedAccessType;
    isInferredType: typeof isInferredType;
    isIntersectionType: typeof isIntersectionType;
    isIntrinsicType: typeof isIntrinsicType;
    isPredicateType: typeof isPredicateType;
    isReferenceType: typeof isReferenceType;
    isReflectionType: typeof isReflectionType;
    isStringLiteralType: typeof isStringLiteralType;
    isTupleType: typeof isTupleType;
    isTypeOperatorType: typeof isTypeOperatorType;
    isTypeParameterType: typeof isTypeParameterType;
    isUnionType: typeof isUnionType;
    isUnknownType: typeof isUnknownType;
};
export declare function parseTypeSimple(t: JSONOutput.SomeType): string;
export declare type docType = string[][] | string[][][];
export declare function parseType(t: JSONOutput.SomeType): string[][][];
export declare function assert<T>(val: any): asserts val is T;
export {};
