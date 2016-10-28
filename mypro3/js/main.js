

$(document).ready(function(){
 //手机下拉
	var timer1=null;
   $(".phone").hover(function(){
   	   var This=$(this).find("div")
   	timer1=setTimeout(function(){
   		This.slideDown(500);
   	},200)
	}
    ,function(){
    	clearTimeout(timer1)
	$(this).find("div").css("display","none")}
	); 	



// 轮播图
$.get("js/lunbo.json",function(data){
			
				$.each(data,function(index,value){
					
					$("<li><a href='' style='background:url("+value+") no-repeat center center'></a></li>").appendTo($("#loop .pics"));
					$("<a>").appendTo($("#loop .opt"));
				})

				var $ul = $("#loop .pics");
				 $("#loop .pics li:first-child").clone().appendTo($("#loop .pics"));
				 var $li = $("#loop .pics li");

				 var len = $li.length;

				 var perWidth = $li.outerWidth();
				 console.log(perWidth)
				 $ul.css("width",perWidth*len);
				 $li.css("width",perWidth);
				
				 $(".opt a").eq(0).addClass("cur");
				 var i = 0;
				 var timer = setInterval(move,3000);

				
				  $("#prev").click(function(){
				 	clearInterval(timer);
				 	move();
				 	timer = setInterval(move,3000);
				 });

				 $("#next").click(function(){
				 	clearInterval(timer);
				 	i = i - 2;
				 	move();
				 	timer = setInterval(move,3000);
				 })

				$(".opt a").hover(function(){
				clearInterval(timer);
					i = $(this).index()-1;
					move()
				},function(){
					timer = setInterval(move,3000);
				})



				 function move(){
				 	i++;
					
				 	if(i==-1){
				 	i=len-2;
				 	$ul.css("margin-left",-perWidth*(len-1));
				 		}

					if(i==len-1){
                    
			 		$(".opt a").eq(0).addClass("cur").siblings().removeClass();	
				 	}

				 	if(i == len){
				 		i = 1;
                   $("#loop .pics").css("margin-left",0);	
				 	}
                   
				 	$ul.stop().animate({"margin-left":-perWidth*i});
				 	$(".opt a").eq(i).addClass("cur").siblings().removeClass();

				   }
			})
// 图片滑动区
 
$(".slide_pics li").mouseover(function() {
	console.log($(this).children('img').offsetLeft())
	// $(this).children('img').fadeOut('slow')
	// $(this).prev().find("a img").animate({left:-313}).fadeOut("fast")
	
	// $(this).prev().children("img").animate({left:-313}).fadeIn('slow')
});

// 精品手机
//滑动底边
     var timer=null;

$(".boutique li>a:not('.last1')").hover(function() {
	var x=$(this).width();
	    var y=$(this).parent().position().left;
	timer=setTimeout(function(){

	    $(".boutique").find(".bord").animate({width:x,left:y},"fast")},200)
}, function() {
	clearTimeout(timer)
	$(".boutique").find(".bord").css("width","0")
});
//图片移动
$(".jp .fir").hover(function() {
	$(this).animate({zIndex:"20"},200);
	 $(this).animate({height:"360px"},200);

}, function(){
	$(this).animate({height:"275px",zIndex: "0"},200)
});
$(".jp .two").hover(function() {
	$(this).animate({top:"190px"},200);  
}, function(){
	$(this).animate({top:"275px"},200);
});
//热销商品

//超级续航
// 获取数据
$.get("js/phone_jp.json", function(data) {
	var str1="";
	for(var i=0;i<4;i++){
		str1+="<dl><dt><a href='#'><img src='images/main/"+data[i].img+"'></a></dt><dd><h3><a href='#'>"+data[i].phone_name+"</a></h3><p><a href='#'>"+data[i].function+"</a></p><a href='#'>"+data[i].price+"</a></dd></dl>"
	}
	$(".super_p").html(str1)
		var str2="";
	for(var i=4;i<8;i++){
		str2+="<dl><dt><a href='#'><img src='images/main/"+data[i].img+"'></a></dt><dd><h3><a href='#'>"+data[i].phone_name+"</a></h3><p><a href='#'>"+data[i].function+"</a></p><a href='#'>"+data[i].price+"</a></dd></dl>"
	}
	$(".super_s").html(str2);
	var str3="";
	for(var i=8;i<12;i++){
		str3+="<dl><dt><a href='#'><img src='images/main/"+data[i].img+"'></a></dt><dd><h3><a href='#'>"+data[i].phone_name+"</a></h3><p><a href='#'>"+data[i].function+"</a></p><a href='#'>"+data[i].price+"</a></dd></dl>"
	}
	$(".super_f").html(str3);
	var str4="";
	for(var i=12;i<16;i++){
		str4+="<dl><dt><a href='#'><img src='images/main/"+data[i].img+"'></a></dt><dd><h3><a href='#'>"+data[i].phone_name+"</a></h3><p><a href='#'>"+data[i].function+"</a></p><a href='#'>"+data[i].price+"</a></dd></dl>"
	}
	$(".super_t").html(str4)
	// 鼠标停留显示
	$(".super").mouseover(function() {
		$(this).children("div").css("display","block");
        $(this).siblings().children('div').css("display","none");
        // $(this).siblings().mouseover(function() {
         
        //    $(this).children('div').css("display","block")
        // });
	})
});
//bottom
         $(".b_under").hover(function() {
         	$(this).find('em').stop().css("display","block").show(400)
         }, function() {
         	$(this).find('em').stop().hide(400)
         });

        $(".lan").hover(function() {
        	$(this).find('.en').stop().css("display","block").show(400)
        }, function() {
        	$(this).find('.en').stop().hide(400)
        });

})




