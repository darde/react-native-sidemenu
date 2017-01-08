# React Native Side Menu Template

## A starting point for react menu apps with side menu for Android.

1. [Motivation](#motivation)
2. [Get started](#get-started)
3. [Project Structure](#project-structure)
4. [License](#license)
5. [Considerations](#considerations)

### Motivation

When I worked with [ionic framework](https://ionicframework.com/), one of the most cool features in my opinion, was the ionic default templates. If I wanted to set up a new side menu ionic app, my only work was type `ionic start myApp sidemenu` in a terminal, and _voalla_. Unfortunately, until the release of this project, I could not find any complete side menu template for react native, because of this, I decide to do my own template. Feel free to collaborate or suggest any changes, I'm sure that many things can be improved.

### Get started

This template uses the beauty project [react native vector icons][vectorIcons] that allow us to use font icons collections such as [FontAwesome][fontAwesome], [Ionicons][ionicons], [MaterialIcons][materialIcons] and many others. In order to start a brand new project with react native vector icons, you should follow the [instalation steps](https://github.com/oblador/react-native-vector-icons#installation), which is not necessary for this template that already has the library installed. So, to get started with react native side menu template just follow the steps below:

1. clone this repo or download the zip file and unzip it.
2. Make sure you have both [NodeJS][node] and [npm][npm] installed.
3. In a terminal, inside the root directory, type `npm install`.
4. Open your emulator or set up a real device in order to work with [react native][reactNative] projects.
5. In a terminal, inside the root directory, type `npm start`.
6. After `npm start` run successfully, in the same local, type `react-native run-android`.

That's all, now you can change the project according to your needs. If you prefer, you can start a brand new project typing `react-native init myApp`, install the [react native vector icons][vectorIcons], and copy all the `app` folder to your project, as well change the `index.android.js` file accordingly. You even still need to copy the folder `sidemenu/android/app/src/main/res/drawable` for your project.

### Project Structure
Basically, this is a default React Native project created by the command line `react-native init react-native-sidemenu`. The core of the template is:

![Project Structure]('project-structure.png')

### License
This project is licenced under the [MIT License][mit].

Any included software are copyright to their respective authors and mostly under MIT or [SIL OFL][silOfl].

### Considerations
It's relatively easy to make some changes if you cannot use [react native vector icons][vectorIcons] and use the buit in **ToolbarAndroid**, although, according the author:
> **Icon.ToolbarAndroid** is a composition of the underlying **ToolbarAndroid** component.

As soon as possible I intend to create a new branch to do a version with the built in **ToolbarAndroid** component, or I encourage you to fork this repo and start this work, as well I encourage you to collaborate with any improve for this project.  
Hope this template can help you in some way.

Thank you

[reactNative]: https://facebook.github.io/react-native/
[vectorIcons]: https://github.com/oblador/react-native-vector-icons
[fontAwesome]: http://fortawesome.github.io/Font-Awesome/icons/
[ionicons]: http://ionicframework.com/docs/v2/ionicons/
[materialIcons]: https://www.google.com/design/icons/
[node]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[mit]: http://opensource.org/licenses/mit-license.html
[silOfl]: http://scripts.sil.org/OFL
