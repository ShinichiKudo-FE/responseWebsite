$(document).ready(function(){

    $(".drop").on("mouseover",function(){
   	    a=$(".drop").index($(this))
        $(".drop ul").eq(a).css("display","block");
    })
        $(".drop").on("mouseout",function(){
        $(".drop ul").eq(a).css("display","none");
   })
        
        
        
    $(".fixT").on("mouseover",function(){
   	    a=$(".fixT").index($(this))
        $(".fixT ul").eq(a).css("display","block");
        })
        $(".fixT").on("mouseout",function(){
        $(".fixT ul").eq(a).css("display","none");
    })    
        
        
// 当滚动到轮播图的位置  固定导航栏出现
	var head=$(".head");	
	 $(window).scroll(function(){   
	  var obj=document.body.scrollTop?document.body:document.documentElement;
        if($(".banner").offset().top <= obj.scrollTop){        
          head.css("display","block")
        }
        else{        
           head.css("display","none")
        }
    })
	
// 选择框
 	var lis=$(".choose .ch_tab ul li");
 	var ch_con=$(".ch_con");
    var c_span=$(".choose .ch_tab ul li span");
 	lis.eq(0).addClass('c-active')
    c_span.eq(0).css({display:"block"})
 	lis.click(function(){
        lis.removeClass().eq($(this).index()).addClass("c-active");
        ch_con.css({display:"none"}).eq($(this).index()).css({display:"block"});
        c_span.css({display:"none"}).eq($(this).index()).css({display:"block"})
    })
 	//轮播图
    var ban=$(".banner .ban")
    var banner=$(".banner")[0];           
    var ban_prev=$("#banner .prev")[0];
    var ban_next=$("#banner .next")[0];
    var t=setInterval(move, 4000);

    var now=0;
    var next=0;

    function move(){
        next=now+1;
        if(next>=ban.length){
            next=0;
        }
        
        ban.eq(now).css("display","none").end().eq(next).css("display","block")
        now=next;
    }

    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.mouseout=function(){
            t=setInterval(move,4000);
    }

    ban_prev.onclick=function(){
        next=now-1;
         if(next<0){
            next=ban.length-1;
        }

        ban.eq(now).css("display","none").end().eq(next).css("display","block")
        now=next;
    }

    ban_next.onclick=function(){
        move();
    }

})
$(function(){
    var left = $('.jt-1');
    var right = $('.jt-2');
    var lunbo = $('.lunbo');
    var imgbox = $('.imgbox');
})





