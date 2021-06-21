# Hello World

Web pages are really just that. Pages. They’re documents, just like papers you’ve written in the past. Documents with heading levels, sections, paragraphs, and more. The web started with the idea of linking documents. So let’s learn how to create a document.

## Creating an HTML file

We’re going to create a file.

If you’re on a Mac:
1. Open TextEdit
2. Save a new file
3. Name it `index.html`
4. Click `Use .html`

If you’re on Windows:
1. Open Notepad
2. Click `Save As`
3. Save as `index.html`
4. Select UTF-8 in Encoding drop-down menu

HyperText Markup Langage (HTML) was invented as a way to provide instruction for browsers, in the form of markup, on how to display elements.

## Writing HTML

Go ahead and paste this code into your HTML file.

```html
<h1>Hello World</h1>
<p>HyperText Markup Language was invented as a way to provide instruction for browsers, in the form of <i>markup</i>, on how to display elements.</p>
<h2>I just created my first HTML file!</h2>
<p>Web pages are really just that, <i>pages</i>.</p>
```

Browsers like Google Chrome, Safari, and Firefox take HTML markup and render it to the screen. We can open the HTML file we created locally on our computer in the browser to see what it looks like. 

You’ll notice the address in the address bar starts with `file://`, this is because the browser is using the "file" protocol to load this document.

## Writing CSS
Soon after HTML came Cascading Style Sheets (CSS) as a way to add styling (e.g. fonts, color, spacing) to HTML elements.

```html
<style>
h1 {
    font-size: 100px;
    background-color: red;
}

p {
    font-size: 20px;
    line-height: 2px;
}
</style>
```

## Getting Online

We now have an HTML file with embedded CSS. How do we get these on the web? Our current file a Static Site. Static Sites have all the  request HTML, CSS, and JS pre-built.

Most people pay for hosting and a domain name:
- Web hosting is rented file space on a company’s web server where you can store your files for the web server to provide to website visitors.
- A domain name is a unique address we rent from domain registrars to make it easier for people to find our website. For example: [https://lukasmurdock.com/](https://lukasmurdock.com/)

[Netlify](https://app.netlify.com/drop) offers a Drag & Drop hosting solution to getting our site online.

## Keeping Track of Changes

Now that we have some code, let’s learn how to save it! If you’ve ever worked in Google Docs and viewed the version history of changes, that’s what we’re looking to have! Web developers use the **git version control system** to track changes in code. The most popular tool for this is **GitHub**.

GitHub provides a code hosting platform for version control and collaboration, just like we saw in Google Docs. Note that Github is for code hosting, not web hosting (although they do have a web hosting service, more on that later). So GitHub is not for viewing your site like we did before, GitHub is for viewing the version history of your code.

## Package Managers

Now, it’s really annoying when you have to repeat all that HTML for every new page you create. There’s tools to help with that, but first I’m going to introduce you to the developers App Store. You see, before the first Graphical User Interface, everyone installed, upgraded, and configured things though a Command-line Interface (CLI), often referred to as the **terminal**.

Just like you’re used to the App Store managing the installation, upgrading, and configuring of applications, the terminal offers **package managers** to do the same thing. There are package managers for installing ready to use software like youtube-dl, a CLI for downloading videos from YouTube. The most common package manager of this type on Mac is [Homebrew](https://brew.sh/), and if you’re developing on Mac, you’ll probably end up installing it at some point.

Then, there are package managers for installing pieces of functionality often called libraries to build your own application. These package managers make up the **development environment**. Because if you want to run the software on another computer, you’ll have to install the packages your application uses through a package manager.

Different languages have different development environments, (and there are multiple package managers you can use within a single language). For example, here are a few different languages:
- Ruby (main package manager: Bundler)
- Java (main package manager: Maven)
- Python
- JavaScript (main package manager: NPM)

Okay, now that we know about developer App Stores, it’s time to explore our options. What we’re looking for is a tool to easily template our HTML, CSS, and JS for us and make it so we don’t have to write all of our content in HTML. Because if we had to write all of our content in HTML, we’d never get anywhere!

There’s an entire category of tools referred to as Static Site Generators (SSGs). We already know what static sites are, you’ve just made one. Now, that site is clearly not YouTube or Twitter.

Static Sites send the same pre-built HTML, CSS, and JS files to every visitor. Dynamic sites *don’t do that*. Dynamic Sites render the HTML, CSS, and JS on the server for every visit; every time we visit YouTube we’ll see something different. These websites are no longer the simple static document that we started with!

Now, there is a vast selection of SSGs across pretty much any language. The selection of languages means that while we’ll always be writing HTML, CSS, and JS, the language that we template them with is up to you.

I personally started with, and still use for my personal site, an SSG called Jekyll. Jekyll is built in Ruby and templates are written in Liquid. So, to use Jekyll you have to configure a Ruby development environment.

But there’s [a whole lot to choose from](https://jamstack.org/generators/).

As JavaScript has taken over popular development, we’ll be looking to install a tool developers use to run JavaScript outside of a browser: **Node**. Node.js is designed as a JavaScript back-end to execute JavaScript outside of a browser.

While you can install Node with Homebrew on Mac, [Volta](https://volta.sh/) is designed specifically to be a hassle-free JavaScript tool manager. So I recommend installing Node with Volta.

Node comes with it’s own package manager called **Node Package Manager (NPM)**. From here on out it’s pretty much going to be all NPM.


## Generating a Static Site