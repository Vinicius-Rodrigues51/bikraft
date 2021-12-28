import MenuMobile from "./modules/menu-mobile.js";
import parametros from "./modules/parametrosSeguros.js";

const menuMobile = new MenuMobile('.menu-mobile', '.header-menu')
menuMobile.init();

parametros();