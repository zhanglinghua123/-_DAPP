<template>
<div>
  <el-row>
    <el-col class="Intro" :span="4" :style="{
       height:'100vh',
       border_right:'2px solid snow',
    }">
      <div class="col1" :style="{
        border_right: '0px',
      }">
        <canvas></canvas>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location button"></i>
              <span>我的NFT</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="turnToCreate">创建NFT</el-menu-item>
              <el-menu-item index="1-2" @click="turnToListMine">查看NFT</el-menu-item>
              <el-menu-item index="1-3" @click="turnToMineSeller">查看自己拍卖的NFT</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2" @click="turnToAllNFT">
            <i class="el-icon-menu"></i>
            <span slot="title">现有的NFT</span>
          </el-menu-item>
          <el-menu-item index="3" @click="turnToseller">
            <i class="el-icon-document"></i>
            <span slot="title" >正在竞拍</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-col>
    <el-col :span="20">
      <el-header id="header">
        <i class="el-icon-s-fold"></i>
        <i class="el-icon-user-solid User_solid">
        </i>
        <el-dropdown id="user_message">
          <span class="el-dropdown-link" >
             用户信息<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-tooltip class="item" effect="dark" :style="{
                border:'0px',
              }"  placement="top-start">
                <div slot="content">{{this.MyString}}</div>
                <el-button>账户信息</el-button>
              </el-tooltip>
            </el-dropdown-item>
            <el-dropdown-item>
                <el-button :style="{
                  border:'0',
                }"@click="changeMyAccount">变更账户</el-button>
            </el-dropdown-item>
            <el-dropdown-item>
                <el-button :style="{
                  border:'0',
                }"@click="returnHome">返回首页</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="next_coin">
          <p id="tag" style="{
          }">{{firstPlace}}&nbsp&nbsp<i class="el-icon-arrow-right tag_coin"></i>&nbsp&nbsp<span id="tag_span">{{now_content}}</span>
          </p>
        </div>
      </el-header>
      <el-main id="main">
        <div class="table">
          <router-view></router-view>
        </div>
      </el-main>
    </el-col>
  </el-row>
  </div>
</template>

<script>
import {getAccount,getMyAuction,getAuction,getCharacter,getAllCharacter,createNewCharacter} from "@/Web3/connect";
const {Account,privateKey} = require("../Web3/abi")
console.log(Account,privateKey);
const Drawing = function()
{
  var canvas = document.getElementsByTagName("canvas")[0];
  var context = canvas.getContext("2d");
  let grd = context.createLinearGradient(0.05*window.innerWidth,0,0.17*window.innerWidth,100);  //定义线性渐变对象，设定渐变线起始点和结束点坐标
  grd.addColorStop(0,"#87CEFA");   //定义渐变线起点颜色
  grd.addColorStop(0.5,"yellow");   //定义渐变线中间点的颜色
  grd.addColorStop(1,"#98FB98");  //定义渐变线结束点的颜色
  context.font = "bold 45px KanKin";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.globalAlpha = 0.6;
  context.fillStyle = grd;
  context.fillText("拍 卖 精 灵",0.10*window.innerWidth,75);
}
export default {
  name: "User",
  data()
  {
    return {
      str1: "test",
      str2: "test2",
      now_content:"",
      firstPlace:"首页",
    }
  },
  mounted() {
    Drawing();
  },
  methods:{
    turnToAllNFT()
    {
      if(this.$route.path!='/User/listall')
      {
        this.$router.push("/User/listall");
        this.firstPlace = "现有的NFT";
      }
        console.log(this.$store.state.Myaccount);
      getAllCharacter().then(value=>{
        console.log(value);
        this.$store.commit('changeNet', value);
        console.log(this.$store.state.netArray);
      })
    },
    turnToCreate()
    {
      if(this.$route.path!='/User/create')
      {
        this.$router.push("/User/create");
        this.firstPlace = "我的NFT";
        this.now_content = "创建NFT"
      }
    },
    turnToListMine()
    {
      if(this.$route.path!='/User/list')
      {
        this.$router.push("/User/list");
        this.firstPlace = "我的NFT";
        this.now_content = "查看NFT"
      }
      console.log("router");
      console.log(this.$store.state.Myaccount);
        getCharacter(this.$store.state.Myaccount).then(value=>{
          console.log(value);
          this.$store.commit('changeMyNet', value);
          console.log(this.$store.state.myNetArray);
      })
    },
    turnToseller()
    {
      if(this.$route.path!='/User/seller')
      {
        this.$router.push("/User/seller");
        this.firstPlace = "正在竞拍";
      }
      getAuction().then(value=>{
        console.log(value);
        this.$store.commit('changeSellNetArray', value);
        console.log(this.$store.state.sellNetArray);
      })
    },
    turnToMineSeller()
    {
      if(this.$route.path!="/User/listmysell")
      {
        this.$router.push("/User/listmysell");
        this.firstPlace = "我的NFT";
        this.now_content = "拍卖情况";
      }
      getMyAuction(this.$store.state.Myaccount).then(value=>{
        console.log(value);
        this.$store.commit('changeMyNetArray', value);
        console.log(this.$store.state.sellNetArray);
      })
    },
    returnHome()
    {
      this.$router.push("/Home");
    },
    changeMyAccount() {
      this.$prompt('请输入账户', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        let Myaccount = getAccount().then(myvalue=>{
          if(myvalue.indexOf(value)!=-1)
          {
            this.$store.commit("changeMyAccount",value);
            console.log("Myaccount",this.$store.state.Myaccount);
            this.$message({
              type: 'success',
              message: '输入成功: 你的账户为 ' + value
            })
          }
          else{
            this.$message({
              type: 'failure',
              message: '输入错误账户',
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      })
    }
  },
  computed:
  {
    MyString()
    {
      return "您的账户为"+this.$store.state.Myaccount;
    }
  }
}
</script>

<style scoped>
canvas{
  height:100px;
  width:100%;
}
body{
  margin:0px;
}
.user{
  position:absolute;
  /*left:20vw;*/
  /*top:102px;*/
  /*margin-top:2px;*/
  /*width:60vw;*/
  /*height: calc(100% - 100px);*/
  background-color: white;
  padding-top: 1px;
  padding-bottom: 1px;
}
.detail{
  border: solid 2px #F0F8FF;
}
p{
  margin-top:5px;
  font-size: 14px;
  margin-bottom: 0px;
}
.Intro{
  /*border-radius: 2px;*/
  /*border:2px solid snow;*/
}
#list{
  width:100%;
  height:30px;
  font-weight: bold;
  font-size: 20px;
  margin:2px 0 2px 2px;
  /*border-bottom: 1px solid rgba(0,0,0,0.08);*/
}
.col1{
  height:100vh;
  border-right:solid 1px rgba(0,0,0,0.15);
}
#header{
  padding-top: 10px;
  height:100px;
  width:100%;
  font-size: 30px;
  color:darkgray;
}
#main{
  z-index:1;
  position: relative;
  top:40px;
  width:100%;
  height:calc(100vh - 100px);
  background-color: rgba(135,200,250,0.1);
  padding-bottom: 40px;
}
.radius{
  display: inline;
  background-color: darkgray;
  border-radius: 50%;
  width:10px;
  height:10px;
}
#user_message{
  position: relative;
  bottom: 6px;
  left:70vw;
  color: #87CEFA;
  font-size: 18px;
}
.User_solid{
  position: relative;
  left:69.5vw;
}
#tag{
  font-size: 18px;
  font-weight:bolder;
  color:black;
  position: relative;
  top:6px;
  rigth:20px;
}
#tag span{
  position: relative;
  font-size: 18px;
  color:darkgray;
}
.tag_coin{
  font-size: 16px;
  color:darkgray;
}
.table{
  z-index:2;
  height: 100%;
  width:100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>