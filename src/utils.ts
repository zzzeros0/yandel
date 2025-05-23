export function _is_string(t: any): t is string {
  return typeof t === "string";
}
export function _is_fn(t: any): t is Function {
  return typeof t === "function";
}
export class InmutBool {
  private _v: boolean = false;
  constructor(v?: boolean) {
    if (v !== undefined) this._v = v;
  }
  public set(v: boolean) {
    if (this._v) return;
    this._v = v;
  }
  public get() {
    return this._v;
  }
}
export const DELETE_KEY = Symbol("_d");
export const DELETED_KEY = Symbol("_dd");

interface Deletable {
  [DELETE_KEY](): void;
  get [DELETED_KEY](): boolean;
  set [DELETED_KEY](v: boolean);
}
export function asDeletable(t: object) {
  return t as Deletable;
}
export function setDeletable(t: object, deleter: VoidFunction) {
  let _d = false;
  Object.defineProperties(t, {
    [DELETE_KEY]: {
      value: () => {
        _d = true;
        deleter();
      },
      writable: false,
      configurable: false,
      enumerable: false,
    },
    [DELETED_KEY]: {
      get: () => _d,
      set: (v) => {
        _d = v;
      },
      configurable: false,
      enumerable: false,
    },
  });
}
