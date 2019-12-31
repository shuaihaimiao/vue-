<template>
    <div class="sr">
        <header>
            <div class="zsr">总收入：<span>￥487</span></div>
            
            <router-link class="left-theme-list" to="/tixian">
                <div class="tixian">我要提现</div>
            </router-link>
        </header>
        <hr>
        <div class="srmx">收入明细</div>
        <p class="p1">2017-05-09&nbsp;20:12:40<span>+7</span>学员付费课程 课程编号：117899391005</p>
        <p class="p1">2017-05-09&nbsp;20:12:40<span>+7</span>学员付费课程 课程编号：117899391005</p>
        <p class="p2">2017-05-09&nbsp;20:12:40<span style="color: red; margin: 0 140px; text-align: left;">+50</span>提现</p>
    </div>
</template>
<style lang="less">
    .sr{
        width: 860px;
        height: 580px;
        background-color: #fff;
        float: left;
        margin-left: 20px;
       
    }
    header{
        height: 80px;
    }
    .zsr{
        line-height: 80px;
        margin-left: 60px;
        
    }
    .zsr span{
      
        font-size: 22px;
        color: rgb(0, 170, 255);
    }
    .tixian{
        width: 160px;
        height: 30px;
        background-color:rgb(0, 170, 255) ;
        float: right;
        margin-top: -50px;
        margin-right: 20px;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;
        color: #fff;
    }
    .srmx{
        margin-left: 60px;
        margin-top: 25px;
        width: 64px;
        border-bottom: 2px solid rgb(0, 170, 255);
    }
    .p1{
        text-align: center;
        margin-top: 20px;
        color: #999;

    }
     .p1 span{
        margin: 0 145px;color: rgb(0, 170, 255);
    }
    .p2{
        margin-top: 20px;margin-left: 60px;color: #999;
    }
</style>