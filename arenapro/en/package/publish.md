# Uploading Your Box3 npm Package

To initialize an npm package project suitable for Box3 and upload it to the `dao3fun` organization, you can follow these steps:

Before you begin, you need to have Node.js installed.

### Initializing an npm Package Project

1.  **Create a Project Folder**:

    - Choose a suitable location and create a new folder to serve as the project's root directory. The folder name should not conflict with existing npm package names to ensure uniqueness when uploading.

2.  **Initialize the Project**:

    - Open a terminal or command-line tool and navigate to the project folder.
    - Run the `npm init` command and follow the prompts to enter basic project information, such as the project name, version, description, entry file, test command, etc. You can also use the `npm init -y` command to generate a `package.json` file with default values.
      ::: info
      [package.json Configuration Guide](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)
      :::

3.  **Write the Project Code**:

    - Create the necessary files and directory structure within the project folder and write your project's code.
    - Ensure that the project's entry file (usually specified in the `main` field of `package.json`) is correct.

4.  **Add Dependencies**:

    - If your project depends on other npm packages, you can install them using the `npm install <package-name>` command.
    - Installed dependencies will be automatically added to the `dependencies` or `devDependencies` field in `package.json`.

5.  **Export Code for Others to Use**:
    - If you want others to be able to use your code, exporting it is an essential step.
    - When exporting, please follow the `ES6` module specification and use the `export` keyword to export the required content.

### Uploading to the npm Organization

1.  **Log in to Your npm Account**:

    - In the terminal or command-line tool, run the `npm login` command and enter your npm account's username, password, and email to log in.
    - If it's your first time logging in, npm will ask you to verify your email.

2.  **Apply to Join the npm Organization**:

    - You can find an administrator in the QQ group `492953731` to apply to join the `dao3fun` organization.
    - Only after joining can you publish packages to this organization on npm.

3.  **Publish the npm Package**:

    - In the project folder, run the `npm publish --access=public` command to publish the project to npm.
    - If it's your first time publishing to this organization, npm may ask you to confirm some additional information or permissions.
    - After a successful publication, you can search for your package on the npm website and view its details.

4.  **Verification and Updates**:
    - After publishing, you can install and use your npm package in other projects with the `npm install <your-package-name>` command.
    - If you need to update the package, you can modify the code and the version number in `package.json` within the project folder, and then run the `npm publish` command again to update it.

### Notes

- Before publishing an npm package, please ensure that your project code and `package.json` file are ready and meet npm's publishing requirements.
- Please note that the project code must run correctly in the Box3 Pro editor before it can be published to the organization.
- When publishing an npm package, please follow npm's naming and versioning conventions to avoid conflicts or confusion with other packages.
