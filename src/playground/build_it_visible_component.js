class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visible ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visible && (
          <p>
            Can't you see what you do to me, baby?. You make me crazy, you make
            me act like a maniac. I'm like a lunatic, you make me sick. You're
            truly the only one who can do this to me. You just make me get so
            crazy. I go schizo, I get so insane I just go schizophrenic. One
            minute I wanna slit your throat, the next I wanna sex.
          </p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
