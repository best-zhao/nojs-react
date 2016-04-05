var nj = require('./nojs-react') 
var {
  React,
  ReactDOM
} = nj
/**
 * 遮罩层组件
 * 提供show/hide 2个事件 
 */
var Mask = React.createClass({
  mixins: [nj.mixins.setDisplay],
  getDefaultProps () {
    return {effect : 'fade'};
  },
  statics : (function(){
    var mask, wrap;
    return {
      show (){
        wrap = wrap || nj.utils.createContainer('nj-mask ng-layer-wrap')
        this.mask = mask = ReactDOM.render(
          <Mask />,
          wrap
        );
        mask.setDisplay(true)
      },
      hide (){
        mask && mask.setDisplay(false)
      }
    }
  })(),
  render () {
    return (
        <div ref="layer" className={this.state.className}></div>
    )
  }
});

module.exports = Mask

  
