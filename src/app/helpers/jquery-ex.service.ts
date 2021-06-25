import { Injectable } from '@angular/core';
declare const $:any;
declare const LoadViaAjax:any;
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



}
