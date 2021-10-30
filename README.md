# @react-lit/skip-nav

Renders a navigation link for screen readers and keyboard users to skip to the
main content. The link is only visible if the user navigates via keyboard.

## Installation

```bash
$ npm i @react-lit/skip-nav
# or
$ yarn add @react-lit/skip-nav
```

## Example

```js
import * as React from 'react';
import { SkipNavLink, SkipNavContent } from "@react-lit/skip-nav";

function Example() {
  return (
    {/* Put the link at the top of your app... */}
    <SkipNavLink />
    <div>
      <SomePresentationalContent />
      {/* ...and the content next to your main content. */}
      <SkipNavContent />
      <YourMainContent />
    </div>
  );
}
```

## Development

(1) Install dependencies

```bash
$ npm i
# or
$ yarn
```

(2) Run initial validation

```bash
$ ./Taskfile.sh validate
```

(3) Run tests in watch-mode to validate functionality.

```bash
$ ./Taskfile test -w
```

---

_This project was set up by @jvdx/core_
