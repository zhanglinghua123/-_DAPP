<template>
<div>
  <canvas>nide1</canvas>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="NFT名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="IMG">
      <el-input v-model="form.url"></el-input>
    </el-form-item>
    <el-form-item class="button_item">
      <el-button type="primary" v-on:click="onSubmit">立即创建</el-button>
      <el-button @click="onNoSubmit">取消</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import {createNewCharacter} from "../../Web3/connect"
const Drawing = function()
{
  let canvas = document.getElementsByTagName("canvas")[1];
  console.log(canvas);
  canvas.width = 0.6*window.innerWidth;
  canvas.height=150;
  let context = canvas.getContext("2d");
  console.log(context);
  let grd = context.createLinearGradient(0.3*window.innerWidth,0,0.8*window.innerWidth,150);  //定义线性渐变对象，设定渐变线起始点和结束点坐标
  grd.addColorStop(0,"#87CEFA");   //定义渐变线起点颜色
  grd.addColorStop(0.5,"yellow");   //定义渐变线中间点的颜色
  grd.addColorStop(1,"red");  //定义渐变线结束点的颜色
  context.font = "bold 30px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = grd;
  context.fillText("创建你的NFT",0.38*window.innerWidth,75);
}
export default {
  name: "Create_Net",
  data() {
    return {
      form: {
        name: "",
        url:"",
      }
    }
  },
  methods: {
    onSubmit() {
      const Name = this.form.name;
      const Url = this.form.url;
      console.log("submit",Name,Url);
      let router = this.$router;
      this.$prompt('请输入密钥(这需要消耗你的0.1ether)', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({value}) => {
        console.log("privateKey",value,Name,Url);
        createNewCharacter(Name,Url,value).then(
            block=>{
              console.log("block",block);
              this.$message({
                     type: 'success',
                     message: "恭喜你成功创建了自己的NFT!"
                                      })}).catch(()=>{
              this.$message({
                type: 'info',
                message: '密钥输入错误: 请重试',
              })

        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      })
    },
    onNoSubmit()
    {

      this.form.name = "";
      this.form.url  = "";

    }
  },
  mounted() {
    Drawing();
  }
}
</script>

<style scoped>
#create_canvas{
  width:100%;
  height:200px;
}
.button_item{
  position :relative;
  left:27vw;
}
</style>