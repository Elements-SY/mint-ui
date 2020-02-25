<template>
  <div>
    <v-loadmore ref="loadmore" :top-method="loadTop" :bottom-method="loadBottom" :auto-fill="false">
        <h1>下拉和上拉的结合 ：</h1>
      <ul class="list" v-for="(item,index) in pageList" :key="index">
        <li>{{item}}</li>
      </ul>
    </v-loadmore>
  </div>
</template>
<script>
  import {Loadmore} from 'mint-ui';
  export default {
    data() {
      return {
        pageList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      }
    },
    components: {
      'v-loadmore':Loadmore  
      // 为组件起别名，vue转换template标签时不会区分大小写，例如：loadMore这种标签转换完就会变成loadmore，容易出现一些匹配问题                        
    },
    mounted(){
    
    },
    methods: {
      loadTop() { 
       this.$refs.loadmore.onTopLoaded();
      },
      loadBottom() {
            this.$refs.loadmore.onBottomLoaded();    
      }, 
    }
  }
</script>
