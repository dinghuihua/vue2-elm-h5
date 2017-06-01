<template>
  <div class="loading_jump">
    <div class="loading_jump1"></div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
  .loading_jump{
    width:1rem;
    height:1rem;
    position:fixed;
    top:50%;
    left:50%;
    margin-top: -0.5rem;
    margin-left: -0.5rem;
  .loading_jump1{
    width:1rem;
    height:1rem;
    position:absolute;
    background-image: url('/static/images/loading.png');
    background-size: 100% auto;
    background-position: 0 -1rem;
    animation: loadanimate 3.6s steps(6) infinite, updown .8s infinite;
  }
}
@-webkit-keyframes loadanimate{
  0%{
    background-position: 0 0rem;
  }
  100%{
    background-position: 0 -6rem;
  }
}
@keyframes loadanimate{
  0%{
    background-position: 0 0rem;
  }
  100%{
    background-position: 0 -6rem;
  }
}
@-webkit-keyframes updown{
  0%{
    -webkit-transform:translateY(0rem); 
  }
  50%{
    -webkit-transform:translateY(-1rem); 
  }
  100%{
    -webkit-transform:translateY(0rem); 
  }
}
@keyframes updown{
  0%{
    transform:translateY(0rem); 
  }
  50%{
    transform:translateY(-1rem); 
  }
  100%{
    transform:translateY(0rem); 
  }
}
// @-webkit-keyframes updownbigsmall{
//   0%{
//     -webkit-transform:translateY(0rem) scale(1); 
//   }
//   50%{
//     -webkit-transform:translateY(.2rem) scale(.4); 
//   }
//   100%{
//     -webkit-transform:translateY(0rem) scale(1); 
//   }
// }
// @keyframes updownbigsmall{
//   0%{
//     transform:translateY(0rem) scale(1); 
//   }
//   50%{
//     transform:translateY(.2rem) scale(.4); 
//   }
//   100%{
//     transform:translateY(0rem) scale(1); 
//   }
// }

</style>
