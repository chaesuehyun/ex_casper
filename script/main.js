var swiper = new Swiper('.top3',{
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },
  loop:true,
  navigation:{
    nextEl:".top3 .swiper-button-next",
    prevEl:".top3 .swiper-button-prev",
  },
  pagination:{
    el:'.swiper-pagination1',
    clickable:true,//컨트롤 버튼 클릭 가능하도록
  }
})

var swiper2 = new Swiper('.event',{
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },
  loop:true,
  navigation:{
    nextEl:".event .swiper-button-next",
    prevEl:".evnet .swiper-button-prev",
  },
  pagination:{
    el:'.swiper-pagination',
    clickable:true,//컨트롤 버튼 클릭 가능하도록
  }
})
/*랜덤 배너*/
let r_num= Math.floor(Math.random()*3)+1;
console.log(r_num);//1부터3까지 랜덤숫자 
//자바스크립트를 제이쿼리로 바꿔볼려했던거
// $('#r_banner').attr=('src','./images/r_banner +r_num+.jpg;') 
document.getElementById('r_banner').src='./images/r_banner'+r_num+'.jpg';



$(document).ready(function(){
  /*if문안에 저 마우스 이벤트를 넣으면 될려나*/
  $('header').mouseenter(function(){
    $('header').addClass('h_act');
    $('header h1 img').attr('src','../images/logo-casper_black.png');
  });
  $('header').mouseleave(function(){
    if($(window).scrollTop()<=1){
      $('header').removeClass('h_act');
      $('header h1 img').attr('src','../images/logo-casper-white.png');
    }
  });
  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    // console.log(sPos)
    if(sPos >= 1){
      $('header').addClass('h_act');
      $('header h1 img').attr('src','../images/logo-casper_black.png');
    }else{
      $('header').removeClass('h_act');
      $('header h1 img').attr('src','../images/logo-casper-white.png');
    };

    if(sPos >=1600){
      $('.intro_title_left').addClass('act2')
      $('.intro_title_right').addClass('act1')
    }

  });
/*
  // let nav= $('#m_nav > ul > li')
  // nav.click(function(){
  //   let i=$(this).index()
  //   let sec1 = $('#intro').offset().top;
  //   let sec2 = $('#drive_con').offset().top;
  //   let sec3 = $('#event_con').offset().top;
  //   let sec4 = $('#buy_con').offset().top;
  //   let sec5 = $('#cs_con').offset().top;

  //   let offTop = $('main section').offset().top;
  //   console.log(i)
  //   //i가 0일때 3번째 section 을 선택
  //   if(i==0){
  //     $('html,body').animate({'scrollTop':sec1},500)
  //   }else if(i==1){
  //     $('html,body').animate({'scrollTop':sec2},500)
  //   }else if(i==2){
  //     $('html,body').animate({'scrollTop':sec3},500)
  //   }else if(i==3){
  //     $('html,body').animate({'scrollTop':sec4},500)
  //   }else{
  //     $('html,body').animate({'scrollTop':sec5},500)
  //   }

  //   return false;
  // })
*/

  $('#m_nav li a').click(function(){
    //선택한 a 요소의 href속성값을 가져온다.
    let id_name = $(this).attr('href');
    let secOffset = $(id_name).offset().top;
    $('html,body').animate({'scrollTop':secOffset},500)
      return false;
  });
  $('#intro_m a').click(function(){
    //선택한 a 요소의 href속성값을 가져온다.
    let id_name = $(this).attr('href');
    let secOffset = $(id_name).offset().top;
    $('html,body').animate({'scrollTop':secOffset},500)
      return false;
  });




















/*모달창*/
  //변수선언
  let modal = `
  <div class="modal">
<div class="m_inner">
  <a href="#" title="">
    <img src="./images/main_Popup_PC_450x600.jpg">
  </a>
  <input type="checkbox" id="ch">
  <label for="ch">일주일간 열지 않기</label>
  <input type="button" value="닫기" class="r_btn">
</div>
</div>
  `
  $('body').append(modal);

  let ch =$('#ch');
  //쿠키정보가 있다면 모당창이 안나오게 한다
  if($.cookie('popup')=='none'){
    $('.modal').hide()
  } 

  //체크박스를 체크하고 닫기버튼 누르면 모달창이 닫힘
  function close_popup(){
    if(ch.is(':checked')){//체크가 된 경우라면
      //쿠키정보가 저장되어야함
      $.cookie('popup','none',{expires:7, path:'/'});//쿠키정보를 popup,none값으로 생성
    $('.modal').hide()
    }else{//체크박스에 체크하지 않았다면 
      //쿠키정보를 생성하지 않고 그냥 닫기
      $('.modal').hide()
    }
  }

  //닫기버튼 클릭시 close_popup 함수를 호출하여 실행한다,
  $('.r_btn').click(function(){
    close_popup();
  })
})