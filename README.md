# `circleci-bin`

[![CircleCI](https://circleci.com/gh/psirenny/circleci-bin/tree/master.svg?style=shield)](https://circleci.com/gh/psirenny/circleci-bin/tree/master)
[![Greenkeeper badge](https://badges.greenkeeper.io/psirenny/circleci-bin.svg)](https://greenkeeper.io/)

CircleCI local command line tool distributed as a node module.

## Motivation

This allows you to include the CircleCI binary in your project/application
without requiring users to separately install it on their system.

## Installation

Install the node module to include the CircleCI binary in your project:

```bash
npm install circleci-bin --save-dev
```

or:

```bash
yarn add circleci-bin --dev
```

## Usage

Add and reference the `circleci` binary from your package.json scripts:

```json
{
  "scripts": {
    "circleci": "circleci"
  }
}
```

Run a command from the shell:

```bash
yarn circleci --help
```

or:

```bash
npm run circleci --help
```
