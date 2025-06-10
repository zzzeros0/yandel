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
type YElement<K extends HTMLTags = HTMLTags> = HTMLElementTagNameMap[K];
type YSVGElement<K extends HTMLSVGTags = HTMLSVGTags> = SVGElementTagNameMap[K];

type ExcludeFunctions<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};
type Styles = Partial<CSSStyleDeclaration>;
interface ElementOverridedProperties extends AriaValueMap {
  style?: Styles;
}
type AnyElement<T extends HTMLTags | HTMLSVGTags = HTMLTags> =
  T extends HTMLTags
    ? YElement<T>
    : T extends HTMLSVGTags
    ? YSVGElement<T>
    : never;
type AnyProps<T extends HTMLTags | HTMLSVGTags = HTMLTags> = T extends HTMLTags
  ? HTMLProps<T>
  : T extends HTMLSVGTags
  ? SVGProps<T>
  : never;
interface Stores<T> {
  get stores(): T;
}
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
  ExcludeProperties<ExcludeFunctions<YElement<T>>>
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

// declare abstract class Component<S extends KeyedObject | void = void> {
//   protected get state(): S;
//   protected setState(h: StateHandler<S extends void ? undefined : S>): void;
//   public render(): ValidTemplateReturn;
//   public delete(): void;
// }
