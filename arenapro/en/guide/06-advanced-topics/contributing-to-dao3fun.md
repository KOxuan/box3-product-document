# 🚀 How to Contribute to the `@dao3fun` Organization

The `@dao3fun` organization aims to gather and manage the carefully crafted Box3 npm packages from various creators. By simply searching for `@dao3fun` on npmjs, you can easily find all npm packages related to Box3.

<div style="border-left: 4px solid #3498db; padding-left: 15px; margin: 15px 0;">
<p><strong>💡 Tip:</strong> Joining the official organization can increase the credibility and exposure of your component library, allowing more Box3 map creators to discover and use your work.</p>
</div>

## 🎯 Purpose of Contribution

| Goal                          | Description                                                                   |
| :---------------------------- | :---------------------------------------------------------------------------- |
| **📊 Easy Management**        | Centralize the management of Box3-related npm packages to improve efficiency. |
| **🔍 Convenient Search**      | Allow users to quickly find the Box3 npm packages they need.                  |
| **🛡️ Avoid Naming Conflicts** | Effectively avoid package naming conflicts through the organization prefix.   |
| **👁️ Intuitive Recognition**  | Allow users to instantly recognize that this is a Box3-related npm package.   |

## 📝 Contribution Process

### 1️⃣ Log in to your npm account

```bash
# Log in to your npm account in the terminal
npm login
```

1.  Run the `npm login` command in your terminal or command-line tool.
2.  Follow the prompts to enter your npm username, password, and email.
3.  If it's your first time logging in, npm may ask you to verify via email.

:::tip
**💡 Tip**: If you don't have an npm account, you can register for one at [npmjs.com](https://www.npmjs.com).
:::

### 2️⃣ Apply to Join the Organization

<div style="border-left: 4px solid #f39c12; padding-left: 15px; margin: 15px 0;">
<p><strong>📢 How to Apply:</strong></p>
<ol>
  <li>Contact an administrator through the QQ group <code>492953731</code>.</li>
  <li>Apply to join the <code>@dao3fun</code> organization.</li>
  <li>Once you've successfully joined, you will have permission to publish npm packages under this organization.</li>
</ol>
</div>

### 3️⃣ Publish an npm Package

| Step                        | Detailed Instructions                                                    |
| :-------------------------- | :----------------------------------------------------------------------- |
| **Package Name Convention** | Prefix with `@dao3fun`, e.g., `@dao3fun/your-package-name`               |
| **Publish Command**         | Run `npm publish --access=public` in the project root directory          |
| **Confirm Publication**     | You may need to confirm additional information for the first publication |
| **Verify Result**           | Search for and view the package details on the npm website               |

```bash
# Publish the package to the @dao3fun organization
npm publish --access=public

# Example of successful publish output
# + @dao3fun/your-package-name@1.0.0
```

:::warning
**⚠️ Note**: Before publishing, ensure that the `name` field in your `package.json` file is correctly set to the `@dao3fun/your-package-name` format, and the `version` field complies with semantic versioning specifications.
:::

### 4️⃣ Verification and Updates

| Action                           | Detailed Steps                                                                                                                                                  |
| :------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **🧪 Installation Verification** | • Run `npm install @dao3fun/your-package-name` in another project <br> • Import and use your package <br> • Verify that the functionality works correctly       |
| **🔄 Package Update**            | • After modifying the code, increment the version number in `package.json` <br> • Follow semantic versioning (major.minor.patch) <br> • Run `npm publish` again |

## 📊 Contribution Requirements

To ensure that packages under the `@dao3fun` organization maintain high quality, we have the following requirements for contributions:

| Requirement Category          | Description                                                                                                                   |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| **🧩 Practicality**           | The package should provide practical functionality and solve real problems in Box3 map development.                           |
| **📚 Complete Documentation** | The package should include a comprehensive `README.md`, including installation methods, usage examples, and API descriptions. |
| **🧪 Thorough Testing**       | The package's functionality should be tested in multiple scenarios before publication to ensure stability.                    |
| **🔄 Continuous Maintenance** | Commit to continuously updating and maintaining the package, promptly fixing bugs and security issues.                        |

:::tip
**💡 Suggestion**: Regularly check out other packages under the `@dao3fun` organization to stay informed about the latest development trends and best practices. This will help you develop better component libraries.
:::

We look forward to seeing your contributions and building a stronger, more prosperous ArenaPro community together!

<br/>
<br/>
<br/>
