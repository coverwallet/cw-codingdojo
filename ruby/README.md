## Installation

### 1. Ruby version
This repository require ruby version 2.5.1, for that we recommend you to use rvm.

#### 1.1. Install rvm:
```
\curl -sSL https://get.rvm.io | bash
```
When process is done you need to restart your terminal.

#### 1.2. Install and use ruby version 2.5.1
```
rvm install 2.6.3
rvm use 2.6.3
```

### 2. Install Ruby gems
```
gem install bundler
bundle install
```

## Run tests
```
rspec
```