<template>
    <div class="app-wrapper">
        <header-bar></header-bar>

        <!-- main -->
        <router-view class="main-container"></router-view>
        
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import HeaderBar from './headerBar'
import FooterBar from './footerBar'
export default {
    name: 'layout',
    components: {HeaderBar , FooterBar}

}
</script>
<style lang="less" scoped>
    .app-wrapper {
        width: 100%;
        height: 100%;
    }
    .main-container {
        width: 100%;
        height: e("calc(100% - 1rem)");
        position: relative;
    }
</style>