https://react-shantanu-2.azurewebsites.net/


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
- bootstrap allows to code for different screenwidth
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
- Everytime an html page was rendered in a window, the window has an instance of JS running; this executing JS instance could be asked to manipulate the DOM. DOM is an OP representation of the view that is rendered by the browser.
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

Frameworks like React, Angular, etc. use JS to efficiently manage views in our frontend. The browser loads the page only once in the beginning, then all the view changes that happen are through JS => Single Page Application (SPA). Browsers do fetch http requests but do not render directly.

Node.js is the JS interpreter that was made available for OS like Mac, Windows, Linux, etc.
- with node.js we were able to run JS code outside the browsers
- node.js => JS interpreter/runtime
- dynamically typed language => types are checked at runtime; there is no compile time since node.js can directly interpret (run) the code.
- types of vars can change at runtime
- our JS code does not need to declare types like Java => type can kee changing while the code runs.
- Run JS code using node.js in the terminal => `node filename.js`
- Angular and React projects: we write code on our compter, but the app actually runs in the browser through `script` tag in some HTML file. The apps do not execute on our computers. 
- We need to pack our JS code into a JS file bundle and include it in a `script` tag somewhere.

Webpack is one of the most popular tools to pack js applications that are written on a computer but run in browsers. Packing is generally done automatically.

**NPM (node package manager) - Node.js package manager/build tool**

main purpose of npm is dependency (other people's code used in our project) and project management (like maven in Java)

Node projects look for dependencies in `node_modules` folder, and then in parents folder's `node_modules`, parent's parent's and so on.

Npm commands:
- `npm install` or `npm i` => looks at a file called **package.json** (like pom file in Maven projects) in the current folder and downloads all dependencies in the node_modules folder
- `npm install <dependencyName>` or `npm i <dependencyName>` installs that dependenct and also adds a line in the package.json for adding that dependency
- `npm i g <dependencyName>` => adding the `g` tag means instally globally, all projects will have access AND is installed somewhere else instead of `node_modules` => typically done for utitliyt programs `ng` or `create-react-app`.
- lots of other commands => `npm start`, `npm build`, `npm init` (create a new project)

**JavaScript Rules and Syntax**
- `let` or `const` is used to create variables
- arrays are dynamic like ArrayLists are in java
- Arrow function in JS looks like labmda in Java
- arrow is equals followed by greater than symbols
- no types of specified in JS
- objects in JS are created as "key-value" pairs. Key are instance var names and values are the values of the inistance vars
- pread operator to create copies of objects and arrays. Syntax is 3 dots followed by the arrayName/ObjectName => spread key-value pairs or arrayElements into wherever this spread op is used
   - using spread operator for objects can override fields. to remove any field, override its value to "null"
- arrays/objects should be copied instead of modifying them due to immutability nature

Functional Programming => using pure functions (without side effects) in code and passing and returning other functions; immutability is central in functional programming

Pure Function => anything that a code does that affects computer input/output or network etc. (e.g. printing on the console or in a log file; loggin/access API over the network)

**Promises and Async Operations**
- JS is a single threaded langrage => never allowed to create separate threads and wait for things
- If any operation involves any sort of delays/waiting => those are done by JS "job handler" and the only thing our code can do: 
  - orovide a callback function to run when the delays/waiting is completed => async programming
- All operations that may complete at unspecified time later => we need to provide callback functions that will run when those tasks are completed
- JS can provide args to the callback function as well => typically a value that is resolved after waiting operation like calling an API or connecting to DB
- Promises are a way to do this async programming in a manageable way => easy to understand and manage
  - promise contain config info on what will happen if `thatObject.then()` is executed. typically a value is returned after some delay. Can do chaining operations.
  - code structure: 
  `somePromise.then(value => {do sth with value returned by promise after whatever time}).catch(error => {do sth with error object returned by the promise})`
- `let someTimieout = setTimeout(fnToExecute, timeoutToExecuteTheFnAfter);` and `let someInterval = setnterval(fnToExecute, intervalAtWhichToExecuteRepeatedly)`

## Topic: React

React components are expected to be Pure Functions and side effects are extracted out as much as possible
- Pure functions => very efficient, fast, output can be cached for specific inputs => since there are not gonna be any side effects and we know what out put happens for specific inputs

2 types of React Components: Classes and Functions
- class based components: deprecated
- **function based components**: UI portion looks like what is returned by the function (html and component tags). UI behaves (events and event listeners) => functions inside the function as well as other code inside that function. Events and Event listeners can be bound inside that function.

SPA always display a single html page and then JS takes over to change views as needed.
- usually the single html file is `index.html` or `main.html`

**Create React Apps**
- `npm i -g create-react-app`
- running `create-react-app <appName>` creates the starter code and installs all node_modules needed
= rrunning `npm start` inside folder launches app at `http://localhost:3000`

React is going for the EFFICIENT and FAST framework
- focus on immutability => will be copying arrays and objects a lot using spread operator
- focus on separation of "pure functions" and "side effects"
- `useEffect` hook in react is explicitly named as to be using "side effects"


Model => representation (usually as an OOP object) of UI view or portion of a UI view

View => actual UI that displays

Component => "reusuable, "encapsulated" representation of some UI portion

Binding framework => binding is required a lot and doing it is grunt work => safer (less bugs), more efficient to automate.

User Defined Component => reusable, encapsulated, representation fo UI portion like an HTML tag with their properties

Class Based Components => allowed instance vars to be manipulated by coder freely and this freedom caused code against best practices and introduced bug and slowness etc. => best not let the coder have that freedom to manipulate instance vars whatever way they like.

ReactDOM => OOP representation of UI view controlled by React (just like a browser DOM represents the UI to be displayed). It is the highest level element in the element tree (like browser DOM's root element)
- root node has method called `render` that can used to display any React components

**React.StrictMode**

- Is a utility component, does not display anything, just add some functionality to all child components
- Renders and re-renders the components (2 times render => allows a developer to see any side effects in their component code)
  - if no side effect, 2 times rendering is exactly same as one time rendering
  - If side effect, things will happen twice => should be extracted ouut of component and make them pure functions
- matters in development, not in prodution

**JSX**
- syntax looks like HTML elements
- property name `class` in HTML is called `className` because `class` is a keyword in JS
- `{}` in JSX syntax are used to have JS code execute within it. `{}` evaluate to JS expression value as the JS code inside that is run. `{}` based interpolation can be nested as mch as needed
- attribute names are camelCased
- attach functions not function calls on the right hand side. don't include `()`
- event object is always passed as the first argument to the eventHandler
- rules: JSX tags need to be closed. returned value from component has to be a single element. 

**State**

react allows us to create state vaiables by using a hook into the React functionality
- `useState` function => 1st argument is the initial state of the var. Return array of 2 values:
  - 1st is reference to access the state var
  - 2nd is a setter function to update values of that state var; react updates the var and rerenders => Binding
- setter function returned by useState is the only way React allows auto biniding and re-rendering
- React components will only render:
  - if either their parent is forced to re-render or the component is forced using code to re-render
  - if a seetter function returned by useState is used to update the state
- no limit to number of state variables.
- types of state vars: array, object, number, boolean, strings
- use the setter function to update state

**Form**
- typing in input: onchange listener can capture the latest value and store it in state var using the setter fn
- always create new object when using the setter fuunction. using spread operator to get original key-value pairs ini the new object and then override just the username field
- submit event cause browser to send info. Default browsers submit the form info to the current page itself
- causes a browser based reload of the current page => everthing gets restarted including react state and components
- default behaviour can be prevented by `event.preventDefault()` 

**Deconstructing Array and Object**

shortcut available in JS to quickly access individual elements of an array or individual fields of an object
- deconstructing object: key names have to match the var name and we can access those values quickly
- deconstructing an object that is passed as an argument to a functioin => discuss with props

## Topic: React Hooks, Props

React element arrays
- when rendered need a property on them called "key" and it need to be unique for each element => this value is an identifier
- reason key is needed: react uses position of elements in the tree to identify them and keep their state. So if element is deleted from array, next element takes the previous element position. 

Passing argument to component:
- we can access property whose value is assigned in this component => `argObject.<propertyName>`
- all children of this component => `argObject.children`

Properties should be immutable => never change once passed to the component

Component normally does not re-render if the properties have changed, unless the parent element that passes those properties is also re-rendering

**Sending Data Across Component**

outer to inner
- through assigning props in the inner component

inner to outer
- react follows a one-way data flow approach. should avoid as much as possible
- approach: send a function from outer component to inner component => using props `onChange`. inner component will run that function and pass some data to it as an argument and this way send data to outer component
- although we should try avoid sending from inner to outer components, event handling is almost always sending data from inner to outer components => should avoid creating new events in our custom components and then sending data out.

`React.createElement('select', {}, "")` is the same as `<select></select>` in JSX

Beside ternary operator, there are other ways to do if-then-else:
- we can use if-then-else syntax of JS as long as it is not inside the JSX elements (within the curly brackets, it is not allowed to use for loops or if-then syntax)
- we can use `&&` and `||` operator => short circuiting

Assigning default values to props:
- since our component is a function and props are function argument, and we also know how to have default values for function arguments
- we know how to default value our props

## Topic: useEffect, API Access with Axios, Routing

The setter fns returned by useState => 2 ways:
- If non-function is passed to it, it directly assigns that value to the state var
- If function is passed to it, it uses that function to compute the state (by passing the current state var value to) and then set it => this approach is safest if the new value depends in any way on the prev value of the state var.

**UseEffect**
- all hooks begin with "use" => indicate that React is providing that service => kind of like dependency injection from React into our component
- all hooks can only be used at the top level in the component functions; cannot use them nested within other code blocks like if-then-else or for-loops or inner functions
- There is exactly 1 type of inner function in which we can use these hooks => the function that is used to create custom hook => note that we can create our own hooks that may use 1 or more React's pre-existing hooks
- we can have useEffects as many as we need

Effect => side effects

useEffect => allows us to add side effects to our otherwise pure function component


Typically Side Effects are done:
- right after the component initializes (like onInit in Angular) => e.g. make an API call and fetch initial data to display
- anytime a specific var changes
- right before the component is to be destroyed

useEffect can combine the logic at init and destroy together in 1 function. useEffect has first argument that is a function.

`useEffect( functionToRun, objectArrayThatIncludesAllObjectsWhoseChangesCauseTheFunctionToRun);`

How to run some code only at initialization? 

```
useEffect(() = {
  // code to run for side effects
}, [])
```

How about only at init and then come other code only at destroy? 

```
useEffect( () = {
  // code to run for side effects
  
  return someOtherFnThatRunsOnlyOnDestroy
}, [])
```

How to run at init, destroy, and every re-render? 
```
useEffect( () = {
  // code to run for side effects
}) // note no second argument
```
How to run some code only at init, at every change of certain variables?
```
useEffect( () = {
  // code to run for side effects
}, [var1, var2])
```
useEffect for init and destroy is always separate from the one used onChange of variable. Init and destroy code is always together.

**Start Json Server**

`json-server -w <filename.json> -p 4000` => start server at localhost:4000

For hashed passwords, we need the bcryptjs library in our react app
- `npm i bcryptjs`
- useEffect for fetching users from API using Axios
- onSubmit, check if hashed password entered by the user matches the hashed password from backend. If match => welcome that username, else incorrect credentials


when to separate into 2 components versus do everything in 1 component. Rule: 'Strong cohesion and loose coupling' => within the same object/function the tasks done should be very closely related to each other. Across diffenrent object/functions, there should be as little dependency as possible.


## Topic: Routing, useRef

**useRef**

use ref => need to use a reference that is not lost across renderings of the component

it is a React hook

Remember:
- any renderings of a Component => the whole component function is executed
- All local variables in there are essentially re-generated => all objects that they were referring to, are no longer referred to by these vars unless we reassign
- useState assigns the appropriate value to these local vars during every render (re-run oof the component function)
- is there any other way that these vars get their original (related to the previous render) values back during re-render
  - any props and any expressions using props when assigned to the local var
  - we already talked about state => any stateVars and any expressions using stateVars when assigned to the local var (using useState)
- useRef is another way we remember values between renders, how is this diff than useState? Are these not state vars??
  - BIG difference => if REF value changes, it does not force a re-render like a SETTER function being called for a state var DOES
  - Good example: most common use case is ref to a DOM element in our view
- Syntax:

  `let myRef = useRef(initialValue); // defined a ref`
  `myRef.current // this is the latest/current value to the Ref`
- How to create a REF on a DOM element? The ref should point to the DOM element example an input element in a form
  - `<input ref={myRef}>`
  Once the above marking is done, `myRef.current` will refer to the above input element in the DOM
  - useful to access `myRef.current.value` to access any input/textarea/select field's values ANYWHERE in the component
  - Note that `event.target.value` can only be used on the ELEMENT at which the even is happening. Can't use this outside that element anywhere else in the component
  - NOTE: the way we will access VALUES of ELEMENTS outside that element => through model object that are bound to the elements

**Routing**

Routing functionality in a SINGLE PAGE APP like React or Angular
- Making the JS display different VIEWS based on different URL paths without causing a full browser reload

Implications:
- The LINKS in our apps should not be normal html links that cause the browser to re-load pages; they should invoke JS.
- The JS, if it follows the "JS enabled" links should be able to change the url path displayed in the browser url address bar. Not hard at all => `window.location.<something>` in JS to do this. some pre-existing libraries can do this.
- Routing in React can be done through several differnet libraries; the most common one => `react-router-dom` is part of the syllabus
- We need to CONFIG the mapping between URL path and component displayed. `<PlaceHolderElementName path="/some/path" component={someComponent} />`
- There should be a location or element in the view where the different components for different paths are being rendered
  - `<Outlet></ Outlet>` => where different component will be rendered for different paths (`<router-outlet>< / router-outlet>` in Angular)

Objects from React-Router-Dom
- BrowserRouter component => utility components adds the router functionality; our components that need router functionality should be wrapped somehwere inside this component as children; usage pattern is similar to other utility components like => `React.StrictMode`
- Inside the BrowserRouter, we can have the "Routes" component (utility component => not really displayed but allows the inside Routte components to be displayed)
- "Route" components inside "Routes" are either displayed or not depending on whether the route matches the URL path.
```
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
</ Routes>
```
- Note that with the above markup, we don't need `<Outlet></ Outlet>` because the rendering happens wherever the "routes" 

Route elements can be inside other Route elements
- urlPath of the outer Route is pre-pended with the urlPath of the inner Route to get the path for the display of the inner Route's component
```
<Route path="/" element={<Header />} >
  <Route path="home" element={<Home />} />
  <Route path="about" element={<About />} />
</ Route >
```

`/home` displays "home" element inside the "Header" element where the `<Outlet>` is marked => insdie the "Header" will need a "Outlet"

`/` displays the "Header" and needs to decide what to display where the "Outlet" is => can leave it as empty or have a default element to display.

```
export const Header = () => {
  return (<nav>
    <Link to="home">Home</link> |
    <Link to="about">About Us</link>
    <Outlet />
  </nav>)
}
```
Reminder: absolute paths begin with `/`. Relative paths do not.

Route Parameters are like we have parameters in backend API urls.
In JS, unlike Springboot, the URL params are noted with colon ":authorId" indead of "{authorId}"

In the URL paths, "*" indicates wild card matching => any text is allowed. "**" usually mean wildcard matchin gincluding multiple "/" in the URL path allowed. ":paramName" => any text is allowed there BUT the value used in path will be available in a param with name of "paramName"

How to acess URL params? Use HOOKS => like dependency injection => hooking into some functionality provided by something external to our component. `react-router-dom` library provide functionality to extract these values for us
- `let params = useParams();`
- `params.someNumber` contains the value in the urlPath that matched this parameter

One major functionality left still => programmatic navigation => `useNavigate()`
- `let navigate = useNavigate();`
- `navigate('pathToNavigateTo');`

We never practiced accessing parameters from URL path:
- let's create path "/viewDefects/:id" that displays a new Component `<ViewSingleDefect defect={passedDefect} />`
- inside this new component => fetch that sinlge component from the backend API using GET /defects/id