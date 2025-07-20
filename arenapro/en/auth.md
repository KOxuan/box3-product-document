# ArenaPro Quick Authorization Plugin Guide

First, you need to install the Tampermonkey plugin manager. For detailed installation instructions, please refer to the [Tampermonkey Installation Documentation](https://docs.dao3.fun/arena/plugIns/tampermonkey.html).

After installation, please install the ArenaPro Quick Authorization plugin via the following link: [ArenaPro Authorization Plugin](https://static.pgaot.com/Assets/js/arenapro-auth.user.js).

## Verify Installation

Once the plugin is successfully installed, visit this link: [https://dao3.fun/arenapro/auth](https://dao3.fun/arenapro/auth)

If the page automatically redirects to `http://localhost:25315/ap-auth/callback` or to `https://dao3.fun/login`, it means the plugin has started correctly. If it does not redirect, please check if the plugin is installed and enabled correctly.

## How to Use

### Quick Authorization Flow

1.  On the plugin login interface, click the "Quick Authorize" link.

    ![Quick Authorize Entry](/QQ20250415-192109.png)

2.  Authorization process:

    - If you are already logged into the platform: The system will automatically complete the authorization. You just need to close the authorization window.
    - If you are not logged in: Please log in to the platform as usual, and the system will automatically complete the subsequent authorization process.

    ![Auto-authorization Complete](/QQ20250415-192208.png)

## Frequently Asked Questions

- **Plugin not working**: Please ensure the Tampermonkey plugin is enabled and try refreshing the page.
- **Authorization failed**: Check your network connection or try logging into the Box3 platform again.

## Comparison of Advantages

| Authorization Method | Steps Required          | Security | Convenience |
| -------------------- | ----------------------- | -------- | ----------- |
| Manual Authorization | Multi-step copy-pasting | High     | Low         |
| Quick Auth Plugin    | One-click completion    | High     | High        |
