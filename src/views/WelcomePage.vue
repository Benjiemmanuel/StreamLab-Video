<template>
  <div class="welcome">
    <img src="@/assets/StreamLogo.png" alt="Logo" class="centered-image">
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'WelcomePage',
  mounted() {
    const router = useRouter();

    // Delay  for navigation
    setTimeout(() => {
      // Navigate to the home page
      router.push({ name: 'Home' }); 
    }, 5000); // 3000 milliseconds or 3 seconds
  },
};
</script>
<style>
.welcome {
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  background: #222121;
  min-height: 100vh;
}

.centered-image {
  max-width: 20%;
  max-height: 20%;
  object-fit: contain;
}

@media only screen and (max-width: 768px) {
  .centered-image {
    max-width: 50%;
    max-height: 50%;
    object-fit: contain;
  }
}
</style>
