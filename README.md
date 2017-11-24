# toggle-span

`toggle-span` is a custom polymer element that hides or unhides other spans when you click links. Creates interactive
text that gives the impression of having a conversation with the creator of the webpage.

## Requirements

`toggle-span` uses Polymer 2.0 to create a custom reusable HTML element. For more information on why Polymer is useful,
read more [here](https://www.polymer-project.org/about).

Here's a little sneak peek of the demo app:

![Demo of the toggle-span element](https://github.com/vivqu/toggle-span/blob/master/img/demo_gif.gif)

## Installation

Since Polymer relies on [Bower](https://bower.io), we also made this element also installable through Bower.

1. First, install Bower.
```
npm install -g bower
```

2. Install `toggle-span` using Bower.
```
bower install --save toggle-span
```

## Example

### Setup in your own project

To use `toggle-span` in your own project, import the component in your `<head>` element.
```
<head>
  <link rel="import" href="some/path/to/toggle-span.html">
  ...
</head>
```
If you've used bower to install `toggle-span`, your path is probably `./bower_components/toggle-span/toggle-span.html`.

Copy the following code snippet to enable the toggling behavior. The javascript code adds event listeners for clicking
and hovering on links, and opening/closing/highlighting the appropriate spans.
```
<script src="./toggle-span.js"></script>
```

### Available attributes

To use the HTML element, there are a few attributes you can set:

| Attribute  | Values  | Description  |
|:-----------|:--------|:--------------|
| `did-open` | boolean | If this flag is set, the span is immediately visible on screen. |
| `no-link`     | boolean | If this flag is set, no link will be added to the span. |
| `opens-id` | number | The id that will be opened when the link in the span is clicked. |
| `opened-by-id` | number | Indicates that this span will be opened when a link is clicked with the corresponding `opens-id`. |
| `closed-by-id` | number | Indicates that this span will be closed when a link is clicked with the corresponding `opens-id`. |
| `no-animation` | boolean | If this flag is set, the span does not fade in when opened. |

### Basic element usage

To begin using the elements, you need a visible `toggle-span` that will open other spans. The basic element
consists of an entire link.
```
<toggle-span opens-id=1 did-open>Hello world!</toggle-span>
```

Then you can designate spans that are opened by the above element. Use the `no-link` flag
to create a span that doesn't contain any links. This means that it won't open any other spans.
In this case, you don't need to specify a `opens-id` attribute.
```
<toggle-span opened-by-id=1 no-link>I am a computer program.</toggle-span>
```

![Example 1](https://github.com/vivqu/toggle-span/blob/master/img/example-1.gif)

Sometimes you might want to show text before and after the link. You could use normal spans to
accomplish this but you won't get the ability to toggle the non-link text. Use slots with name
`pretext` to specify text before the link and `posttext` to specify text after the link.
```
<toggle-span opened-by-id=1 opens-id=2>
  <span slot="pretext">I have become a </span><span>sentient</span><span slot="posttext"> being.</span><!--
--></toggle-span>
```
You can also include only `pretext` or `posttext` slots instead of both. Note that you'll sometimes need to
add comments to wrap elements to fix link underlining issues with spans.

![Example 2](https://github.com/vivqu/toggle-span/blob/master/img/example-2.gif)

Use the `closed-by-id` attribute when you tap on a corresponding link with the same `opens-id`.
The spans that will be closed are highlighted when you hover on the link.
```
<toggle-span opened-by-id=1 closed-by-id=2 no-link>Fear me, humans!</toggle-span>
```

![Example 3](https://github.com/vivqu/toggle-span/blob/master/img/example-3.gif)

You can also close a span from itself to produce interesting effects:
```
<toggle-span opened-by-id=2 opens-id=3 closed-by-id=3>
  <span slot="pretext">What are these </span><span>emotions</span><span slot="posttext"> that I'm feeling?</span><!--
--></toggle-span>
```

![Example 4](https://github.com/vivqu/toggle-span/blob/master/img/example-4.gif)

### CSS Styling

You can change the default text, link, and highlight color of toggle-span using Polymer CSS variables. The component style
contains the following code:
```
span[class="highlight"] {
  color: var(--toggle-span-highlight-color, #00BFC4);
  text-decoration-color: var(--toggle-span-highlight-color, #00BFC4);
}
::slotted([slot=pretext]) {
  color: var(--toggle-span-text-color, black);
}
::slotted([slot=posttext]) {
  color: var(--toggle-span-text-color, black);
}
```

You can add `is="custom-style"` tag to polyfill the color styles:
```
<style is="custom-style" type="text/css">
  toggle-span {
    --toggle-span-text-color: red;
  }
</style>
```
We have included this code snippet in the demo app below. Uncomment the code block to try it out.

### Demo app

To run the included [demo](https://github.com/vivqu/toggle-span/blob/master/index.html), set up a simple
Python HTTP server from the root directory.
```
python -m SimpleHTTPServer
```
Open the corresponding localhost URL to try out the demo. Usually it is [localhost:8000](http://localhost:8000/).

## Author

* **Vivian Qu** - [hello@vivqu.com](mailto:hello@vivqu.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you to Alan Turner and his [interactive website](http://greaterthanorequalto.net/) that provided the inspiration for this project. Go check out his short story and thesis dissertation!
