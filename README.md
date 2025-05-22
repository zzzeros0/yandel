# Yandel

**Yandel is reactive lightweight** typescript library that eases the creation of small to complex user interfaces without the complexity of project setup with **0-deps**.

## Table of Contents

- [Installation](#installation)
- [Introduction](#introduction)
  - [Tags](#tags)
  - [Text](#text)
  - [Portal](#portal)
  - [Templates](#templates)
  - [Components](#components)
    - [Reactivity](#reactivity)
  - [Ref](#ref)
  - [Key](#key)
- [Usage](#usage)

## Installation

Add this package to your npm project:

```
npm install yandel
```

## Introduction

Yandel is a client frontend library that helps you create web UI.

### Tags

The default HTML Tag elements. They let you create different HTML Elements and customize them.

```ts
import { div, span, section } from "yandel";

div();
/**
 * <div/>
 */
div({ id: "1234" });
/**
 * <div id="1234"/>
 */
div({ id: "1234", "aria-hidden": "true" }, span());
/**
 * <div id="1234" aria-hidden="true">
 *      <span/>
 * </div>
 */
div(
  { id: "1234", className: "myClass", style: { backgroundColor: "red" } },
  span(),
  section()
);
/**
 * <div id="1234" class="myClass" style="background-color: red;">
 *      <span/>
 *      <section/>
 * </div>
 */
```

### Text

HTML text node.

```ts
import { h1, div, p } from "yandel";

h1("I'm the text inside h1");
/**
 * <h1>I'm the text inside h1</h1>
 * */

div(p("I'm the text inside p"), "I'm the text inside div");
/**
 * <div>
 *      <p>I'm the text inside p</p>I'm the text inside div
 * </div>
 * */
```

### Portal

Allows you to mount elements over a different parent, remaining in the same tree.

```ts
import { Portal, div, span, h1 } from "yandel";


Portal(document.body, div());
// Renders a div inside body

Portal(document.querySelector("#someid")!, div(), span(), h1(), ...);

```

Example:

```ts
import { Portal, div, span, ValidTemplateReturn } from "yandel";

function Notification(): ValidTemplateReturn {
  return div(
    Portal(document.body, span("Notification 1"), span("Notification 2")),
    button("Remove notifications")
  );
}

// The span will be rendered inside body instead of the parent div.
// When the parent div is deleted, the portal is deleted as well.
```

### Templates

Templates are functions that return nodes. They help you customize and modularize:

```ts
import { div, p, strong, span, button, ValidTemplateReturn } from "yandel";

function TotalPriceButton(
  qTy: number,
  uPrice: number,
  onClick: VoidFunction
): ValidTemplateReturn {
  return div(
    p(strong("Total is:"), span(`${qTy * uPrice} $`)),
    button({ onclick: onClick }, "Buy")
  );
}

TotalPriceButton(4, 2, () => buy());
/**
 *  <div>
 *      <p><strong>Total is:</strong>8 $</>
 *      <button>Buy</button>
 *  </div>
 */
```

### Components

Components add the reactivity to the game. They are defined extending the `Context` class and must provide a `render` method (a template):

```ts
import {
  Component,
  div,
  p,
  strong,
  span,
  button,
  ValidTemplateReturn,
} from "yandel";

class TotalPriceButton extends Component {
  private readonly total: number;
  private readonly onClick: VoidFunction;
  constructor(qTy: number, uPrice: number, onClick: VoidFunction) {
    super();
    this.total = qTy * uPrice;
    this.onClick = onClick;
  }
  public render(): ValidTemplateReturn {
    return div(
      p(strong("Total is:"), span(`${this.total} $`)),
      button({ onclick: this.onClick }, "Buy")
    );
  }
}
```

To use a component, instantiate just like a common class:

```ts
section(new TotalPriceButton(4, 2, buyFn));
/**
 * <section>
 *      <div>
 *          <p><strong>Total is:</strong>8 $</>
 *          <button>Buy</button>
 *      </div>
 * </section>
 */
```

Components can return an array:

```ts
class TotalPriceButton extends Component {
  private readonly total: number;
  private readonly onClick: VoidFunction;
  constructor(qTy: number, uPrice: number, onClick: VoidFunction) {
    super();
    this.total = qTy * uPrice;
    this.onClick = onClick;
  }
  public render(): ValidTemplateReturn {
    return [
      p(strong("Total is:"), span(`${this.total} $`)),
      button({ onclick: this.onClick }, "Buy"),
    ];
  }
}
```

#### Reactivity

`State` object type is defined using the `Component's` generic argument. To set the `initial state`, `defineState` must be called in the constructor.

```ts
import {
  Component,
  div,
  p,
  strong,
  span,
  button,
  ValidTemplateReturn,
} from "yandel";

class TotalPriceButton extends Component<{
  loading: boolean;
}> {
  private readonly total: number;
  private readonly onClick: VoidFunction;
  constructor(qTy: number, uPrice: number, onClick: VoidFunction) {
    super();
    this.total = qTy * uPrice;
    this.onClick = onClick;
    // `defineState` must be called in the constructor.
    // It should not be called elsewhere.
    this.defineState({
      loading: false,
    });
  }
  public handleClick() {
    // Perform state update
    this.setState({
      loading: true,
    });
    this.onClick();
  }
  public render(): ValidTemplateReturn {
    return div(
      p(strong("Total is:"), span(`${this.total} $`)),
      button(
        {
          onclick: this.handleClick.bind(this), // Don't forget to bind if needed
          disabled: this.state.loading,
        },
        "Buy"
      )
    );
  }
}
```

`State` can be changed and accessed via `this.state`, but only `this.setState` will perform an update:

```ts
// This will set the value, but won't perform an update
this.state.loading = true;

// this will set the value and perform an update
this.setState({
  loading: true,
});
```

This is usefull when you want to change a state value without performing an state update.

`setState` can receive a function that provides the current value and returns the new value:

```ts
this.setState((lastValue) => ({
  ...lastValue,
  loading: true,
}));
```

**Important: Do not overwrite `state`**:

```ts
this.state = { loading: false }; // state is a read-only property!
```

---

`Effects` are callbacks that are executed when the component is mounted or unmounted. They are created with `this.effect` and should be called inside the `render` method. Components can have more than one effect/cleanup and they're executed in the order they are defined (FIFO).

```ts
import { Component, p, ValidTemplateReturn } from "yandel";
interface User {
  name: string;
}
class UserData extends Component<{
  user: User | undefined;
}> {
  private userId: string;
  constructor(id: string) {
    super();
    this.userId = id;
    this.defineState({ user: undefined });
  }
  public render(): ValidTemplateReturn {
    this.effect(() => {
      // Executed when the component is mounted
      if (!this.state.user)
        requestUser(this.userId).then((user) => {
          this.setState({
            user,
          });
        });

      if (this.state.user) {
        // If a callback is returned in the effect
        // It will be executed when the component unmounts
        return () => {
          sendUserAnalytics(this.state.user);
        };
      }
    });
    return p(
      this.state.user
        ? `Username is: ${this.state.user.name}`
        : "User is undefined"
    );
  }
}
```

Do not forget that calling `setState` inside an effect will perform an update. This example will create a never ending update loop:

```ts

public render(): ValidTemplateReturn {
  this.effect(() => {
    this.setState(
      // some state...
    );
  });
  return ...;
}

```

Add a condition to avoid a loop:

```ts

public render(): ValidTemplateReturn {
  this.effect(() => {
    if (!condition)
      this.setState(
        // some state...
      );
  });
  return ...;
}

```

**Important:** You must handle calling `setState` or other actions if the component has been removed.

```ts

public render(): ValidTemplateReturn {
  this.effect(() => {
    setTimeout(() => {
      this.setState(
        // some state
      );
    }, 2000)
  });
  return ...;
}

```

In this example, if the component is removed, if not handled the timeout will run and an error will be thrown (`Error: Component is deleted`).
Handle timeouts, deletions and more in the cleanups to prevent weird behavior:

```ts

public render(): ValidTemplateReturn {
  this.effect(() => {
    this.timeout = setTimeout(() => {
      this.setState(
        // some state
      );
    }, 2000)
    return () => {
      if (this.timeout) clearTimeout(this.timeout);
    }
  });
  return ...;
}

```

### Ref

The `ref` prop allows you to have access to the element's reference:

```ts
import { Component, ElementRef, Stores, input } from "yandel";

class InputWithRef extends Component {
  private readonly inputRef: ElementRef<"input"> = new Stores(undefined);
  public render() {
    this.effect(() => {
      console.log(this.inputRef.stores); // HTMLInputElement
    });
    return input({
      ref: this.inputRef,
    });
  }
}
```

### Key

The `key` prop allows you to identify elements. Elements with the same key won't be diffed.

```ts
// If keys are the same, node diffing won't be done,
// even if they are different tags
class WithKey extends Component {
  public render() {
    return condition
      ? div({
          key: "key1",
        })
      : section({
          key: "key1",
        });
  }
}
```

## Usage

Define your own templates and components. Then, use `createRoot` to render your UI.

```ts
import {
  Component,
  ElementRef,
  Stores,
  ValidTemplateReturn,
  button,
  createRoot,
  div,
  form,
  input,
  p,
} from "yandel";

function Message(msg: string) {
  return p(`The message is: ${msg}`);
}

class MessageInput extends Component<{ message: string }> {
  private readonly inputRef: ElementRef<"input"> = new Stores(undefined);
  constructor() {
    super();
    this.defineState({
      message: "Default message",
    });
  }
  private handleSubmit(v: SubmitEvent) {
    v.preventDefault();
    if (
      this.inputRef.stores &&
      this.inputRef.stores.value !== this.state.message
    ) {
      this.setState({
        message: this.inputRef.stores.value,
      });
    }
  }
  public render(): ValidTemplateReturn {
    this.effect(() => {
      return () => {
        // Reset the input when user
        // sets new message
        if (this.inputRef.stores) this.inputRef.stores.value = "";
      };
    });
    return div(
      form(
        {
          onsubmit: this.handleSubmit.bind(this),
        },
        input({
          ref: this.inputRef,
          type: "text",
        }),
        button(
          {
            type: "submit",
          },
          "Set new message"
        )
      ),
      Message(this.state.message)
    );
  }
}

// Entry point
createRoot(document.body).render(new MessageInput());

// Renders:
// <div>
//  <form>
//    <input type="text">
//    <button type="submit">Set new message</button>
//  </form>
//  <p>The message is: Default message</p>
// </div>
```
