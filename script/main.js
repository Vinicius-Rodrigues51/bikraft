import galeria from "./modules/bicicleta-galeria.js";
import linksAtivos from "./modules/linksAtivos.js";
import MenuMobile from "./modules/menu-mobile.js";
import parametros from "./modules/parametrosSeguros.js";
import perguntas from "./modules/perguntas.js";

const menuMobile = new MenuMobile('.menu-mobile', '.header-menu')
menuMobile.init();

parametros();
linksAtivos();
perguntas();
galeria();