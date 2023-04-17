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
- In bootstrap: divide width into 12 columns
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
  - alignment: `text-start`, `text-end`

  