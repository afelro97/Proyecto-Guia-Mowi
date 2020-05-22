import renderGeneralView from '../utilities/renderGeneralView';
import Api from './Api';

/*Login*/
module.exports.redirectTo = async (ctx,next) => {
    //Cambiar
    ctx.redirect('/dashboard/login');
  };

module.exports.showLogin = async (ctx,next) => {
    const isSessionActive = !!ctx.session.user;
    if (isSessionActive) {
        //Cambiar
        ctx.redirect('/dashboard/home')
    }
    const _initialState = {
    }
    const viewData = {
        title : 'Login',
        username: (ctx.session.user || {}).name,
        initialState: JSON.stringify(_initialState)
    }
    await renderGeneralView(ctx,'dashboard/pages/login', viewData);
};
module.exports.showforgotMyPassword = async (ctx,next) => {

  /*const isSessionActive = !!ctx.session.user;
  if (!isSessionActive) {
      ctx.redirect('/dashboard/login');
  }*/
  var generateToken= ctx.params.generateToken;
  
  const _initialState = {
    generateToken:generateToken
  }
  const viewData = {
      title : 'Me olvide la contraseña',
      initialState: JSON.stringify(_initialState)
  }
  await renderGeneralView(ctx,'dashboard/pages/forgotMyPassword', viewData);
};
module.exports.showChangePassword = async (ctx,next) => {

  /*const isSessionActive = !!ctx.session.user;
  if (!isSessionActive) {
      ctx.redirect('/dashboard/login');
  }*/
  var userCode = (ctx.session.user || {}).userCode;
  console.log(ctx.session.user)
  //console.log('Coountry//////////////', ctx.session.user);
  const _initialState = {
    userCode: userCode,
  }
  const viewData = {
      title : 'Cambiar contraseña',
      username: (ctx.session.user || {}).name || 'Mowidev - Tester',
      initialState: JSON.stringify(_initialState)
  }
  await renderGeneralView(ctx,'dashboard/pages/changePassword', viewData);
};
module.exports.showRecoverPassword = async (ctx,next) => {

  /*const isSessionActive = !!ctx.session.user;
  if (!isSessionActive) {
      ctx.redirect('/dashboard/login');
  }*/
  var userCode = (ctx.session.user || {}).userCode;
  console.log(ctx.session.user)
  //console.log('Coountry//////////////', ctx.session.user);
  const _initialState = {
    userCode: userCode,
  }
  const viewData = {
      title : 'Recuperar contraseña',
      username: (ctx.session.user || {}).name || 'Mowidev - Tester',
      initialState: JSON.stringify(_initialState)
  }
  await renderGeneralView(ctx,'dashboard/pages/recoverPassword', viewData);
};
module.exports.logout = async (ctx,next) => {
    console.log("user: ", ctx.session.user);
    ctx.session=null;
    ctx.redirect('/dashboard/login');
  };

/*Home*/
module.exports.showHome = async (ctx,next) => {

  const isSessionActive = !!ctx.session.user;
  /*if (!isSessionActive) {
      ctx.redirect('/dashboard/login');
  }*/
  var fullName = (ctx.session.user || {}).fullName || 'Mowidev';
  var userCode = (ctx.session.user || {}).userCode;
  
  const _initialState = {
    fullName: fullName,
    userCode: userCode
  }
  console.log('InitialSatte',_initialState)
  const viewData = {
      title : 'HOME',
      username: (ctx.session.user || {}).name || 'Mowidev - Tester',
      initialState: JSON.stringify(_initialState)
  }
  await renderGeneralView(ctx,'dashboard/pages/goHome', viewData);
};



/*Gestion*/
module.exports.showUserManagement = async (ctx,next) => {

  /*const isSessionActive = !!ctx.session.user;
  if (!isSessionActive) {
      ctx.redirect('/dashboard/login');
  }
  var id = ctx.session.user.id;*/
  const _initialState = {
    //id: id,
  }
  const viewData = {
      title : 'Gestión de usuarios',
      username: (ctx.session.user || {}).name || 'Mowidev - Tester',
      initialState: JSON.stringify(_initialState)
  }
  await renderGeneralView(ctx,'dashboard/pages/userManagement', viewData);
};

/*Subida Masiva*/
module.exports.showMassiveMongooseUserLoading = async (ctx,next) => {

  /*const isSessionActive = !!ctx.session.user;
  if (!isSessionActive) {
      ctx.redirect('/dashboard/login');
  }
  var id = ctx.session.user.id;*/
  const _initialState = {
    //id: id,
  }
  const viewData = {
      title : 'Carga Masiva de user',
      username: (ctx.session.user || {}).name || 'Mowidev - Tester',
      initialState: JSON.stringify(_initialState)
  }
  await renderGeneralView(ctx,'dashboard/pages/massiveMongooseUserLoading', viewData);
};
