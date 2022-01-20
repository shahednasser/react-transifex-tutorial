# Code for How to Internationalize (i18n) a React App with Transifex

Code for How to Internationalize (i18n) a React App with Transifex Tutorial

## Prerequisites

You need to [create a Transifex account](https://www.transifex.com/signup/), create a project, and obtain native credentials. You should copy the secret and token for later usage.

## Installation

After cloning this repository run the following command to install all dependencies:

```bash
npm install
```

## Configurations

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

And add your API token as the value for `REACT_APP_TRANSIFEX_TOKEN`.

Also, in `package.json` replace `<TOKEN>` and `<SECRET>` in the scripts `push-translation` and `refresh-translation` with your API token and secret.

## Run Website

Run the following command to start website:

```bash
npm start
```