/**
 * Components
 * App
 */
var nj = require('nj')
var {React, ReactDOM} = nj
var {connect} = require('react-redux')
var SearchPhoto = require('./SearchPhoto')
var {searchPhoto} = require('../actions')

var fetch = require('isomorphic-fetch')

var App = React.createClass({
    getInitialState (){
        return {}
    },    
    handleChoose (e) {
        var photo = e.target.src
        this.setState({selected:photo.replace(/_n/,'_b')})
    },
    componentWillReceiveProps (nextProps) {
        this.setState({selected:null})
    },
    render () {
        var {dispatch, photos} = this.props
        var {selected} = this.state 
        return (
        <div>
            <SearchPhoto onSearch={text=>dispatch(searchPhoto(text))} />
            {photos.isFetching?(<div>loading……</div>):null}
            {photos.items.map((photo)=>{
                return <span key={photo.id}><img onClick={this.handleChoose} src={'//c1.staticflickr.com/'+photo.farm+'/'+photo.server+'/'+photo.id+'_'+photo.secret+'_n.jpg'} width="70" height="70" /></span>
            })}
            {selected&&(<div><img src={selected} style={{maxHeight:700,maxWidth:800}}/></div>)}
        </div>
        )
    }
})
function select(state){
    return {
        photos : state.photos
    }
}
module.exports = connect(select)(App)