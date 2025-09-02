# ArenaPro UI Index Usage Guide

## Still stuck in "path hell"?

> You hunt for nodes in the UI tree: deep nesting, inconsistent naming, and one structure change breaks everything. You keep asking:
>
> - “What is the exact full path for this `UiText`?”
> - “After changing UI hierarchy, all my string paths broke!”
> - “I just want the element, not another round of path spelunking…”

Starting from V1.4.0, ArenaPro provides a “UI Index” feature—like a map index, reach target elements via “ScreenName + NodeName” and stop wrestling with paths.

## What does UI Index bring?

UI Index is a strongly-typed projection of your UI tree. For each screen, it generates a screen-specific index class and exposes a unified entry to retrieve index instances:

| You’ll get…                   | Which means…                                                                 |
| ----------------------------- | --------------------------------------------------------------------------- |
| **🔎 Strongly-typed access**   | Access UI elements via properties with IDE autocomplete and visible types.  |
| **🧭 Free from string paths**  | No more hardcoded paths; hierarchy changes won’t force mass string updates. |
| **⚡ Warm up once, then fast** | Pre-warms a cache at construction using a path table; subsequent reads are O(1). |
| **🧩 Naming conflict handling**| Uses leaf name first, then full path, then adds suffix numbers to ensure usable names. |
| **✅ Types enforce contracts** | Nonexistent screen names are `never` at type level; runtime missing screens return `undefined`. |

:::tip
💡 Core advantage: The UI Index is an auto-generated, auto-maintained “strongly-typed mirror” of your UI. You fetch by screen name; the type system and cache do the rest.
:::

## How to get and use it

### Generate index files

- Trigger “Sync map resources” (e.g., press `Alt+Y`) or related commands; the extension scans the UI tree and generates the index files automatically.
- Generated directory structure (auto-generated; do not edit):

```
client/UiIndex/
  ├─ index.ts                // Entry, default export: find()
  ├─ ClientUIWindow.ts       // Base class (cache, find-by-path, warmup)
  └─ screens/
      ├─ UiIndex_home.ts     // Example: home screen index class
      └─ UiIndex_xxx.ts      // Other screen index classes
```

> If you see imports like `@client/UiIndex`, it means an alias is configured in your project and can be used directly.

### Quick start

```ts
import find from "@client/UiIndex";

// 1) Get a strongly-typed index instance by screen name
const idx = find("blackground");
if (idx) {
  // 2) Access UI elements via strongly-typed properties
  idx.uiText_content1;
  idx.uiImage_logo;
}
```

### Common actions checklist

- **Get index instance**: `const idx = find("home")` and add a null-check.
- **Access elements**: `idx.uiText_title`, `idx.uiImage_logo`, etc.
- **Inspect real paths**: Open `UiIndex_<Screen>.ts` and check `static PATHS` or getter comments.
- **After structure changes**: Re-sync resources to regenerate indexes and avoid path maintenance toil.

---

## Feature overview

- Get a “screen index instance” by screen name, then access UI elements via strongly-typed properties.
- Auto-generates a `UiIndex_<Screen>` class per screen, plus a unified `index.ts` entry and `ClientUIWindow.ts` base class.
- Automatic naming conflict resolution: prefer leaf name; fall back to full path; if still conflicting, append a numeric suffix.
- Cache warmup: on first construction, caches nodes according to a `PATHS` table; later reads don’t re-search.
- Type safety: passing a nonexistent screen name returns `never` at the type level; runtime missing screens return `undefined`.

---

## How it’s generated

- After sync or relevant commands, the extension scans the UI tree and generates the files above (automated flow).
- The generated files are tool-managed; do not edit them directly. If you need changes (naming/output style), please file a request.

> If you see imports like `@client/UiIndex`, it means an alias is configured in your project and can be used directly.

---

## API Reference

### 1) Default export: find(screenName)

- Purpose: Get the UI index instance for the given screen name.
- Types:
  ```ts
  export default function find<Name extends string>(
    screenName: Name
  ): Name extends keyof typeof __UiIndexCtorMap
    ? InstanceType<(typeof __UiIndexCtorMap)[Name]>
    : never;
  ```
- Runtime return: A `UiIndex_xxx` instance or `undefined` (if the screen does not exist).
- Typical usage:
  ```ts
  const idx = find("home");
  if (idx) {
    idx.uiText_title;
  }
  ```

### 2) Screen index class: `UiIndex_<Screen>`

- Each screen has a dedicated class extending `ClientUIWindow`.
- Key members:
  - `static readonly PATHS: readonly string[]`: Full path table of nodes to cache under this screen.
  - Strongly-typed getters: e.g., `get uiText_title(): UiText` reading from cache by `PATHS[i]` and casting to type.

### 3) Base class: ClientUIWindow

- Responsibilities:
  - Maintains a cache table keyed by full path (`__cache`).
  - Provides `getByPath(path)` to look up elements by full path.
  - Warms up the cache on construction using `PATHS`.
- Key methods:
  - `protected getByPath(path: string): UiScreen | UiElement | undefined`
  - `private __warmup(): void`

---

## Naming rules

- Prefixes bound to types:
  - `UiText` -> `uiText_...`
  - `UiImage` -> `uiImage_...`
  - `UiBox` -> `uiBox_...`
  - `UiScrollBox` -> `uiScrollBox_...`
  - `UiInput` -> `uiInput_...`
- Base naming uses the last path segment; on conflicts, fall back to full path; if still conflicting, append `_2/_3/...`.
- Supports Chinese/Unicode; invalid characters are replaced with underscores while ensuring a valid first character.

---

## Best practices

- Store screen names in constants to avoid typos:
  ```ts
  const SCREEN_HOME = "home" as const;
  const home = find(SCREEN_HOME);
  ```
- Add a null-check for `find()` returns to gracefully degrade when a screen is not mounted at runtime.
- If you want to tweak generation style (comments, blank lines, indentation, export style), do it in the generator layer rather than editing generated outputs.

---

## FAQ

- Q: I passed a screen name and the type is `never`?
  - A: The screen name is not in the type map—likely the cache hasn’t been regenerated or the name is misspelled. Please ensure the screen name and generated outputs are up to date.

- Q: Runtime returns `undefined`?
  - A: The screen was not found at instantiation. Ensure the screen exists/is mounted; add null-checks at call sites.

- Q: How to find the real path behind a getter?
  - A: Open the corresponding `UiIndex_<Screen>.ts` and inspect `static PATHS` or the `@description` in getter comments.

---

## Feedback

If you have requests for naming conventions, directory structure, comment templates, or import styles, please send feedback. We’ll iterate on the generator and type hints to improve the experience.
