<template>
  <div class="users">
      <h1> Hello Users</h1>
    <ul>
        <li v-for="user in users" @click="user.show= !user.show">
            <h2>{{user.name}}</h2>
            <h3 v-show="user.show">{{user.position}}</h3> 
        </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users : [
          {name: "test01", position:"web开发", show:false},
          {name: "test02", position:"nginx开发", show:false},
          {name: "test03", position:"iis开发", show:false},
          {name: "test04", position:"apache开发", show:false},
      ]
    }
  }
}
</script>

<style scoped>


.users {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul{
   display: flex;
   flex-wrap: wrap;
   list-style-type: none;
   padding: 0; 
}

li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>

