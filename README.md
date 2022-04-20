# rn-fun
Hello friends! This is a React Native project that I've started to hit a couple personal goals:
- learn how to build a React Native app from scratch, as I've only worked on RN where the foundations have been laid out already
- utilize this project as a framework for teaching/mentoring others who are interested in learning mobile app development using React Native
- have a place to implement some of my ideas, and hopefully others would have a good space to do theirs too

Initialized using the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) guide, initialized with the template `react-native-template-typescript` (be sure to install `@react-native-community/cli` to be able to use the template!)

Uses TypeScript + ESLint + Prettier + `@react-navigation/native`

AppIcons original 1024x1024 created using [GIMP](https://www.gimp.org/), and resized using [AppIconMaker.co](https://appiconmaker.co/)

![RNFun Sample](https://user-images.githubusercontent.com/5974771/162132600-de1add9b-6464-47bb-9a4b-786fbf6e312b.png)

# Contributing

Please add a `YourNameHome` component under `src/screens/` and a corresponding `<Button />` in `Home.tsx`. Each collaborator has their own sub-homepage where they are free to implement whatever they want there so we do not clash with each other's work.

Check [this PR](https://github.com/judemorrissey/rn-fun/pull/20/files) for an example of adding a home screen for yourself. (TODO: need to update the link to also show an example that adds a `test.tsx` file)

Reusable components should go into `src/components`, and "navigable" screen components should go into `src/screens`. Please make a directory for your component under the appropriate directory and please name it in PascalCase. At bare minimum, please include the following four files:

- `YourComponentName.tsx` - your actual component code goes here
- `index.ts` - to enable `import YourComponentName from 'components/YourComponentName'` in lieu of `'components/YourComponentName/YourComponentName'`
- `styles.ts`
- `test.tsx`

This project has some [VSCode](https://code.visualstudio.com/) niceties included such as recommended extensions and snippets for the four basic files listed above, hope that ends up being useful!

# Quickstart

## General
- `yarn install`

## Android
- `yarn run android`

## iOS
- Open `ios/RNFun.xcworkspace` in Xcode
- install necessary cocoapods `pushd ios; pod install; popd;`
- build and run the project on an iOS simulator of your choice


# Some Environment Setup Stuff

## General Prerequisites
- refer to the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) guide (be sure to click the tab that's _not_ `expo` related
- install [yarn classic](https://classic.yarnpkg.com/lang/en/docs/install/) (V1.x, uses `node_modules`)
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
- install [Cocoapods](https://cocoapods.org/) (I used homebrew to avoid pain and suffering with M1 macs)
  - `brew install cocoapods`
- Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835)
