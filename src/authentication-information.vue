<template>
    <div class="authentication-information">
        <Header></Header>
        <div class="subject">
            <Left class="left-body"></Left>
            <div class="right-body">
                <div class="authentication-information-subject">

                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>

    import Left from './Public-left.vue'
    import Header from './Public-header.vue'
    import Footer from './Public-footer.vue'
    export default {

        components: {
            Left,
            Footer,
            Header,
        }
    }
</script>
<style>
    .authentication-information-subject {
        width: 860px;
        height: 588px;
        background: #fff;
    }
</style>