<template>
  <div class="box">
      <div class="tips">
          <div v-if="fatherCom=='home'" class="tipspc">{{level}}</div>
          <div v-if="fatherCom=='answer'" class="tipspc">题目{{itemNum}}</div>
          <div v-if="fatherCom=='score'">score</div>
      <div>
          <div v-if="fatherCom=='home'">
              <router-link to="answer" class="btn"><img src="../../static/images/1-4.png" alt=""></router-link>
          </div>
          <div v-if="fatherCom=='answer'">
                <div class="answer_warp">
                  <ul>
                    <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer":key="index" @click="onchick(index)">
                      <span class="circle" :class="{choosed:onnum==index}">{{show(index)}}</span>
                      <span>{{item.answer_name}}</span>
                    </li>
                  </ul>
                </div>
            <div>
              <div class="btn" @click="next" v-if="itemNum<itemDetail.length"><img src="../../static/images/2-2.png" alt=""></div>
              <div v-else class="submit">tijiao</div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  import{mapState,mapMutations} from 'vuex'
  export default{
    props:["fatherCom"],
    computed:mapState(['level','itemNum','itemDetail']),
    data(){
      return{
        onnum:0,
        onclick:null
      }
    } ,
    methods:{

      show:type=>{
      switch(type){
        case 0:return "A"
        case 1:return "B"
        case 2:return "C"
        case 3:return "D"
      }
  } ,
    onchick(index){
      this.onnum=index
    },
    ...mapMutations(["next"]),
    },
    mounted(){
      document.body.style.background="url('../static/images/1-1.jpg')"
    }
  }
</script>
<style>
  html{
    width: 100%;
    height: 100%;
  }
  body{
    width: 100%;
    height: 100%;
    background-size: 100% !important;
  }
  .box{
    width: 100%;
    height: 5.9rem;
  }
  .tipspc{
    width: 2.5rem;
    height: 5.96rem;
    position: absolute;
    top: -2rem;
    right: 0.68rem;
    text-align: center;
    line-height: 8rem;
    font-size: 0.36rem;
    background:url("../../static/images/tippc.png")no-repeat;
  }
  .btn{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%);
  }
  .submit{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%);
  }
  .answer_warp{width:100%;color:#fff;position: absolute;top: 40%;left:50%;transform: translateX(-50%)translateY(-50%)}
  .answer_warp ul li{list-style: none;font-size: 0.36rem;}
  .circle{display: inline-block;width: 0.36rem;height: 0.36rem;}
  .choosed{background-color: #f00}
</style>
