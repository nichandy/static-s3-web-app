console.log('App.js is running!');

const app = {
  title: 'My Title',
  subtitle: 'This is my subtitle',
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }

  render();
  console.log(option);
};

const onRemoveClick = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
  const displayOptionLength = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      {numbers.map((number) => {
        return <p key={number}>Number: {number}</p>;
      })}
      <ol>
        {app.options.map((option) => (
          <li key={app.options.indexOf(option)}>Option: {option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveClick}>Remove Options</button>
    </div>
  );
  ReactDOM.render(displayOptionLength, appRoot);
};

render();
