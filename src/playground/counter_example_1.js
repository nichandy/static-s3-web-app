let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

// JSX does not have built in data binding
const template = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne} className="button" type="submit">
      +1
    </button>
    <button onClick={minusOne} className="button" type="submit">
      -1
    </button>
    <button onClick={reset} className="button" type="submit">
      0
    </button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} className="button" type="submit">
        +1
      </button>
      <button onClick={minusOne} className="button" type="submit">
        -1
      </button>
      <button onClick={reset} className="button" type="submit">
        0
      </button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderCounterApp();
