export function _is_string(t: any): t is string {
  return typeof t === "string";
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
