import React , {Component} from "react"
import "./Item.css"

class Item extends Component{
  constructor(props){
    super(props)
    this.renderItemsList = this.renderItemsList.bind(this) 
    this.enterPressHandler = this.enterPressHandler.bind(this)
    this.state = {
      items: []
    }
  }

  renderItemsList = () => {
    const items = [...this.state.items]
    const item = this.refs.myInput.value
    items.push(item)
    this.setState({items: items})
    this.refs.myInput.focus()
    this.refs.myInput.value = ""
  }

  enterPressHandler = (event) => {
    if(event.which === 13 && this.refs.myInput.value !== ""){
      this.renderItemsList()
    }
  }

  render(){
    return(
      <div className="wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6">
              <div className="input-wrapper">
                <input type="text" name="" ref="myInput" onKeyPress={(event) => this.enterPressHandler(event)} />
                <button className="btn-add" type="button" onClick={() => this.renderItemsList()}>ADD</button>
              </div>

              <div className="lists">
                <ul className="list-group">
                  {
                    this.state.items.map((item,index) => {
                      return(
                        (index+1) % 3 === 0 ? <li className="list-group-item active">{item}</li> :  <li className="list-group-item">{item}</li>      
                      )
                    })
                  }
                 
                </ul>
              </div>
            </div>  
          </div> 
        </div>   
      </div>
    ) 
  }
}

export default Item