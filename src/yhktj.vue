<template>
    <div class="yhktj">
     <div class="input">
        姓名：<input type="text" value="刘子熙" style="width: 300px;height: 30px; background-color: #999999;" readonly='readonly'><br>
        身份证：<input type="text" value="410813197801052323" style="width: 300px;height: 30px;  background-color:#999;" readonly='readonly'><br>
        选择银行：&nbsp;&nbsp;&nbsp;<select name="" id=""  style="width: 300px;"  >
            <option value="" >中国工商银行</option>
            <option value="" >中国建设银行</option>
            <option value="" >中国农业银行</option>
            <option value="" >中国银行</option>
        </select><br>
        银行卡号：<input type="text" style="width: 300px;height: 30px;" placeholder="请输入银行卡号"><br>
        手机号：<input type="text" style="width: 300px;height: 30px;" placeholder="请输入预留的手机号">
     </div>
     <div class="save">保存信息</div>
    </div>
</template>
<style lang="less">
    .yhktj{
        width: 860px;
        height: 580px;
        background-color: white;
        float: left;
        margin-left: 20px;
        overflow: hidden;
       
    }
    .input{
        width: 480px;
        height: 300px;
        line-height: 50px;
        text-align: right;
    }
    .save{
        width:  100px;height: 30px;background-color: rgb(51, 133, 255);line-height: 30px; text-align: center;margin-left: 255px; color: #ffffff; font-size: 14px;
    }
</style>