<template>
    <div class="lessonadd">
        <div class="fang">
            <div class="sanjiao"></div>
          <router-link to="/shangchuanchenggong2"> <a href="#" class="cricle">+ </a></router-link> 
        </div>
        <div class="top">
            <p>不得上传未经授权的他人作品，以及色情，反动等违法视频</p>
            <p>视频大小限制，不支持断点续传，视频文件最大200M</p>
            <p>支持视频音频格式：MP4 flv f4v webm</p>
            <p>不支持时长小于1秒或者大于10小时的视频文件，上传后将不能成功转码</p>
            <p>高清(360P) 视频分辨率>=640x360,视频码率>=800kbps</p>
            <p>超清(720P) 视频分辨率>=960x540,视频码率>=1500kbps</p>
            <p>蓝光(1080P) 视频分辨率>=1920x1080,视频码率>=2500kbps</p>
        </div>
    </div>
</template>
<style lang="less">
    .lessonadd{
        width: 860px;
        height: 580px;
        background-color:#fff;
        float: left;
        margin-left: 20px;
    }
    .fang{
        width: 90px;
        height: 65px;
        border:3px solid  rgb(16, 16, 238);
        margin: 0px auto;
        border-radius: 20px;
        margin-top: 80px;
        
    }
    .sanjiao{
        width: 0;
        height: 0;
        border: 20px solid rgb(16, 16, 238);
        border-left-color:rgb(16, 16, 238);
        border-top-color:#fff;
        border-right-color:#fff;
        border-bottom-color:#fff;
        margin-left: 38px;
        margin-top: 10px;


    }
    p{
        line-height: 30px;
    }
    .cricle{
        width: 20px;
        height: 20px;
        background-color: rgb(16, 16, 238);
        float: right;
      margin-right: -10px;
      text-align: center;
      color: #fff;
      border-radius: 30px;
      line-height: 20px;
    }
    .top{
        width: 510px;
        height: 300px;
     
        margin: 50px auto;
    }
</style>