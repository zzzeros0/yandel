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
interface ExposedDeletable {
  deleted: boolean;
  delete(): void;
}
export function asDeletable(t: object): ExposedDeletable {
  return Object.defineProperties(
    {},
    {
      delete: {
        value: () => {
          (t as Deletable)[DELETE_KEY]();
        },
        writable: false,
        enumerable: false,
        configurable: false,
      },
      deleted: {
        set: (v: boolean) => {
          if (typeof v !== "boolean") return;
          (t as Deletable)[DELETED_KEY] = v;
        },
        get: () => {
          return (t as Deletable)[DELETED_KEY];
        },
        enumerable: false,
        configurable: false,
      },
    }
  ) as ExposedDeletable;
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
