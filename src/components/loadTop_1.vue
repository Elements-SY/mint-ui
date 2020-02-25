<template>
  <div>
    <v-loadmore :top-method="loadTop" ref="loadmore">
        <h1>loadTop入门 一 ：</h1>
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
        pageList:[1,2,3,4,5,6,7,8,9,10],
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
       //触发top-method事件类型的loadTop方法之后一定要获取调用loadmore元素属性的方法onTopLoaded()
       //否则下拉之后不能回到原来的位置，会处在一直在刷新状态。
        //console.log(this.$refs.loadmore.onTopLoaded());
      },
    }
  }
</script>
