<h1 align="center">
  <img src="src-tauri/icons/128x128.png" width="128" />
  <br>
  Promise
  <br>
</h1>

<h3 align="center">
A cross-platform To-Do list tool built with <a href="https://github.com/tauri-apps/tauri">tauri</a>.
</h3>

<div align="center">

[![Windows Support](https://img.shields.io/badge/Windows-0078D6?style=flat&logo=windows&logoColor=white)](#)
[![MacOS Support](https://img.shields.io/badge/MACOS-adb8c5?style=flat&logo=macos&logoColor=white)](#)
[![Linux Support](https://img.shields.io/badge/linux-1793D1?style=flat&logo=linux&logoColor=white)](#)

</div>

## Screenshots

![](screenshots/macos.png)

## Install

Download from [release](#). Supports Windows x64, Linux x86_64 and macOS 10.13+.

Or you can build it yourself. Supports Windows, Linux and macOS 10.13+.

Notes: If you could not start the app on Windows, please check that you have [Webview2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section) installed.

## Run Locally

You'll need to setup Rust and Tauri CLI by following the [Getting Started guide here](https://tauri.app/v1/guides/getting-started/prerequisites).

```bash
$ git clone https://github.com/WonderLand33/promise.git
$ cd promise
$ pnpm install
$ pnpm tauri build
```

## Build Target Binary

```bash
$ pnpm tauri build
```