/*global window*/

/**
 * Mixin
 *
 * @requires {array} breakpoints
 * breakpoints [
 *   {name: 'mobile', width: 0},
 *   {name: 'desktop', width: 990},
 * ]
 *
 * @requires {function} onBreakpointChange
 * onBreakpointChange(breakpointName) {
 *   // Act on breakpoint
 * }
 *
 */
var Breakpointable = {
  componentDidMount: function () {
    this.state.breakpoint = this.getBreakpointAt(this.getWindowWidth());
    window.addEventListener('resize', this.onWindowResize);
  },
  componentWillUnmount: function () {
    window.removeEventListener('resize', this.onWindowResize);
  },
  onWindowResize: function () {
    this.setState({breakpoint: this.getBreakpointAt(this.getWindowWidth())});
  },
  getWindowWidth: function () {
    return window.innerWidth || window.clientWidth || window.document.documentElement.clientWidth;
  },
  getBreakpointAt: function (maxWidth) {
    var width = -1;
    var name;
    for (var i = this.breakpoints.length - 1; i >= 0; i--) {
      if (this.breakpoints[i].width > width && this.breakpoints[i].width <= maxWidth) {
        width = this.breakpoints[i].width;
        name = this.breakpoints[i].name;
      }
    }
    return name;
  }
};
module.exports = Breakpointable;
