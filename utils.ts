import type { Id } from "@valkyr/json-rpc";

export function isJsonRpcId(value: unknown): value is Id {
  return isString(value) || isInteger(value) || value === null;
}

function isInteger(value: any): value is number {
  return isNumber(value) && value % 1 === 0;
}

function isNumber(value: any): value is number {
  const type = typeof value;
  return type === "number" && value > Number.NEGATIVE_INFINITY && value < Number.POSITIVE_INFINITY;
}

function isString(value: any): value is string {
  return typeof value === "string";
}
