var nj = require('./nojs-react') 
var {React,ReactDOM,utils} = nj
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
      show (name){
        wrap = wrap || nj.utils.createContainer('nj-mask ng-layer-wrap')
        this.mask = mask = ReactDOM.render(
          <Mask />,
          wrap
        );
        mask.setState({name})
        mask.setDisplay(true)
      },
      hide (){
        if( mask ){
          mask.setDisplay(false)
          mask.setState({'name':''})
        }
      }
    }
  })(),
  render () {
    var {name, className} = this.state
    return (
        <div ref="layer" className={utils.joinClass(name,className)}></div>
    )
  }
});

module.exports = Mask

  
