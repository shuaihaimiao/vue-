<template>
    <div class="tiwen">
      <header class="header">
          <div class="cricle1" >1</div>
        <a href="JavaScript:; ">全部</a>  <div class="cricle1">1</div> <router-link to="/daichuli"><a href="JavaScript:;">待处理</a></router-link> 
        <div class="wytw">我要提问</div>
    </header>
      <hr>
      <div class="zhong" style="height: 80px;">
        <p>中午在客凡打客服电话退货了，下午可以到吗，我在郑州</p>
        <p><span>回答时间： 3月23日 15:43</span><span>回答：0|91人看过</span><span>提问者：流浪猫</span></p>
        <div class="yzw" style="margin-top: -38px;">有追问</div>

    </div>
    <hr>
    <div class="zhong" style="height: 80px;">
        <p>中午在客凡打客服电话退货了，下午可以到吗，我在郑州</p>
        <p><span>回答时间： 3月23日 15:43</span><span>回答：0|91人看过</span><span>提问者：流浪猫</span></p>
        <div class="yzw" style="margin-top: -38px;">有追问</div>

    </div>
    <hr>  
    </div>
</template>
<script>
export default {
    data() {
        return {
          
        }
    },
    components: {
            
     },
     methods: {
         
     },

}
</script>
<style lang="less">
    .tiwen{
        width: 860px;
        height: 580px;
        background-color: #fff;
        float: left;
        margin-left: 20px;
    }
  .tiwen .header{
        height: 50px;
        background-color: #fff;
        padding-top: 30px;
    }
    .tiwen .header a{
        
        float: left;
    }
    .tiwen .header .cricle1{
        width: 20px;
        height: 20px;
        background-color: rgb(0, 170, 255);
        float: left;
        
        text-align: center;margin-right: 30px;
        border-radius: 10px;
        margin-left: 30px;
    }
    .tiwen .header .wytw{
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
    .zhong{
        width: 800px;
        height: 160px;
      
        margin: auto;
        padding-top: 20px;
        padding-left: 20px;
    }
    .zhong .sj{
        width: 0;
        height: 0;
        border-bottom: 20px solid rgb(241, 241, 241);
        border-top: 20px solid #fff;
        border-left: 20px solid #fff;
        border-right: 20px solid #fff;
        margin-left: 20px;
    }
    .zhong .zy{
        width: 500px;
        height: 50px;
        background-color: rgb(241, 241, 241);
        border-radius: 10px;
        font-size: 12px;
    }
    .zhong p span{
        margin-right: 30px;
        font-size: 13px;
        color: #999;
    }
    .zhong .yzw{
        width: 100px;
        height: 30px;
        border: 1px solid #999999;
        border-radius: 5px;
        float: right;
        margin-right: 30px;
        margin-top: -100px;
        text-align: center;
        line-height: 30px;
        color: rgb(0, 170, 255);
        font-size: 14px;
    }
</style>