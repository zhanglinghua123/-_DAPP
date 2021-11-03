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
              @click="getNFT(scope.row)">领取</el-button>
          <el-dialog title="收货地址" :visible.sync="dialogSellFormVisible" :modal-append-to-body="false">
            <el-form :model="bidForm">
              <el-form-item label="起始价格" :label-width="formLabelWidth" >
                <el-input v-model="bidForm.startprice" autocomplete="off" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="当前最高价" :label-width="formLabelWidth">
                <el-input v-model="bidForm.bidpricehistory" autocomplete="off" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="出价人" :label-width="formLabelWidth">
                <el-input v-model="bidForm.bidderhistory" autocomplete="off" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="结束时间" :label-width="formLabelWidth">
                <el-input v-model="Endtime" autocomplete="off" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="您的出价" :label-width="formLabelWidth">
                <el-input v-model="myPrice" autocomplete="off" ></el-input>
              </el-form-item>
              <el-form-item label="您的私钥" :label-width="formLabelWidth">
                <el-input v-model="myPrivateKey" autocomplete="off" ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="notBid">取 消</el-button>
              <el-button type="primary" @click="Bid">确 定</el-button>
            </div>
          </el-dialog>
          <el-button
              size="success"
              class="My_button"
              @click="bidNFT(scope.row)">竞拍</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import {bid, change_Owner} from "../../Web3/connect"
export default {
  name: "ListSell",
  data(){
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogSellFormVisible:false,
      formLabelWidth: '120px',
      netForm:{
      },
      bidForm:{

      },
      myPrice:0,
      myPrivateKey:"",
      Endtime:0,
    }
  },
  computed(){
  },
  methods:{
    handleMore(index,obj){
      this.dialogFormVisible = true;
      this.dialogTableVisible = true;
      console.log(obj.id, typeof obj);
      Object.assign(this.netForm,obj);
      console.log(Date.now(),this.netForm.endtime);
      this.netForm.endtime = this.netForm.endtime - Math.floor(Date.now()/1000);
    },
    bidNFT(obj)
    {
      console.log(obj.endtime,Math.floor(Date.now()/1000));
      if(obj.endtime < Math.floor(Date.now()/1000))
        this.$message({
          type: 'info',
          message: '拍卖已经结束'
        })
      else if(this.$store.state.Myaccount == obj.owner)
      {
        this.$message({
          type: 'info',
          message: '您是该NFT的拥有者,不能参加拍卖'
        })
      }
      else
      {
        Object.assign(this.bidForm,obj);
        this.Endtime = this.bidForm.endtime - Math.floor(new Date()/1000);
        this.dialogSellFormVisible = true;
      }
    },
    notBid()
    {
      this.dialogSellFormVisible = false;
      this.$message({
        type: 'info',
        message: "取消竞拍",
      })
    },
    Bid()
    {
      console.log(this.myPrice,parseInt(this.bidForm.bidpricehistory));
      if(this.myPrice < parseInt(this.bidForm.bidpricehistory) || this.bidForm.startprice > this.myPrice)
        this.$message({
          type: 'info',
          message: "钱不够,要加钱",
        })
      else{
        console.log(this.bidForm.id,this.myPrice,this.myPrivateKey);
        bid(this.bidForm.id,this.myPrice,this.myPrivateKey).then(()=>{
          this.dialogSellFormVisible = false;
          this.$message({
            type: 'success',
            message: "竞拍成功",
          })
        }).catch(()=>{
          this.dialogSellFormVisible = false;
          this.$message({
            type:"info",
            message:"竞拍失败",
          })
        })
      }
    },
    getNFT(obj)
    {
      this.$prompt('请输入密钥', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        }).then(({value})=>{
        console.log(obj.id,value);
        change_Owner(obj.id,value).then(()=>{
          this.$message({
            type:"success",
            message:"领取成功",
          })
        }).catch(()=>{
          this.$message({
            type:"info",
            message:"领取失败",
          })
        })
      }).catch(()=>{
        this.$message({
          type:"info",
          message:"取消领取",
        })
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