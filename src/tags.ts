import { Component, Node, TagNode, ValidNodeChild } from "./node";
import { _is_string } from "./utils";

export function _is_valid_node(n: any): n is ValidNodeChild {
  return (
    n == null || _is_string(n) || n instanceof Node || n instanceof Component
  );
}

function _c_t<T extends HTMLTags | HTMLSVGTags>(
  tag: T,
  args?: any[]
): TagNode<T> {
  if (args?.length) {
    if (args.length > 1) {
      return _is_valid_node(args[0])
        ? new TagNode(tag, undefined, args)
        : new TagNode(tag, args[0] as any, args.slice(1));
    } else {
      return _is_valid_node(args[0])
        ? new TagNode(tag, undefined, args)
        : new TagNode(tag, args[0] as any);
    }
  }
  return new TagNode(tag);
}
/**
 * h1 - Creates h1 Tag node
 */
export function h1(): TagNode<"h1">;
export function h1(props: HTMLProps<"h1">): TagNode<"h1">;
export function h1(...children: ValidNodeChild[]): TagNode<"h1">;
export function h1(
  props: HTMLProps<"h1">,
  ...children: ValidNodeChild[]
): TagNode<"h1">;
export function h1(...args: any[]): TagNode<"h1"> {
  return _c_t("h1", args);
}
/**
 * h2 - Creates h2 Tag node
 */
export function h2(): TagNode<"h2">;
export function h2(props: HTMLProps<"h2">): TagNode<"h2">;
export function h2(...children: ValidNodeChild[]): TagNode<"h2">;
export function h2(
  props: HTMLProps<"h2">,
  ...children: ValidNodeChild[]
): TagNode<"h2">;
export function h2(...args: any[]): TagNode<"h2"> {
  return _c_t("h2", args);
}

/**
 * h3 - Creates h3 Tag node
 */
export function h3(): TagNode<"h3">;
export function h3(props: HTMLProps<"h3">): TagNode<"h3">;
export function h3(...children: ValidNodeChild[]): TagNode<"h3">;
export function h3(
  props: HTMLProps<"h3">,
  ...children: ValidNodeChild[]
): TagNode<"h3">;
export function h3(...args: any[]): TagNode<"h3"> {
  return _c_t("h3", args);
}
/**
 * h4 - Creates h4 Tag node
 */
export function h4(): TagNode<"h4">;
export function h4(props: HTMLProps<"h4">): TagNode<"h4">;
export function h4(...children: ValidNodeChild[]): TagNode<"h4">;
export function h4(
  props: HTMLProps<"h4">,
  ...children: ValidNodeChild[]
): TagNode<"h4">;
export function h4(...args: any[]): TagNode<"h4"> {
  return _c_t("h4", args);
}
/**
 * h5 - Creates h5 Tag node
 */
export function h5(): TagNode<"h5">;
export function h5(props: HTMLProps<"h5">): TagNode<"h5">;
export function h5(...children: ValidNodeChild[]): TagNode<"h5">;
export function h5(
  props: HTMLProps<"h5">,
  ...children: ValidNodeChild[]
): TagNode<"h5">;
export function h5(...args: any[]): TagNode<"h5"> {
  return _c_t("h5", args);
}
/**
 * h6 - Creates h6 Tag node
 */
export function h6(): TagNode<"h6">;
export function h6(props: HTMLProps<"h6">): TagNode<"h6">;
export function h6(...children: ValidNodeChild[]): TagNode<"h6">;
export function h6(
  props: HTMLProps<"h6">,
  ...children: ValidNodeChild[]
): TagNode<"h6">;
export function h6(...args: any[]): TagNode<"h6"> {
  return _c_t("h6", args);
}
/**
 * a - Creates a Tag node
 */
export function a(): TagNode<"a">;
export function a(props: HTMLProps<"a">): TagNode<"a">;
export function a(...children: ValidNodeChild[]): TagNode<"a">;
export function a(
  props: HTMLProps<"a">,
  ...children: ValidNodeChild[]
): TagNode<"a">;
export function a(...args: any[]): TagNode<"a"> {
  return _c_t("a", args);
}

/**
 * abbr - Creates abbr Tag node
 */
export function abbr(): TagNode<"abbr">;
export function abbr(props: HTMLProps<"abbr">): TagNode<"abbr">;
export function abbr(...children: ValidNodeChild[]): TagNode<"abbr">;
export function abbr(
  props: HTMLProps<"abbr">,
  ...children: ValidNodeChild[]
): TagNode<"abbr">;
export function abbr(...args: any[]): TagNode<"abbr"> {
  return _c_t("abbr", args);
}

/**
 * address - Creates address Tag node
 */
export function address(): TagNode<"address">;
export function address(props: HTMLProps<"address">): TagNode<"address">;
export function address(...children: ValidNodeChild[]): TagNode<"address">;
export function address(
  props: HTMLProps<"address">,
  ...children: ValidNodeChild[]
): TagNode<"address">;
export function address(...args: any[]): TagNode<"address"> {
  return _c_t("address", args);
}

/**
 * area - Creates area Tag node
 */
export function area(props?: HTMLProps<"area">): TagNode<"area"> {
  return props ? _c_t("area", [props]) : _c_t("area");
}

/**
 * article - Creates article Tag node
 */
export function article(): TagNode<"article">;
export function article(props: HTMLProps<"article">): TagNode<"article">;
export function article(...children: ValidNodeChild[]): TagNode<"article">;
export function article(
  props: HTMLProps<"article">,
  ...children: ValidNodeChild[]
): TagNode<"article">;
export function article(...args: any[]): TagNode<"article"> {
  return _c_t("article", args);
}

/**
 * aside - Creates aside Tag node
 */
export function aside(): TagNode<"aside">;
export function aside(props: HTMLProps<"aside">): TagNode<"aside">;
export function aside(...children: ValidNodeChild[]): TagNode<"aside">;
export function aside(
  props: HTMLProps<"aside">,
  ...children: ValidNodeChild[]
): TagNode<"aside">;
export function aside(...args: any[]): TagNode<"aside"> {
  return _c_t("aside", args);
}

/**
 * audio - Creates audio Tag node
 */
export function audio(): TagNode<"audio">;
export function audio(props: HTMLProps<"audio">): TagNode<"audio">;
export function audio(...children: ValidNodeChild[]): TagNode<"audio">;
export function audio(
  props: HTMLProps<"audio">,
  ...children: ValidNodeChild[]
): TagNode<"audio">;
export function audio(...args: any[]): TagNode<"audio"> {
  return _c_t("audio", args);
}

/**
 * b - Creates b Tag node
 */
export function b(): TagNode<"b">;
export function b(props: HTMLProps<"b">): TagNode<"b">;
export function b(...children: ValidNodeChild[]): TagNode<"b">;
export function b(
  props: HTMLProps<"b">,
  ...children: ValidNodeChild[]
): TagNode<"b">;
export function b(...args: any[]): TagNode<"b"> {
  return _c_t("b", args);
}

/**
 * base - Creates base Tag node
 */
export function base(props?: HTMLProps<"base">): TagNode<"base"> {
  return props ? _c_t("base", [props]) : _c_t("base");
}

/**
 * bdi - Creates bdi Tag node
 */
export function bdi(): TagNode<"bdi">;
export function bdi(props: HTMLProps<"bdi">): TagNode<"bdi">;
export function bdi(...children: ValidNodeChild[]): TagNode<"bdi">;
export function bdi(
  props: HTMLProps<"bdi">,
  ...children: ValidNodeChild[]
): TagNode<"bdi">;
export function bdi(...args: any[]): TagNode<"bdi"> {
  return _c_t("bdi", args);
}

/**
 * bdo - Creates bdo Tag node
 */
export function bdo(): TagNode<"bdo">;
export function bdo(props: HTMLProps<"bdo">): TagNode<"bdo">;
export function bdo(...children: ValidNodeChild[]): TagNode<"bdo">;
export function bdo(
  props: HTMLProps<"bdo">,
  ...children: ValidNodeChild[]
): TagNode<"bdo">;
export function bdo(...args: any[]): TagNode<"bdo"> {
  return _c_t("bdo", args);
}

/**
 * blockquote - Creates blockquote Tag node
 */
export function blockquote(): TagNode<"blockquote">;
export function blockquote(
  props: HTMLProps<"blockquote">
): TagNode<"blockquote">;
export function blockquote(
  ...children: ValidNodeChild[]
): TagNode<"blockquote">;
export function blockquote(
  props: HTMLProps<"blockquote">,
  ...children: ValidNodeChild[]
): TagNode<"blockquote">;
export function blockquote(...args: any[]): TagNode<"blockquote"> {
  return _c_t("blockquote", args);
}

/**
 * body - Creates body Tag node
 */
export function body(): TagNode<"body">;
export function body(props: HTMLProps<"body">): TagNode<"body">;
export function body(...children: ValidNodeChild[]): TagNode<"body">;
export function body(
  props: HTMLProps<"body">,
  ...children: ValidNodeChild[]
): TagNode<"body">;
export function body(...args: any[]): TagNode<"body"> {
  return _c_t("body", args);
}

/**
 * br - Creates br Tag node
 */
export function br(props?: HTMLProps<"br">): TagNode<"br"> {
  return props ? _c_t("br", [props]) : _c_t("br");
}

/**
 * button - Creates button Tag node
 */
export function button(): TagNode<"button">;
export function button(props: HTMLProps<"button">): TagNode<"button">;
export function button(...children: ValidNodeChild[]): TagNode<"button">;
export function button(
  props: HTMLProps<"button">,
  ...children: ValidNodeChild[]
): TagNode<"button">;
export function button(...args: any[]): TagNode<"button"> {
  return _c_t("button", args);
}

/**
 * canvas - Creates canvas Tag node
 */
export function canvas(): TagNode<"canvas">;
export function canvas(props: HTMLProps<"canvas">): TagNode<"canvas">;
export function canvas(...children: ValidNodeChild[]): TagNode<"canvas">;
export function canvas(
  props: HTMLProps<"canvas">,
  ...children: ValidNodeChild[]
): TagNode<"canvas">;
export function canvas(...args: any[]): TagNode<"canvas"> {
  return _c_t("canvas", args);
}

/**
 * caption - Creates caption Tag node
 */
export function caption(): TagNode<"caption">;
export function caption(props: HTMLProps<"caption">): TagNode<"caption">;
export function caption(...children: ValidNodeChild[]): TagNode<"caption">;
export function caption(
  props: HTMLProps<"caption">,
  ...children: ValidNodeChild[]
): TagNode<"caption">;
export function caption(...args: any[]): TagNode<"caption"> {
  return _c_t("caption", args);
}

/**
 * cite - Creates cite Tag node
 */
export function cite(): TagNode<"cite">;
export function cite(props: HTMLProps<"cite">): TagNode<"cite">;
export function cite(...children: ValidNodeChild[]): TagNode<"cite">;
export function cite(
  props: HTMLProps<"cite">,
  ...children: ValidNodeChild[]
): TagNode<"cite">;
export function cite(...args: any[]): TagNode<"cite"> {
  return _c_t("cite", args);
}

/**
 * code - Creates code Tag node
 */
export function code(): TagNode<"code">;
export function code(props: HTMLProps<"code">): TagNode<"code">;
export function code(...children: ValidNodeChild[]): TagNode<"code">;
export function code(
  props: HTMLProps<"code">,
  ...children: ValidNodeChild[]
): TagNode<"code">;
export function code(...args: any[]): TagNode<"code"> {
  return _c_t("code", args);
}

/**
 * col - Creates col Tag node
 */
export function col(props?: HTMLProps<"col">): TagNode<"col"> {
  return props ? _c_t("col", [props]) : _c_t("col");
}

/**
 * colgroup - Creates colgroup Tag node
 */
export function colgroup(): TagNode<"colgroup">;
export function colgroup(props: HTMLProps<"colgroup">): TagNode<"colgroup">;
export function colgroup(...children: ValidNodeChild[]): TagNode<"colgroup">;
export function colgroup(
  props: HTMLProps<"colgroup">,
  ...children: ValidNodeChild[]
): TagNode<"colgroup">;
export function colgroup(...args: any[]): TagNode<"colgroup"> {
  return _c_t("colgroup", args);
}

/**
 * data - Creates data Tag node
 */
export function data(): TagNode<"data">;
export function data(props: HTMLProps<"data">): TagNode<"data">;
export function data(...children: ValidNodeChild[]): TagNode<"data">;
export function data(
  props: HTMLProps<"data">,
  ...children: ValidNodeChild[]
): TagNode<"data">;
export function data(...args: any[]): TagNode<"data"> {
  return _c_t("data", args);
}

/**
 * datalist - Creates datalist Tag node
 */
export function datalist(): TagNode<"datalist">;
export function datalist(props: HTMLProps<"datalist">): TagNode<"datalist">;
export function datalist(...children: ValidNodeChild[]): TagNode<"datalist">;
export function datalist(
  props: HTMLProps<"datalist">,
  ...children: ValidNodeChild[]
): TagNode<"datalist">;
export function datalist(...args: any[]): TagNode<"datalist"> {
  return _c_t("datalist", args);
}

/**
 * dd - Creates dd Tag node
 */
export function dd(): TagNode<"dd">;
export function dd(props: HTMLProps<"dd">): TagNode<"dd">;
export function dd(...children: ValidNodeChild[]): TagNode<"dd">;
export function dd(
  props: HTMLProps<"dd">,
  ...children: ValidNodeChild[]
): TagNode<"dd">;
export function dd(...args: any[]): TagNode<"dd"> {
  return _c_t("dd", args);
}

/**
 * del - Creates del Tag node
 */
export function del(): TagNode<"del">;
export function del(props: HTMLProps<"del">): TagNode<"del">;
export function del(...children: ValidNodeChild[]): TagNode<"del">;
export function del(
  props: HTMLProps<"del">,
  ...children: ValidNodeChild[]
): TagNode<"del">;
export function del(...args: any[]): TagNode<"del"> {
  return _c_t("del", args);
}

/**
 * details - Creates details Tag node
 */
export function details(): TagNode<"details">;
export function details(props: HTMLProps<"details">): TagNode<"details">;
export function details(...children: ValidNodeChild[]): TagNode<"details">;
export function details(
  props: HTMLProps<"details">,
  ...children: ValidNodeChild[]
): TagNode<"details">;
export function details(...args: any[]): TagNode<"details"> {
  return _c_t("details", args);
}

/**
 * dfn - Creates dfn Tag node
 */
export function dfn(): TagNode<"dfn">;
export function dfn(props: HTMLProps<"dfn">): TagNode<"dfn">;
export function dfn(...children: ValidNodeChild[]): TagNode<"dfn">;
export function dfn(
  props: HTMLProps<"dfn">,
  ...children: ValidNodeChild[]
): TagNode<"dfn">;
export function dfn(...args: any[]): TagNode<"dfn"> {
  return _c_t("dfn", args);
}

/**
 * dialog - Creates dialog Tag node
 */
export function dialog(): TagNode<"dialog">;
export function dialog(props: HTMLProps<"dialog">): TagNode<"dialog">;
export function dialog(...children: ValidNodeChild[]): TagNode<"dialog">;
export function dialog(
  props: HTMLProps<"dialog">,
  ...children: ValidNodeChild[]
): TagNode<"dialog">;
export function dialog(...args: any[]): TagNode<"dialog"> {
  return _c_t("dialog", args);
}

/**
 * div - Creates div Tag node
 */
export function div(): TagNode<"div">;
export function div(props: HTMLProps<"div">): TagNode<"div">;
export function div(...children: ValidNodeChild[]): TagNode<"div">;
export function div(
  props: HTMLProps<"div">,
  ...children: ValidNodeChild[]
): TagNode<"div">;
export function div(...args: any[]): TagNode<"div"> {
  return _c_t("div", args);
}

/**
 * dl - Creates dl Tag node
 */
export function dl(): TagNode<"dl">;
export function dl(props: HTMLProps<"dl">): TagNode<"dl">;
export function dl(...children: ValidNodeChild[]): TagNode<"dl">;
export function dl(
  props: HTMLProps<"dl">,
  ...children: ValidNodeChild[]
): TagNode<"dl">;
export function dl(...args: any[]): TagNode<"dl"> {
  return _c_t("dl", args);
}

/**
 * dt - Creates dt Tag node
 */
export function dt(): TagNode<"dt">;
export function dt(props: HTMLProps<"dt">): TagNode<"dt">;
export function dt(...children: ValidNodeChild[]): TagNode<"dt">;
export function dt(
  props: HTMLProps<"dt">,
  ...children: ValidNodeChild[]
): TagNode<"dt">;
export function dt(...args: any[]): TagNode<"dt"> {
  return _c_t("dt", args);
}

/**
 * em - Creates em Tag node
 */
export function em(): TagNode<"em">;
export function em(props: HTMLProps<"em">): TagNode<"em">;
export function em(...children: ValidNodeChild[]): TagNode<"em">;
export function em(
  props: HTMLProps<"em">,
  ...children: ValidNodeChild[]
): TagNode<"em">;
export function em(...args: any[]): TagNode<"em"> {
  return _c_t("em", args);
}

/**
 * embed - Creates embed Tag node
 */
export function embed(props: HTMLProps<"embed">): TagNode<"embed"> {
  return props ? _c_t("embed", [props]) : _c_t("embed");
}

/**
 * fieldset - Creates fieldset Tag node
 */
export function fieldset(): TagNode<"fieldset">;
export function fieldset(props: HTMLProps<"fieldset">): TagNode<"fieldset">;
export function fieldset(...children: ValidNodeChild[]): TagNode<"fieldset">;
export function fieldset(
  props: HTMLProps<"fieldset">,
  ...children: ValidNodeChild[]
): TagNode<"fieldset">;
export function fieldset(...args: any[]): TagNode<"fieldset"> {
  return _c_t("fieldset", args);
}

/**
 * figcaption - Creates figcaption Tag node
 */
export function figcaption(): TagNode<"figcaption">;
export function figcaption(
  props: HTMLProps<"figcaption">
): TagNode<"figcaption">;
export function figcaption(
  ...children: ValidNodeChild[]
): TagNode<"figcaption">;
export function figcaption(
  props: HTMLProps<"figcaption">,
  ...children: ValidNodeChild[]
): TagNode<"figcaption">;
export function figcaption(...args: any[]): TagNode<"figcaption"> {
  return _c_t("figcaption", args);
}

/**
 * figure - Creates figure Tag node
 */
export function figure(): TagNode<"figure">;
export function figure(props: HTMLProps<"figure">): TagNode<"figure">;
export function figure(...children: ValidNodeChild[]): TagNode<"figure">;
export function figure(
  props: HTMLProps<"figure">,
  ...children: ValidNodeChild[]
): TagNode<"figure">;
export function figure(...args: any[]): TagNode<"figure"> {
  return _c_t("figure", args);
}

/**
 * footer - Creates footer Tag node
 */
export function footer(): TagNode<"footer">;
export function footer(props: HTMLProps<"footer">): TagNode<"footer">;
export function footer(...children: ValidNodeChild[]): TagNode<"footer">;
export function footer(
  props: HTMLProps<"footer">,
  ...children: ValidNodeChild[]
): TagNode<"footer">;
export function footer(...args: any[]): TagNode<"footer"> {
  return _c_t("footer", args);
}

/**
 * form - Creates form Tag node
 */
export function form(): TagNode<"form">;
export function form(props: HTMLProps<"form">): TagNode<"form">;
export function form(...children: ValidNodeChild[]): TagNode<"form">;
export function form(
  props: HTMLProps<"form">,
  ...children: ValidNodeChild[]
): TagNode<"form">;
export function form(...args: any[]): TagNode<"form"> {
  return _c_t("form", args);
}

/**
 * head - Creates head Tag node
 */
export function head(): TagNode<"head">;
export function head(props: HTMLProps<"head">): TagNode<"head">;
export function head(...children: ValidNodeChild[]): TagNode<"head">;
export function head(
  props: HTMLProps<"head">,
  ...children: ValidNodeChild[]
): TagNode<"head">;
export function head(...args: any[]): TagNode<"head"> {
  return _c_t("head", args);
}

/**
 * header - Creates header Tag node
 */
export function header(): TagNode<"header">;
export function header(props: HTMLProps<"header">): TagNode<"header">;
export function header(...children: ValidNodeChild[]): TagNode<"header">;
export function header(
  props: HTMLProps<"header">,
  ...children: ValidNodeChild[]
): TagNode<"header">;
export function header(...args: any[]): TagNode<"header"> {
  return _c_t("header", args);
}

/**
 * hgroup - Creates hgroup Tag node
 */
export function hgroup(): TagNode<"hgroup">;
export function hgroup(props: HTMLProps<"hgroup">): TagNode<"hgroup">;
export function hgroup(...children: ValidNodeChild[]): TagNode<"hgroup">;
export function hgroup(
  props: HTMLProps<"hgroup">,
  ...children: ValidNodeChild[]
): TagNode<"hgroup">;
export function hgroup(...args: any[]): TagNode<"hgroup"> {
  return _c_t("hgroup", args);
}

/**
 * hr - Creates hr Tag node
 */
export function hr(props?: HTMLProps<"hr">): TagNode<"hr"> {
  return props ? _c_t("hr", [props]) : _c_t("hr");
}

/**
 * html - Creates html Tag node
 */
export function html(): TagNode<"html">;
export function html(props: HTMLProps<"html">): TagNode<"html">;
export function html(...children: ValidNodeChild[]): TagNode<"html">;
export function html(
  props: HTMLProps<"html">,
  ...children: ValidNodeChild[]
): TagNode<"html">;
export function html(...args: any[]): TagNode<"html"> {
  return _c_t("html", args);
}

/**
 * i - Creates i Tag node
 */
export function i(): TagNode<"i">;
export function i(props: HTMLProps<"i">): TagNode<"i">;
export function i(...children: ValidNodeChild[]): TagNode<"i">;
export function i(
  props: HTMLProps<"i">,
  ...children: ValidNodeChild[]
): TagNode<"i">;
export function i(...args: any[]): TagNode<"i"> {
  return _c_t("i", args);
}

/**
 * iframe - Creates iframe Tag node
 */
export function iframe(): TagNode<"iframe">;
export function iframe(props: HTMLProps<"iframe">): TagNode<"iframe">;
export function iframe(...children: ValidNodeChild[]): TagNode<"iframe">;
export function iframe(
  props: HTMLProps<"iframe">,
  ...children: ValidNodeChild[]
): TagNode<"iframe">;
export function iframe(...args: any[]): TagNode<"iframe"> {
  return _c_t("iframe", args);
}

/**
 * img - Creates img Tag node
 */
export function img(props: HTMLProps<"img">): TagNode<"img"> {
  return props ? _c_t("img", [props]) : _c_t("img");
}

/**
 * input - Creates input Tag node
 */
export function input(props?: HTMLProps<"input">): TagNode<"input"> {
  return props ? _c_t("input", [props]) : _c_t("input");
}

/**
 * ins - Creates ins Tag node
 */
export function ins(): TagNode<"ins">;
export function ins(props: HTMLProps<"ins">): TagNode<"ins">;
export function ins(...children: ValidNodeChild[]): TagNode<"ins">;
export function ins(
  props: HTMLProps<"ins">,
  ...children: ValidNodeChild[]
): TagNode<"ins">;
export function ins(...args: any[]): TagNode<"ins"> {
  return _c_t("ins", args);
}

/**
 * kbd - Creates kbd Tag node
 */
export function kbd(): TagNode<"kbd">;
export function kbd(props: HTMLProps<"kbd">): TagNode<"kbd">;
export function kbd(...children: ValidNodeChild[]): TagNode<"kbd">;
export function kbd(
  props: HTMLProps<"kbd">,
  ...children: ValidNodeChild[]
): TagNode<"kbd">;
export function kbd(...args: any[]): TagNode<"kbd"> {
  return _c_t("kbd", args);
}

/**
 * label - Creates label Tag node
 */
export function label(): TagNode<"label">;
export function label(props: HTMLProps<"label">): TagNode<"label">;
export function label(...children: ValidNodeChild[]): TagNode<"label">;
export function label(
  props: HTMLProps<"label">,
  ...children: ValidNodeChild[]
): TagNode<"label">;
export function label(...args: any[]): TagNode<"label"> {
  return _c_t("label", args);
}

/**
 * legend - Creates legend Tag node
 */
export function legend(): TagNode<"legend">;
export function legend(props: HTMLProps<"legend">): TagNode<"legend">;
export function legend(...children: ValidNodeChild[]): TagNode<"legend">;
export function legend(
  props: HTMLProps<"legend">,
  ...children: ValidNodeChild[]
): TagNode<"legend">;
export function legend(...args: any[]): TagNode<"legend"> {
  return _c_t("legend", args);
}

/**
 * li - Creates li Tag node
 */
export function li(): TagNode<"li">;
export function li(props: HTMLProps<"li">): TagNode<"li">;
export function li(...children: ValidNodeChild[]): TagNode<"li">;
export function li(
  props: HTMLProps<"li">,
  ...children: ValidNodeChild[]
): TagNode<"li">;
export function li(...args: any[]): TagNode<"li"> {
  return _c_t("li", args);
}

/**
 * link - Creates link Tag node
 */
export function link(props?: HTMLProps<"link">): TagNode<"link"> {
  return props ? _c_t("link", [props]) : _c_t("link");
}

/**
 * main - Creates main Tag node
 */
export function main(): TagNode<"main">;
export function main(props: HTMLProps<"main">): TagNode<"main">;
export function main(...children: ValidNodeChild[]): TagNode<"main">;
export function main(
  props: HTMLProps<"main">,
  ...children: ValidNodeChild[]
): TagNode<"main">;
export function main(...args: any[]): TagNode<"main"> {
  return _c_t("main", args);
}

/**
 * map - Creates map Tag node
 */
export function map(): TagNode<"map">;
export function map(props: HTMLProps<"map">): TagNode<"map">;
export function map(...children: ValidNodeChild[]): TagNode<"map">;
export function map(
  props: HTMLProps<"map">,
  ...children: ValidNodeChild[]
): TagNode<"map">;
export function map(...args: any[]): TagNode<"map"> {
  return _c_t("map", args);
}

/**
 * mark - Creates mark Tag node
 */
export function mark(): TagNode<"mark">;
export function mark(props: HTMLProps<"mark">): TagNode<"mark">;
export function mark(...children: ValidNodeChild[]): TagNode<"mark">;
export function mark(
  props: HTMLProps<"mark">,
  ...children: ValidNodeChild[]
): TagNode<"mark">;
export function mark(...args: any[]): TagNode<"mark"> {
  return _c_t("mark", args);
}

/**
 * menu - Creates menu Tag node
 */
export function menu(): TagNode<"menu">;
export function menu(props: HTMLProps<"menu">): TagNode<"menu">;
export function menu(...children: ValidNodeChild[]): TagNode<"menu">;
export function menu(
  props: HTMLProps<"menu">,
  ...children: ValidNodeChild[]
): TagNode<"menu">;
export function menu(...args: any[]): TagNode<"menu"> {
  return _c_t("menu", args);
}

/**
 * meta - Creates meta Tag node
 */
export function meta(props: HTMLProps<"meta">): TagNode<"meta"> {
  return props ? _c_t("meta", [props]) : _c_t("meta");
}

/**
 * meter - Creates meter Tag node
 */
export function meter(): TagNode<"meter">;
export function meter(props: HTMLProps<"meter">): TagNode<"meter">;
export function meter(...children: ValidNodeChild[]): TagNode<"meter">;
export function meter(
  props: HTMLProps<"meter">,
  ...children: ValidNodeChild[]
): TagNode<"meter">;
export function meter(...args: any[]): TagNode<"meter"> {
  return _c_t("meter", args);
}

/**
 * nav - Creates nav Tag node
 */
export function nav(): TagNode<"nav">;
export function nav(props: HTMLProps<"nav">): TagNode<"nav">;
export function nav(...children: ValidNodeChild[]): TagNode<"nav">;
export function nav(
  props: HTMLProps<"nav">,
  ...children: ValidNodeChild[]
): TagNode<"nav">;
export function nav(...args: any[]): TagNode<"nav"> {
  return _c_t("nav", args);
}

/**
 * noscript - Creates noscript Tag node
 */
export function noscript(): TagNode<"noscript">;
export function noscript(props: HTMLProps<"noscript">): TagNode<"noscript">;
export function noscript(...children: ValidNodeChild[]): TagNode<"noscript">;
export function noscript(
  props: HTMLProps<"noscript">,
  ...children: ValidNodeChild[]
): TagNode<"noscript">;
export function noscript(...args: any[]): TagNode<"noscript"> {
  return _c_t("noscript", args);
}

/**
 * object - Creates object Tag node
 */
export function object(): TagNode<"object">;
export function object(props: HTMLProps<"object">): TagNode<"object">;
export function object(...children: ValidNodeChild[]): TagNode<"object">;
export function object(
  props: HTMLProps<"object">,
  ...children: ValidNodeChild[]
): TagNode<"object">;
export function object(...args: any[]): TagNode<"object"> {
  return _c_t("object", args);
}

/**
 * ol - Creates ol Tag node
 */
export function ol(): TagNode<"ol">;
export function ol(props: HTMLProps<"ol">): TagNode<"ol">;
export function ol(...children: ValidNodeChild[]): TagNode<"ol">;
export function ol(
  props: HTMLProps<"ol">,
  ...children: ValidNodeChild[]
): TagNode<"ol">;
export function ol(...args: any[]): TagNode<"ol"> {
  return _c_t("ol", args);
}

/**
 * optgroup - Creates optgroup Tag node
 */
export function optgroup(): TagNode<"optgroup">;
export function optgroup(props: HTMLProps<"optgroup">): TagNode<"optgroup">;
export function optgroup(...children: ValidNodeChild[]): TagNode<"optgroup">;
export function optgroup(
  props: HTMLProps<"optgroup">,
  ...children: ValidNodeChild[]
): TagNode<"optgroup">;
export function optgroup(...args: any[]): TagNode<"optgroup"> {
  return _c_t("optgroup", args);
}

/**
 * option - Creates option Tag node
 */
export function option(): TagNode<"option">;
export function option(props: HTMLProps<"option">): TagNode<"option">;
export function option(...children: ValidNodeChild[]): TagNode<"option">;
export function option(
  props: HTMLProps<"option">,
  ...children: ValidNodeChild[]
): TagNode<"option">;
export function option(...args: any[]): TagNode<"option"> {
  return _c_t("option", args);
}

/**
 * output - Creates output Tag node
 */
export function output(): TagNode<"output">;
export function output(props: HTMLProps<"output">): TagNode<"output">;
export function output(...children: ValidNodeChild[]): TagNode<"output">;
export function output(
  props: HTMLProps<"output">,
  ...children: ValidNodeChild[]
): TagNode<"output">;
export function output(...args: any[]): TagNode<"output"> {
  return _c_t("output", args);
}

/**
 * p - Creates p Tag node
 */
export function p(): TagNode<"p">;
export function p(props: HTMLProps<"p">): TagNode<"p">;
export function p(...children: ValidNodeChild[]): TagNode<"p">;
export function p(
  props: HTMLProps<"p">,
  ...children: ValidNodeChild[]
): TagNode<"p">;
export function p(...args: any[]): TagNode<"p"> {
  return _c_t("p", args);
}

/**
 * picture - Creates picture Tag node
 */
export function picture(): TagNode<"picture">;
export function picture(props: HTMLProps<"picture">): TagNode<"picture">;
export function picture(...children: ValidNodeChild[]): TagNode<"picture">;
export function picture(
  props: HTMLProps<"picture">,
  ...children: ValidNodeChild[]
): TagNode<"picture">;
export function picture(...args: any[]): TagNode<"picture"> {
  return _c_t("picture", args);
}

/**
 * pre - Creates pre Tag node
 */
export function pre(): TagNode<"pre">;
export function pre(props: HTMLProps<"pre">): TagNode<"pre">;
export function pre(...children: ValidNodeChild[]): TagNode<"pre">;
export function pre(
  props: HTMLProps<"pre">,
  ...children: ValidNodeChild[]
): TagNode<"pre">;
export function pre(...args: any[]): TagNode<"pre"> {
  return _c_t("pre", args);
}

/**
 * progress - Creates progress Tag node
 */
export function progress(): TagNode<"progress">;
export function progress(props: HTMLProps<"progress">): TagNode<"progress">;
export function progress(...children: ValidNodeChild[]): TagNode<"progress">;
export function progress(
  props: HTMLProps<"progress">,
  ...children: ValidNodeChild[]
): TagNode<"progress">;
export function progress(...args: any[]): TagNode<"progress"> {
  return _c_t("progress", args);
}

/**
 * q - Creates q Tag node
 */
export function q(): TagNode<"q">;
export function q(props: HTMLProps<"q">): TagNode<"q">;
export function q(...children: ValidNodeChild[]): TagNode<"q">;
export function q(
  props: HTMLProps<"q">,
  ...children: ValidNodeChild[]
): TagNode<"q">;
export function q(...args: any[]): TagNode<"q"> {
  return _c_t("q", args);
}

/**
 * rp - Creates rp Tag node
 */
export function rp(): TagNode<"rp">;
export function rp(props: HTMLProps<"rp">): TagNode<"rp">;
export function rp(...children: ValidNodeChild[]): TagNode<"rp">;
export function rp(
  props: HTMLProps<"rp">,
  ...children: ValidNodeChild[]
): TagNode<"rp">;
export function rp(...args: any[]): TagNode<"rp"> {
  return _c_t("rp", args);
}

/**
 * rt - Creates rt Tag node
 */
export function rt(): TagNode<"rt">;
export function rt(props: HTMLProps<"rt">): TagNode<"rt">;
export function rt(...children: ValidNodeChild[]): TagNode<"rt">;
export function rt(
  props: HTMLProps<"rt">,
  ...children: ValidNodeChild[]
): TagNode<"rt">;
export function rt(...args: any[]): TagNode<"rt"> {
  return _c_t("rt", args);
}

/**
 * ruby - Creates ruby Tag node
 */
export function ruby(): TagNode<"ruby">;
export function ruby(props: HTMLProps<"ruby">): TagNode<"ruby">;
export function ruby(...children: ValidNodeChild[]): TagNode<"ruby">;
export function ruby(
  props: HTMLProps<"ruby">,
  ...children: ValidNodeChild[]
): TagNode<"ruby">;
export function ruby(...args: any[]): TagNode<"ruby"> {
  return _c_t("ruby", args);
}

/**
 * s - Creates s Tag node
 */
export function s(): TagNode<"s">;
export function s(props: HTMLProps<"s">): TagNode<"s">;
export function s(...children: ValidNodeChild[]): TagNode<"s">;
export function s(
  props: HTMLProps<"s">,
  ...children: ValidNodeChild[]
): TagNode<"s">;
export function s(...args: any[]): TagNode<"s"> {
  return _c_t("s", args);
}

/**
 * samp - Creates samp Tag node
 */
export function samp(): TagNode<"samp">;
export function samp(props: HTMLProps<"samp">): TagNode<"samp">;
export function samp(...children: ValidNodeChild[]): TagNode<"samp">;
export function samp(
  props: HTMLProps<"samp">,
  ...children: ValidNodeChild[]
): TagNode<"samp">;
export function samp(...args: any[]): TagNode<"samp"> {
  return _c_t("samp", args);
}

/**
 * script - Creates script Tag node
 */
export function script(): TagNode<"script">;
export function script(props: HTMLProps<"script">): TagNode<"script">;
export function script(...children: ValidNodeChild[]): TagNode<"script">;
export function script(
  props: HTMLProps<"script">,
  ...children: ValidNodeChild[]
): TagNode<"script">;
export function script(...args: any[]): TagNode<"script"> {
  return _c_t("script", args);
}

/**
 * search - Creates search Tag node
 */
export function search(): TagNode<"search">;
export function search(props: HTMLProps<"search">): TagNode<"search">;
export function search(...children: ValidNodeChild[]): TagNode<"search">;
export function search(
  props: HTMLProps<"search">,
  ...children: ValidNodeChild[]
): TagNode<"search">;
export function search(...args: any[]): TagNode<"search"> {
  return _c_t("search", args);
}

/**
 * section - Creates section Tag node
 */
export function section(): TagNode<"section">;
export function section(props: HTMLProps<"section">): TagNode<"section">;
export function section(...children: ValidNodeChild[]): TagNode<"section">;
export function section(
  props: HTMLProps<"section">,
  ...children: ValidNodeChild[]
): TagNode<"section">;
export function section(...args: any[]): TagNode<"section"> {
  return _c_t("section", args);
}

/**
 * select - Creates select Tag node
 */
export function select(): TagNode<"select">;
export function select(props: HTMLProps<"select">): TagNode<"select">;
export function select(...children: ValidNodeChild[]): TagNode<"select">;
export function select(
  props: HTMLProps<"select">,
  ...children: ValidNodeChild[]
): TagNode<"select">;
export function select(...args: any[]): TagNode<"select"> {
  return _c_t("select", args);
}

/**
 * small - Creates small Tag node
 */
export function small(): TagNode<"small">;
export function small(props: HTMLProps<"small">): TagNode<"small">;
export function small(...children: ValidNodeChild[]): TagNode<"small">;
export function small(
  props: HTMLProps<"small">,
  ...children: ValidNodeChild[]
): TagNode<"small">;
export function small(...args: any[]): TagNode<"small"> {
  return _c_t("small", args);
}

/**
 * source - Creates source Tag node
 */
export function source(props?: HTMLProps<"source">): TagNode<"source"> {
  return props ? _c_t("source", [props]) : _c_t("source");
}

/**
 * span - Creates span Tag node
 */
export function span(): TagNode<"span">;
export function span(props: HTMLProps<"span">): TagNode<"span">;
export function span(...children: ValidNodeChild[]): TagNode<"span">;
export function span(
  props: HTMLProps<"span">,
  ...children: ValidNodeChild[]
): TagNode<"span">;
export function span(...args: any[]): TagNode<"span"> {
  return _c_t("span", args);
}

/**
 * strong - Creates strong Tag node
 */
export function strong(): TagNode<"strong">;
export function strong(props: HTMLProps<"strong">): TagNode<"strong">;
export function strong(...children: ValidNodeChild[]): TagNode<"strong">;
export function strong(
  props: HTMLProps<"strong">,
  ...children: ValidNodeChild[]
): TagNode<"strong">;
export function strong(...args: any[]): TagNode<"strong"> {
  return _c_t("strong", args);
}

/**
 * style - Creates style Tag node
 */
export function style(): TagNode<"style">;
export function style(props: HTMLProps<"style">): TagNode<"style">;
export function style(...children: ValidNodeChild[]): TagNode<"style">;
export function style(
  props: HTMLProps<"style">,
  ...children: ValidNodeChild[]
): TagNode<"style">;
export function style(...args: any[]): TagNode<"style"> {
  return _c_t("style", args);
}

/**
 * sub - Creates sub Tag node
 */
export function sub(): TagNode<"sub">;
export function sub(props: HTMLProps<"sub">): TagNode<"sub">;
export function sub(...children: ValidNodeChild[]): TagNode<"sub">;
export function sub(
  props: HTMLProps<"sub">,
  ...children: ValidNodeChild[]
): TagNode<"sub">;
export function sub(...args: any[]): TagNode<"sub"> {
  return _c_t("sub", args);
}

/**
 * summary - Creates summary Tag node
 */
export function summary(): TagNode<"summary">;
export function summary(props: HTMLProps<"summary">): TagNode<"summary">;
export function summary(...children: ValidNodeChild[]): TagNode<"summary">;
export function summary(
  props: HTMLProps<"summary">,
  ...children: ValidNodeChild[]
): TagNode<"summary">;
export function summary(...args: any[]): TagNode<"summary"> {
  return _c_t("summary", args);
}

/**
 * sup - Creates sup Tag node
 */
export function sup(): TagNode<"sup">;
export function sup(props: HTMLProps<"sup">): TagNode<"sup">;
export function sup(...children: ValidNodeChild[]): TagNode<"sup">;
export function sup(
  props: HTMLProps<"sup">,
  ...children: ValidNodeChild[]
): TagNode<"sup">;
export function sup(...args: any[]): TagNode<"sup"> {
  return _c_t("sup", args);
}

/**
 * table - Creates table Tag node
 */
export function table(): TagNode<"table">;
export function table(props: HTMLProps<"table">): TagNode<"table">;
export function table(...children: ValidNodeChild[]): TagNode<"table">;
export function table(
  props: HTMLProps<"table">,
  ...children: ValidNodeChild[]
): TagNode<"table">;
export function table(...args: any[]): TagNode<"table"> {
  return _c_t("table", args);
}

/**
 * tbody - Creates tbody Tag node
 */
export function tbody(): TagNode<"tbody">;
export function tbody(props: HTMLProps<"tbody">): TagNode<"tbody">;
export function tbody(...children: ValidNodeChild[]): TagNode<"tbody">;
export function tbody(
  props: HTMLProps<"tbody">,
  ...children: ValidNodeChild[]
): TagNode<"tbody">;
export function tbody(...args: any[]): TagNode<"tbody"> {
  return _c_t("tbody", args);
}

/**
 * td - Creates td Tag node
 */
export function td(): TagNode<"td">;
export function td(props: HTMLProps<"td">): TagNode<"td">;
export function td(...children: ValidNodeChild[]): TagNode<"td">;
export function td(
  props: HTMLProps<"td">,
  ...children: ValidNodeChild[]
): TagNode<"td">;
export function td(...args: any[]): TagNode<"td"> {
  return _c_t("td", args);
}

/**
 * template - Creates template Tag node
 */
export function template(): TagNode<"template">;
export function template(props: HTMLProps<"template">): TagNode<"template">;
export function template(...children: ValidNodeChild[]): TagNode<"template">;
export function template(
  props: HTMLProps<"template">,
  ...children: ValidNodeChild[]
): TagNode<"template">;
export function template(...args: any[]): TagNode<"template"> {
  return _c_t("template", args);
}

/**
 * textarea - Creates textarea Tag node
 */
export function textarea(): TagNode<"textarea">;
export function textarea(props: HTMLProps<"textarea">): TagNode<"textarea">;
export function textarea(...children: ValidNodeChild[]): TagNode<"textarea">;
export function textarea(
  props: HTMLProps<"textarea">,
  ...children: ValidNodeChild[]
): TagNode<"textarea">;
export function textarea(...args: any[]): TagNode<"textarea"> {
  return _c_t("textarea", args);
}

/**
 * tfoot - Creates tfoot Tag node
 */
export function tfoot(): TagNode<"tfoot">;
export function tfoot(props: HTMLProps<"tfoot">): TagNode<"tfoot">;
export function tfoot(...children: ValidNodeChild[]): TagNode<"tfoot">;
export function tfoot(
  props: HTMLProps<"tfoot">,
  ...children: ValidNodeChild[]
): TagNode<"tfoot">;
export function tfoot(...args: any[]): TagNode<"tfoot"> {
  return _c_t("tfoot", args);
}

/**
 * th - Creates th Tag node
 */
export function th(): TagNode<"th">;
export function th(props: HTMLProps<"th">): TagNode<"th">;
export function th(...children: ValidNodeChild[]): TagNode<"th">;
export function th(
  props: HTMLProps<"th">,
  ...children: ValidNodeChild[]
): TagNode<"th">;
export function th(...args: any[]): TagNode<"th"> {
  return _c_t("th", args);
}

/**
 * thead - Creates thead Tag node
 */
export function thead(): TagNode<"thead">;
export function thead(props: HTMLProps<"thead">): TagNode<"thead">;
export function thead(...children: ValidNodeChild[]): TagNode<"thead">;
export function thead(
  props: HTMLProps<"thead">,
  ...children: ValidNodeChild[]
): TagNode<"thead">;
export function thead(...args: any[]): TagNode<"thead"> {
  return _c_t("thead", args);
}

/**
 * time - Creates time Tag node
 */
export function time(): TagNode<"time">;
export function time(props: HTMLProps<"time">): TagNode<"time">;
export function time(...children: ValidNodeChild[]): TagNode<"time">;
export function time(
  props: HTMLProps<"time">,
  ...children: ValidNodeChild[]
): TagNode<"time">;
export function time(...args: any[]): TagNode<"time"> {
  return _c_t("time", args);
}

/**
 * title - Creates title Tag node
 */
export function title(): TagNode<"title">;
export function title(props: HTMLProps<"title">): TagNode<"title">;
export function title(...children: ValidNodeChild[]): TagNode<"title">;
export function title(
  props: HTMLProps<"title">,
  ...children: ValidNodeChild[]
): TagNode<"title">;
export function title(...args: any[]): TagNode<"title"> {
  return _c_t("title", args);
}

/**
 * tr - Creates tr Tag node
 */
export function tr(): TagNode<"tr">;
export function tr(props: HTMLProps<"tr">): TagNode<"tr">;
export function tr(...children: ValidNodeChild[]): TagNode<"tr">;
export function tr(
  props: HTMLProps<"tr">,
  ...children: ValidNodeChild[]
): TagNode<"tr">;
export function tr(...args: any[]): TagNode<"tr"> {
  return _c_t("tr", args);
}

/**
 * track - Creates track Tag node
 */
export function track(props?: HTMLProps<"track">): TagNode<"track"> {
  return props ? _c_t("track", [props]) : _c_t("track");
}

/**
 * u - Creates u Tag node
 */
export function u(): TagNode<"u">;
export function u(props: HTMLProps<"u">): TagNode<"u">;
export function u(...children: ValidNodeChild[]): TagNode<"u">;
export function u(
  props: HTMLProps<"u">,
  ...children: ValidNodeChild[]
): TagNode<"u">;
export function u(...args: any[]): TagNode<"u"> {
  return _c_t("u", args);
}

/**
 * ul - Creates ul Tag node
 */
export function ul(): TagNode<"ul">;
export function ul(props: HTMLProps<"ul">): TagNode<"ul">;
export function ul(...children: ValidNodeChild[]): TagNode<"ul">;
export function ul(
  props: HTMLProps<"ul">,
  ...children: ValidNodeChild[]
): TagNode<"ul">;
export function ul(...args: any[]): TagNode<"ul"> {
  return _c_t("ul", args);
}

/**
 * video - Creates video Tag node
 */
export function video(): TagNode<"video">;
export function video(props: HTMLProps<"video">): TagNode<"video">;
export function video(...children: ValidNodeChild[]): TagNode<"video">;
export function video(
  props: HTMLProps<"video">,
  ...children: ValidNodeChild[]
): TagNode<"video">;
export function video(...args: any[]): TagNode<"video"> {
  return _c_t("video", args);
}

/**
 * wbr - Creates wbr Tag node
 */
export function wbr(props?: HTMLProps<"wbr">): TagNode<"wbr"> {
  return props ? _c_t("wbr", [props]) : _c_t("wbr");
}
/**
 *  svg - Creates svg element
 */
export function svg(): TagNode<"svg">;
export function svg(props: SVGProps<"svg">): TagNode<"svg">;
export function svg(...children: ValidNodeChild[]): TagNode<"svg">;
export function svg(
  props: SVGProps<"svg">,
  ...children: ValidNodeChild[]
): TagNode<"svg">;
export function svg(...args: any[]): TagNode<"svg"> {
  return _c_t("svg", args);
}
export namespace svg {
  /**
   *  a - Creates svg a element
   */
  export function a(): TagNode<"a">;
  export function a(props: SVGProps<"a">): TagNode<"a">;

  export function a(...args: any[]): TagNode<"a"> {
    return _c_t("a", args);
  }
  /**
   *  animate - Creates svg animate element
   */
  export function animate(): TagNode<"animate">;
  export function animate(props: SVGProps<"animate">): TagNode<"animate">;

  export function animate(...args: any[]): TagNode<"animate"> {
    return _c_t("animate", args);
  }
  /**
   *  animateMotion - Creates svg animateMotion element
   */
  export function animateMotion(): TagNode<"animateMotion">;
  export function animateMotion(
    props: SVGProps<"animateMotion">,
    ...children: ValidNodeChild[]
  ): TagNode<"animateMotion">;
  export function animateMotion(...args: any[]): TagNode<"animateMotion"> {
    return _c_t("animateMotion", args);
  }
  /**
   *  animateTransform - Creates svg animateTransform element
   */
  export function animateTransform(): TagNode<"animateTransform">;
  export function animateTransform(
    props: SVGProps<"animateTransform">,
    ...children: ValidNodeChild[]
  ): TagNode<"animateTransform">;
  export function animateTransform(
    ...args: any[]
  ): TagNode<"animateTransform"> {
    return _c_t("animateTransform", args);
  }
  /**
   *  circle - Creates svg circle element
   */
  export function circle(): TagNode<"circle">;
  export function circle(props: SVGProps<"circle">): TagNode<"circle">;

  export function circle(...args: any[]): TagNode<"circle"> {
    return _c_t("circle", args);
  }
  /**
   *  clipPath - Creates svg clipPath element
   */
  export function clipPath(): TagNode<"clipPath">;
  export function clipPath(props: SVGProps<"clipPath">): TagNode<"clipPath">;

  export function clipPath(...args: any[]): TagNode<"clipPath"> {
    return _c_t("clipPath", args);
  }
  /**
   *  defs - Creates svg defs element
   */
  export function defs(): TagNode<"defs">;
  export function defs(props: SVGProps<"defs">): TagNode<"defs">;
  export function defs(...children: ValidNodeChild[]): TagNode<"defs">;
  export function defs(
    props: SVGProps<"defs">,
    ...children: ValidNodeChild[]
  ): TagNode<"defs">;

  export function defs(...args: any[]): TagNode<"defs"> {
    return _c_t("defs", args);
  }
  /**
   *  desc - Creates svg desc element
   */
  export function desc(): TagNode<"desc">;
  export function desc(props: SVGProps<"desc">): TagNode<"desc">;

  export function desc(...args: any[]): TagNode<"desc"> {
    return _c_t("desc", args);
  }
  /**
   *  ellipse - Creates svg ellipse element
   */
  export function ellipse(): TagNode<"ellipse">;
  export function ellipse(props: SVGProps<"ellipse">): TagNode<"ellipse">;

  export function ellipse(...args: any[]): TagNode<"ellipse"> {
    return _c_t("ellipse", args);
  }
  /**
   *  feBlend - Creates svg feBlend element
   */
  export function feBlend(): TagNode<"feBlend">;
  export function feBlend(props: SVGProps<"feBlend">): TagNode<"feBlend">;

  export function feBlend(...args: any[]): TagNode<"feBlend"> {
    return _c_t("feBlend", args);
  }
  /**
   *  feColorMatrix - Creates svg feColorMatrix element
   */
  export function feColorMatrix(): TagNode<"feColorMatrix">;
  export function feColorMatrix(
    props: SVGProps<"feColorMatrix">,
    ...children: ValidNodeChild[]
  ): TagNode<"feColorMatrix">;
  export function feColorMatrix(...args: any[]): TagNode<"feColorMatrix"> {
    return _c_t("feColorMatrix", args);
  }
  /**
   *  feComponentTransfer - Creates svg feComponentTransfer element
   */
  export function feComponentTransfer(): TagNode<"feComponentTransfer">;
  export function feComponentTransfer(
    props: SVGProps<"feComponentTransfer">,
    ...children: ValidNodeChild[]
  ): TagNode<"feComponentTransfer">;
  export function feComponentTransfer(
    ...args: any[]
  ): TagNode<"feComponentTransfer"> {
    return _c_t("feComponentTransfer", args);
  }
  /**
   *  feComposite - Creates svg feComposite element
   */
  export function feComposite(): TagNode<"feComposite">;
  export function feComposite(
    props: SVGProps<"feComposite">,
    ...children: ValidNodeChild[]
  ): TagNode<"feComposite">;
  export function feComposite(...args: any[]): TagNode<"feComposite"> {
    return _c_t("feComposite", args);
  }
  /**
   *  feConvolveMatrix - Creates svg feConvolveMatrix element
   */
  export function feConvolveMatrix(): TagNode<"feConvolveMatrix">;
  export function feConvolveMatrix(
    props: SVGProps<"feConvolveMatrix">,
    ...children: ValidNodeChild[]
  ): TagNode<"feConvolveMatrix">;
  export function feConvolveMatrix(
    ...args: any[]
  ): TagNode<"feConvolveMatrix"> {
    return _c_t("feConvolveMatrix", args);
  }
  /**
   *  feDiffuseLighting - Creates svg feDiffuseLighting element
   */
  export function feDiffuseLighting(): TagNode<"feDiffuseLighting">;
  export function feDiffuseLighting(
    props: SVGProps<"feDiffuseLighting">,
    ...children: ValidNodeChild[]
  ): TagNode<"feDiffuseLighting">;
  export function feDiffuseLighting(
    ...args: any[]
  ): TagNode<"feDiffuseLighting"> {
    return _c_t("feDiffuseLighting", args);
  }
  /**
   *  feDisplacementMap - Creates svg feDisplacementMap element
   */
  export function feDisplacementMap(): TagNode<"feDisplacementMap">;
  export function feDisplacementMap(
    props: SVGProps<"feDisplacementMap">,
    ...children: ValidNodeChild[]
  ): TagNode<"feDisplacementMap">;
  export function feDisplacementMap(
    ...args: any[]
  ): TagNode<"feDisplacementMap"> {
    return _c_t("feDisplacementMap", args);
  }
  /**
   *  feDistantLight - Creates svg feDistantLight element
   */
  export function feDistantLight(): TagNode<"feDistantLight">;
  export function feDistantLight(
    props: SVGProps<"feDistantLight">,
    ...children: ValidNodeChild[]
  ): TagNode<"feDistantLight">;
  export function feDistantLight(...args: any[]): TagNode<"feDistantLight"> {
    return _c_t("feDistantLight", args);
  }
  /**
   *  feDropShadow - Creates svg feDropShadow element
   */
  export function feDropShadow(): TagNode<"feDropShadow">;
  export function feDropShadow(
    props: SVGProps<"feDropShadow">,
    ...children: ValidNodeChild[]
  ): TagNode<"feDropShadow">;
  export function feDropShadow(...args: any[]): TagNode<"feDropShadow"> {
    return _c_t("feDropShadow", args);
  }
  /**
   *  feFlood - Creates svg feFlood element
   */
  export function feFlood(): TagNode<"feFlood">;
  export function feFlood(props: SVGProps<"feFlood">): TagNode<"feFlood">;

  export function feFlood(...args: any[]): TagNode<"feFlood"> {
    return _c_t("feFlood", args);
  }
  /**
   *  feFuncA - Creates svg feFuncA element
   */
  export function feFuncA(): TagNode<"feFuncA">;
  export function feFuncA(props: SVGProps<"feFuncA">): TagNode<"feFuncA">;

  export function feFuncA(...args: any[]): TagNode<"feFuncA"> {
    return _c_t("feFuncA", args);
  }
  /**
   *  feFuncB - Creates svg feFuncB element
   */
  export function feFuncB(): TagNode<"feFuncB">;
  export function feFuncB(props: SVGProps<"feFuncB">): TagNode<"feFuncB">;

  export function feFuncB(...args: any[]): TagNode<"feFuncB"> {
    return _c_t("feFuncB", args);
  }
  /**
   *  feFuncG - Creates svg feFuncG element
   */
  export function feFuncG(): TagNode<"feFuncG">;
  export function feFuncG(props: SVGProps<"feFuncG">): TagNode<"feFuncG">;

  export function feFuncG(...args: any[]): TagNode<"feFuncG"> {
    return _c_t("feFuncG", args);
  }
  /**
   *  feFuncR - Creates svg feFuncR element
   */
  export function feFuncR(): TagNode<"feFuncR">;
  export function feFuncR(props: SVGProps<"feFuncR">): TagNode<"feFuncR">;

  export function feFuncR(...args: any[]): TagNode<"feFuncR"> {
    return _c_t("feFuncR", args);
  }
  /**
   *  feGaussianBlur - Creates svg feGaussianBlur element
   */
  export function feGaussianBlur(): TagNode<"feGaussianBlur">;
  export function feGaussianBlur(
    props: SVGProps<"feGaussianBlur">,
    ...children: ValidNodeChild[]
  ): TagNode<"feGaussianBlur">;
  export function feGaussianBlur(...args: any[]): TagNode<"feGaussianBlur"> {
    return _c_t("feGaussianBlur", args);
  }
  /**
   *  feImage - Creates svg feImage element
   */
  export function feImage(): TagNode<"feImage">;
  export function feImage(props: SVGProps<"feImage">): TagNode<"feImage">;

  export function feImage(...args: any[]): TagNode<"feImage"> {
    return _c_t("feImage", args);
  }
  /**
   *  feMerge - Creates svg feMerge element
   */
  export function feMerge(): TagNode<"feMerge">;
  export function feMerge(props: SVGProps<"feMerge">): TagNode<"feMerge">;

  export function feMerge(...args: any[]): TagNode<"feMerge"> {
    return _c_t("feMerge", args);
  }
  /**
   *  feMergeNode - Creates svg feMergeNode element
   */
  export function feMergeNode(): TagNode<"feMergeNode">;
  export function feMergeNode(
    props: SVGProps<"feMergeNode">,
    ...children: ValidNodeChild[]
  ): TagNode<"feMergeNode">;
  export function feMergeNode(...args: any[]): TagNode<"feMergeNode"> {
    return _c_t("feMergeNode", args);
  }
  /**
   *  feMorphology - Creates svg feMorphology element
   */
  export function feMorphology(): TagNode<"feMorphology">;
  export function feMorphology(
    props: SVGProps<"feMorphology">,
    ...children: ValidNodeChild[]
  ): TagNode<"feMorphology">;
  export function feMorphology(...args: any[]): TagNode<"feMorphology"> {
    return _c_t("feMorphology", args);
  }
  /**
   *  feOffset - Creates svg feOffset element
   */
  export function feOffset(): TagNode<"feOffset">;
  export function feOffset(props: SVGProps<"feOffset">): TagNode<"feOffset">;

  export function feOffset(...args: any[]): TagNode<"feOffset"> {
    return _c_t("feOffset", args);
  }
  /**
   *  fePointLight - Creates svg fePointLight element
   */
  export function fePointLight(): TagNode<"fePointLight">;
  export function fePointLight(
    props: SVGProps<"fePointLight">,
    ...children: ValidNodeChild[]
  ): TagNode<"fePointLight">;
  export function fePointLight(...args: any[]): TagNode<"fePointLight"> {
    return _c_t("fePointLight", args);
  }
  /**
   *  feSpecularLighting - Creates svg feSpecularLighting element
   */
  export function feSpecularLighting(): TagNode<"feSpecularLighting">;
  export function feSpecularLighting(
    props: SVGProps<"feSpecularLighting">,
    ...children: ValidNodeChild[]
  ): TagNode<"feSpecularLighting">;
  export function feSpecularLighting(
    ...args: any[]
  ): TagNode<"feSpecularLighting"> {
    return _c_t("feSpecularLighting", args);
  }
  /**
   *  feSpotLight - Creates svg feSpotLight element
   */
  export function feSpotLight(): TagNode<"feSpotLight">;
  export function feSpotLight(
    props: SVGProps<"feSpotLight">,
    ...children: ValidNodeChild[]
  ): TagNode<"feSpotLight">;
  export function feSpotLight(...args: any[]): TagNode<"feSpotLight"> {
    return _c_t("feSpotLight", args);
  }
  /**
   *  feTile - Creates svg feTile element
   */
  export function feTile(): TagNode<"feTile">;
  export function feTile(props: SVGProps<"feTile">): TagNode<"feTile">;

  export function feTile(...args: any[]): TagNode<"feTile"> {
    return _c_t("feTile", args);
  }
  /**
   *  feTurbulence - Creates svg feTurbulence element
   */
  export function feTurbulence(): TagNode<"feTurbulence">;
  export function feTurbulence(
    props: SVGProps<"feTurbulence">,
    ...children: ValidNodeChild[]
  ): TagNode<"feTurbulence">;
  export function feTurbulence(...args: any[]): TagNode<"feTurbulence"> {
    return _c_t("feTurbulence", args);
  }
  /**
   *  filter - Creates svg filter element
   */
  export function filter(): TagNode<"filter">;
  export function filter(props: SVGProps<"filter">): TagNode<"filter">;

  export function filter(...args: any[]): TagNode<"filter"> {
    return _c_t("filter", args);
  }
  /**
   *  foreignObject - Creates svg foreignObject element
   */
  export function foreignObject(): TagNode<"foreignObject">;
  export function foreignObject(
    props: SVGProps<"foreignObject">,
    ...children: ValidNodeChild[]
  ): TagNode<"foreignObject">;
  export function foreignObject(...args: any[]): TagNode<"foreignObject"> {
    return _c_t("foreignObject", args);
  }
  /**
   *  g - Creates svg g element
   */
  export function g(): TagNode<"g">;
  export function g(props: SVGProps<"g">): TagNode<"g">;
  export function g(...children: ValidNodeChild[]): TagNode<"g">;
  export function g(
    props: SVGProps<"g">,
    ...children: ValidNodeChild[]
  ): TagNode<"g">;
  export function g(...args: any[]): TagNode<"g"> {
    return _c_t("g", args);
  }
  /**
   *  image - Creates svg image element
   */
  export function image(): TagNode<"image">;
  export function image(props: SVGProps<"image">): TagNode<"image">;

  export function image(...args: any[]): TagNode<"image"> {
    return _c_t("image", args);
  }
  /**
   *  line - Creates svg line element
   */
  export function line(): TagNode<"line">;
  export function line(props: SVGProps<"line">): TagNode<"line">;

  export function line(...args: any[]): TagNode<"line"> {
    return _c_t("line", args);
  }
  /**
   *  linearGradient - Creates svg linearGradient element
   */
  export function linearGradient(): TagNode<"linearGradient">;
  export function linearGradient(
    props: SVGProps<"linearGradient">,
    ...children: ValidNodeChild[]
  ): TagNode<"linearGradient">;
  export function linearGradient(...args: any[]): TagNode<"linearGradient"> {
    return _c_t("linearGradient", args);
  }
  /**
   *  marker - Creates svg marker element
   */
  export function marker(): TagNode<"marker">;
  export function marker(props: SVGProps<"marker">): TagNode<"marker">;
  export function marker(...children: ValidNodeChild[]): TagNode<"marker">;
  export function marker(
    props: SVGProps<"marker">,
    ...children: ValidNodeChild[]
  ): TagNode<"marker">;
  export function marker(...args: any[]): TagNode<"marker"> {
    return _c_t("marker", args);
  }
  /**
   *  mask - Creates svg mask element
   */
  export function mask(): TagNode<"mask">;
  export function mask(props: SVGProps<"mask">): TagNode<"mask">;
  export function mask(...children: ValidNodeChild[]): TagNode<"mask">;
  export function mask(
    props: SVGProps<"mask">,
    ...children: ValidNodeChild[]
  ): TagNode<"mask">;
  export function mask(...args: any[]): TagNode<"mask"> {
    return _c_t("mask", args);
  }
  /**
   *  metadata - Creates svg metadata element
   */
  export function metadata(): TagNode<"metadata">;
  export function metadata(props: SVGProps<"metadata">): TagNode<"metadata">;

  export function metadata(...args: any[]): TagNode<"metadata"> {
    return _c_t("metadata", args);
  }
  /**
   *  mpath - Creates svg mpath element
   */
  export function mpath(): TagNode<"mpath">;
  export function mpath(props: SVGProps<"mpath">): TagNode<"mpath">;

  export function mpath(...args: any[]): TagNode<"mpath"> {
    return _c_t("mpath", args);
  }
  /**
   *  path - Creates svg path element
   */
  export function path(): TagNode<"path">;
  export function path(props: SVGProps<"path">): TagNode<"path">;

  export function path(...args: any[]): TagNode<"path"> {
    return _c_t("path", args);
  }
  /**
   *  pattern - Creates svg pattern element
   */
  export function pattern(): TagNode<"pattern">;
  export function pattern(props: SVGProps<"pattern">): TagNode<"pattern">;
  export function pattern(
    props: SVGProps<"pattern">,
    ...children: ValidNodeChild[]
  ): TagNode<"pattern">;

  export function pattern(...args: any[]): TagNode<"pattern"> {
    return _c_t("pattern", args);
  }
  /**
   *  polygon - Creates svg polygon element
   */
  export function polygon(): TagNode<"polygon">;
  export function polygon(props: SVGProps<"polygon">): TagNode<"polygon">;

  export function polygon(...args: any[]): TagNode<"polygon"> {
    return _c_t("polygon", args);
  }
  /**
   *  polyline - Creates svg polyline element
   */
  export function polyline(): TagNode<"polyline">;
  export function polyline(props: SVGProps<"polyline">): TagNode<"polyline">;

  export function polyline(...args: any[]): TagNode<"polyline"> {
    return _c_t("polyline", args);
  }
  /**
   *  radialGradient - Creates svg radialGradient element
   */
  export function radialGradient(): TagNode<"radialGradient">;
  export function radialGradient(
    props: SVGProps<"radialGradient">,
    ...children: ValidNodeChild[]
  ): TagNode<"radialGradient">;
  export function radialGradient(...args: any[]): TagNode<"radialGradient"> {
    return _c_t("radialGradient", args);
  }
  /**
   *  rect - Creates svg rect element
   */
  export function rect(): TagNode<"rect">;
  export function rect(props: SVGProps<"rect">): TagNode<"rect">;
  export function rect(...children: ValidNodeChild[]): TagNode<"rect">;
  export function rect(
    props: SVGProps<"rect">,
    ...children: ValidNodeChild[]
  ): TagNode<"rect">;
  export function rect(...args: any[]): TagNode<"rect"> {
    return _c_t("rect", args);
  }
  /**
   *  script - Creates svg script element
   */
  export function script(): TagNode<"script">;
  export function script(props: SVGProps<"script">): TagNode<"script">;

  export function script(...args: any[]): TagNode<"script"> {
    return _c_t("script", args);
  }
  /**
   *  set - Creates svg set element
   */
  export function set(): TagNode<"set">;
  export function set(props: SVGProps<"set">): TagNode<"set">;

  export function set(...args: any[]): TagNode<"set"> {
    return _c_t("set", args);
  }
  /**
   *  stop - Creates svg stop element
   */
  export function stop(): TagNode<"stop">;
  export function stop(props: SVGProps<"stop">): TagNode<"stop">;

  export function stop(...args: any[]): TagNode<"stop"> {
    return _c_t("stop", args);
  }
  /**
   *  style - Creates svg style element
   */
  export function style(): TagNode<"style">;
  export function style(props: SVGProps<"style">): TagNode<"style">;

  export function style(...args: any[]): TagNode<"style"> {
    return _c_t("style", args);
  }
  /**
   *  svg - Creates svg svg element
   */
  export function svg(): TagNode<"svg">;
  export function svg(props: SVGProps<"svg">): TagNode<"svg">;

  export function svg(...args: any[]): TagNode<"svg"> {
    return _c_t("svg", args);
  }
  /**
   *  switch - Creates svg switch element
   */
  export function _switch(): TagNode<"switch">;
  export function _switch(props: SVGProps<"switch">): TagNode<"switch">;

  export function _switch(...args: any[]): TagNode<"switch"> {
    return _c_t("switch", args);
  }
  /**
   *  symbol - Creates svg symbol element
   */
  export function symbol(): TagNode<"symbol">;
  export function symbol(props: SVGProps<"symbol">): TagNode<"symbol">;
  export function symbol(...children: ValidNodeChild[]): TagNode<"symbol">;
  export function symbol(
    props: SVGProps<"symbol">,
    ...children: ValidNodeChild[]
  ): TagNode<"symbol">;

  export function symbol(...args: any[]): TagNode<"symbol"> {
    return _c_t("symbol", args);
  }
  /**
   *  text - Creates svg text element
   */
  export function text(): TagNode<"text">;
  export function text(props: SVGProps<"text">): TagNode<"text">;

  export function text(...args: any[]): TagNode<"text"> {
    return _c_t("text", args);
  }
  /**
   *  textPath - Creates svg textPath element
   */
  export function textPath(): TagNode<"textPath">;
  export function textPath(props: SVGProps<"textPath">): TagNode<"textPath">;

  export function textPath(...args: any[]): TagNode<"textPath"> {
    return _c_t("textPath", args);
  }
  /**
   *  title - Creates svg title element
   */
  export function title(): TagNode<"title">;
  export function title(props: SVGProps<"title">): TagNode<"title">;
  export function title(...children: ValidNodeChild[]): TagNode<"title">;
  export function title(
    props: SVGProps<"title">,
    ...children: ValidNodeChild[]
  ): TagNode<"title">;
  export function title(...args: any[]): TagNode<"title"> {
    return _c_t("title", args);
  }
  /**
   *  tspan - Creates svg tspan element
   */
  export function tspan(): TagNode<"tspan">;
  export function tspan(props: SVGProps<"tspan">): TagNode<"tspan">;

  export function tspan(...args: any[]): TagNode<"tspan"> {
    return _c_t("tspan", args);
  }
  /**
   *  use - Creates svg use element
   */
  export function use(): TagNode<"use">;
  export function use(props: SVGProps<"use">): TagNode<"use">;

  export function use(...args: any[]): TagNode<"use"> {
    return _c_t("use", args);
  }
  /**
   *  view - Creates svg view element
   */
  export function view(): TagNode<"view">;
  export function view(props: SVGProps<"view">): TagNode<"view">;

  export function view(...args: any[]): TagNode<"view"> {
    return _c_t("view", args);
  }
}
