To start a new project run:
npx react-native init <projectName>

To start your project run:
cd /path/to/project/projectName
npx react-native run-ios

Running your app on iOS devices

1. Plug in your device via USB
Connect your iOS device to your Mac using a USB to Lightning cable. Navigate to the ios folder in your project, then open the .xcodeproj file, or if you are using CocoaPods open .xcworkspace, within it using Xcode.

If this is your first time running an app on your iOS device, you may need to register your device for development. Open the Product menu from Xcode's menubar, then go to Destination. Look for and select your device from the list. Xcode will then register your device for development.

2. Configure code signing
Register for an Apple developer account if you don't have one yet.

Select your project in the Xcode Project Navigator, then select your main target (it should share the same name as your project). Look for the "General" tab. Go to "Signing" and make sure your Apple developer account or team is selected under the Team dropdown. Do the same for the tests target (it ends with Tests, and is below your main target).

Repeat this step for the Tests target in your project.

3. Build and Run your app
If everything is set up correctly, your device will be listed as the build target in the Xcode toolbar, and it will also appear in the Devices pane (⇧⌘2). You can now press the Build and run button (⌘R) or select Run from the Product menu. Your app will launch on your device shortly.

If you run into any issues, please take a look at Apple's Launching Your App on a Device docs.

Connecting to the development server
You can also iterate quickly on a device using the development server. You only have to be on the same Wi-Fi network as your computer. Shake your device to open the Developer menu, then enable Live Reload. Your app will reload whenever your JavaScript code has changed.

https://facebook.github.io/react-native/docs/running-on-device
