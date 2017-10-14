# toggle-span

`toggle-span` is a custom polymer element that hides or unhides other spans when you click links. Creates interactive
text that gives the impression of having a conversation with the creator of the webpage.

## Requirements

`toggle-span` uses Polymer 2.0 to create a custom reusable HTML element. For more information on why Polymer is useful,
read more [here](https://www.polymer-project.org/about).



## Installation

Since Polymer relies on [Bower](https://bower.io), we also made this element also installable through Bower.

1. First, install Bower.
```
npm install -g bower
```
2. Install the Polymer CLI using the below command, or follow the instructions in the Polymer [docs](https://www.polymer-project.org/2.0/start/install-2-0).
```
npm install -g polymer-cli
```
3. Clone the repository
```
git clone https://github.com/vivqu/toggle-span.git
```

4. Install `toggle-span` dev dependencies from the root directory. This command reads from the `bower.json`
file to automatically install Polymer and other related dependencies.
```
bower install
```

## Example

### Using in your own project

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

To use the HTML element, there are a few attributes you can set:

| Attribute  | Values  | Description  |
|:-----------|:--------|:--------------|
| `did-open` | boolean | If this flag is set, the span is immediately visible on screen. |
| `no-link`     | boolean | If this flag is set, no link will be added to the span. |
| `opens-id` | number | The id that will be opened when the link in the span is clicked. |
| `opened-by-id` | number | Indicates that this span will be opened when a link is clicked with the corresponding `opens-id`. |
| `closed-by-id` | number | Indicates that this span will be closed when a link is clicked with the corresponding `opens-id`. |
| `no-animation` | boolean | If this flag is set, the span does not fade in when opened. |


To begin using the elements, you need a visible `toggle-span` that will open other spans. This elements
consists of an entire link.
```
<toggle-span opens-id=1 did-open>Hello world!</toggle-span>
```

Then you can designate the span that opens by the above element. Use the `no-link` flag
to create a span that does not open any other spans.
```
<toggle-span opened-by-id=1 no-link>I am a computer program.</toggle-span>
```

To show a span that has some text before and after the link:
```
<toggle-span opened-by-id=1 opens-id=2>
  <span slot="pretext">I have become a </span><span>sentient</span><span slot="posttext">being.</span>
</toggle-span>
```
You can also include only `pretext` or `posttext` slots instead of both.

Use the `closed-by-id` attribute to hide spans after a link with the corresponding `opens-id` is tapped.
```
<toggle-span opened-by-id=1 closed-by-id=2>
  <span slot="pretext">Fear me, </span><span>humans!</span>
</toggle-span>
```

You can also close a span from itself to produce interesting effects:
```
<toggle-span opened-by-id=2 opens=3 closed-by-id=3>
  <span slot="pretext">What are these </span><span>emotions</span><span slot="posttext"> that I'm feeling?</span>
</toggle-span>
```

### Demo app

To run the included [demo](https://github.com/vivqu/toggle-span/blob/master/index.html), set up a simple
Python HTTP server from the root directory.
```
python -m SimpleHTTPServer
```
Open the corresponding localhost URL to try out the demo. Usually it is [localhost:8000](http://localhost:8000/).

## Author

* **Vivian Qu** - [hello@vivqu.com](https://github.com/PurpleBooth)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you to Alan Turner and his [interactive website](http://greaterthanorequalto.net/) that provided the inspiration for this project. Go check out his short story and thesis dissertation!
