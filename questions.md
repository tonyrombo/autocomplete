# Questions

## 1. What is the difference between Component and PureComponent? Give an example where it might break my app.

Component and PureComponent are both classes in React used to create reusable UI elements. The difference is that PureComponent implements a shallow comparison between the previous and new props/state, and only re-renders if there are changes. This can improve performance in some cases, but it can break your app if you're relying on deep object comparisons or using mutable data structures. For example, if you pass an object reference as a prop to a PureComponent, changes to the object won't trigger a re-render. To fix this, you would need to make sure to create a new object with updated values each time.

## 2. Context + ShouldComponentUpdate might be dangerous. Why is that?

Context and ShouldComponentUpdate can be dangerous because ShouldComponentUpdate is used to optimize performance by preventing unnecessary re-renders. However, if you use Context to pass data down to child components, changes to the context can bypass ShouldComponentUpdate and trigger a re-render of the child components, even if their props haven't changed. This can lead to unexpected behavior and performance issues.

## 3. Describe 3 ways to pass information from a component to its PARENT.

Three ways to pass information from a component to its parent are:

Pass a function as a prop from the parent component to the child component, and call the function with the data as an argument from the child component.
Use the useCallback hook in the child component to memoize a function that updates the parent component's state, and pass it down as a prop.
Use a state management library like Redux or React Context to manage shared state between components.

## 4. Give 2 ways to prevent components from re-rendering.

Two ways to prevent components from re-rendering are:

Use React.memo to create a memoized version of the component that only re-renders if its props have changed.
Use shouldComponentUpdate or React.PureComponent to optimize performance by preventing unnecessary re-renders.

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is a way to group multiple elements in React without adding an extra DOM node. This can be useful for rendering lists or conditional elements without adding extra markup.
The use of the fragments can break your app if you forget to use a key prop when rendering a list of fragments. React uses keys to track the identity of each element in the list and optimize updates, so forgetting to include a key can lead to performance issues and unexpected behavior.

## 6. Give 3 examples of the HOC pattern.

Three examples of the Higher Order Component (HOC) pattern are:

WithAuth HOC that adds authentication logic to a component by checking if the user is logged in and redirecting them to a login page if not.
WithLoading HOC that displays a loading spinner while the component's data is being fetched.
WithErrorHandling HOC that catches errors thrown by the component and displays an error message to the user.

## 7. What's the difference in handling exceptions in promises, callbacks and async...await?

Promises, callbacks, and async/await all handle exceptions differently. Promises use the catch method to handle errors that occur during asynchronous operations. Callbacks typically take an error object as the first argument, and you can check if the error is truthy to handle exceptions.

## 8. How many arguments does setState take and why is it async.

setState takes two arguments: an object containing the updated state values, and an optional callback function to be called after the state has been updated. The reason setState is async is that React batches state updates to optimize performance. When you call setState, React doesn't immediately update the component's state and re-render it. Instead, it schedules an update to happen later and batches multiple updates together to minimize DOM manipulations.

## 9. List the steps needed to migrate a Class to Function Component.

Here are the steps to migrate a Class Component to a Function Component in React:

Replace the class declaration with a function declaration and remove the render() method.
Remove the this keyword from any class properties or methods that use it, since function components don't have a this context.
Replace componentDidMount(), componentDidUpdate(), and componentWillUnmount() with the useEffect() hook, which provides similar functionality.
Replace setState() calls with the useState() hook to manage component state.
Replace any instance methods that use this.props with function arguments, since props are now passed as function arguments in function components.
Update any event handlers or lifecycle methods that use this to use closures or the useRef() hook instead.

## 10. List a few ways styles can be used with components.

There are several ways to use styles with React components:

Inline styles: You can use the style prop to add inline styles to a component.
CSS classes: You can define CSS classes in a separate CSS file or in a style block, and use the className prop to apply them to a component.
CSS-in-JS: You can use a library like styled-components or emotion to define styles as JavaScript objects or template literals.

## 11. How to render an HTML string coming from the server.

To render an HTML string coming from the server, you can use the dangerouslySetInnerHTML prop in React. This prop accepts an object with a __html property containing the HTML string to render.