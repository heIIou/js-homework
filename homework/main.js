//SCSS
import './main.scss';

import pageAnimate from './common/pageAnimate';

pageAnimate();

//Commons
import csrf from './common/csrf';
import imagesRequire from './common/images-require';

//Libs
import 'babel-polyfill';
import 'isomorphic-fetch';
import 'slick-carousel';
import 'selectric';
import 'jquery-mask-plugin';

require('malihu-custom-scrollbar-plugin')($);

//blocks
import indexIntro from './core/index/index-intro';
import initCommonSlider from './common/initCommonSlider';
import initVariableSlider from './common/initVariableSlider';
import complexLocation from './realty/blocks/complex/complex-location';
import complexAdvantages from './realty/blocks/complex/complex-advantages';
import developerSlider from './company/blocks/developer-slider';
import documents from './company/blocks/documents';
import decoration from './realty/blocks/decoration/decoration';
import contacts from './company/blocks/contacts';
import complexDynamic from './realty/blocks/complex/complex-dynamic';
import flatDetail from './realty/blocks/flat/flat-detail';
import popups from './common/popups/popup';
import mortgageCalc from './purchase/blocks/mortgage-calc';
import header from './core/blocks/header';
import flatChoice from './realty/flat-choice';
import flatVisual from './realty/flat-visual';
// import filterPage from './realty/blocks/filter/filter-page';
import pressCommon from './press/blocks/pressCommon';
import favorites from './realty/favorites';
import favoritesPage from './realty/favoritesPage';
import emergence from './common/emergence';
import menu from './core/blocks/menu';

$(document).ready(function () {
    csrf();
    imagesRequire();
    indexIntro();
    developerSlider();
    initCommonSlider();
    initVariableSlider();
    complexLocation();
    complexAdvantages();
    documents();
    decoration();
    contacts();
    complexDynamic();
    flatDetail();
    popups();
    mortgageCalc();
    header();
    flatChoice();
    flatVisual();
    // filterPage();
    pressCommon();
    favorites();
    favoritesPage();
    emergence();
    menu();
});
