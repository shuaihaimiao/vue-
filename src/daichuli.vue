<template>
    <div class="dcl">
        <header class="header">
            <router-link to="/tiwen"><div class="cricle1" >1</div>
                <a href="JavaScript:; ">全部</a> </router-link> <div class="cricle1">1</div> <router-link to="/daichuli"><a href="JavaScript:;">待处理</a></router-link> 
                <div class="wytw">我要提问</div>
            </header>
        <hr>
      
    </div>
</template>
<style lang="less">
    .dcl{
        width: 860px;
    height: 580px;
    background-color: #fff;
    float: left;
    margin-left: 20px;
    }
    .dcl .header{
        height: 50px;
        background-color: #fff;
        padding-top: 30px;
    }
    .dcl .header a{
        
        float: left;
    }
    .dcl .header .cricle1{
        width: 20px;
        height: 20px;
        background-color: rgb(0, 170, 255);
        float: left;
        
        text-align: center;margin-right: 30px;
        border-radius: 10px;
        margin-left: 30px;
    }
    .dcl .header .wytw{
        width: 100px;
        height: 25px;
        background-color: rgb(0, 170, 255);
        float: right;
        margin-right: 30px;
        text-align: center;
        line-height: 25px;
        font-size: 14px;
        color: #fff;
        border-radius: 5px;
    }
    
    
</style>