# breakpointable
A React Mixin to respond to changing viewport breakpoints

## Integration

Three steps:
1. Add the mixins
2. Define your breakpoints
3. Add a change listener

```jsx
var Breakpointable = require('react-breakpointable');

var MyComponent = React.createClass({
  mixins: [Breakpointable],
  breakpoints [
    {name: 'mobile', width: 0},
    {name: 'desktop', width: 990},
  ],
  onBreakpointChange(breakpointName) {
    // Act on breakpoint
    this.setState({
      breakpoint: breakpointName
    });
  }
  render: function () {
    return <div class={"my-component my-component-" + breakpointName}>
      {breakpointName == "desktop" &&
        <h1>Desktop-only</h1>}
      {breakpointName == "mobile" &&
        <h1>Mobile-only</h1>}
    </div>
  }
});
```
