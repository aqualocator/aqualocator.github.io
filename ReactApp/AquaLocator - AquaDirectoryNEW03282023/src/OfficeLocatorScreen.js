import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';
import btn_icon_back_officelocator from './images/btn_icon_back_officelocator.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class OfficeLocatorScreen extends Component {

  static contextType = ScreenContext;


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

  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.context.transitionId && this.context.transitionId.length > 0 && this.context.atTopOfScreenStack && this.context.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.context.transitionId;
    }
    if ( !this.context.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      boxSizing: 'border-box',
      backgroundColor: '#f6f6f6',
     };
    
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = this.props.dataSheetRow ? this.props.dataSheetRow.URL : '';
    
    const style_elEmbed = {
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen OfficeLocatorScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="embeddedContent elEmbed">
            <div style={style_elEmbed}>
              <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
            </div>
          </div>
        </div>
        <div className="navBarContainer">
         <Appbar className="navBar">
          <div className="title">{this.props.FullName}</div>  <div className="backBtn" onClick={ (ev)=>{ this.context.appActions.goBack() } }><img src={btn_icon_back_officelocator} alt="" style={{width: '50%'}} /> </div>
         </Appbar>
        </div>
        
      </div>
    )
  }
  
}
