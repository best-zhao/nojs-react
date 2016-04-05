/**
 * 双向绑定
 * <input valueLink={this.linkState('name')} />
 * <input type="checkbox" checkedLink={this.linkState('booleanValue')} />
 */
module.exports = {
    linkState : function(name){
        return {
          value: this.state[name],
          requestChange: function(newValue){
            var state = {};
            state[name] = newValue;
            this.setState(state);
          }.bind(this)
        }
    }
}