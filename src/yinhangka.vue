<template>
    <div class="yhk">
      <div class="left">
        <img src="../image/我的收入-我的银行卡_03.png" alt="" >
        <p>华夏银行 <samp>默认</samp> <span>尾号4704</span></p>
      </div>
      <div class="left" style="text-align: center; ">
        <a href="javascript:;"><router-link class="left-theme-list" to="/yhktj">+添加银行卡</router-link></a>
    </div>
    </div>
</template>
<style lang="less">
    .yhk{
        width: 860px;
        height: 580px;background-color: #fff;
        float: left;
        margin-left: 20px;
    }
    .left{
        width: 380px;
        height: 80px;
        background-color: rgb(240, 240, 240);
        margin-top: 50px;
        float: left;
        margin-left: 30px;
    }
   .left img{
       float: left;
       margin-top: 21.5px;
       margin-left: 21.5px;
   }
   .left p{
       text-align: left;
       margin-left: 70px;
       line-height: 80px;
   }
   .left p samp{
       color:  rgba(21, 107, 228, 0.864);
   }
   .left p span{
       float: right;
       margin-right: 20px;
   }
   .left a{
    color: rgb(0, 170, 255);
       line-height: 80px;
   }
</style>