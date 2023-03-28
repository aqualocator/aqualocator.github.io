import React, { Component } from 'react';
import './App.css';
import ScreenContext from './ScreenContext';
import Users from './Users';
import Searchit from './Searchit';
import btn_icon_back_aquadirectory from './images/btn_icon_back_aquadirectory.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';

export default class AquaDirectoryScreen extends Component {

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
    
    // eslint-disable-next-line
    const dataSheet_emps = this.context.dataSheets['emps'];
    
    const style_elRectangle = {
      background: 'rgba(239, 238, 233, 1.000)',
     };
    
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    let filterItems_list = items => {
      
      let filteredItems = [];
      let filterStr=this.context.appActions.dataSlots['ds_filter']; // Data slot value
      filterStr=filterStr.toLowerCase(); // Lowercase the filter string
      
      // Loop through all items and add item to new array if item includes filter string
      items.forEach(item => {;
      if (item['FullName'].toLowerCase().includes(filterStr)) {
      filteredItems.push(item);
      }else if (item['Dept'].toLowerCase().includes(filterStr)){
      filteredItems.push(item);
      }
      });
      items=filteredItems; 
      
      return items;
    }
    items_list = items_list.concat(filterItems_list(this.context.appActions.getDataSheet('emps').items));
    this._elList_items = [];
    
    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };
    
    return (
      <div className="AppScreen AquaDirectoryScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elRectangle" style={style_elRectangle} />
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="hasNestedComps elList">
            <ul style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId)
                    ? listComps_list[row._componentId]
                    : <Users dataSheetId={'emps'} dataSheetRow={row} {...{ 'Title': row['Title'], 'Ext': row['Ext'], 'Dept': row['Dept'], 'EMailAddress': row['EMailAddress'], 'Photo': row['Photo'], 'FullName': row['FullName'], }} ref={(el) => {if (el) this._elList_items.push(el)}} />;
                return (<li key={row.key || index}>
                    {itemComp}
                  </li>);
              })}
              <div className="marker" ref={(el)=> this._elList_endMarker = el} />
            </ul>
          </div>
        </div>
        <div className="navBarContainer">
         <Appbar className="navBar">
          <div className="title">{this.context.locStrings.screen2_navbar_70051}</div>  <div className="backBtn" onClick={ (ev)=>{ this.context.appActions.goBack() } }><img src={btn_icon_back_aquadirectory} alt="" style={{width: '50%'}} /> </div>
         </Appbar>
        </div>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <div className="hasNestedComps elSearchit">
              <Searchit ref={(el)=> this._elSearchit = el} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}
