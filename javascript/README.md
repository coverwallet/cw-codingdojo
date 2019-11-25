## Installation

### 1. Node

#### 1.1. Install vnm:
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```
When process is done you need to restart your terminal.

Verify that nvm is correctly installed by running:
```
nvm --version
```

#### 1.2. Install and use node version 10
```
nvm install node 10
nvm use 10
```

### 2. Install dependencies
```
npm install
```

## Run tests
```
npm run test
```