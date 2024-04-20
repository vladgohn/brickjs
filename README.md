# BRICK Micro-Framework

BRICK is a lightweight, client-side templating framework designed for simple and efficient management of HTML templates in web applications. This framework is built to simplify the integration of HTML snippets into the DOM, making it easier to render and update UI components with dynamic data.

## Features

- **Simplicity**: With BRICK, you can keep your HTML templates clean and separate from your JavaScript logic.
- **Efficiency**: It leverages JavaScript's template literals for straightforward template syntax without any new syntax to learn.
- **Flexibility**: BRICK can easily be used with or without jQuery and allows specifying alternative paths to organize your templates.
- **Client-side Rendering**: Enables dynamic data binding on the client side, making it ideal for single-page applications or projects where server-side rendering is not needed.

## Installation

To get started with BRICK, include the `brick.js` script in your HTML file:

```html
<script src="path/to/brick.js"></script>
```

## Usage

First, create an instance of BRICK, optionally specifying the base path for your templates:

```javascript
const bricks = new BRICK('optional/path/to/templates/');
```

To render a template, call the `render` method with the name of the template, the data object, and the selector of the container where the template should be inserted:

```javascript
bricks.render('templateName', { key1: 'value1', key2: 'value2' }, '#container');
```

BRICK will fetch the template, bind the data, and insert the resulting HTML into the specified container.

## Examples

Suppose you have an HTML template named `card.html` located in the `bricks` folder:

```html
<!-- card.html -->
<div class="card">
  <h2>${title}</h2>
  <p>${text}</p>
</div>
```

You can render this template with dynamic data as follows:

```javascript
bricks.render('card', { title: 'Hello, World!', text: 'This is a dynamic card.' }, '#card-container');
```

When executed, BRICK will replace `${title}` and `${text}` with the provided data and insert the card into the element with the id `card-container`.

## Contributions

Contributions to BRICK are welcome! If you have an idea for improvement or have found a bug, please open an issue or submit a pull request.

## License

BRICK is open source and released under the MIT License. See the `LICENSE` file for more information.
