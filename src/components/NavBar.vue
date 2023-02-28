<template>
  <div class="header">
    <div class="desktopHeader">
      <div class="desktopHeader__logo">
        <router-link :to="{ name: 'Home' }" class="desktopHeader__links__link"
          ><img class="logo" src="../assets/Logo-blanc.svg" alt="Logo du site"
        /></router-link>
      </div>
      <nav class="desktopHeader__links">
        <router-link :to="{ name: 'About' }" class="desktopHeader__links__link"
          ><span></span>A propos</router-link
        >
        <router-link :to="{ name: 'Skills' }" class="desktopHeader__links__link"
          ><span></span>Mes compétences</router-link
        >
        <router-link :to="{ name: 'Hobbies' }" class="desktopHeader__links__link"
          ><span></span>Loisirs</router-link
        >
        <router-link :to="{ name: 'Portfolio' }" class="desktopHeader__links__link"
          ><span></span>Portfolio</router-link
        >
        <router-link :to="{ name: 'Contact' }" class="desktopHeader__links__contact-btn"
          >Contact</router-link
        >
      </nav>
    </div>
    <div class="bgBlue"></div>
    <div class="mobileHeader">ceci est la navba mobile</div>
  </div>
</template>

<style lang="scss">
/*** INITIAL NAVBAR****/
.header {
  background-color: transparent;
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
}
.mobileHeader {
  width: 100%;
  height: 10vh;
  background-color: red;
  margin-top: auto;
  display: none;
}
.desktopHeader {
  height: 100px;
  width: 100%;
  background-color: rgba(0, 63, 139, 0.05);
  backdrop-filter: blur(4px);
  padding: 0px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10;

  &__logo {
    width: 112px;
    height: 80px;
  }

  &__links {
    padding: 0px 48px 0px 0px;

    &__link {
      font-family: "Nunito";
      color: #f5f5f5;
      text-decoration: none;
      margin-right: 40px;
      font-size: 18px;
      position: relative;
      transition: ease-out 0.1s;
      transition-delay: 0.2s;
    }

    &__link span {
      z-index: -1;
      position: absolute;
      display: block;
      height: 3px;
      width: 200%;
      filter: blur(1px);
      background: linear-gradient(90deg, transparent, whitesmoke);
      border-radius: 25%;
      left: -200%;
      top: 110%;
      transition: ease-out 0.2s;
      opacity: 0;
    }

    &__link:hover span {
      left: 50%;
      transition: 0.2s;
      background-color: whitesmoke;
      box-shadow: 4px 4px 32px 8px #71b0ff, -4px 4px 32px 8px #71b0ff,
        -4px -4px 32px 8px #71b0ff, 4px -4px 32px 8px #71b0ff;
      border-radius: 35%;
      width: 100%;
      left: 0%;
      opacity: 1;
    }

    &__contact-btn {
      display: inline-flex;
      border: solid 2px whitesmoke;
      border-radius: 8px;
      text-transform: uppercase;
      font-weight: 600;
      padding: 8px 32px;
      color: whitesmoke;
      text-decoration: none;
      font-family: "Nunito";
      font-size: 18px;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    &__contact-btn:hover {
      transition: color 0s linear 0s;
    }

    &__contact-btn::before {
      content: "";
      color: aliceblue;
      background-color: #0095ff;
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      height: 1px;
      width: 1px;
      border-radius: 50%;
      overflow: hidden;
      z-index: -1;
      transition: ease-out 0.3s;
    }

    &__contact-btn:hover::before {
      width: 200px;
      height: 200px;
      top: -200%;
      left: -20%;
      opacity: 1;
    }
  }
}
.bgBlue {
  background-color: #003f8b;
  height: 100px;
  width: 100%;
  z-index: -10;
  position: fixed;
}

@media (max-width: 400px) {
  .mobileHeader {
    width: 100%;
    height: 10vh;
    background-color: red;
    margin-top: auto;
    display: block;
  }
}
/*** INITIAL NAVBAR****/
</style>
