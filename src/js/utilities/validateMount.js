module.exports = ((vueContainer,mountId) => (Vue) => {
    const vueContainerMount = document.getElementById(mountId);
    if (vueContainerMount) {
      let VueContainerComponent= Vue.extend(vueContainer);
      return new VueContainerComponent().$mount("#"+mountId);
    }
  });
  