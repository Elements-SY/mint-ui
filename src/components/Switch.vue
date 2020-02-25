<template>
    <div>
       
       <mt-switch v-model="value" @change="Switch">开关</mt-switch>
   


    </div>
</template>


<script>
import { Switch } from 'mint-ui';
  export default {
    data() {
      return {
      value: false,
      };
    },
    methods: {  
     Switch(){
       console.log(this.value);

     }
       

    },

   

    
  };
</script>

<style lang="less" scoped>

</style>


