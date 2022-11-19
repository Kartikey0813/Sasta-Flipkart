Oues. 1 :- What is REACT ?
Ans:- REACT is an JavaScript library used to build user interfaces based on UI components. It is free and managed by META and community of some individual developers.

Ques. 2 :- Who made REACT ?
Ans:- React was created by Jordan Walke.

Ques. 3 :- What is Babel ?
Ans:- Babel is JS compiler that allows us to use advance JS inn older browsers or future JS in present browsers.

Ques. 4 :- How does Babel convert html code in React into valid code?
Ans:- The role of Babel is to covert the mordern or advance JS or JSX to vanilla JS which means to an executable Code.

Ques. 5 :- What is ReactDOM used for? Write an example?
Ans:- ReactDOM is a package that provides DOM specific methods that can be used at the top level of the web apps to enable an efficient way of managing DOM elements of the web page. It uses the observable to detect state and prop changes. ReactDOM provides the developers with an API contaning the following methods and a few more. 
Syntax:- ( import ReactDOM from "react-dom" )

1. render(), Syntax :- ReactDOM.render(element, container, callback)
2. findDOMNode(), Syntax :- ReactDOM.findDOMNode( component )
3. unamountComponentAtNode(), Syntax:- ReactDOM.unmountComponentAtNode( container )
4. hydrate(), Syntax:- ReactDOM.hydrate(element, container, callback)
5. createPortal(), Syntax:- ReactDOM.createPortal(child, container)

Ques. 6 :- What are the packages that you need to import for react to work with?
Ans:- Some of the packages that are required to be imported for react to work are :- 
1. React Testing Library.
2. Framer Motion
3. styled-components
4. Cypress
5. Prettier
6. ESLint
7. Redux
8. Redux Thunk
9. Formik
10. Recharts etc.

Ques. 7 :- How do you add react to a web application?
Ans:- Steps that are required to add React:- 
Step 1:- Open the HTML file and add DOM container into it.
Step 2:- Add script tags.
Step 3:- Create a React Component.

Ques. 8 :- What is React.createElement?
Ans:- A react element is a description of what the actual DOM element should look like. React.js don’t use the browser DOM directly instead, it uses virtual DOM to design the UI/UX and to interact with browser.

Ques. 9 :- What are the three properties that createElement accept?
Ans:- React.createElement() has three arguments which are:-
1):- type: the type of the HTML element (h1,p,button).
2):- props: properties of the object({style:{size:10px}} or Eventhandlers, classNames,etc).
3):- children: anything that need to be displayed on the screen.

Ques. 10 :- What is the meaning of render and root?
Ans:- Render():- The purpose of the function is to display the specified HTML code inside the specified HTML element.
and root is the element that exists in the original HTML that all of the React contents go into.