//<![CDATA[	
jQuery(document).ready(function(){
	/*nav slide*/
	$(".subGnb").hide();
	$("#parent li").bind("mouseenter focusin",function(){
		$(this).children(".subGnb").stop().slideDown();
	}).bind("mouseleave focusout",function(){		
		$(this).children(".subGnb").stop().slideUp();
	});
	
	/*nav 색상 변경*/
	$("#parent li").bind("mouseenter focusin", function(){
		var num = $(this).index();
		$(this).children("a").children("img").attr("src","img/gnb/gnb0"+num+"_on.gif");
	}).bind("mouseleave focusout",function(){
		var num = $(this).index();
		$(this).children("a").children("img").attr("src","img/gnb/gnb0"+num+".gif");
	});
	

	/*visual 버튼*/
	$("#leftbtn a").bind("mouseover focusin", function(){
		$(this).children("img").attr("src","img/btn/btn_roll_left_on.png");
	}).bind("mouseleave focusout",function(){
		$(this).children("img").attr("src","img/btn/btn_roll_left.png");
	});
	$("#rightbtn a").bind("mouseover focusin",function(){
		$(this).children("img").attr("src","img/btn/btn_roll_right_on.png");
	}).bind("mouseleave focusout",function(){
		$(this).children("img").attr("src","img/btn/btn_roll_right.png");
	});
	
	//이벤트 load resize
	//load, resize되면 가로값에 맞는 이미지가 바뀌어여한다.
	//1. 가로값

	$(window).bind("load resize", function(){
		//가로값에 맞으면 이미지 바뀌어야함 
		//지정한 미디어값이랑 window의 값이랑 비교
		var twidth = window.innerWidth || document.documentElement.clientWidth || document.body.innerWidth;

		var list = $(".visualImg"); 
		//window.innerWinth만 써주면 크로스 브라우징이 안되기 때문에 뒤에까지 써주는것!!!!!! (표준 브라우저) 
		//document의 document객체의 clientwidth가 구형 브라우저의 width
		if(767 < twidth && 1025 > twidth){ //태블릿 자체가 1024여서 1025
			//li를 배열로 잡아오기
			//li자식의 img의 속성들 바꾸기
			
			for(var i=0; i < list.length ; i++){
				var cimg = $(list[i]).children("img").attr("src").substring(20,21);
				$(list[i]).children("img").attr("src", "img/main/tablvisual0"+cimg+".png");
			}
			//i가1일때 img 00이들어와야됨 i-1
		}else if(480 < twidth && 768 > twidth){
			for(var i=0; i < list.length ; i++){
				var cimg = $(list[i]).children("img").attr("src").substring(20,21);
				$(list[i]).children("img").attr("src", "img/main/mowivisual0"+cimg+".png");
			}
		}else if(319 < twidth && 481 > twidth){
			for(var i=0; i < list.length ; i++){
				var cimg = $(list[i]).children("img").attr("src").substring(20,21);
				$(list[i]).children("img").attr("src", "img/main/mohevisual0"+cimg+".png");
			}
		}else{
			for(var i=0 ; i<list.length ; i++){
				var cimg = $(list[i]).children("img").attr("src").substring(20,21);
				$(list[i]).children("img").attr("src", "img/main/mainvisual0"+cimg+".png");
			}
		}
	});

	/*record 영역*/

	var liWidth;
	$(window).bind("load resize", function(){
	//이벤트:윈도우가 로드, 리사이즈 될때
	//대상: ul#flim, css, marginLeft 
	// 이벤트핸들러: li의 패딩을 포함한 가로값만큼 적용되어야함
	//필요한값
	//1. li의 가로값
		liWidth = $("#recordFilm li").outerWidth();
		$("#recordFilm").css({"marginLeft":"-" + liWidth + "px"});
	});
	//문제가 사이즈를 줄일때마다 li의 초기에 설정한 width값에따라서만 변함. 때문에 넘겼을 때 옆에 보임 
	//그래서 윈도우가 로드, 리사이될때마다 li의 width값대로 변하게 만드는것!!!!!

	$("#recordFilm").prepend($(".lirecimg:last"));
	$("#recordFilm").css({"marginLeft":"-" + liWidth + "px"});
	$(".recleftbtn").bind("click focusin",function(){
		$("#recordCon #recordFilm").animate({"marginLeft":"-="+ liWidth +"px"},1000,"swing",function(){
			$("#recordFilm").append($(".lirecimg:first"));
			$("#recordFilm").css({"marginLeft":"-"+ liWidth +"px"});
		});
	});
	$(".recrightbtn").bind("click focusin",function(){
		$("#recordFilm").animate({"marginLeft":"+="+ liWidth +"px"},1000,"swing",function(){
			$("#recordFilm").prepend($(".lirecimg:last"));
			$("#recordFilm").css({"marginLeft":"-"+ liWidth + "px"});
		});
	});
	
	/*board*/
	/*showboard부모를 hide하는것이 x 자식들을!!!*/
	$("#boardWrap #showboard").children().hide();
	$("#boardWrap #showboard #news").show();

	$("#boardHeader > #boardh3 .boardnews").click(function(){
		$("#boardHeader > #boardh3 .boardnotic").attr("src","img/main/notice.gif").css({"border-right":"0px","border-left":"0px"});
		$("#boardHeader > #boardh3 .boardnews").attr("src","img/main/news_on.gif");
		$("#boardWrap #showboard").children().hide();
		$("#boardWrap #showboard #news ").show();
	});

	$("#boardHeader > #boardh3 .boardnotic").click(function(){
		$("#boardHeader > #boardh3 .boardnews").attr("src","img/main/news.gif");
		$("#boardHeader > #boardh3 .boardnotic").attr("src","img/main/notice_on.gif").css({"border-right":"1px solid #ddd","border-left":"1px solid #ddd"});
		$("#boardWrap #showboard").children().hide();
		$("#boardWrap #showboard #notic").show();
	});


	$("#m_parent li .m_subGnb").hide();
	$("nav .m_btn").click(function(){
		$("#m_parent").toggle();
	});

	$("#m_parent li").mouseover(function(){
	$(this).children(".m_subGnb").stop().slideDown();
	}).mouseout(function(){
		$(this).children(".m_subGnb").stop().slideUp();
	});
	
	/*visual영역*/
	$("#visual").prepend($(".visualImg:last"));
	$("#visual").css({"marginLeft":"-100%"});
	$("#vcontroll2 ul > li:eq(0) img").attr("src","img/btn/btn_rollBtn_on.png");
	
	$("#rightbtn").click(function(){
		//밖의 자바스크립트와 연결해서 같이 쓸거다!
		film("next","slow"); //빠르게 넘길거다 클릭하면 next와 fast를 넘겨서(파라미터)
	});
	
	$("#leftbtn").click(function(){
		film("prev","slow");
	});
	
	$("#vcontroll2 ul li").click(function(){
		//현재지점
		//now는 현재 찍음점을 이야기함.
		$now = Number($(".visualImg img").attr("src").substring(20,21))+1; 
		if( $now == 4){ $now = 0; }

		//target 목표점 
		//목표지점
		$target = $(this).text();

		//함수
		choice($target, $now); //파라미터로 넘기기
		//console.log("현재 진행 :"+$now+"/ 목표지점 : " +$target);
	});

	//이전 다음 버튼에 대한 애니메이션 설계
	function film(target, speed){
		width = $("#visualWrap").width(); 
		//만약 next버튼과 target이 같다면!
		if(target == "next"){
			$("#visual").animate({"marginLeft":"-=100%"},speed,"linear",function(){
				$("#visual").css({"marginLeft":"-100%"});
				$(".visualImg:first").appendTo("#visual");//첫장면을 맨뒤로 보내주세요.
				process();
			});
		}else if( target == "prev"){
			$("#visual").animate({"marginLeft":"+=100%"},speed,"linear",function(){
				$("#visual").css({"marginLeft":"-100%"});
				$(".visualImg:last").prependTo("#visual");//첫장면을 맨뒤로 보내주세요.
				process();
			});
		}
	}

	//동그라미 버튼 빨간색상 이어받기
	function process(){
		$nows = Number($("#visual li img").attr("src").substring(20,21))+1; //변수 잡을 때 $now 또는 now로 해도 된다.
		if( $nows == 4){ $nows = 0; }

		$("#vcontroll2 ul > li img").attr("src","img/btn/btn_rollBtn.png");
		$("#vcontroll2 ul > li:eq("+$nows+") img").attr("src","img/btn/btn_rollBtn_on.png");
		
	}//클래스속성을 이어받는 process

	function choice($target, $now){
		//거리를 쟬때는 for문이 좋다.
		
		//현재 지점부터    ,     목표지점까지 달리기\
		// $now(진행된 지점)      $target(본인이 찍은 지점)
		for(var index=$now; index < $target; index++){
			film("next", 100);

			console.log(index);
		}
		
		for(var index=$now; index > $target; index--){
			film("prev", 100);
		}
	}

	var autoClick = setInterval(function(){ $("#rightbtn").click();},7000);
});
//]]>