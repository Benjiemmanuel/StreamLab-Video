<template>
  <div class="navbar">
    <div class="left-side">
      <img src="../assets/StreamLogo.png" alt="Logo" class="logo">
    </div>
    <div class="right-side">
      <ul v-if="!showMenu">
        <li><a href="#" style="color:#582225;">Home </a><i class="fas fa-chevron-down"></i></li>
        <li><a href="#">Movies <i class="fas fa-chevron-down"></i> </a></li>
        <li><a href="#">Tv Shows <i class="fas fa-chevron-down"></i></a></li>
        <li><a href="#">Video <i class="fas fa-chevron-down"></i></a></li>
        <li><a href="#">Pages </a><i class="fas fa-chevron-down"></i></li>
      </ul>
      <div class="search-icon">
        <!--  search icon  -->
        <i style="color:#fff; font-size:16px;" class="fas fa-search"></i>
      </div>
      <div class="person-icon">
        <!-- person icon  -->
        <i class="fas fa-user" style="color:#fff; font-size:16px;"></i>
      </div>
      <button>SUBSCRIBE</button>
       <div class="hamburger-icon" @click="toggleMenu">
        <!-- hamburger icon -->
        <i class="fas fa-bars" style="color: #fff; font-size: 20px;"></i>
      </div>
    </div>
  </div>
</template>
<style>
.navbar {
  position: relative;
  width: 100%;
  margin: 0;
  padding:0;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: #2B2A27;
  opacity: none;
  color: white;
}

.left-side {
  display: flex;
  align-items: center;
}

.right-side {
  margin-right: 40px;
  display: flex;
  align-items: center;
}

.logo {
  margin-left: 40px;
  max-width: 150px;
  max-height: 150px;
}

ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

li {
  margin-right: 15px;
}

a {
  font-size: 14.4px;
  font-weight: 50;
  font-family: sans-serif;
  color: white;
  text-decoration: none;
}

.fas {
  padding: 5px;
  color: rgb(146, 146, 146);
  font-size: 12px;
  font-weight: bold;
}

.search-icon {
  margin-right: 15px;
  font-size: 20px;
  cursor: pointer;
}

.person-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: #e50916;
  margin-right: 15px;
  font-size: 20px;
  cursor: pointer;
}

button {
  background-color: #e50916;
  width: 120px;
  height: 43px;
  color: white;
  font-size: 15px;
  font-weight: 530;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.hamburger-icon {
  display: none;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
#navbar {
  position: fixed;
}
  .hamburger-icon {
    display: block;
    margin-right: 20px;
    background: #e50916;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100px; /* Adjust as needed */
    left: 0;
    width: 100%;
    background-color: #2b2a27;
  }
  /* .logo{
   
  } */

  ul.show-menu {
    display: flex;
  }

  ul li {
    text-align: center;
    margin: 0;
  }

  ul li a {
    display: block;
    padding: 10px;
    color: white;
    text-decoration: none;
  }
  button{
    display: none;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1008px) {
  .hamburger-icon {
    display: block;
    margin-left: 20px;
    background: #e50916;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100px; /* Adjust as needed */
    left: 0;
    width: 100%;
    background-color: #2b2a27;
  }
  .logo{
    margin-left: 50px
  }

  ul.show-menu {
    display: flex;
  }

  ul li {
    text-align: center;
    margin: 0;
  }

  ul li a {
    display: block;
    padding: 10px;
    color: white;
    text-decoration: none;
  }
  button{
    display:block;
  }
}
</style>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>