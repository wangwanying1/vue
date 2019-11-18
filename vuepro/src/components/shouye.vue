<template>
<div>
  <!-- <input type="button" value="点击" @click="dianji"/> -->
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="pubDate"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="channelName"
      label="新闻"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题">
    </el-table-column>
    <el-table-column
      prop="allList"
      label="内容">
    </el-table-column>
  </el-table>

  <div class="block">
    <span class="demonstration">显示总数</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentpage"
      :page-size="pagesize"
      layout="total, prev, pager, next"
      :total="totalpage">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [],
        totalpage:10,
        currentpage:1,
        pagesize:5

      }
    },
    created(){
      this.dianji();
    },
    methods:{
          
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentpage=val;
        this.dianji();
    },
       dianji(){
         this.$http.get("http://route.showapi.com/109-35",{
           params:{
             showapi_appid:	'106423',
             showapi_sign:'be5961f8ea334682bbf3ae875fb71d79',
             page:this.currentpage,
             maxResult:this.pagesize
           }
         }).then(res=>{
           console.log(res)
           this.allNum=res.data.showapi_res_body.pagebean;
           this.tableData=res.data.showapi_res_body.pagebean.contentlist;
          //  console.log(this.allNum);
         })
       }
    }
}
</script>
<style>

</style>
