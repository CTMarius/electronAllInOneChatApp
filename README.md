# All-In-One Chat App

An Electron desktop application that combines multiple chat platforms into a single interface. Access WhatsApp, Skype, Facebook Messenger, and Discord web versions in one place.

## Features

- Single window interface for multiple chat platforms
- Supports:
  - WhatsApp Web
  - Skype Web
  - Facebook Messenger
  - Discord

## Installation

1. Clone this repository
2. Install dependencies:
```sh
npm install
```
3. Start the application:
```sh
npm start
```

## Building

To create installable packages:

```sh
npm run make
```

This will generate platform-specific installers in the `out/make` directory.

## Development

- Main process: `main.js`
- UI: `index.html` and `style.css`
- Chat platform integration: `functions.js`

## Requirements

- Node.js
- Electron 19.0.0
- Internet connection for accessing chat services

## License

ISC
