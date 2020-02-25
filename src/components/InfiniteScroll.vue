<template>
    <div>
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">

        <li v-for="(item,index) in list" :key="index">{{ item.title }}</li>

      </ul>
    </div>
</template>


<script>
import axios from 'axios'
import qs from 'qs'
import { InfiniteScroll,Indicator } from 'mint-ui';
  export default {
    data() {
      return {
          searchKey: {
            page: 1,
            limit: 18,
            tab: 'all',
            mdrender: true
          },
          list:[],
      };
    },
    methods: {   
       loadMore() {
            this.loading = true;
             Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
             });
            setTimeout(() => {
                this.searchKey.page++;
                this.getTopics();
                this.loading = false;
                Indicator.close();
            }, 2500);
       },


       getTopics() {
              let params = qs.stringify(this.searchKey);
              console.log("params",params);
              axios.get('https://cnodejs.org/api/v1/topics?' + params).then(response => {
                console.log(response.data)
                this.list = this.list.concat(response.data.data);
                if(response.data.data.length<this.searchKey.limit){

                }
              }).catch(error => {
                console.log(error)
              })
        },

    }, 
  };
</script>

<style lang="less" scoped>

</style>


