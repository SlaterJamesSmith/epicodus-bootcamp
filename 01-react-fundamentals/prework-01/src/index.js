function liveTime() {
  const GREETING = React.createElement('h1', {}, 'Hello, World!');
  const CLOCK = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
  const APP = React.createElement('div', {}, GREETING, CLOCK);

  ReactDOM.render(
    APP,
    document.getElementById('react-app-root')
  );
}

setInterval(liveTime, 1000);
