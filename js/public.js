window.onload = function(){
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
	
	
	

}
