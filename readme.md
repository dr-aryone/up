<div align="center">
	<div>
		<img src=".hero.png" alt="up">
	</div>
	<br>
</div>

> a fast and minimal command line client for sprk api

<p align="left">
	<!-- Code Style - XO-Prettier -->
  <a href="https://github.com/xojs/xo">
    <img src="https://img.shields.io/badge/code_style-XO+Prettier-5ed9c7.svg" alt="XO Code Style used"/>
  </a>
	<!-- Version - npm -->
	<a href="https://www.npmjs.com/package/@pavanjadhaw/up">
    <img src="https://img.shields.io/npm/v/@pavanjadhaw/up.svg" alt="Latest version on npm" />
  </a>
	<!-- License - MIT -->
  <a href="https://github.com/pavanjadhaw/up/blob/master/license">
    <img src="https://img.shields.io/github/license/pavanjadhaw/up.svg" alt="Project license" />
  </a>
</p>

## Usage

```sh
$ up cutecats.png
# ✔ File uploaded... https://pwnj.pw/koyqd.png
```

This command uploads image(cutecats.png) and returns url of uploaded file https://pwnj.pw/koyqd.png

<p align="center">
  <img src="./demo.svg">
</p>

## Install

```sh
$ npm i -g @pavanjadhaw/up
```

Export sprk environment variables, add this to your .bashrc or .zshrc,
you can get these by setting up [sprk-api](https://github.com/Sparkenstein/sprk)

```sh
export SPRK_SERVER_URL='https://pwnj.pw'
export SPRK_API_KEY='Yhhsnr8kJUmPhjS30ilmd9mCTLQ6pAg0'
```

## Uninstall

It's sad to see you go :(

```sh
$ npm uninstall -g @pavanjadhaw/up
```

## Depends

- [sprk-api](https://github.com/Sparkenstein/sprk) - api for this package

## License

MIT © [Pavan Jadhaw](https://pavanjadhaw.me)
