<template>
    <div>
       <div ref="wrapper">
         <!-- 
           :auto-fill="false" 不可忽略不然加载不出来页面；
           因为loadmore 在初始化时会自动检测它的高度是否能够撑满其容器，
           如果不能则会调用 bottom-method，直到撑满容器为止。
           对于 :top-method事件类型没事，但是对于:bottom-method事件类型
           它会自动检测当前页面的内容是否大于整个可视区的高，也就是说页面内容的高没有
           被撑满时会发生页面阻塞情况，因为它会一直在不断的检测当前页面内容的高，
           :auto-fill就是对当前页面检测是否被撑满。如果不想被检测就设置:auto-fill="false"

           对于:top-method事件类型虽然不设置也没有问题，但是我们最好还是给添加上:auto-fill="false"
          -->
        <mt-loadmore :bottom-method="loadBottom" ref="loadmore" :auto-fill="false">
          <h1>loadBottom入门 一 ：</h1>

          <ul class="list" v-for="(item,index) in pageList" :key="index">

            <li>{{item}}</li>

          </ul>
          
        </mt-loadmore>
      </div>
    </div>
</template>


<script>
import { Loadmore } from 'mint-ui'
  export default {
    data() {
      return {
        pageList:[1,2,3,4,5,6,7,8,9,10], 
      };
    },
    methods:{
          loadBottom() {
            this.$refs.loadmore.onBottomLoaded();    
          },    
      },
    components:{
      mtLoadmore: Loadmore,
    }
  
  };
</script>

<style lang="less" scoped>

</style>


