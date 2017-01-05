// import react
let render = ReactDOM.render;
let Component = React.Component;

// import react-router
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let Link = ReactRouter.Link;
let IndexRoute = ReactRouter.IndexRoute;
let hashHistory = ReactRouter.hashHistory;
let browserHistory = ReactRouter.browserHistory;

const Nav = () => (
  <div>
    <Link to="/">Home</Link>&nbsp;
    <Link to="/address">Address</Link>
  </div>
);

const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
);

const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
const NotFound = () => <h1>404 - This page is not found!</h1>

render((
  
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Home} />
      <Route path="/address" component={Address} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>

), document.getElementById('app'));
