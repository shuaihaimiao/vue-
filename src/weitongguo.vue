<template>
    <div class="lesson1">
  
        <header>
            <div class="input">
                <a class="left-theme-list" href="javascript:;">
                    <router-link to="/home">
                        <input type="radio" name="input1" id="">已发布课程
                    </router-link>
                </a>
                <a class="left-theme-list" href="javascript:;">
                    <router-link to="/shenhekecheng">
                        <input type="radio" name="input1" id="">审核中课程
                    </router-link>
                </a>
                <a class="left-theme-list" href="javascript:;">
                    <router-link to="/weitongguo">
                        <input type="radio" name="input1" id="">审核未通过课程
                    </router-link>
                </a>
            </div>
        </header>
        <hr>

        
        <div class="middle">
            <img src="../image/e学_14.png" alt="" srcset="">
            <div class="word">
                <p>暴露你的实力——面试</p>
                <p style="font-size: 13px; color: rgb(184, 184, 184);margin-top: 7px;">上传时间： 3月23日 ：15:43</p>
                <p style="font-size: 11px; margin-top: 7px;"><span> <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-denglu"></use>
                        </svg>128位学员<svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-renzheng"></use>
                        </svg>18个评论</span>
                </p>
                <p style="margin-top: 7px;color: rgb(7, 172, 255);">失败原因：内容包含反动性质，请修改</p>
                <div class="xgkc">
                    修改课程
                </div>
            </div>
        </div>
        <div class="middle">
            <img src="../image/e学_14.png" alt="" srcset="">
            <div class="word">
                <p>暴露你的实力——面试</p>
                <p style="font-size: 13px; color: rgb(184, 184, 184);margin-top: 7px;">上传时间： 3月23日 ：15:43</p>
                <p style="font-size: 11px; margin-top: 7px;"><span> <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-denglu"></use>
                        </svg>128位学员<svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-renzheng"></use>
                        </svg>18个评论</span>
                </p>
                <p style="margin-top: 7px;color: rgb(7, 172, 255);">失败原因：内容包含反动性质，请修改</p>
                <div class="xgkc">
                    修改课程
                </div>
            </div>
        </div>
      
        <!-- <router-link></router-link> -->
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="less">
    .lesson1 {
        width: 860px;
        height: 580px;
        background-color: white;
        float: right;
    }

    header {
        height: 80px;
    }

    .input {
        height: 100%;
        line-height: 80px;

    }

    .input input {
        margin-left: 30px;
    }

    .middle {
        padding: 37px;
        overflow: hidden;
    }

    .middle img {
        width: 200px;
        float: left;
    }

    .word {
        width: 570px;
        height: 100px;
        float: left;
        margin-left: 10px;
    }
</style>