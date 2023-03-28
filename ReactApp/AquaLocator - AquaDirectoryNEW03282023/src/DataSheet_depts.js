// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_depts extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Accounting";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Administration";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Aftermarket Sales";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Applications Engineering";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Biological Processes";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Contract Administration";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Customer Service";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Electrical Engineering";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Engineering";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Field Service";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Human Resources";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Marketing";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "MIS";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Ohio";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Operations";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Parts Sales";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Process Group";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Product Management";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Production Control";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Project Management";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Purchasing";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "R&D";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Rotating Products";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['dept'] = "Shipping/Receiving";
    item.key = key++;
  }

}
