<template>
    <div>
      <mt-button type="primary" @click="Indicator">primary</mt-button>
    </div>
</template>


<script>
import { Indicator } from 'mint-ui';

  export default {
    data() {
      return {
     
      };
    },
    methods: {  
    
       Indicator(){


          Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          })
          setTimeout(() => {
              Indicator.close();
          }, 3000);
         
       }

    },

   

    
  };
</script>

<style lang="less" scoped>

</style>


