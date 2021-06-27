import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $:any;
declare const LoadViaAjax:any;


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  timeoutId:any=0;
  ngOnInit(): void {
    let that=this;
     
    $('.footer-button').on('mousedown touchstart', function(event) {
      that.timeoutId=setTimeout(function(){
      console.log($('.swiper-slide-active').find('a').attr('href'))
      that.router.navigateByUrl($('.swiper-slide-active').find('a').attr('href'))
      $("body").addClass("show-loader");	
     
    } , 1000 );
  }).on('mouseup mouseleave', function() {
    clearTimeout(that.timeoutId);
});;
    $(".button-wrap.left").on('click', function() {
			console.log("sound clicked")
			this.audio = document.getElementById("audio");
			$('body').toggleClass("mute");
			$(this).toggleClass("disabled");			   
			if ($(this).hasClass('disabled')) {
				$('.button-text span').text($('.button-text span').data('off'));
				$('.button-text span').attr("data-off", $('.button-text span').data('on'));
				$('.button-text span').attr("data-on", $('.button-text span').text());
				this.audio.volume = 0;
				this.audio.pause();
			} else {
				$('.button-text span').text($('.button-text span').data('on'));
				$('.button-text span').attr("data-on", $('.button-text span').data('on'));
				$('.button-text span').attr("data-off", $('.button-text span').data('off'));
				this.audio.volume = 0.2;
				this.audio.play();
			}
		});	
  }

}
