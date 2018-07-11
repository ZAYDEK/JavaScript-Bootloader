# The problem
The idea and inspiration for this subtle tool is to allow websites to **build themselves**, injecting their dependencies into the DOM client-side, versus pre-compiling webpages. This idea can be thought of as a website 'bootstrapping' (or bootloading) itself into existence. LOL wait wut? That sounds like a terrible idea, no??

Here's the shtick: [NPM](https://npmjs.com) has a terrible developer-experience. Terrible! And what I mean is, I shouldn't need to download hundreds(!) if not thousands(!!) of files to build and ship a website, and I shouldn't have to wait minutes to download extraneous dependencies to get started, either. This is madness, is it not?

So as I see it, something about mainstream frontend web development is broken. See [How it feels to learn JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f). This seminal ~article~ masterpiece puts into perspective the existential threat that is JavaScript run amok. Think about the children, man.

# The NPM-less solution. Huzzah! 🙌
The need at hand is websites and their dependencies; e.g. CSS, JS, etc. Now, because I don't want to be bothered with a command-line/build-process when developing a website, because these ideas should be extricable from one another, the one prerequisite I do have for this is that it needs to just work.

Here's how:
```
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <script
       id="head"
      src="scripts/head.js" title="🚀 Launch" dev
    ></script>
  </head>
  <body>
    <script
       id="body"
      src="scripts/body.js"
    ></script>
  </body>
</html>
```
😀 There's nothing left to do but run the damn thing. Ooh that feels good!!

So what's is we're leveraging JavaScript to let the website build itself into existence. 💡 While it does add a negligible ~10ms, there is a significant benefit: it can be programmed! This is significant because we've deferred the 'build-process' the same environment as the website––the website! And this makes the development experience orthogonal.

Take a closer look at this line:
```
<script id="head" src="scripts/head.js" title="🚀 Launch" dev></script>
```

`id` and `src` are nothing new, but what IS new is the addition of `title` and `dev`, which are non-standard attributes. Using this technique, we can treat user-defined attributes as arguments to customize our 'build-less build-process'. And this means our build-process can still be as simple or complex as required.

# Test it!
This is an experimental idea meant to inspire frontend developers simultaneous to shaming them for NPM glut. In this demo, I inject multiple CSS and JS dependencies (even [Vue](https://vuejs.org)!) to demonstrate this works. Look, NPM is cool, but I don't want to force frontend developers to conform for the sake of conforming––experiment!

Open `index.html` via [RawGit](https://rawgit.com) at https://rawgit.com/zaydek/JavaScript-Bootloader/master/index.html. You can learn more about this technique here: [using RawGit to serve repos](https://github.com/ZAYDEK/Stateless-Repos#one-other-weird-trick-). If hello, world! appears, it works! That's it. 💯 See how in `scripts/head.js`, `scripts/body.js`, and `scripts/main.js`.

You might be thinking ... that's it?? But that's sort of the point: our `index.html` is now minimalistic (instead of maximalistic), we have an idiom for customizing our website's build-process, and it works with frameworks, too! 🎉 Defining our own processes might seem weird, but if it can in turn make us more productive, shouldn't we make ~mistakes~ solutions?

# Gotchas
There appears to be one (surprising) gotcha––unrelated to the bootloader but is affected. That being that Safari can't deal with elements that use `const` or `var` that share an ID in common, see https://stackoverflow.com/a/41195385, e.g. `<div id="app">` and `const app = ...`. Weird, right? Here's a simple fix: `var app = new Vue({ .... })`.