<template>
    <div class="shouru">
        <div class="left3">
            <div class="lesson">
            
    
                <div class="left-theme">
                    <div class="left-theme-center">
                        <div class="portrait-shadow">
                            <img class="head-portrait" src="../image/tx.png" alt="">
                            <a href="">编辑</a>
                        </div>
                            <router-link class="left-theme-list" to="/shouru">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-renzheng"></use>
                                </svg>
                                我的收入
                            </router-link>
                            <router-link class="left-theme-list" to="/yinhangka">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-renzheng"></use>
                                </svg>
                                我的银行卡
                            </router-link>
                            
                        
                        <!-- <a class="left-theme-list" href="javascript:;">
                            <router-link to="/password">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-renzheng"></use>
                                </svg>
                                密码管理
                            </router-link>
                        </a> -->
                    </div>
                </div>
              
            <router-view></router-view>
        </div>
        </div>
    </div>
</template>

<style lang="less">
    .shouru{
        width: 1200px;
        height: 588px;
        
    
    }
</style>