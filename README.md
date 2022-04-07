# rn-fun
React Native app development playground

Initialized using the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) guide, initialized with the template `react-native-template-typescript` (be sure to install `@react-native-community/cli` to be able to use the template!)

AppIcons original 1024x1024 created using [GIMP](https://www.gimp.org/), and resized using [AppIconMaker.co](https://appiconmaker.co/)

![RNFun Sample](https://user-images.githubusercontent.com/5974771/162132600-de1add9b-6464-47bb-9a4b-786fbf6e312b.png)


# Quickstart

## General
- `yarn install`

## Android
- `yarn run android`

## iOS
- Open `ios/RNFun.xcworkspace` in Xcode
- build and run the project on an iOS simulator of your choice


# Some Environment Setup Stuff

## General Prerequisites
- refer to the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) guide (be sure to click the tab that's _not_ `expo` related
- install [yarn classic](https://classic.yarnpkg.com/lang/en/docs/install/)
  - macOS: I used homebrew to install mine `brew install yarn`

## Android
- Install a Java runtime
  - macOS: use brew to install `brew install openjdk@11`
- Install [Android Studio](https://developer.android.com/studio)
  - Be sure to run it and install the Android SDK (32 at the time of writing)
  - Grab the Android SDK path from the SDK Manager preferences menu <img width="984" alt="image" src="https://user-images.githubusercontent.com/5974771/162283452-901b881e-00f4-46d8-96af-e282736cef15.png">
  - add the following to your bash or zsh rc
```
# React Native development
export ANDROID_HOME=/path/to/your/android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
  - using AVD Manager, add Android Emulators of your choosing, or attach a physical Android device with USB Debugging turned on

## iOS
- install Cocoapods (I used homebrew to avoid pain and suffering with M1 macs)
  - `brew install cocoapods`
- Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835)
