import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';
import img_elImage from './images/AboutScreen_elImage_738538.jpg';
import btn_icon_back_about from './images/btn_icon_back_about.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class AboutScreen extends Component {

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
    const style_elImage = {
      height: 'auto',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<iframe src=\"https://drive.google.com/file/d/1y42ov6DJ8MwGHBqNosJDUf7uvLBkRH9c/preview\" width=“440\" height=“280\"></iframe>";
    
    const style_elEmbed = {
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen AboutScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elImage">
            <img style={style_elImage} src={img_elImage} alt=""  />
          </div>
          
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{this.context.locStrings.about_text_204177}</div>
            </div>
          </div>
          
          <div className="embeddedContent elEmbed">
            <div style={style_elEmbed}>
              <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
            </div>
          </div>
        </div>
        <div className="navBarContainer">
         <Appbar className="navBar">
          <div className="title">{this.context.locStrings.screen6_navbar_986823}</div>  <div className="backBtn" onClick={ (ev)=>{ this.context.appActions.goBack() } }><img src={btn_icon_back_about} alt="" style={{width: '50%'}} /> </div>
         </Appbar>
        </div>
        
      </div>
    )
  }
  
}
