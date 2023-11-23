<template>
<NavBar/>
  <div class="home">
    <Carousel :navigation="true" class="carousel" v-slot="{currentSlide}">
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img class="carousel-image" :src="require(`../assets/${slide}.jpg`)" alt="Images">
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Slide from '../components/Slide.vue'
import NavBar from '@/components/NavBar.vue';
export default {
  name: "Home",
  components: { Carousel, Slide, NavBar},
  setup(){
    const carouselSlides = [
      'architecture-1868667_640',
      'bac',
      'ceme'
    ];
    return {carouselSlides};
  }
  
}
</script>
<style>
  .carousel{
    position: relative;
    max-height: 100vh;
    height: 100vh;
  }
  .slide-info{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
  }
  .carousel-images{
    min-width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>