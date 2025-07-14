# Tutorial: One Codebase, Two Packages: "Standard Edition" and "Event Edition"

## Your Map is Having a "Christmas Event"!

Imagine your map "Dream Town" is very popular. To celebrate Christmas, you're planning to launch a "Christmas Special Edition." This version needs:

- A brand new UI with falling snow.
- A special "Find Santa" quest.
- The features of the standard version need to be temporarily disabled.

The first problem you encounter is: **How do I do this?**

- **Option A (The dumbest way)**: Copy the entire project, rename it to `DreamTown-ChristmasEdition`, and then make extensive changes in the new project.

  - **Consequence**: After the event, you have to manually merge the new features back into the original project, a painful and error-prone process. Maintaining two projects at the same time doubles the cost.

- **Option B (The smart way)**: Use only **one set of code**. By modifying the configuration, you can have it package two different files: `standard.js` and `christmas.js`.

This is exactly where ArenaPro's "multi-entry" or "code splitting" feature comes in. It allows you to build different versions from the same source code, like magic.

## Unveiling the Magic: `dao3.config.json`

All our "magic" happens in one core configuration file: `dao3.config.json`.

In this file, there is a key setting called `outputAndUpdate`. It's like a "build blueprint" where you can define all the versions you want to package.

### Practical Exercise: From One Version to Two

Let's say your project's original directory structure is simple:

```
src/
├── server.ts  # Server-side main entry
└── client.ts  # Client-side main entry
```

The configuration in `dao3.config.json` might look like this:

```jsonc
// dao3.config.json
{
  "ArenaPro": {
    "file": {
      "outputAndUpdate": [
        // --- Blueprint 1: Standard Edition ---
        {
          "name": "index.js", // Packaged file name
          "serverEntry": "src/server.ts",
          "clientEntry": "src/client.ts"
        }
      ]
    }
  }
}
```

Now, we want to add the "Christmas Edition":

**Step 1: Create a dedicated code file for the Christmas Edition**

Create a new `xmas/` folder inside the `src/` directory to store all the code specific to the Christmas event.

```
src/
├── server.ts
├── client.ts
└── xmas/       # Christmas event code
    ├── server.ts  // Server-side entry for Christmas edition
    └── client.ts  // Client-side entry for Christmas edition (e.g., loading snow UI)
```

In `xmas/client.ts`, you can write completely different UI logic.

**Step 2: Add the new version to the "blueprint"**

Now, let's modify `dao3.config.json` and add the build blueprint for the "Christmas Edition" to the `outputAndUpdate` array.

```jsonc
// dao3.config.json
{
  "ArenaPro": {
    "file": {
      "outputAndUpdate": [
        // --- Blueprint 1: Standard Edition (unchanged) ---
        {
          "name": "index.js",
          "serverEntry": "src/server.ts",
          "clientEntry": "src/client.ts",
          "description": "The regular version of 'Dream Town'"
        },
        // --- Blueprint 2: Christmas Edition (this is new) ---
        {
          "name": "xmas.js", // New packaged file name
          "serverEntry": "src/xmas/server.ts", // Points to the Christmas edition entry
          "clientEntry": "src/xmas/client.ts", // Points to the Christmas edition entry
          "description": "The Christmas Special Edition of 'Dream Town', including special quests and UI"
        }
      ]
    }
  }
}
```

**Tip**: It is highly recommended to add a `description` field for each version. This description will be displayed when you package, helping you distinguish which version to build.

## How to Package the Version You Want?

Once the blueprints are configured, the next steps are very simple.

- If you select "index.js", it will only package the standard version.
- If you select "xmas.js", it will only package the Christmas version.

You no longer have to worry about getting them mixed up!

### In HMR (Hot Module Replacement) Mode

HMR mode is even smarter. When you start HMR, it will **monitor and compile all the versions you have defined simultaneously**.

- If you modify `xmas/client.ts` locally, HMR will immediately recompile the latest `xmas.js`.
- At this point, if you have a map open in the Box3 editor that is configured to load `xmas.js`, the game screen will be automatically hot-updated.

You don't need to do any manual switching; HMR will automatically handle the synchronization based on the file required by the map you are currently editing.

## Summary

By using the `outputAndUpdate` configuration, you have mastered a powerful ability:

- **Single Codebase, Multiple Outputs**: Maintain multiple versions like standard, event, and test versions with the same set of code.
- **Separation of Concerns**: The specific logic for different versions is clearly separated into different folders, making the code structure clearer.
- **Safe Building**: Packaging through a graphical selection box effectively avoids mistakes that might be caused by manual configuration changes.

Now, you can confidently prepare various event versions for your map!
