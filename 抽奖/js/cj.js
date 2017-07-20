/**
 * Created by Administrator on 2017/4/28.
 */
var sta=0;// 表示轮盘关闭
var j=5;//表示轮盘可转的次数
var x= null;//轮盘旋转角度
var stas=0//表示次数状态是否为0


// 点击后转盘开始旋转
$(".coin").on("click",function () {
    cj();
});


//点击弹窗收回
$(".true , .x").on("click",function () {
    $(".cover").fadeOut()
    $(".dan").animate({"top":"-490"},500)
});


//当轮盘转到一定角度时，弹出弹窗告知奖品
function gitfun(a,b,name) {
    if(a<x - 360 && x - 360<b){
        $(".pic img").attr("src",name);
        $(".cover").fadeIn();
        $(".dan").animate({"top":"50"},500)
    }
}


//轮盘转动
function cj (){
    //状态判断是否可以启动轮盘
    if(stas==0){

         //每次点击重新赋值
        x = parseInt((Math.floor(Math.random()*360)+360));
        var i=0;

        //状态判断防止多次重复点击
        if(sta==0){

            //判断次数并赋值
            if(j>0){
                j--;
                $(".cj").html(j);
            }

            //控制轮盘速度,旋转结束后进行奖品判断
            var set = setInterval(function () {
                sta=1;
                if(i<x ){
                    i+= 3;
                    $(".circle").css({"transform":"rotate3d(0,0,1,"+ i +"deg)"})
                    sta=1
                }else {

                    //剩余次数为0，则不可点击（更改状态）并替换图片
                    if(j==0){
                        $(".coin img").attr("src","images/Pointer2.png");
                        stas=1;
                    }
                    //清除计时器并重置状态
                    clearInterval(set);
                    sta = 0;

                    //判断奖品，并弹出弹窗
                    if(337.5<x - 360 || x - 360<22.5){
                        console.log(1);
                        $(".pic img").attr("src","images/001.png");
                        $(".cover").fadeIn();
                        $(".dan").animate({"top":"15%"},500)
                    }
                    gitfun(157.5,202.5,"images/001.png");
                    gitfun(202.5,247.5,"images/002.png");
                    gitfun(22.5,67.5,"images/002.png");
                    gitfun(247.5,292.5,"images/003.png");
                    gitfun(67.5,142.5,"images/003.png");
                    gitfun(112.5,157.5,"images/004.png");
                    gitfun(292.5,337.5,"images/004.png");
                }
            })
        }
    }else{
        alert("您抽奖次数已用完！")
    }
}