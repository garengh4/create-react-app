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
- In bootstrap 5: `ms-4` means margin-left 4, `pe-3` means padding right 3. For both top and bottom should use y coordinate (e.g. py-2, my-4). For both left and right use x coordinate (e.g. px-1, mx-5)
- `me-4` might be used a log for adding space below elements
