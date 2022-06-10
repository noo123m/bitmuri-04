$(document).on('ready', function() {

      $(".regular").slick({
		autoplay:true,
		autoplaySpeed:800,
        dots: true,
        infinite: true,
        slidesToShow: 4,//보여지는 갤러리 수
        slidesToScroll: 1,//넘어가는 갤러리 수
		speed: 1500,//다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간
		pauseOnHover:true, /* 마우스 호버시 슬라이드 이동 멈춤 */ 
      });
    });