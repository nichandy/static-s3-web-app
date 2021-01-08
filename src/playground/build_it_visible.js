let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <p>
          If you could count the skeletons in my closet. Under my bed and up
          under my faucet. Then you would know I've completely lost it. Is he
          nuts? No, he's insane. If you could count the skeletons in my closet.
          Under my bed and up under my faucet. Then you would know I've
          completely lost it. Is he nuts? No, he's insane.
        </p>
      )}
    </div>
  );

  ReactDOM.render(jsx, appRoot);
};

render();
