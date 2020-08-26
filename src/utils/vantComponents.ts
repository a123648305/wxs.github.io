import Vue from "vue";
// 以下为使用到的vant-ui 组件
import {
  Toast,
  Loading,
  Button,
  Popup,
  Checkbox,
  CheckboxGroup,
  Picker,
  RadioGroup,
  Radio,
  Rate,
  Switch,
  Uploader,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  Lazyload,
  List,
  Dialog,
  NavBar
} from "vant";

const components = [
  Button,
  Popup,
  Checkbox,
  CheckboxGroup,
  Picker,
  RadioGroup,
  Radio,
  Rate,
  Switch,
  Uploader,
  Loading,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  Toast,
  List,
  NavBar
];

Vue.use(Lazyload, "");
Vue.use(Dialog);
const vantComponents = () => {
  components.forEach(item => {
    // Vue.use(item)
    Vue.component(item.name, item);
  });
};

export default vantComponents;
