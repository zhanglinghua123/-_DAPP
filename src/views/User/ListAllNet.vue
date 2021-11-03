<template>
  <div>
    <el-table
        :data="this.$store.state.netArray"
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
          width="380"
      >
      </el-table-column>
      <el-table-column
          label="操作"
          width="200"
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
          <el-button
              size="success"
              class="My_button"
              @click="handleOwner(scope.row.id)">流转史</el-button>
          <el-dialog title="NFT流转历史" :visible.sync="dialogTableVisible" :modal-append-to-body="false">
            <el-table :data="Ownerhistory">
              <el-table-column property="date" label="日期" width="250"></el-table-column>
              <el-table-column property="owner" label="拥有者" width="370"></el-table-column>
              <el-table-column property="address" label="拍卖价格"></el-table-column>
            </el-table>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {createNewAuction, createNewCharacter,getOwner} from "../../Web3/connect"
export default {
  name: "ListALLNet",
  data(){
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogBuyFormVisible:false,
      formLabelWidth: '120px',
      netForm:{

      },
      buyForm:{
        id:"",
        startprice:"",
        time:"",
        privateKey:"",
      },
      Ownerhistory:[]
    }
  },
  methods:{
    handleMore(index,obj){
      console.log(obj);
      if(obj.onsale == true)
      {
        this.dialogFormVisible = true;
        console.log(obj.id, typeof obj);
        Object.assign(this.netForm, obj);
        console.log(Date.now(), this.netForm.endtime);
        this.netForm.endtime = this.netForm.endtime - Math.floor(Date.now() / 1000);
      }
      else
      {
        this.$message({
          type:"info",
          message:"该NFT未进行拍卖",
        })
      }
    },
    handleOwner(id){
      this.dialogTableVisible = true;
      this.Ownerhistory = [];
      getOwner(id).then((value)=>{
        console.log(value);
        for(let ownerhistory of value)
        {
          console.log(parseInt(ownerhistory[2]));
          let date = new Date(parseInt(ownerhistory[2])*1000);
          let obj = {
            date :date.toLocaleString(),
            owner : ownerhistory[0],
            address :ownerhistory[1],
          }
          this.Ownerhistory.push(obj);
        }
        console.log(this.Ownerhistory);
      })
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