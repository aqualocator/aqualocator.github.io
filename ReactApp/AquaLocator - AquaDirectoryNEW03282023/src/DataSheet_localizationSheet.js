// eslint-disable-next-line
import React from 'react';
import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

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
    item['key'] = "start_text_402807";
    item['en'] = "Aqua Directory";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_298512";
    item['en'] = "Enter";
    
    item = {};
    this.items.push(item);
    item['key'] = "aquadirectory_textarea_209097";
    item['en'] = "Hello";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text_546643";
    item['en'] = "First Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_textcopy_681601";
    item['en'] = "Last Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_textcopy2_229627";
    item['en'] = "Location";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_text2_772249";
    item['en'] = "Location";
    
    item = {};
    this.items.push(item);
    item['key'] = "aquadirectory_button_566820";
    item['en'] = "< Back";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy3_655982";
    item['en'] = "Title";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy4_528922";
    item['en'] = "Location";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy4_877727";
    item['en'] = "Location";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy4_845475";
    item['en'] = "Extension";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy5_215216";
    item['en'] = "Dept";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy6_753752";
    item['en'] = "Location";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy6_299902";
    item['en'] = "Ext";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy7_519822";
    item['en'] = "Dept";
    
    item = {};
    this.items.push(item);
    item['key'] = "aquadirectory_text_101473";
    item['en'] = "Aqua Directory";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_button_671121";
    item['en'] = "GO";
    
    item = {};
    this.items.push(item);
    item['key'] = "location";
    item['en'] = "1A";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_button_642973";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_button_235950";
    item['en'] = "GO";
    
    item = {};
    this.items.push(item);
    item['key'] = "aquadirectory_text_384659";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "search";
    item['en'] = "…search";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_field_898844";
    item['en'] = "...search by lastname or dept";
    
    item = {};
    this.items.push(item);
    item['key'] = "searchit_button_27018";
    item['en'] = "RESET";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy2_545187";
    item['en'] = "Locate";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy8_769160";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy9_208653";
    item['en'] = "Dept";
    
    item = {};
    this.items.push(item);
    item['key'] = "txtsearch";
    item['en'] = "...search by lastname or dept";
    
    item = {};
    this.items.push(item);
    item['key'] = "officelocator_text_281418";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "fname";
    item['en'] = "fname";
    
    item = {};
    this.items.push(item);
    item['key'] = "officelocator_textcopy_504983";
    item['en'] = "fname";
    
    item = {};
    this.items.push(item);
    item['key'] = "officelocator_textcopy2_914805";
    item['en'] = "fname";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text_433145";
    item['en'] = "fname";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text2_193851";
    item['en'] = "lname";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text_334080";
    item['en'] = "Fname";
    
    item = {};
    this.items.push(item);
    item['key'] = "component1_text2_880719";
    item['en'] = "LName";
    
    item = {};
    this.items.push(item);
    item['key'] = "officelocator_text_128491";
    item['en'] = "FName";
    
    item = {};
    this.items.push(item);
    item['key'] = "officelocator_textcopy_824969";
    item['en'] = "LName";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_button_771555";
    item['en'] = "locate";
    
    item = {};
    this.items.push(item);
    item['key'] = "searchit_text_705642";
    item['en'] = "Filter employee list by tapping on dept name or using below search box.";
    
    item = {};
    this.items.push(item);
    item['key'] = "searchit_text2_200502";
    item['en'] = "<< HOME";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_text2_689364";
    item['en'] = "An Aqua employee office locator";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_text_714095";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_text_514736";
    item['en'] = "The AquaLocator app concept has been requested by Aqua employees over the years.\n\nIt was created to help Aqua employees find the office location of other Aqua employees. It also helps connect a name to a face.\n \nKey functionality of the AquaLocator app\n\t•\tThe default list shows all Loves Park Aqua employees sorted by last name\n\t•\tSnapshot of Each employee listing has\n\t\t- Photo (connect Aqua employee name to a face)\n\t\t- Title\n\t\t- Department Name (can be tapped on to filter list)\n\t\t- Phone Extension\n\t\t- Email (can be tapped on to send email)\n\t•\tEasily filter employee list by\n\t\t\n\t\tIndividual Department\n\t\t- Tap any department name in employee list\n\t\t- Type department name (full or partial) in search box\n\n\t\tLast Name\n\t\t- Type last name (full or partial) in search box\n\t•\tView office location of each Aqua employee on floor plan map\n\t\t- Find desired Aqua employee in list\n\t\t- Tap on Locate button\n\t\t- Look for blue square over office space on floor map\n\t•\tCan run on all devices (laptops, desktops, phones). Since it is a web app there is nothing to install. Just bookmark the website or save as a shortcut on your desktop or phone and your good to go! On desktops we recommend running app in Chrome web browser.\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "searchit_textcopy_107645";
    item['en'] = "ABOUT APP";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_button2_345820";
    item['en'] = "About";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_text3_542895";
    item['en'] = "Update Your Profile";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_text_451443";
    item['en'] = "Watch Help Video";
    
    item = {};
    this.items.push(item);
    item['key'] = "about_text_204177";
    item['en'] = "Watch Help Video";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy_990340";
    item['en'] = "Mondi Anderson";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy2_248137";
    item['en'] = "Engineering - Electrical (Ohio)";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_buttoncopy_511762";
    item['en'] = "locate";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy8_793858";
    item['en'] = "MAnderson@aqua-aerobic.com";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy10_307941";
    item['en'] = "Dept";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy11_361059";
    item['en'] = "Ext";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy12_184993";
    item['en'] = "1324";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy13_453960";
    item['en'] = "Engineering - Support";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy_810317";
    item['en'] = "Mondi Anderson";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy5_533721";
    item['en'] = "Engineering - Electrical (Ohio)";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_button_1010929";
    item['en'] = "locate";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy9_183512";
    item['en'] = "MAnderson@aqua-aerobic.com";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy7_149054";
    item['en'] = "Dept";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy6_125862";
    item['en'] = "Ext";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy4_926202";
    item['en'] = "1324";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy3_656712";
    item['en'] = "Engineering - Support";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_text_985930";
    item['en'] = "Mondi Anderson";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy5_1022437";
    item['en'] = "Engineering - Electrical (Ohio)";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_button_245817";
    item['en'] = "locate";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy9_980113";
    item['en'] = "MAnderson@aqua-aerobic.com";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy7_167144";
    item['en'] = "Dept";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy6_482435";
    item['en'] = "Ext";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy4_438838";
    item['en'] = "1324";
    
    item = {};
    this.items.push(item);
    item['key'] = "users_textcopy3_944077";
    item['en'] = "Engineering - Support";
    
    let storedItems = localStorage.getItem(this.id);
    if (storedItems != null) {
      this.items = JSON.parse(storedItems);
    }
  }

  addItem(item, options) {
    super.addItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  removeItem(item, options) {
    super.removeItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  replaceItemByRowIndex(idx, newItem, options) {
    super.replaceItemByRowIndex(idx, newItem, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
