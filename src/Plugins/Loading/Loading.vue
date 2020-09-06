<template>
    <div v-show='show'>
        <div class="bg">
            <div class="loading">

            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
    @keyframes scroll {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .bg{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,.6);
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .loading{
        width: 60px;
        height: 60px;
        border-radius: 40px;
        background-origin: 10px solid #ccc;
        border-left-color: transparent;
        animation: scroll .8s linear infinite;
    }
</style>
