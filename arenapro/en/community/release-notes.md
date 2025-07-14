# 🚀 Release Notes

The ArenaPro Creator project was officially launched on **July 1, 2024**. We are committed to providing Box3 creators with a professional, efficient, and modern local development workflow.

Here, you can see every step we've taken from public beta to the official release.

## ✨ Major Update Milestones

- **Project Kick-off (2024-07-01):**
  ArenaPro Creator was officially established to create a professional local development workflow.

- **First Public Beta (V0.3.0, 2024-07-31):**
  The extension began public testing on the VSCode Marketplace, taking the first step towards community involvement.

- **Official Renaming (V0.4.0, 2024-08-12):**
  The extension was renamed to **ArenaPro Creator**, establishing its brand identity.

- **Development Experience Leap (V0.6.4 & V0.7.0):**
  **HMR** was introduced on **2024-10-24**, followed by a **full Debugger feature** on **2024-11-01**, leading to a quantum leap in development efficiency and code quality.

- **Resource Management Automation (V0.9.4, 2024-12-21):**
  Achieved one-click synchronization of Box3 map resources to the project and **automatic generation of type declarations**, bridging the gap between the game engine and local code.

- **Official Release (V1.0.0, 2025-01-10):**
  After nearly six months of iteration and public testing, the first official version was released, marking the project's entry into a stable phase.

- **ECS Architecture Support (V1.1.3, 2025-03-21):**
  Added full support for the **ECS (Entity-Component-System) architecture**, guiding creators to adopt more modern game development patterns.

- **AI Empowerment (V1.2.0, 2025-04-12):**
  Introduced the **MCP Tool** for the first time, exploring the deep application of AI in the game development workflow and ushering in an era of intelligent assisted creation.

## 2025

### July

#### V1.3.0 (2025-07-11)

- 🛠 **Arena File Reading:** Fixed an issue where the `dao3.config.json` file could not be read correctly in certain scenarios, causing functional abnormalities.
- 🚀 **Project Guide System:** Introduced an intuitive step navigation feature to help creators quickly locate their current operation progress.
- 🔐 **Login Experience:** Refactored the extension login interface with a more intuitive interactive design, significantly improving the creator authentication experience.

#### V1.2.8 (2025-07-10)

- 🌟 **ArenaUI Resources:** Added a UI path type to optimize client-side UI element queries and enhance resource retrieval functions.

### June

#### V1.2.7 (2025-06-10)

- 🌟 **Visual Script Dependency Graph:** Added a feature to view the entry file script dependency graph for both client and server.

### May

#### V1.2.6 (2025-05-12)

- 🚀 **ChatGI-PT:** Added an AI feature to evaluate the quality of all scripts with one click.

### April

#### V1.2.5 (2025-04-22)

- 🌟 **Node.js:** Optimized the detection of the Node.js environment, with support for one-click installation.
- 🚀 **URI:** Adapted URI to call extension commands.

#### V1.2.2 -> V1.2.4 (2025-04-15)

- 🚀 **MCP Tool:** Added a command to call the ChatGI-PT knowledge base.
- 🚀 **ChatGI-PT:** Optimized the dialogue interface.

#### V1.2.1 (2025-04-13)

- 🚀 **ChatGI-PT:** Added large models such as claude-3-7-sonnet-20250219 and GPT-4o, allowing creators to choose.
- 🚀 **MCP Tool:** Optimized some function callback messages.

#### V1.2.0 (2025-04-12)

- 🚀 **MCP Tool:** Some extension functions now support MCP calls, allowing AI to complete your work.

#### V1.1.8 -> V1.1.9 (2025-04-04)

- 📦 **Build:** Optimized webpack packaging configuration to support formats like tsx by default.
- 📦 **Build:** Unified the `alias` configuration for HMR and full compilation, using the HMR version configuration for both.

### March

#### V1.1.7 (2025-03-26)

- 🔧 **Optimized HMR Compilation:** Optimized the HMR compilation process to ensure it can be stopped correctly on Mac and Linux systems.
- 🌟 **Node.js:** Added detection for the Node.js environment, providing a prompt if it is not installed.

#### V1.1.3 -> V1.1.6 (2025-03-23)

- 🌟 **ECS Architecture:** When the `file.typescript.[side].ECS` property is configured, creating a file will automatically write a component template.
- 🌟 **ECS Architecture:** When the `file.typescript.[side].ECS` property is configured, components will have real-time reference hints.

#### V1.0.1 -> V1.1.2 (2025-03-16)

- 🚀 **ChatGI-PT:** Integrated Deepseek R1 for deeper thinking and higher quality answers.
- 📦 **Box3 npm Package:** When installing, it defaults to the latest package version.
- 🌟 **Fixes:** Fixed a series of bugs.

### January

#### V1.0.0 - Official Release (2025-01-10)

- 🌟 **Optimized Data Space Resources:** Fixed an issue where non-string inputs were still written in string format.

## 2024

### December

#### V0.9.9 (2024-12-30)

- 🌟 **Optimized Data Space Resources:** Merged view/modify value functions, supporting saving modifications in the file.
- 🌟 **Optimized Data Space Resources:** Optimized the data space list display to show a prompt when empty.
- 📦 **Type Declaration Files:** The Box3 API type declaration file now supports viewing update differences.
- 🚀 **Link Map:** Synchronize map resources at the same time as linking the map.

#### V0.9.8 (2024-12-28)

- 🌟 **Optimized Data Space Resources:** Fixed an error when viewing boolean/numeric type data.
- 🌟 **Optimized Data Space Resources:** Added a feature to view key-value pair data of the current data space.

#### V0.9.6 (2024-12-22)

- 🌟 **Sync Map Resources:** Added a client-side `GameAssets.d.ts` file, keeping it in sync with the server-side.
- 🌟 **Sync Map Resources Shortcut:** Press `Alt+Y` to sync map resources to local with one click.

#### V0.9.5 (2024-12-21)

- 🌟 **Sync Map Resources:** Fixed a type declaration error caused by empty resources.

#### V0.9.4 (2024-12-21)

- 🌟 **Sync Map Resources:** In dao3Cfg, you can now sync map resources to the project with one click, generating code snippets and type declaration files.

#### V0.9.3 (2024-12-20)

- 🚀 **Extension Configuration:** Optimized extension configuration to automatically filter non-plugin settings.
- 🌟 **Optimized Resources:** Reduced unnecessary large files to decrease the extension size.

#### V0.9.2 (2024-12-13)

- 🔧 **Optimized HMR Compilation:** Fixed an issue where modifying shared code resulted in multiple bundled files but only the first was uploaded to Box3.
- 🌟 **User Menu:** Optimized the display of the user center tool menu and fixed an issue where a success prompt did not appear upon successful login.
- 🌟 **User Menu:** Optimized the login order for Box3 accounts, allowing login in any order.

#### V0.9.1 (2024-12-10)

- 📦 **Box3 npm Package:** Optimized the Box3 NPM package list to be a searchable display.
- 🚀 **Box3 npm Package Shortcut:** Press `Alt+N` to view the Box3 NPM package list with one click.

#### V0.9.0 (2024-12-10)

- 🔧 **Optimized HMR Compilation:** Added a code splitting feature to support listening to multiple entry files simultaneously, bundling them into different files, and uploading them to the Arena script editor.
- 📦 **Type Declaration Files:** Silently update `GameAPI.d.ts` and `ClientAPI.d.ts` on extension startup, no longer showing a pop-up.

#### V0.8.9 (2024-12-08)

- 🔧 **Optimized UI Interface:** Optimized the type constraint issue when inserting paths into js files with one click.

#### V0.8.8 (2024-12-05)

- 🔧 **Optimized Audio Resources:** Added a feature to copy a direct URL link for audio.

#### V0.8.7 (2024-12-02)

- 🔧 **Optimized UI Interface:** Fixed an issue where inserting a path into a non-js file would insert ts-formatted code.

### November

#### V0.8.6 (2024-11-29)

- 🔧 **Optimized HMR Compilation:** Fixed an issue where importing other ts files caused webpack to be unable to read the path.
- 🌟 **New User Tutorial:** Updated the content of the new user tutorial.

#### V0.8.5 (2024-11-27)

- 🔧 **Box3 npm Package:** When the `file.npmPackage` property is configured, the build on the other side will be stopped to speed things up.
- 📦 **Color Visualization:** Added a color visualization selection feature for `Color` in UiText rich text.

#### V0.8.4 (2024-11-26)

- 🔧 **Box3 npm Package:** Entry files can be quickly configured in the `package.json` file.
- 🔧 **Optimized HMR Compilation:** Force kill the process when the server ends to fix issues with cached compilation.

#### V0.8.3 (2024-11-25)

- 🌟 **Icons:** Differentiated icons for full compilation and HMR compilation.
- 🔧 **Optimized HMR Compilation:** Optimized the HMR service with real-time status bar reminders during HMR packaging + uploading.
- 🔧 **Full Compilation:** Optimized the experience; quick action buttons will pop up if map information is not configured or if the user is not logged in.
- 🌟 **Arena Resource Icons:** Adapted icon images for light-colored backgrounds.

#### V0.8.2 (2024-11-21)

- 🌟 **Arena Model Resources:** Added a pagination option for models.
- 🌟 **Arena Model Resources:** Added three sorting methods for models: by creation time descending, by name, and by modification time descending.
- 🌟 **Arena Resources:** Synced icons with Box3's images for a more intuitive and clear look.

#### V0.8.1 (2024-11-20)

- 🔧 **webpack Configuration:** Fixed an error where the file could not be read if the `file.typescript.[side].webpack` property was not configured.

#### V0.8.0 (2024-11-20)

- 🔧 **Full Compilation:** Optimized full compilation prompts, allowing one-click opening of dual-end ts, wp configuration, entry files, and map ID configuration.
- 🔄 **Optimized dao3Cfg Configuration Prompts:** The `file.typescript.[side].base` and `file.typescript.[side].webpack` properties have been deprecated.

#### V0.7.9 (2024-11-19)

- 🚀 **Voxel Cheatsheet Shortcut:** Press `Alt+B` to query the voxel cheatsheet with one click.
- 🔧 **Optimized HMR Compilation:** Optimized HMR server status prompts with the addition of a process PID for a more intuitive view of the HMR server status.
- 🔧 **Full Compilation:** Optimized full compilation prompts, allowing one-click configuration of compilation information.

#### V0.7.8 (2024-11-17)

- 🌟 **Arena Store Resources:** Added map store resources to quickly insert product IDs into the editor.
- 🌟 **Arena Player Skin Resources:** Added map player skin resources, allowing one-click insertion of skin names or partial skins.
- 🌟 **Arena Voxel Cheatsheet Resources:** Added a map voxel cheatsheet resource for one-click searching of voxels and insertion of voxel IDs or names.

#### V0.7.7 (2024-11-15)

- 🌟 **Code Snippets:** Optimized the storage method for code snippet files for easier hot-updating of snippets. Located at `.vscode/dao3-ap.code-snippets` in the project.

#### V0.7.6 (2024-11-14)

- 🔧 **Single File Debugger Mode:** Added native Node.js debugging for typescript files.
- 🌟 **Code Snippets:** Added an engine API code snippet feature for quick code configuration.

#### V0.7.5 (2024-11-11)

- 🌟 **Arena Image Resources:** Fixed an issue where image resources were not in sync with the map.
- 🌟 **Arena Audio Resources:** Fixed an issue where audio resource sizes could not be displayed.

#### V0.7.4 (2024-11-08)

- 🔧 **Optimized HMR Compilation:** Added a pop-up reminder for Ts script errors during HMR runtime and a logging configuration.

#### V0.7.3 (2024-11-05)

- 🔧 **Optimized HMR Compilation:** Optimized HMR compilation errors to automatically write to a log and provide a persistent pop-up reminder.

#### V0.7.2 (2024-11-04)

- 🌟 **New dao3Cfg Configuration:** Added a `developmentAll` field to the configuration architecture to set the global development mode.

#### V0.7.1 (2024-11-01)

- 🌟 **Instant Upload of js Files:** Hardcoded the file suffix to `.js` to reduce the chance of editor crashes.
- 🔧 **Single File Debugger Mode:** `.cjs,.mjs` before uploading, check if it is a legal runtime module.

#### V0.7.0 (2024-11-01)

- 🚀 **ChatGI-PT:** Fixed the issue where the code carried by quick questions was incomplete, and the quick fix display method.
- 🔧 **Remote Debugger Mode:** [Engine to be connected] Added Arena script remote debugging function.
- 🔧 **Bundled File Debugger Mode:** Added Arena bundled script debugging function, currently does not support debugging of Arena API related code.
- 🔧 **Single File Debugger Mode:** Added Arena single script debugging function, currently does not support debugging of Arena API related code.
- 🚀 **Single File Debugger Mode Shortcut:** Press `Alt+D` to debug the current js file with one click.
- 🌟 **New Module Support:** Default support for debugging, complete/HMR compilation.ts, .js, .mjs (ECMAScript), .cjs (CommonJS) module files.
- 🔄 **Compile Upload:** Supports configuring whether scripts are automatically uploaded to the map after compilation. Default to allowed.

### October

#### V0.6.6 (2024-10-29)

- 🌟 **Request Resources:** Added a request resource prompt for easier viewing of requesters.
- 📦 **Type Declaration Files:** When manually modifying `GameAPI.d.ts` and `ClientAPI.d.ts` files, a prompt will pop up asking not to modify.

#### V0.6.5 (2024-10-27)

- 🚀 **Optimized HMR Compilation:** Added restart and stop HMR server functions.
- 🌟 **Instant Upload of js Files:** After opening a js file, click the upload button in the top right corner to synchronize to the Arena map.
- 🚀 **Upload js Files Shortcut:** Press `Alt+X` to upload the current file with one click.

#### V0.6.4 (2024-10-24)

- 📦 **Build Prompts:** Updated build-related features and UI prompts.
- 🚀 **Optimized HMR Compilation:** Added HMR (module hot replacement) functionality, which can build and upload modified files in real-time to the Arena script editor.

#### V0.6.3 (2024-10-17)

- 📦 **Color Visualization:** Optimized selection method.

#### V0.6.2 (2024-10-16)

- 📦 **Color Visualization:** Added a color visualization selection for Vec3 class.

#### V0.6.1 (2024-10-15)

- 📦 **Color Visualization:** Added a color visualization selection for GameRGB(A)Color class.

#### V0.6.0 (2024-10-04)

- 📦 **Optimized dao3Cfg Configuration Prompts:** Optimized `outputAndUpdate` configuration, supporting string and object configurations.
- 🌟 **Arena Data Space:** Added data space key display and pagination optimization, fixing data storage list display issues.

### September

#### V0.5.9 (2024-09-30)

- 🚀 **ChatGI-PT:** Fixed some functions still having dialog failure issues.
- 🌟 **Arena Data Space:** When the data space is empty, you can add data prompts.

#### V0.5.8 (2024-09-29)

- 🚀 **ChatGI-PT:** Fixed the issue where the account was still logged in and dialog failed.

#### V0.5.7 (2024-09-28)

- 🌟 **Arena Audio:** Supports viewing audio data and synchronizing it to the map project in shared mode.

#### V0.5.6 (2024-09-27)

- 🌟 **Arena Data Space:** Supports visualizing and modifying key-value pair data of the data space.

#### V0.5.5 (2024-09-17)

- 🔄 **Type Declaration Files:** Detected `dts` replaced with Gitee platform, synchronizing repositories while improving access speed.

#### V0.5.4 (2024-09-14)

- 🌟 **ArenaUi Interface:** Fixed an issue where the path insertion in the UI interface caused an error.

#### V0.5.3 (2024-09-14)

- 🌟 **ArenaUi Interface:** Supports synchronizing shared UI interfaces in the current map project, obtaining relevant elements more quickly and reducing manual input steps.
- ❓ **Plugin Welcome Interface:** Improved the tutorial content of the plugin welcome interface.
- 🌟 **Other Optimizations:** Optimized some issues.

#### V0.5.2 (2024-09-06)

- 🌟 **Extend Map:** Optimized visual communication after selecting a map.
- 🌟 **Compile Upload:** Optimized the logic of compiling configuration reading, showing faster.

#### V0.5.1 (2024-09-06)

- 🌟 **Arena Resource Manager:** Fixed the issue where the Arena Resource Manager started under a non-Arena project.

#### V0.5.0 (2024-09-06)

- 📦 **Extend Map List:** Optimized the auto-refresh list when logging in/out, and moved it under the Resource Manager.
- 📦 **Extend Map List:** Display map release status, do not display the reason if not passed.
- 🚀 **Compile Shortcut:** Press `Alt+Q` to compile the entire project with one click and upload it to the Arena script editor.
- 🚀 **Resource Shortcut:** Press `Alt+A` to display the Arena Resource Manager with one click.
- 🌟 **Arena Resource Manager:** Supports synchronizing shared models/images in the current map project, which will be supported later for audio resources.
- 🌟 **Arena Image Upload:** Supports batch uploading images, synchronizing them to the map project in shared mode.
- 🌟 **Arena Temporary Channel Preview:** Supports viewing existing temporary channels, clicking on the channel can view the player IDs.
- 📦 **Build Project Reminder:** Added a build project reminder, when the entire project is built, the icon will show as a processing style, and the log will pop up automatically when an error occurs.
- ❓ **Plugin Welcome Interface:** Improved the tutorial content of the plugin welcome interface.

### August

#### V0.4.7 (2024-08-28)

- 📦 **Extend Map List:** Added an extended map list tree for easy access to different sub-maps.
- �� **Creation Icon:** Optimized the default issue of opening the creation side vsc built-in browser icon.

#### V0.4.6 (2024-08-25)

- 📦 **Compile Prompts:** Optimized the output style of compilation, added color output for better visibility.
- 🚀 **Compile Prompts:** Fixed the issue of appearing 2 prompt words during compilation.

#### V0.4.5 (2024-08-25)

- 📦 **Extend Map:** Fixed the BUG where sub-maps could not be selected.
- 🚀 **Login Token:** Paste JSON formatted user data, the program will automatically extract the Token.
- 🌟 **System Browser:** Added an option to open the creation side using the system browser.
- 🌟 **Upload Error Prompt:** Fixed the BUG where the error reason could not be displayed when uploading failed.

#### V0.4.4 (2024-08-19)

- 🌟 **Unimportant Optimizations:** Optimized some issues.

#### V0.4.3 (2024-08-18)

- 📦 **Optimized dao3Cfg Configuration Prompts:** Optimized prompt file access speed, added a brief description of the field.
- 🌟 **New User Tutorial:** Automatically jumps to the tutorial interface when the plugin is first installed, guiding creators to view the plugin usage documentation.

#### V0.4.2 (2024-08-17)

- 📦 **Custom Compilation Files:** Fixed a code coverage BUG caused by upload.

#### V0.4.1 (2024-08-16)

- 📦 **Custom Compilation Files:** Supports creators to define the names of files compiled and uploaded, meeting the needs of multiple scripts.

#### V0.3.9 -> V0.4.0 (2024-08-12)

- The extension was renamed to **ArenaPro Creator**

#### V0.3.8 (2024-08-12)

- 🚀 **ChatGI-PT:** Optimized the dialogue interface not to be displayed when calling related functions in an unlogged-in account.

#### V0.3.7 (2024-08-12)

- 🚀 **ChatGI-PT:** Added a custom configuration for the shortcut code icon to meet different user needs.
- 📦 **webpack:** Supports creators to customize `webpackCfg`.
- 🚀 **Plugin Settings:** Plugin settings are categorized for easier finding of corresponding settings.

#### V0.3.6 (2024-08-12)

- 🚀 **ChatGI-PT:** Optimized the display of the shortcut code icon, more beautiful.
- 🚀 **ChatGI-PT:** Optimized the display rules, the icon will not be displayed in the ts type declaration file.
- 🚀 **ChatGI-PT:** In the plugin settings, you can customize whether to display the shortcut code icon, click the account to enter the settings.
- 🌟 **Multiple Project References:** Solved the compilation failure issue caused by multiple projects referencing each other.

#### V0.3.5 (2024-08-12)

- 🚀 **ChatGI-PT:** Optimized the quick selection mechanism, displaying buttons above functions/classes/methods/interfaces, clicking which can trigger with one click.
- 🚀 **ChatGI-PT:** Optimized the issue where manual activation is required for the first time, now it can be automatically activated and automatically queried.
- 📕 **Quick API Documentation:** Select the code you want to search for, right-click or press `Alt+Q` to query the API documentation with one click.
- 📦 **Quick Map Configuration:** In the `dao3.config.json` file, an auxiliary button will appear above the map property, allowing for faster map configuration.
- 🌟 **Request Feedback:** Added a loading bar when requesting a network, informing the current program action.

#### V0.3.4 (2024-08-12)

- 🔄 **Type Declaration Files:** Every time VSCode editor ArenaPro-Ts project is opened, the background will trigger `.dts` automatic update without awareness, ensuring that the development environment is always in sync with the latest code prompt file.
- 🌟 **Custom Commands:** Provided a convenient deployment Ts scaffolding command, while adding custom commands to allow every creator to freely craft their own development tool.

#### V0.3.3 (2024-08-12)

- 🚀 **ChatGI-PT:** Optimized the quick selection shortcut to `Alt+Q`, making it more convenient to operate, and no longer triggered after losing focus, improving user experience.

#### V0.3.2 (2024-08-12)

- 🚀 **ChatGI-PT:** Optimized the click function trigger mechanism, changed to non-intrusive trigger, enhancing user experience, and supporting symbol additions, making it more functional.

#### V0.3.1 (2024-08-12)

- 📦 **npm:** Now temporarily configures each npm command to a domestic Tencent source, effectively reducing the timeout issue caused by network problems and speeding up development efficiency.

### July

#### V0.3.0 - Public Beta (2024-07-31)

- Accompanied by this version, the extension officially began **public testing** on the VSCode Marketplace.
