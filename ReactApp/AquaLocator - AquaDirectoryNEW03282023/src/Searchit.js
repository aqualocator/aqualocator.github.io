import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class Searchit extends Component {

  static contextType = ScreenContext;

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  textInputChanged_elField = (event) => {
    this.setState({field: event.target.value});
    
    this.context.appActions.updateDataSlot("ds_filter", event.target.value);
  }
  
  getValue_elField = () => {
    return (this.context.appActions.dataSlots ? this.context.appActions.dataSlots['ds_filter'] : '');
  }
  
  onClick_elButton = async () => {
    this.context.appActions.updateDataSlot('ds_filter', "");
  
    this.setState({field:''});
  
  }
  
  
  render() {
    
    const style_elField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      fontSize: 12.0,
      textAlign: 'left',
      pointerEvents: 'auto',
     };
    
    const style_elButton = {
      display: 'block',
      fontSize: 10.0,
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="Searchit appBg">
        <div className="layoutFlow">
          <div className="elField">
            <input className="systemFontRegular" style={style_elField} type="text" placeholder={this.context.locStrings.txtsearch} onChange={this.textInputChanged_elField} value={this.getValue_elField()}  />
          </div>
          
          <div className="elButton">
            <Button className="systemFontRegular" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              {this.context.locStrings.searchit_button_27018}
            </Button>
          </div>
        </div>
        
      </div>
    )
  }
  
}
