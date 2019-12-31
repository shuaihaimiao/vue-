<template>
    <div class="success">
        <header>
            <p style="margin-left: 30px;margin-top: 30px;">全民股东_201610241223.mp4</p>
            <div class="tiao"></div>
            <div class="dui">✔</div><br>
            <span>上传成功100%</span>
            <a style="     float: right;
            margin-right: 60px;
            margin-top: 25px;
            font-size: 13px;
            color: rgb(0, 170, 255);" href="JavaScript:;">重新上传</a>
        </header>
        <div class="input" style="  width: 750px; height: 370px; margin: auto;">
            标题:<input type="text" placeholder="请输入课程标题" style="width: 580px;    margin-right: 50px;"><br>
            分类：<select name="" id="" placeholder="请输入课程分类">
                <option value=''>必修课程</option>
                <option value=''>选修课程</option>
                <option value=''>综合课程</option>
            </select><br>
            课程介绍：<textarea placeholder="请输入课程介绍" name="" id="" cols="90" rows="10" style="margin-right: 50px;"></textarea>
            <router-link to="/shangchuanchenggong" ><div class="save">保存信息</div></router-link>
        </div>
        
    </div>

</template>
<style lang="less">
    .success {
        width: 860px;
        height: 580px;
        background-color: #fff;
        float: left;
        margin-left: 20px;
    }

    header span {
        margin-left: 30px;
        color: #999;
        font-size: 13px;
    }

    

    .input input {
        
    }

    select {
        width: 580px;
        margin-right: 50px;
    }
</style>