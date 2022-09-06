import 'lazysizes';

import headerNav from './module/headerNav';
import mv from './module/mv';
import { defaultIo, listIo } from './animation/scloll';

window.onload = () => {
  headerNav();
  mv();
  defaultIo();
  listIo();
};
