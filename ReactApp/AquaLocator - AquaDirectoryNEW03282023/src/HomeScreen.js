import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';
import img_elImage from './images/HomeScreen_elImage_1002441.jpg';
import btn_icon_198933 from './images/btn_icon_198933.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class HomeScreen extends Component {

  static contextType = ScreenContext;


  constructor(props) {
    super(props);
    
    this.state = {
      text: (<div>AQUALocator</div>),
      text_plainText: "AQUALocator",
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  onClick_elText3 = async () => {
    window.open('https://form.jotform.com/193454652984168', '_blank');
  
  }
  
  
  onClick_elButton = async () => {
    // Go to screen 'AquaDirectory'
    this.context.appActions.goToScreen('aquaDirectory', this.context.baseScreenId, { transitionId: 'slideIn_right' });
  
  }
  
  
  onClick_elIconButton = async () => {
    // Go to screen 'About'
    this.context.appActions.goToScreen('about', this.context.baseScreenId, { transitionId: 'fadeIn' });
  
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
    const style_elText3 = {
      color: '#0093d5',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elText = {
      fontSize: 37.1,
      color: '#1436ff',
      textAlign: 'center',
      textShadow: 'rgba(255, 255, 255, 0.7500) 0.0px 2.3px 0.0px',
     };
    const style_elText2 = {
      fontSize: 14.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elButton = {
      display: 'block',
      fontSize: 22.0,
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elImage = {
      height: 'auto',
     };
    
    const style_elIconButton = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundImage: 'url('+btn_icon_198933+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '79.613%',
      backgroundPosition: '50% 0%',
      color: '(null)',
      textAlign: 'left',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen HomeScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText3">
            <div className="baseFont" style={style_elText3} onClick={this.onClick_elText3} >
              <div>{this.context.locStrings.home_text3_542895}</div>
            </div>
          </div>
          
          <div className="elText">
            <div className="font-arialBlack" style={style_elText}>
              <div>{this.state.text}</div>
            </div>
          </div>
          
          <div className="elText2">
            <div className="systemFontItalic" style={style_elText2}>
              <div>{this.context.locStrings.home_text2_689364}</div>
            </div>
          </div>
          
          <div className="elButton">
            <Button className="systemFontBold" style={style_elButton}  color="accent" onClick={this.onClick_elButton} >
              Enter
            </Button>
          </div>
          
          <div className="elImage">
            <img style={style_elImage} src={img_elImage} alt=""  />
          </div>
          
          <div className="elIconButton">
            <button className="actionFont" style={style_elIconButton} onClick={this.onClick_elIconButton}  />
          </div>
        </div>
        
      </div>
    )
  }
  
}
