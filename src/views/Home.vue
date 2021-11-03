<template>
  <div class="home">
    <el-button class="my_button" v-on:click="connect" :style="{
      text_align : 'start',
    }">马上加入</el-button>
    <canvas>
    </canvas>
  </div>
</template>

<script>
import {getAccount} from "../Web3/connect"
const Drawing = function() {
  // 参考资料：https://zhuanlan.zhihu.com/p/28257724
  document.addEventListener('touchmove', function (e) {
    e.preventDefault()
  })
  var c = document.getElementsByTagName('canvas')[0],
      x = c.getContext('2d');
  var pr = 1,
      w = window.innerWidth,
      h = window.innerHeight,
      f = 90,
      q,
      r = 0,
      u = Math.PI * 2,
      v = Math.cos,
      z = Math.random
  c.width = w * pr
  c.height = h * pr
  x.scale(pr, pr)
  x.globalAlpha = 0.6

  function i() {
    x.clearRect(0, 0, w, h);
    let grd = x.createLinearGradient(0.5*window.innerWidth-140,65,0.5*window.innerWidth+140,135);  //定义线性渐变对象，设定渐变线起始点和结束点坐标，坐标格式为(起始点x,起始点y,结束点x,结束点y)
    grd.addColorStop(0,"#d37700");   //定义渐变线起点颜色
    grd.addColorStop(0.5,"yellow");   //定义渐变线中间点的颜色
    grd.addColorStop(1,"#87CEFA");  //定义渐变线结束点的颜色
    x.font = "bold 10vh KanKin";
    x.textAlign = "center";
    x.textBaseline = "middle";
    x.strokeStyle = grd;
    x.strokeText("拍 卖 精 灵",0.5*window.innerWidth,0.2*window.innerHeight);
    x.font = "bold 3vh KanKin";
    x.textAlign = "start";
    x.textBaseline = "middle";
    x.fillStyle = grd;
    x.fillText("加 密 算 法 保 护   区 块 链 赋 能 量",0.383*window.innerWidth,0.28*window.innerHeight);
    x.font = "bold 3vh KanKin";
    x.textAlign = "start";
    x.textBaseline = "middle";
    x.fillStyle = grd;
    x.fillText("打 造 全 新 的   NFT 体 验      ",0.403*window.innerWidth,0.33*window.innerHeight);
    q = [{x: 0, y: h * .7 + f}, {x: 0, y: h * .7 - f}]
    while (q[1].x < w + f) d(q[0], q[1])
  }

  function d(i, j) {
    x.beginPath()
    x.moveTo(i.x, i.y)
    x.lineTo(j.x, j.y)
    var k = j.x + (z() * 2 - 0.25) * f,
        n = y(j.y)
    x.lineTo(k, n)
    x.closePath()
    r -= u / -50
    x.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16)
    x.fill()
    q[0] = q[1]
    q[1] = {x: k, y: n}
  }

  function y(p) {
    var t = p + (z() * 2 - 1.1) * f
    return (t > h || t < 0) ? y(p) : t
  }

  document.onclick = i
  document.ontouchstart = i
  i()
}
export default {
  name: "Home",
  mounted() {
    Drawing();
  },
  data(){
    return{
      data:'100px',
    }
  },
  methods:{
    connect()
    {
        let router = this.$router;
        this.$prompt('请输入账户', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputErrorMessage: '邮箱格式不正确'
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
            router.push("/User");
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
  }
}
</script>

<style scoped>
.home{
  /*background-image: url("../img/1.jpg");*/
}
.my_button {
  position: absolute;
  width:8vw;
  left: 46vw;
  top: 37vh;
  height:6vh;
  /*font-weight: bold;*/
  font-size: 2vh;
  font-family:微软雅黑;
  color:#87CEFA;
}
</style>