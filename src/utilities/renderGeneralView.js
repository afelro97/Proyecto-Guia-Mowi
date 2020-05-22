import moment from 'moment';
import Api from '../controllers/Api';
import _ from 'lodash';

module.exports = async(ctx, file, viewData, tag) => {
    const isSessionActive = !!ctx.session.user;
    console.log("Sesion",isSessionActive);
    console.log("Sesionid",ctx.session.idSession);
    console.log("shoiw:------");
    var screens = [];//ctx.session.shoiw;  
    var verifyMenu = function (...keys) {
      let validate = false;
      _.map(keys,(key)=>{

        if(_.findIndex(screens, function(o) { 
          
          return o == key; }) != -1){
          validate = true;
        }
      })
      return validate;
    }
    viewData['version'] = moment().unix();
    viewData['verifyMenu'] = verifyMenu;
   
    return await ctx.render(file, viewData);
  }