<template>
  <div class="header">
    <!-- DESKTOP NAVIGATION -->
    <div class="desktopHeader">
      <div class="desktopHeader__logo">
        <router-link :to="{ name: 'Home' }" class="desktopHeader__links__link"
          ><img
            class="logo"
            src="../assets/Logo-blanc.svg"
            alt="Logo du site"
            title='accès à la page "Accueil"'
        /></router-link>
      </div>
      <nav class="desktopHeader__links">
        <router-link
          :to="{ name: 'About' }"
          class="desktopHeader__links__link"
          title='accès à la page "&Agrave propos"'
          ><span></span>&Agrave propos</router-link
        >
        <router-link
          :to="{ name: 'Skills' }"
          class="desktopHeader__links__link"
          title='accès à la page "Compétences"'
          ><span></span>Compétences</router-link
        >
        <router-link
          :to="{ name: 'Hobbies' }"
          class="desktopHeader__links__link"
          title='accès à la page "Loisirs"'
          ><span></span>Loisirs</router-link
        >
        <router-link
          :to="{ name: 'Portfolio' }"
          class="desktopHeader__links__link"
          title='accès à la page "Portfolio"'
          ><span></span>Portfolio</router-link
        >
        <router-link
          :to="{ name: 'Contact' }"
          class="desktopHeader__links__contact-btn"
          title='accès à la page "Contact"'
          >Contact</router-link
        >
      </nav>
    </div>
    <!-- DESKTOP NAVIGATION -->

    <!-- TABLET NAVIGATION -->
    <div class="mobileHeader">
      <nav class="mobileHeader__nav">
        <router-link :to="{ name: 'Home' }" class="mobileHeader__nav__links"
          ><img
            class="logo"
            src="../assets/logo-simple-blanc.svg"
            alt="Logo du site"
            title='accès à la page "Accueil"'
          />ACCUEIL</router-link
        >
        <router-link
          :to="{ name: 'About' }"
          class="mobileHeader__nav__links"
          title='accès à la page "&Agrave propos"'
          ><img src="../assets/img/icon/person-vcard.svg" alt="icône à propos" />&Agrave
          propos</router-link
        >
        <router-link
          :to="{ name: 'Skills' }"
          class="mobileHeader__nav__links"
          title='accès à la page "Compétences"'
          ><img
            src="../assets/img/icon/journal-code.svg"
            alt="icône mes compétences"
          />Compétences</router-link
        >
        <router-link
          :to="{ name: 'Hobbies' }"
          class="mobileHeader__nav__links"
          title='accès à la page "Loisirs"'
          ><img
            src="../assets/img/icon/moon-stars-fill.svg"
            alt="icône"
          />Loisirs</router-link
        >
        <router-link
          :to="{ name: 'Portfolio' }"
          class="mobileHeader__nav__links"
          title='accès à la page "Portfolio"'
          ><img
            src="../assets/img/icon/images.svg"
            alt="icône portfolio"
          />Portfolio</router-link
        >
        <router-link
          :to="{ name: 'Contact' }"
          class="mobileHeader__nav__links"
          title='accès à la page "Contact"'
          ><img
            src="../assets/img/icon/icone_plane_mobile.svg"
            alt="icone contact"
          />CONTACT</router-link
        >

        <label class="mobileHeader__nav__burgerMenu">
          <input
            type="checkbox"
            class="mobileHeader__nav__burgerMenu__checkbox"
            name="menu"
            id="burgerMenu"
          />
          <span class="mobileHeader__nav__burgerMenu__top"></span>
          <span class="mobileHeader__nav__burgerMenu__mid"></span>
          <span class="mobileHeader__nav__burgerMenu__bot"></span>
          <nav class="mobileHeader__nav__burgerMenu__nav">
            <router-link
              :to="{ name: 'About' }"
              class="mobileHeader__nav__burgerMenu__nav__links"
              title='accès à la page "&Agrave propos"'
              >&Agrave propos</router-link
            >
            <router-link
              :to="{ name: 'Skills' }"
              class="mobileHeader__nav__burgerMenu__nav__links"
              title='accès à la page "Compétences"'
              >Compétences</router-link
            >
            <router-link
              :to="{ name: 'Hobbies' }"
              class="mobileHeader__nav__burgerMenu__nav__links"
              title='accès à la page "Loisirs"'
              >Loisirs</router-link
            >
            <router-link
              :to="{ name: 'Portfolio' }"
              class="mobileHeader__nav__burgerMenu__nav__links"
              title='accès à la page "Portfolio"'
              >Portfolio</router-link
            >
          </nav>
        </label>
      </nav>
    </div>
    <!-- MOBILE NAVIGATION -->
  </div>
  <div class="bgBlue"></div>
</template>

<style lang="scss">
/*** INITIAL NAVBAR****/
.header {
  background-color: transparent;
  display: flex;
  width: 100%;
  // height: 100vh;
  position: fixed;
  z-index: 10;
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
    margin-right: 40px;
  }

  &__links {
    padding: 0px 48px 0px 0px;

    &__link {
      font-family: "Nunito";
      color: #f6faff;
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
  // background: rgb(0,63,139);
  background: linear-gradient(
    180deg,
    rgba(0, 63, 139, 1) 0%,
    rgba(0, 63, 139, 0.9) 10%,
    rgba(0, 63, 139, 0.8) 20%,
    rgba(3, 48, 134, 0.7) 30%,
    rgba(5, 35, 130, 0.6) 40%,
    rgba(5, 35, 130, 0.5) 50%,
    rgba(5, 35, 130, 0.4) 60%,
    rgba(5, 35, 130, 0.3) 70%,
    rgba(5, 35, 130, 0.2) 80%,
    rgba(5, 35, 130, 0.1) 90%,
    rgba(5, 35, 130, 0) 100%
  );

  height: 100px;
  width: 100%;
  z-index: 0;
  position: fixed;
}

.mobileHeader {
  width: 100%;
  height: 15vh;
  backdrop-filter: blur(4px);
  background: rgb(5, 35, 130);
  background: linear-gradient(
    180deg,
    rgba(5, 35, 130, 0) 0%,
    rgba(5, 35, 130, 0.2) 20%,
    rgba(3, 48, 134, 0.4) 40%,
    rgba(0, 63, 139, 0.6) 60%,
    rgba(0, 63, 139, 0.8) 80%,
    rgba(0, 63, 139, 1) 100%
  );
  // margin-top: auto;
  display: none;

  &__nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    &__links {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #f6faff;
      font-family: "Nunito";
      text-decoration: none;
      font-size: 20px;
      margin: 16px 16px;

      img {
        height: 40px;
      }
    }

    /**** BURGER MENU****/
    &__burgerMenu {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: solid 2px whitesmoke;
      position: relative;

      &__checkbox {
        display: none;
        z-index: 10;
      }

      &__top,
      &__mid,
      &__bot {
        width: 32px;
        height: 4px;
        border-radius: 8px;
        background-color: #f6faff;
        position: absolute;
        left: 6px;
        top: 20px;
        transition: transform 0.4s, opacity 0.8s;
        z-index: 1;
      }

      &__top {
        transform: translateY(-0.8rem);
      }
      &__bot {
        transform: translateY(0.8rem);
      }

      &__checkbox:checked ~ &__top {
        transform: rotate(45deg);
      }
      &__checkbox:checked ~ &__mid {
        opacity: 0;
      }
      &__checkbox:checked ~ &__bot {
        transform: rotate(-45deg);
      }
      &__checkbox:checked ~ &__nav {
        z-index: -100;
        position: absolute;
        right: -100px;
        top: -400px;
        background-color: red;
        width: 1100px;
        height: 800px;
      }
    }
  }

  /**** BURGER MENU****/
}

@media (max-width: 1000px) {
  .mobileHeader,
  .burgerMenu {
    display: block;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0%;
  }

  .desktopHeader,
  .mobileHeader__nav__burgerMenu,
  .bgBlue {
    display: none;
  }
}

@media (max-width: 725px) {
  .mobileHeader__nav {
    display: flex;
    justify-content: space-between;
    margin: 16px;
  }

  .mobileHeader__nav__links:nth-child(2),
  .mobileHeader__nav__links:nth-child(3),
  .mobileHeader__nav__links:nth-child(4),
  .mobileHeader__nav__links:nth-child(5) {
    display: none;
  }

  .mobileHeader__nav__burgerMenu {
    display: block;
  }
}

/*** INITIAL NAVBAR****/
</style>
