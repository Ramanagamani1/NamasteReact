## Parcel

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File watching algorithm - written in C++
- Caching - Faster builds
- Image Optimization
- Bundling
- Compress
- Minification
- Consistent Hashing
- Code splitting
- Differential Bundling - support older browsers
- Diagnostics - beautiful errors
- Error Handling
- HTTPs
- Tree shaking => removes unused code, imports/exports
- Transpilation
- lazy dev builds
- Different dev and prod builds

## What is Emmet

Emmet is a set of plugins for text editor that allows for high speed coding and editing in HTML, XML, XSLT and other structured code formats. This is used by vscode

## Framework

A JavaScript framework is a set of JavaScript code libraries that provide pre-written code for everyday programming tasks to a web developer. The frameworks are made up of numerous libraries that include hooks and callbacks so that you can build on top of them.

## Library

A JS library is a piece of reusable code with a single primary use case. A JavaScript library can have multiple functions/objects/methods depending on the language. To have access to that capability, your application will link to a library.

## CDN

A content delivery network (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are.

CDNs rely on a process called “caching” that temporarily stores copies of files in data centers across the globe, allowing you to access internet content from a server near you.Content delivered from a server closest to you reduces page load times and results in a faster, high-performance web experience. By caching content like web pages, images, and video in servers near your physical location, CDNs allow you to do things like watch a movie, download software, check your bank balance, post on social media, or make purchases without having to wait for content to load.

## Why is react called as React

It "reacts" quickly to changes without reloading the whole page. It uses the virtual DOM to efficiently update parts of a webpage. It's built around components that "react" and update.

## What is cross origin in script tag

The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

## Difference between React and ReactDOM

While React provides the tools and concepts to define component-based user interfaces, ReactDOM handles the task of rendering those interfaces in a web environment.

React: React is a javascript library, designed for building better user interfaces.

React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM

## NPM

Node Package Manager which manages all the packages of the project

## Parcel/Webpack

These are bundler tools which helps to bundle our apps properly so that it cen be shipped to production

## .parcel-cache

Parcel performs caching.

The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode

## NPX

npx is used to execute the code .npx stands for Node Package Execute.It's a npm package runner that can execute any package from the npm registry without ever installing it.

## dependencies vs devDependencies

dependencies which are required for our app to run and devDependencies are only needed in development mode

## package.json

It is a configuration file for npm

## package-lock.json

It will keep track of the exact version of the packages installed.

## dist folder

The production ready files will be placed in the dist folder which can be hosted in server

## browserlists

We can specify in package.json which browser versions our app should support.

## Difference between ~ and ^ in package.json

~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

### JSX

Javascript XML - JSX is HTML like syntax

If we do not give key to the list elements, and try to add new list element, then react will rerender all the list elements as it treats all the elements as same.

JSX is not a requirement for using React. Using React without JSX is especially convenient when you don't want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling React.

### Reconciliation:

Deciding which DOM elements actually need to be inserted, deleted or updated in order to reflect the latest state changes.

Fiber: Fiber is a unit of work. current state, props, side effects, used hooks, queue of work

## Virtual DOM

React uses Virtual DOM which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document.

Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM

## Config Driven UI

Config-driven UI is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components. This can be useful for creating dynamic and customizable UIs without hard coding them.

## Named and Default Exports

Default exports are used to export a single "main" value from a module, while named exports allow us to export multiple values with specific names. Default exports allow us to import the exported value with any name in the importing module, while named exports require us to use the exact exported names when importing

## React Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.Hooks can be stateful and can manage side-effects.

## Shimmer UI

A better way to show loading states is to use a shimmer UI. A shimmer UI is a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.

## useState

Whenever state variables update, react triggers a reconciliation cycle i.e it will rerenders the component.

## Monolith vs Microservices architecture

- A monolithic architecture is a traditional approach to designing software where an entire application is built as a single, indivisible unit. In this architecture, all the different components of the application, such as the user interface, business logic, and data access layer, are tightly integrated and deployed together.
- This means that any changes or updates to the application require modifying and redeploying the entire monolith.

- In a microservices architecture, an application is built as a collection of small, independent services, each representing a specific business capability. These services are loosely coupled and communicate with each other over a network, often using lightweight protocols like HTTP or messaging queues.
- Each service is responsible for a single functionality or feature of the application and can be developed, deployed, and scaled independently.
- The Microservice architecture has a significant impact on the relationship between the application and the database.
- Instead of sharing a single database with other microservices, each microservice has its own database. It often results in duplication of some data, but having a database per microservice is essential if you want to benefit from this architecture, as it ensures loose coupling.

## 2 types of routing in web apps

- Client side routing -> it will not make a network call and will not refresh the web app. single page application.
- server side routing -> makes the network call and it also refreshes the whole app.

## Why do we use super(props) in constructor?

https://overreacted.io/why-do-we-write-super-props/

## Why can't we have the callback function in useEffect async ?

Async calls in javascript can help us in API calls and fetching data from server, but why is it we can't use async calls with useEffect like shown below:

    useEffect( async () => {
    // api call or data fetch
    }, [])

// It gives an ERROR...
We can not directly make the callback function in useEffect hook async because of two reasons:

- async functions implicitly returns a promise.
- useEffect expects its callback to either return nothing or a cleanup function.

So, basically React.js useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using async here will cause a bug as cleanup function will never get called.

To work around this we can:

- Create a self-invoking anonymous function.

      useEffect(() => {
        (async function () {
            console.log('any api call')
        })();

        return() => {
        // perform any cleanup
        }
      }, [])

- Create a nested named function

        useEffect(() => {
            async function fetchData() {
                // You can await here
                const response = await MyAPI.getData(someId);
                // ...
            }
            fetchData();
            return() => {
                // perform cleanup
            }
        }, [])

## React Life Cycle Method Diagram -

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## Chunking/code splitting/dynamic bundling/lazy loading/dynamic imports

logical separation of bundles. on demand loading

const Grocery = React.lazy(()=> import("./components/Grocery"));

Why we got this error : A component suspended while responding to
synchronous input. This will cause the UI to be replaced with a loading indicator.
To fix, updates that suspend should be wrapped with startTransition? How does
suspense fix this error? -- as we are loading the component lazily , React could not find the component and will throw this error. To avoid this , we need to wrap the lazily loading component with Suspense.So that the fallback content will be shown till the time the component is loaded.

## Styling React apps

- CSS
- SASS adds some superpowers to CSS.
- Styled components
- Material UI
- Bootstrap
- Chakra UI
- Ant Design
- Tailwind CSS

## Tailwind CSS

- Rapidly build modern websites without ever leaving your HTML
- PostCSS - a tool for transforming CSS with javascript
- Parcel will use the postcssrc to read the tailwindcss
- if there is no specific class write it in []. eg: w-[200px]
- Parcel will include only the required tailwind css in the bundled file
- Tailwind automatically removes all unused CSS when building for production, which means your final CSS bundle is the smallest it could possibly be.

## Higher order components

const withPromotedLabel = (RestaurantCard) => {

    return (props) => {
        return (
            <div>
              <label>Promoted</label>
              <RestaurantCard {...props}/>
            </div>
        )
    }

}
const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

## Redux Toolkit

- npm install @reduxjs/toolkit react-redux
- Build our store
- Connect our store to the app.
- Slice (cartSlice)
- Dispatch an action
- Read the data using Selector

## Testing

- types of testing (developer can do):
- Unit testing - test your component in isolation
- Integration testing
- End to End testing (E2E testing)
- React testing library builds on top of DOM Testing Library
- React testing library uses jest (a javascript testing library)

### Setting up testing in our app
- install react testing library
- install jest
- install babel dependencies for jest with babel
- babel.config.js (parcel already uses babel behind the scenes.)
- configure parcel config file to disable default babel transpilation
- JSDOM is a library which parses and interacts with assembled html, just like a browser.
- install jsdom library
- install @babel/preset-react - to make jsx work in test cases
- include @babel/preset-react inside my babel config
- install @testing-library/jest-dom
- __tests__ = these are called dunder __ __