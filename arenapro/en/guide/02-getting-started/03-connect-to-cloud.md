# Step 3: Connect to the Cloud

Your local project has been created. Now, we must complete the most critical step: linking it to your Box3 account and a cloud map. Only then can you upload your written code to the game.

This process is divided into two steps: **① Log in to your account** -> **② Link the map**.

## 1️⃣ Log in to Your Box3 Account

We offer two login methods. We strongly recommend all users use the first "one-click authorization" method, as it is simpler and more secure.

### Method 1: One-Click Authorization Login (Strongly Recommended)

This is the fastest and easiest way to log in. It uses a browser extension to complete the authorization securely, so you don't have to manually copy any information.

1.  **Install the Browser Extension**: To allow VS Code to communicate securely with your browser, you first need to install the "Box3 Intercom" extension.

    - **[Install Authorization Extension](/en/auth)**

1.  **Launch the Login Window**

    - In the VS Code status bar at the bottom right, find and click the **orange** `Arena` icon.
    - Select `Login to Box3 Account` from the pop-up menu.

1.  **Authorize in Browser**: VS Code will automatically open your browser and redirect to the authorization page. Click "Authorize Link" to proceed.
1.  **Login Successful**: Return to VS Code. You will see the `Arena` icon in the bottom right status bar turn **green** and display your nickname.

![Login Successful](/QQ20241128-220642.png)

### Method 2: Manual Copy-Paste

1.  **Launch the Login Window**

    - In the VS Code status bar at the bottom right, find and click the **orange** `Arena` icon.
    - Select `Login to Box3 Account` from the pop-up menu.

2.  **Get User-Agent**

    - In your browser, open this link: [https://passer-by.com/browser/](https://passer-by.com/browser/)
    - **Copy the entire** `User-Agent` string displayed on the page.
    - ![Demonstration of getting User-Agent](https://static.codemao.cn/pickduck/r1MiBddxkg.gif?hash=FnDE12EtzYOF85UdIFU2tGZrPr-B)

3.  **Get Login Token**

    - **Using the same browser**, make sure you are logged into the Box3 official website.
    - Open this link: [https://code-api-pc.dao3.fun/auth/user](https://code-api-pc.dao3.fun/auth/user)
    - The page will display JSON data. **Copy it completely**.
    - ![Demonstration of getting Token](https://static.codemao.cn/pickduck/Hkyxvu_ekg.gif?hash=FmIsFcjEF_1YO2HVd4xDNFZDT3pl)

4.  **Login Successful**: Return to VS Code. You will see the `Arena` icon in the bottom right status bar turn **green** and display your nickname.

![Login Successful](/QQ20241128-220642.png)

## 2️⃣ Link an Extended Map

Once you've successfully logged into your account, you can bind this project to one of the maps under your name.

1.  **Launch the Linking Wizard**: In VS Code, press `F1`, then type and select the `Project Link Map Configuration` command.
2.  **Select a Map**: VS Code will immediately show a list of all available **Extended Maps** under your account.
    - Choose the target map you want to link from the list.
    - If the map has multiple sub-maps, a second-level list will appear for you to select a specific sub-map.
3.  **Link Successful**: After selection, the plugin will automatically write the map information into the project's configuration file (`dao3.config.json`).

![Select a target map to link](/QQ_1721015607139.webp)

:::warning
**💡 Important Note**
ArenaPro only supports use in [`Extended Map`](/en/authority/expandMap) mode. If you do not have an extended map, please create one on the Box3 official website first.
:::

## ✅ Connection Successful

At this point, your local project is fully linked with the cloud map! All preparations are complete.

Now, let's officially start the exciting part: coding. Please continue to the next chapter: **[HelloWorld: Your First ArenaPro Program](../03-basic-tutorial/01-hello-world-tutorial.md)**.

---

You have completed the ArenaPro quick start guide. You can now move on to the next tutorial to start real coding practice.
<br/>
<br/>
<br/>
