<template>
    <div>
        <h1>Home</h1>
        <button @click="goToMenu" class="btn btn-success">Let's order!</button>
    </div>
</template>

<script>
export default {
    methods:{
        goToMenu(){
            // 跳到上一次的页面
            // this.$router.go(-1);

            //跳转到指定定地址
            this.$router.replace('/menu');

            // 通过push跳转
            // this.$router.push({name: NameLink})
            this.$router.push('/menu')
            

        }
    }
}
</script>
