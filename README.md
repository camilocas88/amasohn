# Amasohn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Api server

Run json-server db.json for db data, inside folder API. the backend is generated on the following endpoint `http://localhost:3000/`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Angular Tech Challenge

## What is the use of @Input and @Output?

Input is used to receive data in whereas Output is used to send data out. Output sends data out by exposing event producers, usually EventEmitter objects.

## What is ng-content Directive?

ng-container is an directive that allows you to group elements in a template but doesn’t itself get rendered in the DOM

## What is ViewEncapsulation?

Angular Framework provides the View Encapsulation features by default. It totally depends upon us how we want to implement View Encapsulation in Angular? We can either enable this by using Shadow DOM or event emulate it. Using View Encapsulation, we can define whether the template and styles used within the component can affect the entire application or vice versa.

## What is Dependency Injection?

dependency injection is a technique in which an object receives other objects that it depends on. These other objects are called dependencies.

## Differentiate between Observables and Promises

Observables are declarative. Computation doesn't start until subscription. Promises run immediately on creation.

## What is AOT Compilation and JIT Compilation?

The main differences between JIT and AOT in Angular are: Just-in-Time (JIT), compiles your app in the browser at runtime. Ahead-of-Time (AOT), compiles your app at build time on the server.

## How to set headers for every request in Angular?

```
const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const requestOptions = {
  headers: new Headers(headerDict),
};

return this.http.get(this.heroesUrl, requestOptions)

```

## Explain improvements in Tree-Shaking

to refer to a step during the build process where unused code is not included in the bundle, making the overall bundle smaller.

## What is the difference between BehaviorSubject vs Observable?

```
// Behavior Subject

// a is an initial value. if there is a subscription
// after this, it would get "a" value immediately
let bSubject = new BehaviorSubject("a");

bSubject.next("b");

bSubject.subscribe(value => {
  console.log("Subscription got", value); // Subscription got b,
                                          // ^ This would not happen
                                          // for a generic observable
                                          // or generic subject by default
});

bSubject.next("c"); // Subscription got c
bSubject.next("d"); // Subscription got d

// Regular Subject

let subject = new Subject();

subject.next("b");

subject.subscribe(value => {
  console.log("Subscription got", value); // Subscription wont get
                                          // anything at this point
});

subject.next("c"); // Subscription got c
subject.next("d"); // Subscription got d
```

## How do you perform Error handling for HttpClient?

```
       this.var$ =
            this.Service.getBooks()
                .pipe(
                    catchError(error => {
                        this.errorMsg = error.message;
                        return of([]);
                    })
                );
    }
```

## Why would you use lazy loading modules in Angular app?

Lazy loading is a technique in Angular that allows you to load JavaScript components asynchronously when a specific route is activated.

## Mention some of the design patterns used in an Angular app. Where?

### Singleton

It is a creational pattern because it ensures that no matter how many times you try to instantiate a class, you’ll only have one instance available

Services

### Factory method

working on top of the object we care about, this pattern only takes care of managing its creation.

## Observer

Essentially the pattern states that you have a set of observer objects

### Decorator

## What does "detectChanges" do in Angular jasmine tests?

Change detection isn't done automatically, so you'll call detectChanges on a fixture to tell Angular to run change detection.

## What is TestBed?

Is a mock environment to run Angular2 component tests without the browser.

## Why would you use a spy in a test?

Spies are an easy way to check if a function was called or to provide a custom return value. We can use spies to test components that depend on a service and avoid actually calling the service's methods to get a value.
