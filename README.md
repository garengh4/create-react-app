# frontendWorkspace

## Topic: Bootstrap

- shortcut: `button.btn.btn-primary` will create button with bootstrap class btn-primary
- install live server extension: right click in the file => click "Open with live server" will open webpage allow viewing changes in real time

### CSS Necessities & UI Element

**Colour**: use colour names from bootstrap: primary (bright blue), danger (red), warning (yellow), success (green), light (whitish), dark (black/dark grey)

- same colour names will be used from buttons, text, badges, background-colour, etc.

**Border, Margin, and Padding:**
- Can be individually controlled for each of the 4 sides of a box
- 4 sides of box in CSS direction (clockwise direction): top, right (`end`), bottom, left (`start`)
- To be specific to one of the sides, add `-sideName` to the classes (e.g. border-top, margin-bottom, padding-left)
- Bootstrap shortcuts: `m` for margins, `p` for padding
- In bootstrap 5: `ms-4` means margin-left 4, `pe-3` means padding right 3. For both top and bottom should use y coordinate (e.g. `py-2`, `my-4`). For both left and right use x coordinate (e.g. `px-1`, `mx-5`)
- `me-4` might be used a log for adding space below elements

**Container: 2 types of container classes**

`container`
- fixed width container that change the  width as the screen width change allowing some left and right space before the container starts. 

`container-fluid`
- always takes the whole width of the browser window

**Grid System**
- allows alignment horizontally at regular intervals: design principle that a regularity in alignment is visually pleasing
- In bootstrap: divide width into 12 columns because it is divisible by 2,3,4,6
- container work like col classes and have padding in them, but containers take the whole space available, so containers are like `col-12`
- row classes remove padding: do not put rows inside rows directly, or col in col. rows should be nested in `container` or `col-` classes


Columns:
to surround any html code with an element:
- select the code to surround
- CTRL+SHIFT+P => emmet wrap with abbreviation => type the tag we want to surround with

**Responsive Web Design**
- depending on the width of the screen, our LAYOUT can change
- bootstrap allows to code for different screenwidtth
- if we want a property to apply to specific screen widths, names are: `sm` for small, `md` for medium, `lg` for large, `xl` for extra-large, `xxl` for extra-extra-large
- example class: `col-md-4` => apply the col width property to ALL SCREEN LARGER or EQUAL to MEDIUM SCREEN WIDTH
- Rules:
  - All screens larger than `sm`: 50% of availabke width should be applied
  - All screens larger than `md`: 33% of available width should be applied
  - All screens larger than `lg`: 25% of available width should be applied
  - All screens larger than `xl`: 16.67% of available width should be applied
  - size between extra small/0 width till `sm` width use 100% of a available width
  - for all the size in between size, use the smaller bound
  - `col-n` for all widths use n/12 available width
  - `offset` moves our element n/12 of available width to right from where it was originally supposed to be. reaed offset as move to right n columns out of 12 columns

**Text Formatting**
  - text size `display-n` where n goes from 1 to 6 is used to have larger font sizes, with 1 being largest, 6 is small yet still big
  - alignment: `text-start`, `text-end`, `text-center`
  - colour for text: `text-primary`, `text-danger`
  - transformation: `text-capitalize` (first letter of every word uppercased), `text-uppercase`, `text-lowercase`
  - table: need to be added in table tag
    - `table`: base class always needed
    - `table-bordered`: all cells have borders
    - `table-sm`: less padding in cells
    - `table-striped`: alternate background colour or grey and white
    - `table-hover`: background colour of grey when hoverying on a row
    - `table-responsive`: horizontal scrollbar if any word inside the cell is too long; instead of overflowing

**Image Classes**
- `rounded` => corners, `rounded-circle`, `img-thumbnail`, `img-fluid`

**Card**
- simply rectangles in the UI
- can be formatted very flexibly: background colour, text colour, header, footer, etc.
- by default, no padding in cards, rounded corners automatic
- Generally, to cadd padding => `card-body` inside the card div. there is also `card-header` and `card-footer`
- `.card-img-overlay` used on a div that has CONTENTS of the card that will be overlaid on the img; it is not done on the img tag => allows overlap of content over the img => `position: absolute` etc. used
- `.card-title` adds margin at bottom

**Form Formatting**
- input, textarea, select => `form-control` class => takes 100% of the space available and all other elements are above or below it; adds padding, shadows etc.
- checkboxes and radio button inputs SHOULD NOT USE `form-control` => use `form-check-input`, `form-check-label`, `form-check` on the div that groups the label and the input together
- By default each check/radio group is in its own line
- For inline check/radios, add `form-check-inline` to surrounding div

**Button**
- `btn` class always needed
- `btn-<colorName>`, `btn-<sizeQualifier2characters>`, `btn-link` (button looks like link).

**Badges**
- rectangles with formatted text in them
- can use `bg-primary`, `bg-danger`, etc. for coloured backgorund.

## Topic: JavaScript Concepts

JS originally only ran in browsers
- Everytime an html page was rendered in a window, the window has an instance of JS running; this executing JS instance could be asked to manipulate tthte DOM. DOM is an OP representation of the view that is rendered by the browser.
- DOM has element tree => "inspect" any browser window
- Every html element is like an object and each has properties/fields/instanceVars like "style", "id", "src", "rowspan".
- DOM tree => elements inside elemtns nested to whatever level.

JS is able to manipulate the DOM => changing the view displayed in the window
- add elements, remove elements, modify elements, change properties of elements

JS implements "interactivity" with the user or with timers/timeout => events and event listeners
- Events are happenings such as clicking/hovering/typing/long press a button/focusOn (clicking into)/drag.
- Event listeners => functions that have code that runs when a specific thing happen

Browsers are mandated to ALLOW event listeners for events.

`script` tag in html is used to include JS code to run wherever in the HTML it is found.

When JS instance starts running in the browser window, there are global vars available:
- `window` => browser window object
- `document` => entire html document object

Frameworks like React, Angular, etc. use JS to efficiently manage views in our frontend. The browser loads the page only once in the beginning, then all the view changes that happen are through JS => Single Page Application (SPA). Browsers do fetch http requestts but do not render directly.

Node.js is the JS interpreter that was made available for OS like Mac, Windows, Linux, etc.
- with node.js we were able to run JS code outside the browsers
- node.js => JS interpreter/runtime
- dynamically typed language => types are checked at runtime; there is no compile time since node.js can directly interpret (run) the code.
- types of vars can change at runtime
- our JS code does not need to declare types like Java => type can kee changing while the code runs.
- Run JS code using node.js in the terminal => `node filename.js`
- Angular and React projects: we write code on our compter, but the app actually runs in the browser through `script` tag in some HTML file. The apps do not execute on our computers. 
- We need to pack our JS code into a JS file bundle and include it in a `script` tag somewhere.

add stuff here

**JavaScript Rules and Syntax**
- `let` or `const` is used to create variables
- arrays are dynamic like ArrayLists are in java

## Topic: React

add stuff here

**Create React Apps**
- `npm i -g create-react-app`
- inside .....

