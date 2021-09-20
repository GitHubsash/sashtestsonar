# kf-sell-client-management
IC2.0 KF Sell Platform client management SPA

### Run
To run the project

Start local API server (optional, provides a dummy API):
```
npm run start-api-server
```

Run in local dev mode:
```
npm run dev-local
```

Run in local dev mode but use platform API server:

```
npm run dev-local-platform
```

### Build
To build the project

```
npm run build
```

### Static Server
Vite does not support customization of headers so we need to use express to serve up static files and apply headers if we want to do local security header testing. First, make sure the local API server is running, then run the following command:
```
start-app-and-static-server-dev-local
```

Changes to the client app will not trigger rebuilds, builds must be done manually. This can be done by using the following command:
```
npm run build
```

Another option would be to stop the server, then run the start command again.