<template>
    <div>
      <mt-button type="primary" @click="Toast">primary</mt-button>
    </div>
</template>


<script>
import { Toast } from 'mint-ui';

  export default {
    data() {
      return {
     
      };
    },
    methods: {  
    
       Toast(){
           Toast({
                message: '提示',
                position: 'middle',
                duration: 2000,
                iconClass: 'iconfont icon-leidian',
            });
       }

    },

   

    
  };
</script>

<style lang="less" scoped>

</style>


