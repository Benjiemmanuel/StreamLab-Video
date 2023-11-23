<template>
  <div class="carousel">
    <slot :currentSlide = currentSlide />
    <!-- Navigation -->
    <div class="navigate">
      <div class="toggle-page left">
        <i @click="prevSlide" class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-page right">
        <i @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import{ref, onMounted} from 'vue';
export default {
  props:["startAutoPlay", 'timeout', 'navigation'],
  setup(){
    const currentSlide =  ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(true);
    const timeoutDuration = ref(5000)
    // next slide
    const nextSlide = () => {
      if(currentSlide.value === getSlideCount.value){
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    // prev slide
    const prevSlide = () => {
      if(currentSlide.value === 1){
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    // autoPlay
      const autoPlay = () =>{
        setInterval(()=> {
          nextSlide()
        }, timeoutDuration.value);
      };

      if(autoPlayEnabled.value){
        autoPlay();
      }

    onMounted(()=>{
      getSlideCount.value = document.querySelectorAll('.slide').length;
      
    });
    return {currentSlide, nextSlide, prevSlide};
  },
}
</script>

<style scoped>
.navigate{
   width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
}
.toggle-page{
  display: flex;
  flex: 1;
}
.right{
  justify-content: flex-end;
}
i{
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #0000;
}

</style>