import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';
import img_elImage from './images/Users_elImage_574804.jpg';
import img_elLine from './images/Users_elLine.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class Users extends Component {

  static contextType = ScreenContext;

  // Properties used by this component:
  // title, ext, dept, EMailAddress, photo, fullName

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

  onClick_elTextCopy5 = async () => {
    let newVal = this.props.Dept;
    this.context.appActions.updateDataSlot('ds_filter', newVal);
  
  }
  
  
  onClick_elButton = async () => {
    // Go to screen 'Office Locator'
    this.context.appActions.goToScreen('officeLocator', this.context.baseScreenId, { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elTextCopy9 = async () => {
    var emailaddress = this.props.EMailAddress;
    setTimeout(function(){
      window.location.href = "mailto:"+emailaddress
    },500);
  
  }
  
  
  render() {
    const style_elImage = {
      backgroundImage: 'url('+this.context.appActions.createImageUrlFromProp(this.props.Photo)+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    const value_text = ((val) => {
      // make sure value is in string format
      if (val instanceof String || typeof val === 'string') return val;
      else {
        try {
          return JSON.stringify(val);
        }
        catch (e) {
          return val.toString();
        }
      }
    })(this.props.FullName);
    
    const style_elText = {
      fontSize: 17.5,
      color: '#941651',
      textAlign: 'left',
     };
    
    const value_textCopy5 = ((val) => {
      // make sure value is in string format
      if (val instanceof String || typeof val === 'string') return val;
      else {
        try {
          return JSON.stringify(val);
        }
        catch (e) {
          return val.toString();
        }
      }
    })(this.props.Dept);
    
    const style_elTextCopy5 = {
      fontSize: 12.0,
      color: '#0432ff',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elButton = {
      display: 'block',
      fontSize: 11.0,
      color: '#fff',
      textAlign: 'center',
      backgroundColor: '#941651',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const value_textCopy9 = ((val) => {
      // make sure value is in string format
      if (val instanceof String || typeof val === 'string') return val;
      else {
        try {
          return JSON.stringify(val);
        }
        catch (e) {
          return val.toString();
        }
      }
    })(this.props.EMailAddress);
    
    const style_elTextCopy9 = {
      fontSize: 12.0,
      color: '#0432ff',
      textAlign: 'left',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_elTextCopy7 = {
      fontSize: 12.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextCopy6 = {
      fontSize: 12.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const value_textCopy4 = ((val) => {
      // make sure value is in string format
      if (val instanceof String || typeof val === 'string') return val;
      else {
        try {
          return JSON.stringify(val);
        }
        catch (e) {
          return val.toString();
        }
      }
    })(this.props.Ext);
    
    const style_elTextCopy4 = {
      fontSize: 12.0,
      color: '#0432ff',
      textAlign: 'left',
     };
    
    const value_textCopy3 = ((val) => {
      // make sure value is in string format
      if (val instanceof String || typeof val === 'string') return val;
      else {
        try {
          return JSON.stringify(val);
        }
        catch (e) {
          return val.toString();
        }
      }
    })(this.props.Title);
    
    const style_elTextCopy3 = {
      fontSize: 13.0,
      color: '#0432ff',
      textAlign: 'left',
     };
    
    const style_elLine = {
      backgroundImage: 'url('+img_elLine+')',
      backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Users appBg">
        <div className="layoutFlow">
          <div className="elImage">
            <div style={style_elImage} />
          </div>
          
          <div className="flowRow flowRow_Users_elText_985930">
          <div className="elText">
            <div className="systemFontRegular" style={style_elText}>
              <div>{value_text}</div>
            </div>
          </div>
          
          <div className="elTextCopy5">
            <div className="systemFontRegular" style={style_elTextCopy5} onClick={this.onClick_elTextCopy5} >
              <div>{value_textCopy5}</div>
            </div>
          </div>
          
          </div>
          <div className="elButton">
            <Button className="systemFontBold" style={style_elButton} onClick={this.onClick_elButton} >
              {this.context.locStrings.users_button_245817}
            </Button>
          </div>
          
          <div className="flowRow flowRow_Users_elTextCopy9_980113">
          <div className="elTextCopy9">
            <div className="systemFontRegular" style={style_elTextCopy9} onClick={this.onClick_elTextCopy9} >
              <div>{value_textCopy9}</div>
            </div>
          </div>
          
          <div className="elTextCopy7">
            <div className="systemFontRegular" style={style_elTextCopy7}>
              <div>{this.context.locStrings.users_textcopy7_167144}</div>
            </div>
          </div>
          
          <div className="elTextCopy6">
            <div className="systemFontRegular" style={style_elTextCopy6}>
              <div>{this.context.locStrings.users_textcopy6_482435}</div>
            </div>
          </div>
          
          <div className="elTextCopy4">
            <div className="systemFontRegular" style={style_elTextCopy4}>
              <div>{value_textCopy4}</div>
            </div>
          </div>
          
          <div className="elTextCopy3">
            <div className="systemFontItalic" style={style_elTextCopy3}>
              <div>{value_textCopy3}</div>
            </div>
          </div>
          
          </div>
        </div>
        
        <div className="foreground">
          <div className="elLine" style={style_elLine} />
        </div>
      </div>
    )
  }
  
}
