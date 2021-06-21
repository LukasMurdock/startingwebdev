import Callout from 'nextra-theme-docs/callout'
import Preview from '../components/Preview'

# Introduction to Web Development

The WorldWideWeb (WWW) was a project to give universal access to a large universe of documents.

The web is really just _documents_. Documents that, at their simplest, are just like papers you’ve written before. And, just as I’m using English words to communicate with you, the web began with a markup language to represent documents–**HyperText Markup Language (HTML)**.

<Callout emoji="👨‍💻">
    **HTML** is a language that defines document titles, headings, sections, and
    much more. Web Browsers (like Safari, Chrome, and Firefox) can parse HTML
</Callout>

<Preview>{<><h1>This is a level one heading</h1><p>This is a paragraph.</p><p>This is another paragraph.</p></>}</Preview>

```html
<h1>This is a level one heading</h1>
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

HTML is the standard markup language for documents designed to be displayed in a web browser. HTML file types end in `.html`.

<Callout>
Sir Tim Berners-Lee invented HTML at CERN in the early ’90s. The Internet Engineering Task Force (IETF) primarily maintained HTML until the creation of the World Wide Web Consortium (W3C) in 1995. The fifth and last major HTML version from W3C is **HTML5**. The current HTML specification is the [HTML Living Standard](https://html.spec.whatwg.org/multipage/) maintained by a group made up from various people from major browsers called the [Web Hypertext Application Technology Working Group (WHATWG)](https://whatwg.org/).
</Callout>

But, being able to style a document is pretty important too! And while the web was style-less for a few years, soon came a way to add styling like fonts, color, and spacing to HTML elements–**Cascading Style Sheets (CSS)**. CSS let’s us write styling rules for our HTML document one by one.

The _cascading_ comes from the fact that the styles we declare can inherit and overwrite previously declared styles–allowing for multiple stylesheets on the same page.

``` css
h1 {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -.015em;
}

p {
  font-size: 16px;
  margin-top: 24px;
}
```

<Callout>
Håkon Wium Lie, a coworker of Tim Berners-Lee invented CSS. The World Wide Web Consortium (W3C) maintains the [CSS specifications](https://www.w3.org/Style/CSS/current-work). CSS does not have a version as a whole like HTML or JS. All current CSS specifications have their own specific versions ranging from 1 to 4.
</Callout>

**HTML** defines the document structure and **CSS** defines the document styling. **JavaScript** enables everything you’ve seen a web page do anything other than just sit there — content updates, interactive maps, animated 2D/3D graphics, platforms on the web like Twitter and YouTube, etc.

<Callout>
Brandon Eich created Mocha while at Netscape. Mocha was renamed to LiveScript and then renamed again to **JavaScript (JS)** and released by Netscape and Sun Microsystems. “JavaScript” was both licensed and trademarked to Oracle and submitted to ECMA International for standardization. So while everyone calls it JavaScript, the official name is **ECMAScript (ES)**.
- JavaScript and ECMAScript are effectively the same thing.
- New releases of ECMAScript were numbered until the 6th release in 2015 referred to as ES6. ECMAScript is now named by year: ECMAScript 2015 ([ECMAScript Language Specification](https://tc39.es/ecma262/)).
- ❗ _JavaScript_ and _Java_ are two different programming languages.
</Callout>

HTML, CSS, and JS are the *languages of the web*.