$(function(){
	$("#nav li").hover(function(){
		$(this).find(".drop_down").slideToggle(200);
	})
	
	function startMove(){
		var speed=0;
		var nowScr=0;
		var timer=null;
		clearInterval(timer);
		timer=setInterval(function(){
			nowScr=$(document).scrollTop();
			speed=(0-nowScr)/4;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(speed==0){
				clearInterval(timer);
			}else{
				$(document).scrollTop($(document).scrollTop()+speed);
			}
		},16)
	}
	$(".backTop").click(function(){
		 startMove()
	})
	
	//选项卡
	var table = document.getElementById('table');
	var course = document.getElementById('course_video');
	var oLi = table.getElementsByTagName('li');
	var oUl = course.children;
	for (var i=0;i<oLi.length;i++) {
		oLi[i].index = i;
		oLi[i].onclick = function(){
			for (var i=0;i<oLi.length;i++) {
				oLi[i].className = '';
				oUl[i].className = '';
			}
			this.className = 'alid';
			var index = this.index;
			oUl[index].className = 'show';
		}
	}
})
