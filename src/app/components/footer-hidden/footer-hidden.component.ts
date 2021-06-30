import { Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-footer-hidden',
  templateUrl: './footer-hidden.component.html',
  styleUrls: ['./footer-hidden.component.css']
})
export class FooterHiddenComponent implements OnInit {

  constructor() { }
  audio:any;
  ngOnInit(): void {
    $(".button-wrap.left").on('click', function() {
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
