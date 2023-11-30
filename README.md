# bonsai-app-react-native

This is home for the frontend application of the Bonsai app for iOS and Android.

## Local deployment

Install the packages

```
cd bonsai-app-react-native
nvm install && nvm use
yarn install
```

To show all the preview options while in dev:

```
yarn start
```

This will give you the option to run the development server on your own device or via emulators.

## Running on your device (iOS or Android)

-   Download `Expo Go` from the iOS/Google play store
-   Scan the QR code in the console when running `yarn start` - this will open the app with hot reload on your device

## Running on a simulator

### iOS

-   Download [Xcode](https://apps.apple.com/us/app/xcode/id497799835) from the Apple store
-   Add the mobile plugin during setup to install the iOS simulator
-   Run `yarn start` and then `i` for iOS simulator, or alternative go straight to `yarn ios`

### Android

-   Download [Android Studio](https://developer.android.com/studio)
-   Once open, go to 'More Action' dropdown, 'Virtual Device Manager'
-   Create Device
-   Pick a device which **has access to the Google Play Store**, this is how the simulator connects to your app (Through Expo Go)
-   Install the specific device
-   Run `yarn start` and then `a` for android simulator, or alternative go straight to `yarn android`
