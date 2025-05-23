import {
  _is_fn,
  _is_string,
  asDeletable,
  DELETE_KEY,
  DELETED_KEY,
  InmutBool,
  setDeletable,
} from "./utils";

type HTMLExcludedProperties =
  | `aria${string}`
  | "tagName"
  | "shadowRoot"
  | "slot"
  | "classList"
  | "style"
  | "attributes"
  | "attributeStyleMap"
  | "ATTRIBUTE_NODE"
  | "CDATA_SECTION_NODE"
  | "COMMENT_NODE"
  | "childElementCount"
  | "childNodes"
  | "children"
  | "isConnected"
  | "ownerDocument"
  | "lastChild"
  | "lastElement"
  | "nextElementSibling"
  | "nextSibling"
  | "previousElementSibling"
  | "previousSibling"
  | "parentElement"
  | "parent"
  | "outerContent"
  | "firstChild"
  | "firstElementChild"
  | "lastChild"
  | "lastElementChild"
  | "innerHTML"
  | "outerHTML"
  | "innerContent"
  | "textContent"
  | `DOCUMENT_${string}`
  | "NOTATION_NODE"
  | "PROCESSING_INSTRUCTION_NODE"
  | "CONTENT_NODE"
  | "ELEMENT_NODE"
  | "TEXT_NODE"
  | `ENTITY_${string}`;
type AriaWidgetProperties =
  | "aria-autocomplete"
  | "aria-checked"
  | "aria-disabled"
  | "aria-errormessage"
  | "aria-expanded"
  | "aria-haspopup"
  | "aria-hidden"
  | "aria-invalid"
  | "aria-label"
  | "aria-level"
  | "aria-modal"
  | "aria-multiline"
  | "aria-multiselectable"
  | "aria-orientation"
  | "aria-placeholder"
  | "aria-pressed"
  | "aria-readonly"
  | "aria-required"
  | "aria-selected"
  | "aria-sort"
  | "aria-valuemax"
  | "aria-valuemin"
  | "aria-valuenow"
  | "aria-valuetext";
type AriaLiveRegionProperties =
  | "aria-busy"
  | "aria-live"
  | "aria-relevant"
  | "aria-atomic";
type AriaDragAndDropProperties = "aria-dropeffect" | "aria-grabbed";
type AriaRelatonshipProperties =
  | "aria-activedescendant"
  | "aria-colcount"
  | "aria-colindex"
  | "aria-colspan"
  | "aria-controls"
  | "aria-describedby"
  | "aria-description"
  | "aria-details"
  | "aria-errormessage"
  | "aria-flowto"
  | "aria-labelledby"
  | "aria-owns"
  | "aria-posinset"
  | "aria-rowcount"
  | "aria-rowindex"
  | "aria-rowspan"
  | "aria-setsize";
type AriaGlobalProperties =
  | "aria-atomic"
  | "aria-busy"
  | "aria-controls"
  | "aria-current"
  | "aria-describedby"
  | "aria-description"
  | "aria-details"
  | "aria-disabled"
  | "aria-dropeffect"
  | "aria-errormessage"
  | "aria-flowto"
  | "aria-grabbed"
  | "aria-haspopup"
  | "aria-hidden"
  | "aria-invalid"
  | "aria-keyshortcuts"
  | "aria-label"
  | "aria-labelledby"
  | "aria-live"
  | "aria-owns"
  | "aria-relevant"
  | "aria-roledescription";
type AriaProps =
  | AriaWidgetProperties
  | AriaDragAndDropProperties
  | AriaLiveRegionProperties
  | AriaRelatonshipProperties
  | AriaGlobalProperties;
type AriaBoolean = "true" | "false";
type AriaValue = Exclude<string, AriaBoolean>;
type AriaValueMap = Partial<Record<AriaProps, AriaBoolean | AriaValue>>;
type KeyedObject = Record<string | symbol | number, any>;
type HTMLTags = keyof HTMLElementTagNameMap;
type HTMLSVGTags = keyof SVGElementTagNameMap;
type Element<K extends HTMLTags = HTMLTags> = HTMLElementTagNameMap[K];
type SVGElement<K extends HTMLSVGTags = HTMLSVGTags> = SVGElementTagNameMap[K];
interface SwitchableNode<T extends Node> {
  switch(t: T): boolean;
}
type FutureNode = () => ValidNodeChild;
type ValidNodeChild =
  | Node
  | Component
  | Component<KeyedObject>
  | FutureNode
  | null
  | string;
type ValidTemplateReturn = ValidNodeChild | ValidNodeChild[];
type EffectHandler = (() => void) | (() => () => void);
type ExcludeFunctions<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};
type Styles = Partial<CSSStyleDeclaration>;
interface ElementOverridedProperties extends AriaValueMap {
  style?: Styles;
}
type AnyElement<T extends HTMLTags | HTMLSVGTags = HTMLTags> =
  T extends HTMLTags
    ? Element<T>
    : T extends HTMLSVGTags
    ? SVGElement<T>
    : never;
type AnyProps<T extends HTMLTags | HTMLSVGTags = HTMLTags> = T extends HTMLTags
  ? HTMLProps<T>
  : T extends HTMLSVGTags
  ? SVGProps<T>
  : never;
type ElementRef<T extends HTMLTags | HTMLSVGTags = HTMLTags> = Stores<
  | (T extends HTMLTags
      ? HTMLElementTagNameMap[T]
      : T extends HTMLSVGTags
      ? SVGElementTagNameMap[T]
      : never)
  | undefined
>;
interface ElementProps<T extends HTMLTags | HTMLSVGTags = HTMLTags> {
  ref?: ElementRef<T>;
  key?: string | number | symbol;
}
type ExcludeProperties<T> = {
  [K in keyof T as K extends HTMLExcludedProperties ? never : K]: T[K];
};
type HTMLProps<T extends HTMLTags> = Partial<
  ExcludeProperties<ExcludeFunctions<Element<T>>>
> &
  ElementProps<T> &
  ElementOverridedProperties;

type SVGAttributeValue = string | number;

type NormalizeSVGProp<T> = T extends SVGAnimatedLength
  ? SVGAttributeValue
  : T extends SVGAnimatedAngle
  ? SVGAttributeValue
  : T extends SVGAnimatedBoolean
  ? SVGAttributeValue
  : T extends SVGAnimatedEnumeration
  ? SVGAttributeValue
  : T extends SVGAnimatedInteger
  ? SVGAttributeValue
  : T extends SVGAnimatedNumber
  ? SVGAttributeValue
  : T extends SVGAnimatedPreserveAspectRatio
  ? SVGAttributeValue
  : T extends SVGAnimatedRect
  ? SVGAttributeValue
  : T extends SVGAnimatedString
  ? SVGAttributeValue
  : T extends SVGAnimatedTransformList
  ? SVGAttributeValue
  : T extends SVGPointList
  ? SVGAttributeValue
  : T;

type SVGRawProps<T extends HTMLSVGTags> = ExcludeProperties<
  ExcludeFunctions<SVGElementTagNameMap[T]>
>;
interface SVGOverridedProperties {
  fill?: string;
  "fill-opacity"?: string;
  stroke?: string;
  "stroke-width"?: SVGAttributeValue;
  "stroke-linecap"?: "butt" | "round" | "square";
  "stroke-linejoin"?: "miter" | "round" | "bevel";
  d?: string;
  "stroke-dasharray"?: SVGAttributeValue;
}
type SVGProps<T extends HTMLSVGTags> = Partial<{
  [K in keyof SVGRawProps<T>]: NormalizeSVGProp<SVGRawProps<T>[K]>;
}> &
  ElementProps<T> &
  ElementOverridedProperties &
  SVGOverridedProperties;
type StateHandler<S extends KeyedObject | undefined = undefined> =
  | S
  | ((l: S) => S);
interface HasInternals<S extends KeyedObject | void = void> {
  [ComponentInternalKey]?: ComponentInternals<S>;
  _deleted: boolean;
  _delete(): void;
}
const SVG_TAGS = new Set([
  "a",
  "animate",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "script",
  "set",
  "stop",
  "style",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "title",
  "tspan",
  "use",
  "view",
]);
const enum NodeType {
  Tag,
  Content,
  Parent,
  Component,
}
class Stores<T> {
  #_stores: T;
  constructor(s: T) {
    this.#_stores = s;
  }
  public get stores() {
    return this.#_stores;
  }
  public set stores(s: T) {
    this.#_stores = s;
  }
}
class ComponentUpdateQueue {
  private static _update_scheduled = false;
  private static _queue: Set<ComponentNode> = new Set();
  private static processNodeQueue() {
    for (const c of this._queue) {
      this._queue.delete(c);
      if (c.deleted) {
        return;
      }
      if (!c.parent) {
        console.warn("Parent is undefined");
        return;
      }
      queueMicrotask(() => {
        render(c, c.parent as ComponentNode | ParentNode | TagNode);
        requestAnimationFrame(() => {
          _attach(c);
        });
      });
    }
  }

  private static notifyQueue() {
    if (!this._update_scheduled) {
      this._update_scheduled = true;
      requestIdleCallback(() => {
        this._update_scheduled = false;
        this.processNodeQueue();
      });
    }
  }

  public static queueNodeUpdate(n: ComponentNode) {
    if (!n) return;
    if (n.deleted) return;
    if (this._queue.has(n)) return;
    n.needs_update = true;
    this._queue.add(n);
    if (!this._update_scheduled) this.notifyQueue();
  }
}
function queueNodesDeletion(ns: ValidNodeChild[]) {
  queueMicrotask(() => {
    for (const c of ns) {
      if (c && !_is_string(c) && !_is_fn(c) && !Component.is(c)) c.delete();
    }
  });
}
const ComponentInternalKey = Symbol("_$ci$_");

function _c_el<T extends HTMLTags>(t: T) {
  return document.createElement(t);
}
function _c_t(c: string) {
  return document.createTextNode(c);
}
function _c_s(t: string) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
class Node {
  public readonly $typeof: NodeType;
  private _index_of: number = 0;
  public parent: Node | undefined = undefined;
  public needs_update: boolean = true;
  protected _deleted: boolean = false;
  constructor(t: NodeType) {
    this.$typeof = t;
  }
  public get isTag(): boolean {
    return this.$typeof === NodeType.Tag;
  }
  public get isContent(): boolean {
    return this.$typeof === NodeType.Content;
  }
  public get isParent(): boolean {
    return this.$typeof === NodeType.Parent;
  }
  public get isComponent(): boolean {
    return this.$typeof === NodeType.Component;
  }
  public get deleted(): boolean {
    return this._deleted;
  }
  public get index_of() {
    return this._index_of;
  }
  public setIndex_of(i: number) {
    this._index_of = i;
    return this;
  }
  public delete(): void {
    this._deleted = true;
    this.parent = undefined;
    this.needs_update = false;
  }
}
class ContentNode extends Node {
  public static is(t: any): t is ContentNode {
    return t instanceof ContentNode;
  }
  private _content: string;
  private _dom: Text | undefined = undefined;
  constructor(content: string) {
    super(NodeType.Content);
    this._content = content;
    this.needs_update = true;
  }
  public get dom() {
    return this._dom;
  }
  public set content(c: string) {
    if (!this._dom) return;
    if (this._content === c && this._dom.nodeValue === c) return;
    this._content = c;
    this._dom.nodeValue = c;
    this.needs_update = true;
  }
  public get content() {
    return this._content;
  }
  public create(): boolean {
    if (this._deleted) throw new Error("Attempt to create a deleted node");
    if (this._dom) return true;
    this._dom = _c_t(this._content);
    this.needs_update = false;
    return true;
  }
  public clearDom() {
    if (!this._dom) return;
    this._dom.remove();
    delete this._dom;
  }
  public override delete(): void {
    if (this._deleted) return;
    this.clearDom();
    this._content = "";
    super.delete();
  }
}
function _get_node_from_future(t: FutureNode) {
  let n: ValidNodeChild;
  try {
    n = t();
  } catch (error) {
    throw new Error("Future error");
  }
  if (_is_fn(n)) return _get_node_from_future(n);
  return n;
}
function _apply_dom_prop<T extends HTMLTags | HTMLSVGTags>(
  dom: AnyElement<T>,
  props: AnyProps<T>,
  prop: string
) {
  const v = props[prop as keyof AnyProps<T>];
  if (v == null) return;
  if (/^on[a-z]/.test(prop)) {
    const ev_name = prop.slice(2);
    dom.addEventListener(
      ev_name,
      props[prop as keyof AnyProps<T>] as EventListener
    );
    return;
  }
  if (prop === "ref" && props.ref instanceof Stores) {
    (props.ref as Stores<SVGElement | Element>).stores = dom as
      | SVGElement
      | Element;
    return;
  }
  if (prop === "style" && typeof v === "object") {
    try {
      Object.entries(v).forEach(([cssProp, cssValue]) => {
        if (cssProp in dom.style) {
          (dom.style as any)[cssProp] = cssValue || "";
        } else {
          console.warn(`Unknown CSS property: ${cssProp}`);
        }
      });
    } catch (error) {
      console.error(`CSS property set error at ${dom.tagName}`);
    }
    return;
  }
  if (prop in dom) {
    const t = typeof (dom as any)[prop];
    if (!((typeof v === "string" || typeof v === "number") && t === "object")) {
      (dom as any)[prop] = v;
      return;
    }
  }
  // const pn = prop.toLowerCase();
  if (typeof v === "boolean") {
    if (v) dom.setAttribute(prop, "");
    else dom.removeAttribute(prop);
    return;
  }
  if (typeof v === "number") dom.setAttribute(prop, v.toString());
  else dom.setAttribute(prop, v as string);
}
function _remove_dom_prop<T extends HTMLTags | HTMLSVGTags>(
  dom: AnyElement<T>,
  props: AnyProps<T>,
  prop: string
) {
  if (/^on[a-z]/.test(prop)) {
    const ev_name = prop.slice(2);
    dom.removeEventListener(
      ev_name,
      props[prop as keyof AnyProps<T>] as EventListener
    );
    return;
  }
  if (prop === "ref" && props.ref instanceof Stores) {
    props.ref.stores = undefined;
    return;
  }
  const v = props[prop as keyof AnyProps<T>];
  if (v == null) return;
  if (prop === "style" && typeof v === "object") {
    try {
      Object.entries(v).forEach(([cssProp]) => {
        // Solo aplicar si la propiedad existe en CSSStyleDeclaration
        if (cssProp in dom.style) {
          dom.style[cssProp as any] = "";
        } else {
          console.warn(`Unknown CSS property: ${cssProp}`);
        }
      });
    } catch (error) {
      console.error(`CSS property remove error at ${dom.tagName}`);
    }
    return;
  }

  if (prop in dom) {
    const t = typeof (dom as any)[prop];
    if (!((typeof v === "string" || typeof v === "number") && t === "object"))
      try {
        switch (t) {
          case "boolean": {
            (dom as any)[prop] = false;
            return;
          }
          case "string": {
            (dom as any)[prop] = "";
            return;
          }
          case "object": {
            (dom as any)[prop] = null;
            return;
          }
        }
      } catch (error) {}
  }

  dom.removeAttribute(prop);
}
class TagNode<T extends HTMLTags | HTMLSVGTags = HTMLTags>
  extends Node
  implements SwitchableNode<TagNode>
{
  public static is(t: any): t is TagNode {
    return t instanceof TagNode;
  }
  public tag: T;
  private _dom: AnyElement<T> | undefined = undefined;
  private _props: AnyProps<T> | undefined = undefined;
  private _children: ValidNodeChild[] | undefined = undefined;
  public key: symbol | string | number | undefined = undefined;
  public index_length: number = 0;
  constructor(tag: T, props?: AnyProps<T>, children?: ValidNodeChild[]) {
    super(NodeType.Tag);
    this.tag = tag;
    this._props = props;
    if (this._props && "key" in this._props) {
      this.key = this._props.key;
    }
    this._children = children;
    this.needs_update = true;
  }
  private _apply_dom_props() {
    if (!this._props || !this._dom) return;
    for (const prop in this._props) {
      _apply_dom_prop(this._dom, this._props, prop);
    }
  }
  private _diff_dom_props(nprops: AnyProps<T>) {
    if (!this._props) {
      this._props = nprops;
      this._apply_dom_props();
      return;
    }
    if (this._dom)
      for (const prop in this._props) {
        if (prop.startsWith("on")) {
          _remove_dom_prop(this._dom, this._props, prop);
          if (prop in nprops) _apply_dom_prop(this._dom, nprops, prop);
        } else if (!(prop in nprops)) {
          _remove_dom_prop(this._dom, this._props, prop);
        } else _apply_dom_prop(this._dom, nprops, prop);
      }
    this._props = nprops;
  }
  private _clear_dom_props() {
    if (this._props && this._dom)
      for (const prop in this._props) {
        _remove_dom_prop(this._dom, this._props, prop);
      }
  }
  private _clear_dom_events() {
    if (this._props && this._dom)
      for (const prop in this._props) {
        const v = Reflect.get(this._props, prop);
        if (!v) continue;
        if (prop.startsWith("on") && typeof v === "function") {
          const ev_name = prop.slice(2);
          this._dom.removeEventListener(
            ev_name,
            Reflect.get(this._props, prop) as VoidFunction
          );
        }
      }
  }
  public get dom() {
    return this._dom;
  }
  public get props() {
    return this._props;
  }
  public get children(): ValidNodeChild[] | undefined {
    return this._children;
  }
  public get hasChildren() {
    if (!this._children) return false;
    return this._children.length > 0;
  }
  public create() {
    if (this._deleted) throw new Error("Attempt to create a deleted node");
    if (this._dom) {
      this._apply_dom_props();
      this.needs_update = true;
      return true;
    }
    this._dom = (
      SVG_TAGS.has(this.tag) ? _c_s(this.tag) : _c_el(this.tag as HTMLTags)
    ) as AnyElement<T>;
    this._apply_dom_props();
    this.needs_update = false;
    return true;
  }
  public clearChildren() {
    if (this._deleted) return;
    if (this._children?.length) {
      queueNodesDeletion(this._children);
      delete this._children;
    }
  }
  public clearDom() {
    if (this._dom === undefined) {
      this.needs_update = false;
      return;
    }
    this.needs_update = true;
    this._clear_dom_events();
    this._dom.remove();
    delete this._dom;
  }
  public override delete() {
    if (this._deleted) return;
    if (this._props && this._props.ref instanceof Stores) {
      this._props.ref.stores = undefined;
    }
    this.clearDom();
    this.clearChildren();
    super.delete();
  }
  public switch(t: TagNode<HTMLTags>): boolean {
    this.key = t.props?.key ?? t.key;
    if (this.tag === t.tag) {
      // Tag is the same
      if (t.props) this._diff_dom_props(t.props as AnyProps<T>);
      else if (this._props) this._clear_dom_props();
    } else {
      // Tag has changed
      this.clearDom();
      this.tag = t.tag as T;
      this._props = t.props ? (t.props as AnyProps<T>) : undefined;
      this.create();
    }
    if (this.hasChildren) {
      if (t.hasChildren) {
        this.needs_update = diffChildren(this._children!, t.children!);
      } else {
        this.needs_update = true;
        this.clearChildren();
      }
    } else if (t.hasChildren) {
      this._children = t.children!;
      this.needs_update = true;
    }
    return this.needs_update;
  }
}

class ParentNode<T extends HTMLElement = HTMLElement>
  extends Node
  implements SwitchableNode<ParentNode>
{
  public static is(t: any): t is ParentNode {
    return t instanceof ParentNode;
  }
  public readonly dom: T;
  private _children: ValidNodeChild[] | undefined = undefined;
  public child_length: number = 0;
  constructor(root: T, children?: ValidNodeChild[]) {
    super(NodeType.Parent);
    this.dom = root;
    this._children = children;
  }
  public get children(): ValidNodeChild[] | undefined {
    return this._children;
  }
  public get hasChildren(): boolean {
    if (!this._children) return false;
    return this._children.length > 0;
  }
  public clearChildren(): void {
    this.child_length = 0;
    if (this._children?.length) {
      queueNodesDeletion(this._children);
      delete this._children;
    }
  }
  public override delete() {
    if (this._deleted) return;
    this.clearChildren();
    super.delete();
  }
  public switch(t: ParentNode<HTMLElement>): boolean {
    if (this.hasChildren) {
      if (t.hasChildren) {
        this.needs_update = diffChildren(this._children!, t.children!);
      } else {
        this.needs_update = true;
        this.clearChildren();
      }
    } else if (t.hasChildren) {
      this._children = t.children;
      this.needs_update = true;
    }
    return this.needs_update;
  }
}

class ComponentNode extends Node implements SwitchableNode<ComponentNode> {
  public static is(t: any): t is ComponentNode {
    return t instanceof ComponentNode;
  }
  public readonly dom: DocumentFragment = document.createDocumentFragment();
  private _template: Component;
  private _children: ValidNodeChild[] | undefined = undefined;
  public child_length = 0;
  constructor(template: Component<any>) {
    super(NodeType.Component);
    this._template = template;
    getInternals(this._template).switch(this);
    this.needs_update = true;
  }
  public create() {
    if (this._deleted) throw new Error("Attempt to create a deleted node");
    if ((this._template as any as HasInternals)._deleted)
      throw new Error("Template has been deleted");
    nextInternalTick(this._template);
    let child: ValidTemplateReturn;
    try {
      try {
        child = this._template.render();
      } catch (error) {
        console.warn("Template create error:", error);
        return;
      }
      if (child == null) return;
      const nc = Array.isArray(child)
        ? child
        : typeof child === "string"
        ? [new ContentNode(child)]
        : [child];
      if (this._children) {
        this.needs_update = diffChildren(this._children, nc);
      } else {
        this._children = nc;
        this.needs_update = true;
      }
    } catch (error) {
      console.error("Create error:", error);
    }
  }
  public get template() {
    return this._template;
  }
  public get children(): ValidNodeChild[] | undefined {
    return this._children;
  }
  public get hasChildren(): boolean {
    if (!this._children) return false;
    return this._children.length > 0;
  }
  public clearChildren() {
    if (this._deleted) return;
    this.child_length = 0;
    if (this._children?.length) {
      queueNodesDeletion(this._children);
      delete this._children;
    }
  }
  public override delete() {
    if (this._deleted) return;
    this.clearChildren();
    (this._template as any as HasInternals)._delete();
    super.delete();
  }
  public switch(t: ComponentNode): boolean {
    if (this.hasChildren) {
      if (t.hasChildren) {
        this.needs_update = diffChildren(this._children!, t.children!);
      } else {
        this.needs_update = true;
        this.clearChildren();
      }
    } else if (t.hasChildren) this._children = t.children!;
    this.child_length = t.child_length;
    this.switchTemplate(t.template);
    return this.needs_update;
  }
  public switchTemplate(t: Component<any>) {
    (this._template as any as HasInternals)._delete();
    this._template = t;
    getInternals(this._template).switch(this);
    this.needs_update = true;
  }
}

class ComponentInternals<S extends KeyedObject | void = void> {
  #_n: ComponentNode | undefined = undefined;
  public readonly e: EffectHandler[] = [];
  public readonly c: VoidFunction[] = [];
  public readonly p: Set<Context<{}>> = new Set();
  private _state: S | undefined = undefined;
  private _state_defined = false;
  private _deleted = false;
  public switch(n: ComponentNode) {
    this.#_n = n;
  }
  public get n() {
    return this.#_n;
  }
  public get state() {
    if (!this._state_defined) throw new Error("State not defined");
    return this._state as S;
  }
  public set state(s: S) {
    if (!this._state_defined) throw new Error("State not defined");
    this._state = s;
  }
  public defineState(v: S) {
    if (this._state_defined) return;
    if (v === undefined) return;

    if (this._deleted) {
      console.warn("Defining state on deleted internal");
      return;
    }

    this._state_defined = true;
    this._state = v;
  }
  public setState(s: StateHandler<S extends void ? undefined : S>) {
    if (!this._state_defined) throw new Error("State not defined");
    if (this._deleted) {
      console.warn("Setting state on deleted component");
      return;
    }
    this._state =
      typeof s === "function"
        ? s(this._state! as S extends void ? undefined : S)
        : s;
    Promise.resolve().then(() => {
      if (this.#_n) ComponentUpdateQueue.queueNodeUpdate(this.#_n);
    });
  }
  public addEffect(e: EffectHandler) {
    if (this._deleted) {
      console.warn("Setting state on deleted component");
      return;
    }
    if (typeof e === "function") this.e.push(e);
    else console.warn("Not a valid effect");
  }
  public delete() {
    this._deleted = true;
    this.e.length = 0;
    this.c.length = 0;
    this._state = undefined;
    this._state_defined = false;
    for (const c of this.p) {
      asDeletable(c)[DELETE_KEY]();
    }
  }
  public get deleted() {
    return this._deleted;
  }
}

function getInternals<S extends KeyedObject | void = void>(
  target: Component<S>
): ComponentInternals<S> {
  if ((target as any as HasInternals)._deleted)
    throw new Error("Component is deleted");
  const int = Reflect.get(target, ComponentInternalKey);
  if (!int || !(int instanceof ComponentInternals))
    throw new Error("Not valid internal");
  return int as ComponentInternals<S>;
}
function deleteInternals<S extends KeyedObject | void = void>(
  target: Component<S>
) {
  getInternals(target).delete();
  delete (target as any as HasInternals)[ComponentInternalKey];
}
function nextInternalTick<S extends KeyedObject | void = void>(
  target: Component<S>
) {
  try {
    const internals = getInternals(target);
    if (internals.deleted) {
      return;
    }
    if (internals.c.length) {
      for (const c of internals.c) {
        c();
      }
      internals.c.length = 0;
    }
    if (internals.e.length) {
      for (const e of internals.e) {
        const r = e();
        if (typeof r === "function") internals.c.push(r);
      }
      internals.e.length = 0;
    }
  } catch (error) {
    console.warn(error);
  }
}

abstract class Component<S extends KeyedObject | void = void> {
  public static is(t: any): t is Component | Component<KeyedObject> {
    return t instanceof this;
  }
  constructor() {
    let deleted = false;
    Object.defineProperties(this, {
      [ComponentInternalKey]: {
        value: new ComponentInternals(),
        enumerable: false,
        writable: false,
        configurable: true,
      },
      _deleted: {
        get: () => deleted,
        set: (d: boolean) => {
          deleted = d;
        },
        configurable: false,
        enumerable: false,
      },
      _delete: {
        value: () => {
          nextInternalTick(this);
          deleteInternals(this);
          (this as any as HasInternals)._deleted = true;
        },
        writable: false,
        configurable: false,
        enumerable: false,
      },
    });
  }
  protected get state(): S {
    return getInternals<S>(this).state;
  }
  protected set state(s: S) {
    getInternals<S>(this).state = s;
  }
  protected setState(s: StateHandler<S extends void ? undefined : S>) {
    getInternals<S>(this).setState(s);
  }
  protected effect(effect: EffectHandler) {
    getInternals(this).addEffect(effect);
  }
  protected defineState(s: S) {
    getInternals(this).defineState(s);
  }
  abstract render(): ValidTemplateReturn;
}
class Context<T extends KeyedObject> {
  #_s: Stores<T | undefined> = new Stores(undefined);
  #_p: Component<any> | undefined = undefined;
  constructor() {
    setDeletable(this, () => {
      if (!this.#_p) throw new Error("Component not defined");
      getInternals(this.#_p).p.delete(this);
      this.#_p = undefined;
      this.#_s.stores = undefined;
    });
  }
  public get ok() {
    return asDeletable(this)[DELETED_KEY] === false && this.#_p !== undefined;
  }
  public consume(): T {
    if (asDeletable(this)[DELETED_KEY] && !this.#_p) {
      console.warn("You are consuming a deleted context");
      return undefined as any;
    }
    return this.#_s.stores as T;
  }
  public provide<S extends KeyedObject | void = void>(c: Component<S>, v: T) {
    asDeletable(this)[DELETED_KEY] = false;
    if (this.#_p) {
      getInternals(this.#_p).p.delete(this);
      this.#_p = undefined;
      this.#_s.stores = undefined;
    }
    this.#_p = c;
    getInternals(this.#_p).p.add(this);
    this.#_s.stores = v;
  }
}
function diff(a: Node, b: Node): boolean {
  if (a.$typeof !== b.$typeof) throw new Error("Expected same node type");
  if (TagNode.is(a)) {
    if (
      a.key !== undefined &&
      (b as TagNode).key !== undefined &&
      a.key === (b as TagNode).key
    ) {
      return false;
    }
    return a.switch(b as TagNode);
  } else if (ContentNode.is(a)) {
    a.content = (b as ContentNode).content;
    return a.needs_update;
  } else if (ParentNode.is(a)) {
    return a.switch(b as ParentNode);
  } else if (ComponentNode.is(a)) {
    return a.switch(b as ComponentNode);
  } else {
    throw new Error("Unknown node");
  }
}

function diffChildren(a: ValidNodeChild[], b: ValidNodeChild[]): boolean {
  const ML = Math.max(a.length, b.length);
  const changed = new InmutBool(false);
  let ri = 0;
  for (let i = 0; i < ML; i++) {
    const ca = a[i];
    const cb = b[i];

    if (ca == null) {
      if (cb == null) continue;
      a[i] = _is_string(cb)
        ? new ContentNode(cb).setIndex_of(ri++)
        : _is_fn(cb)
        ? _get_node_from_future(cb)
        : Component.is(cb)
        ? new ComponentNode(cb).setIndex_of(ri++)
        : cb;

      changed.set(true);
    } else {
      if (cb == null) {
        if (!_is_string(ca) && !_is_fn(ca)) {
          if (Component.is(ca)) (ca as any as HasInternals)._delete();
          else ca.delete();
        }
        a[i] = null;
        changed.set(true);
        continue;
      }
      if (_is_string(ca) || _is_fn(ca)) {
        console.warn("Diffing a Future node");
        continue;
      } else if (Component.is(ca)) {
        if (!ComponentNode.is(cb)) {
          console.warn("Expected a component node");
          continue;
        }
        cb.switchTemplate(ca);
        changed.set(true);
      } else {
        if (_is_string(cb)) {
          if (ContentNode.is(ca)) {
            ca.content = cb;
            changed.set(ca.needs_update);
          } else {
            ca.delete();
            a[i] = new ContentNode(cb).setIndex_of(ri++);
            changed.set(true);
          }
        } else if (_is_fn(cb)) {
          const node = _get_node_from_future(cb);
          if (node == null) {
            if (ca instanceof Node) ca.delete();
            a[i] = null;
            changed.set(true);
            continue;
          }
          if (_is_string(node)) {
            if (ContentNode.is(ca)) {
              ca.content = node;
              changed.set(ca.needs_update);
            } else {
              ca.delete();
              a[i] = new ContentNode(node).setIndex_of(ri++);
              changed.set(true);
            }
          } else if (Component.is(node)) {
            if (ComponentNode.is(ca)) {
              ca.switchTemplate(node);
            } else {
              ca.delete();
              a[i] = new ComponentNode(node).setIndex_of(ri++);
              changed.set(true);
            }
          } else {
            if (ca.$typeof !== node.$typeof) {
              ca.delete();
              a[i] = node.setIndex_of(ri++);
              changed.set(true);
            } else changed.set(diff(ca, node));
          }
        } else if (Component.is(cb)) {
          if (ComponentNode.is(ca)) {
            ca.switchTemplate(cb);
          } else {
            ca.delete();
            a[i] = new ComponentNode(cb).setIndex_of(ri++);
            changed.set(true);
          }
        } else {
          if (ca.$typeof !== cb.$typeof) {
            ca.delete();
            a[i] = cb.setIndex_of(ri++);
            changed.set(true);
          } else changed.set(diff(ca, cb));
        }
      }
    }
  }
  return changed.get();
}
function getParentRoot(n: Node) {
  if (ParentNode.is(n)) return n.dom;
  if (ComponentNode.is(n.parent) || ParentNode.is(n.parent))
    return n.parent.dom;
  else if (TagNode.is(n.parent) || ContentNode.is(n.parent)) {
    if (!n.parent.dom) throw new Error("Parent tag dom is null");
    return n.parent.dom;
  } else {
    throw new Error("Content node cant be a parent");
  }
}
function _for_attach(node: ParentNode | ComponentNode | TagNode) {
  if (!node.children) return;
  for (const c of node.children) {
    if (c == null) continue;
    if (TagNode.is(c)) {
      if (c.dom?.isConnected) {
        if (c.hasChildren) _for_attach(c);
      } else _attach(c);
    } else if (ContentNode.is(c)) {
      if (!c.dom?.isConnected) _attach(c);
    } else _attach(c as Node);
  }
}
function _attach(node: Node) {
  if (node.deleted) {
    console.warn("Cant attach a deleted node");
    return;
  }
  if (ParentNode.is(node) && node.hasChildren) {
    _for_attach(node);
    return;
  }
  const root = getParentRoot(node);
  let targetDom:
    | Text
    | HTMLElement
    | SVGElement
    | DocumentFragment
    | undefined = undefined;
  let hasc = false;
  if (ContentNode.is(node)) {
    targetDom = node.dom;
  } else {
    const n = node as ComponentNode | TagNode | ParentNode;
    targetDom = n.dom;
    if (n.hasChildren) {
      hasc = true;
      _for_attach(n);
    }
  }
  if (!targetDom) throw new Error("Target dom is undefined");
  if (targetDom.isConnected) {
    console.warn("Target dom already connected");
    return;
  }
  if (node.index_of === 0) {
    if (hasc) {
      root.insertBefore(targetDom, root.childNodes[node.index_of]);
    } else {
      root.appendChild(targetDom);
    }
  } else {
    if (!hasc) {
      root.appendChild(targetDom);
      node.setIndex_of(0);
    } else if (node.index_of >= root.childNodes.length) {
      root.appendChild(targetDom);
      node.setIndex_of(root.childNodes.length - 1);
    } else {
      root.insertBefore(targetDom, root.childNodes[node.index_of]);
    }
  }
  if (ComponentNode.is(node))
    queueMicrotask(() => nextInternalTick(node.template));
}

function renderChildren(node: ParentNode | ComponentNode | TagNode) {
  if (node.deleted) {
    return;
  }
  let lastSibling: Node | undefined = undefined;
  let ri = 0;
  const has_lid = node.isComponent || node.isParent;
  if (node.isComponent || node.isParent) (node as any).child_length = 0;
  if (node.hasChildren) {
    const children = node.children!;
    for (let i = 0; i < children.length; i++) {
      const c = children[i];
      if (c != null) {
        let nnode: Node | undefined = undefined;
        if (_is_string(c)) {
          nnode = new ContentNode(c);
          children[i] = nnode;
        } else if (_is_fn(c)) {
          try {
            const n = _get_node_from_future(c);
            if (!n) continue;
            if (_is_string(n)) nnode = new ContentNode(n);
            else if (Component.is(n)) nnode = new ComponentNode(n);
            else nnode = n;
            children[i] = nnode;
          } catch (error) {
            console.warn(error);
            children[i] = null;
            continue;
          }
        } else if (Component.is(c)) {
          nnode = new ComponentNode(c);
          children[i] = nnode;
        } else {
          nnode = c;
        }
        if (lastSibling) {
          if (lastSibling.isComponent || lastSibling.isParent) {
            ri =
              (lastSibling as ComponentNode | ParentNode).index_of +
              (lastSibling as ComponentNode | ParentNode).child_length;
            nnode.setIndex_of(ri);
          } else nnode.setIndex_of(lastSibling.index_of + 1);
        } else {
          nnode.setIndex_of(ri);
        }
        if (has_lid) {
          (node as any).child_length++;
        }
        nnode.parent = node;
        render(nnode, node);
        lastSibling = nnode;
        ri++;
      }
    }
  }
}

function render(node: Node, parent: ParentNode | ComponentNode | TagNode) {
  if (node.deleted) {
    return;
  }
  if (!node.needs_update && !node.isContent) {
    renderChildren(node as ParentNode | ComponentNode | TagNode);

    return;
  }
  node.needs_update = false;
  if (ContentNode.is(node) || TagNode.is(node)) {
    if (!node.dom && !node.create())
      throw new Error("Called create but dom is still undefined");
    node.parent = parent;
    if (node.isTag) renderChildren(node as TagNode);
    node.needs_update = false;
    return;
  } else if (ComponentNode.is(node) || ParentNode.is(node)) {
    node.parent = parent;
    if (ComponentNode.is(node)) {
      node.create();
    }
    renderChildren(node);
    node.needs_update = false;
    return;
  }
  throw new Error("Unknown node");
}

class Root<T extends HTMLElement> {
  private readonly html_root: HTMLElement;
  private root: ParentNode | undefined = undefined;
  private _deleted = false;
  constructor(root: T) {
    this.html_root = root;
  }

  public render(...children: ValidNodeChild[]) {
    if (children.length === 0) throw new Error("No children supplied");
    queueMicrotask(() => {
      if (this.root != undefined) {
        throw new Error(
          "Render is not meant to be used by already hydrated nodes"
        );
      }
      this.root = new ParentNode(this.html_root, children);
      (window as any).root = this.root;
      renderChildren(this.root);
      requestAnimationFrame(() => {
        if (!this.root)
          throw new Error("Root has been deleted before attaching");
        if (!this.html_root.isConnected)
          throw new Error("Root element is not connected");
        _attach(this.root);
      });
    });
  }
  public get deleted() {
    return this._deleted;
  }
  public delete() {
    if (this.root) {
      this.root.delete();
      this.root = undefined;
    }
  }
}
function Portal<T extends HTMLElement>(root: T, ...children: ValidNodeChild[]) {
  return new ParentNode(root, children);
}
function createRoot<T extends HTMLElement>(root: T) {
  const r = new Root(root);
  return {
    render: r.render.bind(r),
  };
}
function createContext<T extends KeyedObject>() {
  return new Context<T>();
}

export {
  Component,
  createContext,
  createRoot,
  EffectHandler,
  Element,
  ElementRef,
  HTMLProps,
  HTMLTags,
  HTMLSVGTags,
  SVGProps,
  Node,
  Portal,
  StateHandler,
  Stores,
  Styles,
  TagNode,
  ValidNodeChild,
  ValidTemplateReturn,
};
