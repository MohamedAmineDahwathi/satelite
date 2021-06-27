import { Injectable } from '@angular/core';
declare const $:any;
declare const LoadViaAjax:any;
declare const TweenMax:any;
declare const Power2:any;
declare const Power0:any;
declare const TimelineLite:any;
declare const PageLoad:any;
declare const BackToTop:any;
declare const AjaxLoad:any;
declare const LargeShowcaseCarousel:any;
declare const ShowcaseCarousel:any;
declare const Showcase:any;
declare const Sliders:any;
declare const ContactMap:any;
declare const PlayVideo:any;
declare const ContactForm:any;
declare const Lightbox:any;
declare const JustifiedGrid:any;
@Injectable({
  providedIn: 'root'
})
export class JqueryExService {

  constructor() { }

  addLoader(classCss){
    $(classCss).on('click',function(){
			$(document).ready(function() {setTimeout(function(){
				LoadViaAjax();		
        
			},300)});
		})
  }

  exJs(){
    $(document).ready(function() {
	
      "use strict";
      $("body").addClass("show-loader");	
			$(".flexnav").removeClass("flexnav-show");
			$('#menu-burger').removeClass("open");
			var tlMenu = new TimelineLite();
			$(".fullscreen-menu .menu-timeline").each(function(index, element) {
				tlMenu.to(element, 0.25, {y:-30, opacity:0, ease:Power2.easeIn}, index * 0.03)
			});	
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
			if( $('#showcase-holder').length > 0 ){
				TweenMax.to($(".swiper-pagination-bullet-active .subtitle"), 0.4, {force3D:true, opacity:0, delay:0.1, ease:Power2.easeOut});
				TweenMax.to($(".swiper-pagination-bullet-active .title"), 0.4, {force3D:true, opacity:0, delay:0.1, ease:Power2.easeOut});
				TweenMax.to($(".footer-button-wrap"), 0.4, {force3D:true, opacity:0, delay:0.1, ease:Power2.easeOut});
				TweenMax.to($(".showcase-counter, .swiper-pagination-bullet-active .counter, .arrows-wrap"), 0.3, {force3D:true, opacity:0, delay:0.1, ease:Power2.easeOut});
				TweenMax.to($("#main"), 0.3, {opacity:0, delay:0.4, ease:Power0.ease});
			} else {
				TweenMax.to($("#main"), 0.3, {opacity:0, delay:0.1, ease:Power0.ease});
			}
      setTimeout(function(){
				LoadViaAjax();		
        
			},900);
      
        
    });
  }



}
