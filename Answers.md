1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    `Object.assign()`, `Array.concat()`, `Array.map()` & `Array.filter()`

    `Object.assign()` creates new Object without mutating the old one.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    The store is like a global state that every file/app can use within the project. Actions are the UI calls that send data to store. Reducers are how the actions are going to change the store data. 


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Component state is confined and within that component. Cannot be accessed outside without being passed. Application state is the state of the entire application. 

4.  What is middleware?
    Middleware is the bridge between action and reducer.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Middleware...?

6.  Which `react-redux` method links up our `components` with our `redux store`?
    mapStateToProps