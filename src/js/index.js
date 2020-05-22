import Vue from 'vue';
import validateMount from './utilities/validateMount';
/*Home*/
import HomeContainer from './containers/homeContainer.vue';

/*Home*/
validateMount(HomeContainer,'homeContainerMount')(Vue);
