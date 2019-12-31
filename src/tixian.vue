<template>
    <div class="tiXian">
      <header>
          <p>可提现金额: <span>￥487</span></p>
      </header>
      <hr>
      <div class="inp">
       提现金额：<input type="text"><br>
        提现银行卡 <input type="text" name="" id=""><br>
        手续费：<input type="text" name="" id="">
        <div style="width: 100px;height: 30px;background-color: rgb(0, 170 ,255);margin-top: 15px; margin-left: 130px;
        
        text-align: center; line-height: 30px;color: #fff; font-size: 12px;">确认提现</div>
      </div>
      
    </div>
</template>
<style lang="less">
    .tiXian{
        width: 860px;
        height: 580px;
        background-color:#fff;
        float: left;
        margin-left: 20px;
    }
    .tiXian header p{
        line-height: 100px;
        margin-left: 60px;
    }
    .tiXian header p span{
        font-size: 24px;
        color: rgb(0, 170, 255);
    }
    .tiXian .inp{
        width: 400px;
        height: 300px;
        
       text-align: right;
     
    }
    .tiXian .inp input{
        height: 30px;
        width: 280px;
        margin-top: 20px;
    }
</style>