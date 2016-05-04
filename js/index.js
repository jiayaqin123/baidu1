$(function(){
	/*header输入框*/
	var $headerInput=$(".header-func1-search .box");
	var $headerSearch=$(".header-func1-search");
	//console.log($headerSearch);
	//console.log($headerInput);
	$headerInput.focus(function(){
		$headerSearch.css({borderColor:"#999"});
	})
	$headerInput.blur(function(){
		$headerSearch.css({borderColor:"#e5e5e5"});
	})




/*轮播1、最后一个的时候有白2、中间有间隙*/
var $bannerImgItem=$(".banner .imgItem");
//console.log($bannerImgItem.width());
var $bannerImgW=$bannerImgItem.width();
var $bannerImgL=$bannerImgItem.length;
var $bannerBtn=$(".banner .btnItem");
//console.log($bannerBtn);
var $wheel=$(".wheel");
//console.log($bannerImgL);
$bannerImgItem.css({marginLeft:$bannerImgW,display:"none"}).eq(0).css({marginLeft:0,display:"block"});
var now=0;
var next=0;
var t=setInterval(move,2000);
var $imgBox=$(".imgBox .imgItem");
function move(){
	next++;
	if(next==$bannerImgL){
		next=0;
	}
	//console.log($imgBox.width())
	//console.log("now="+now)
	//console.log("next="+next+"<br>")
	if(next==0){
			$bannerImgItem.eq(next).css({marginLeft:-$bannerImgW,display:"block"});
			$bannerImgItem.eq(next).animate({marginLeft:0},function(){
				
			})
			$bannerImgItem.eq(now).animate({marginLeft:0},function(){
				$(this).css({display:"none"})
			})
		}else{
			$bannerImgItem.eq(next).css({marginLeft:0,display:"block"});
			$bannerImgItem.eq(next).animate({marginLeft:0},function(){
				
			})
			$bannerImgItem.eq(now).animate({marginLeft:-$bannerImgW},function(){
				$(this).css({display:"none"})
			})
		}
	
	$bannerBtn.eq(now).removeClass("hot");
	$bannerBtn.eq(next).addClass("hot");
	now=next;
}
$wheel.hover(
	function(){
		clearInterval(t);
	},
	function(){
		t=setInterval(move,2000);
	}
)	
var bannerBtnLeft=$(".banner .btnLeft");
var bannerBtnRight=$(".banner .btnRight"); 
bannerBtnRight.click(function(){
	move();
})
bannerBtnLeft.click(function(){
	next--;
	if(next==-1){
		next=$bannerImgL-1;
	}
	if(now==0){
			$bannerImgItem.eq(next).css({marginLeft:0,display:"block"});
			$bannerImgItem.eq(next).animate({marginLeft:0},function(){
				
			})
			$bannerImgItem.eq(now).animate({marginLeft:-$bannerImgW},function(){
				$(this).css({display:"none"})
			})

		}else{
			$bannerImgItem.eq(next).css({marginLeft:-$bannerImgW,display:"block"});
			$bannerImgItem.eq(next).animate({marginLeft:0},function(){
				
			})
			$bannerImgItem.eq(now).animate({marginLeft:0},function(){
				$(this).css({display:"none"})
			})
		}
	
	$bannerBtn.eq(now).removeClass("hot");
	$bannerBtn.eq(next).addClass("hot");
	now=next;

})
$bannerBtn.click(function(i,obj){
	var index=$(this).index();
	if(now<index){
			$bannerImgItem.eq(index).css({marginLeft:0,display:"block"});
			$bannerImgItem.eq(now).animate({marginLeft:-$bannerImgW},function(){
				$(this).css({display:"none"})

			});
			$bannerImgItem.eq(index).animate({marginLeft:0},function(){

			})
		}else if(now>index){
			$bannerImgItem.eq(index).css({marginLeft:-$bannerImgW,display:"block"});
			$bannerImgItem.eq(now).animate({marginLeft:0},function(){
				$(this).css({display:"none"})

			});
			$bannerImgItem.eq(index).animate({marginLeft:0},function(){
			})

		};
		$bannerBtn.eq(now).removeClass("hot");
		$bannerBtn.eq(index).addClass("hot");
		now=next=index;

})




/*更多的按钮移上去的效果*/
var $more=$(".more");
$more.hover(
	function(){
		$more.css({color:"#333",borderColor:"#333"})
	},
	function(){
		$more.css({color:"#666",borderColor:"#999"})
	}
)




	








})