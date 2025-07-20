# Cross-End Data Communication

:::warning
Server-side API Documentation: [ServerRemoteChannel](https://docs.dao3.fun/api/RemoteChannel/Server/)

Client-side API Documentation: [ClientRemoteChannel](https://docs.dao3.fun/api/RemoteChannel/Client/)
:::

## Improvement Details

:::tip
**Reason for Modification:**
In the original d.ts file provided by the officials, the communication interface for this API was uniformly declared as the `any` type.

However, in most cases, to ensure the consistency of the current communication message format, we have adopted generics for constraints, thereby improving code readability and checking accuracy.
:::

## Usage Guide

### Basic Usage

#### Client Sending Data to Server

![](/QQ20241022-195207.png)

#### Server Receiving Data

##### Without Type Constraints

![](/QQ20241022-195257.png)

##### With Type Constraints

![](/QQ20241022-195414.png)

## Best Practices

- It is recommended to always use type constraints during development.
- Ensure that the client and server use the same type definitions.
- Regularly check the API documentation for the latest updates.
