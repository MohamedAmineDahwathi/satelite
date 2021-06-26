import { Injectable } from '@angular/core';
declare const $:any;
declare const LoadViaAjax:any;
declare const Portfolio:any;
declare const Power2:any;
declare const FirstLoad:any;
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
      
      LoadViaAjax();
      
        
    });
  }



}
