<template>
    <div>
       <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">

            <mt-loadmore  
                :bottom-method="loadBottom" 
                :bottom-all-loaded="bottomAllLoaded" 
                ref="loadmore" 
                @bottom-status-change="handleBottomChange" 
                :auto-fill="false"
            >

            <div  v-for="(item,index) in topics" :key="index">
              
                  <h4> {{item.title}}</h4>

            </div>

        </mt-loadmore>
      </div>
    </div>
</template>


<script>
import axios from 'axios'

import qs from 'qs'

import { Loadmore } from 'mint-ui'

// Vue.component(Loadmore.name, Loadmore);
  export default {
    data() {
      return {

          searchKey: {
            page: 1,
            limit: 20,
            tab: 'all',
            mdrender: true
          },
          topics:[],
          bottomAllLoaded:false,
          wrapperHeight: 0

      };
    },

    methods:{
          handleBottomChange(status) {
              this.bottomStatus = status;
          },

          loadBottom() {
              setTimeout(() => {
                this.searchKey.page++;
                console.log(this.searchKey.page);
                this.getTopics();
                this.$refs.loadmore.onBottomLoaded();
              }, 3000);//通过setTimeout设置回调this.$refs.loadmore.onBottomLoaded()的释放时间
          },

          getTopics() {
              let params = qs.stringify(this.searchKey);
              console.log("params",params);
              axios.get('https://cnodejs.org/api/v1/topics?' + params).then(response => {
                console.log(response.data)
                this.topics = this.topics.concat(response.data.data);
                if(response.data.data.length<this.searchKey.limit){
                  this.bottomAllLoaded=true;
                }
              }).catch(error => {
                console.log(error)
              })
          }
      },

      mounted(){
        this.getTopics();    
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      },

    components:{
      mtLoadmore: Loadmore,
    }
  
  };
</script>

<style lang="less" scoped>
.page-loadmore-wrapper {
    overflow: scroll
}
</style>


