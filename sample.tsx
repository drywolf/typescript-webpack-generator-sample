import * as fetch from 'isomorphic-fetch';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// ----------------------------------------------------------------------------------------------------
// React DOM rendering sample
// see: https://jsfiddle.net/reactjs/69z2wepo/
// ----------------------------------------------------------------------------------------------------

const ES5StyleReact = React.createClass
({
    render()
	{
        return <div>Hello React ES5-Style!</div>
    }
})

class ES6StyleReact extends React.Component<any, any>
{
	public render()
	{
		return <div>Hello React ES6-Style!</div>;
	}
}

ReactDOM.render(
	<div>
		<ES5StyleReact/>
		<ES6StyleReact/>
	</div>,
	document.getElementById("react_content"));

// ----------------------------------------------------------------------------------------------------
// Async & Await sample with REST-API fetching
// see: https://templecoding.com/blog/2016/02/17/async-await-with-es6-babel-and-typescript/
// ----------------------------------------------------------------------------------------------------

interface Movie
{
  Title: string;
}

async function load(): Promise<Movie>
{
  try
  {
	// NOTE: try to change the URL to make the fetch fail and see the async error handling in action
    let response = await fetch('http://www.omdbapi.com/?t=The Matrix');
    let movie: Movie = await response.json();
    return movie;
  }
  catch (err)
  {
    console.error("Async Error caught:", err);
  }
}

load()
	.then(movie => console.log("Async & Await result:", movie.Title, movie))
	.catch(err => console.error("Result-Promise error:", err));

// ----------------------------------------------------------------------------------------------------
// Generator function sample with finite values
// see: https://github.com/JustinDrake/node-es6-examples#generators
// ----------------------------------------------------------------------------------------------------

function* argumentsGenerator(...args: any[])
{
  for (let i = 0; i < arguments.length; i += 1)
  {
    yield arguments[i];
  }
}

var argumentsIterator = argumentsGenerator('a', 'b', 'c');

// Prints "a b c"
for (let x of argumentsIterator)
	console.log(`argumentsGenerator value: ${x}`);

// ----------------------------------------------------------------------------------------------------
// Fibonacci sequence generator sample with infinite values
// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// ----------------------------------------------------------------------------------------------------

function* fibonacci()
{
  var fn1 = 1;
  var fn2 = 1;
  while (1)
  {
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    var reset = yield current;
    if (reset)
	{
        fn1 = 1;
        fn2 = 1;
    }
  }
}

var sequence = fibonacci();

for (let i = 0; i < 10; ++i)
	console.log(`fibo(${i}) = ` + sequence.next().value);
