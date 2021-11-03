<template>
  <div>
    <el-table
        :data="this.$store.state.mySellArray"
        style="{
      width: 100%;
      padding:20px 30px 30px 30px;
      border-bottom: 0;
      }
      ">
      <el-table-column
          prop="id"
          label="ID"
          width="150">
      </el-table-column>
      <el-table-column
          prop="name"
          label="名字"
          width="150">
      </el-table-column>
      <el-table-column
          prop="imgurl"
          label="图片URL"
          width="150">
      </el-table-column>
      <el-table-column
          label="是否进行拍卖"
          width="150"
      >
        <template slot-scope="scope">
          <p>{{ scope.row.onsale == false?"否":"是" }}</p>
        </template>
      </el-table-column>
      <el-table-column
          prop="owner"
          label="拥有者"
          width="400"
      >
      </el-table-column>
      <el-table-column
          label="操作"
          width="180"
      >
        <template slot-scope="scope">
          <el-button
              size="primary"
              class="My_button"
              @click="handleMore(scope.index,scope.row)">详情</el-button>
          <el-dialog title="收货地址" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
            <el-form :model="netForm">
              <el-form-item label="起始价格" :label-width="formLabelWidth" >
                <el-input v-model="netForm.startprice" autocomplete="off" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="当前最高价" :label-width="formLabelWidth">
                <el-input v-model="netForm.bidpricehistory" autocomplete="off" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="出价人" :label-width="formLabelWidth">
                <el-input v-model="netForm.bidderhistory" autocomplete="off" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="结束时间" :label-width="formLabelWidth">
                <el-input v-model="netForm.endtime" autocomplete="off" :disabled="true"></el-input>
              </el-form-item>
            </el-form>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {createNewAuction, createNewCharacter} from "../../Web3/connect"
export default {
  name: "ListmySeller",
  data(){
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      netForm:{

      },
    }
  },
  methods:{
    handleMore(index,obj){
      if(obj.onsale == true) {
        this.dialogFormVisible = true;
        this.dialogTableVisible = true;
        console.log(obj.id, typeof obj);
        Object.assign(this.netForm, obj);
        console.log(Date.now(), this.netForm.endtime);
        this.netForm.endtime = this.netForm.endtime - Math.floor(Date.now() / 1000);
      }
      else{
        this.$message({
          type:"info",
          message:"该NFT尚未进行拍卖"
        })
      }
    }
  }
}
</script>

<style scoped>
el-table__row>td {
  border: none;
}

.el-table::before {
  height: 0px;
}
.My_button{
  padding:10px 20px 10px 20px;
  font-size: 16px;
}
</style>