<script setup>
/* Bacground color navbar */
// import { ref } from "vue";

// const isActive = ref(false);

// const toggleActive = () => {
//   isActive.value = !isActive.value;
//   console.log(isActive.value);
// };
// Vue.directive('scroll', {
//   inserted: function (el, binding) {
//     let f = function (evt) {
//       if (binding.value(evt, el)) {
//         window.removeEventListener('scroll', f)
//       }
//     }
//     window.addEventListener('scroll', f)
//   }
// })

// main app


/* homemade burgerMenu */

/* bergerMenu Flowbite */
import { Collapse } from "flowbite";

const $targetEl = document.getElementById("targetEl");

const options = {
  onCollapse: () => {
    console.log("l'élément à bien été collapser");
  },
};
</script>

<template>
  <div class="header">
    <div class="desktopHeader">
      <div class="desktopHeader__logo">
        <router-link :to="{ name: 'Home' }" class="desktopHeader_logo"
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
          title='accès à la page "À propos"'
          ><span></span>À propos</router-link
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
    <div class="tabletHeader">
      <nav class="tabletHeader__list">
        <div class="tabletHeader__logo">
          <router-link :to="{ name: 'Home' }" class="desktopHeader_logo"
            ><img
              class="logo"
              src="../assets/Logo-blanc.svg"
              alt="Logo du site"
              title='accès à la page "Accueil"'
          /></router-link>
        </div>
        <router-link
          :to="{ name: 'About' }"
          class="tabletHeader__list__link"
          title='accès à la page "À propos"'
          >À propos</router-link
        >
        <router-link
          :to="{ name: 'Skills' }"
          class="tabletHeader__list__link"
          title='accès à la page "Compétences"'
          >Compétences</router-link
        >
        <router-link
          :to="{ name: 'Hobbies' }"
          class="tabletHeader__list__link"
          title='accès à la page "Loisirs"'
          >Loisirs</router-link
        >
        <router-link
          :to="{ name: 'Portfolio' }"
          class="tabletHeader__list__link"
          title='accès à la page "Portfolio"'
          >Portfolio</router-link
        >
        <router-link
          :to="{ name: 'Contact' }"
          class="tabletHeader__list__link"
          title='accès à la page "Contact"'
          >Contact</router-link
        >
      </nav>
    </div>
    <div class="mobileHeader bg-blue-800">
      <div class="mobileHeader__logo">
        <router-link :to="{ name: 'Home' }" class="desktopHeader_logo"
          ><img
            class="mobileHeader__logo__img"
            src="../assets/Logo-blanc.svg"
            alt="Logo du site"
            title='accès à la page "Accueil"'
        /></router-link>
      </div>
      <button
        id=" targetEl"
        data-collapse-toggle="navbar-hamburger"
        type="button"
        class="inline-flex items-center justify-center w-15 h-15 text-sm focus:border-blue-50 border-2 rounded-xl dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-hamburger"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <span
          class="burger bg-blue-800 border-2 border-blue-50 rounded-lg text-blue-50 text-4xl"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 17 14"
          >&#9776;</span
        >
      </button>
      <div
        class="hidden z-0 justify-center w-full absolute bottom-24 right-0"
        id="navbar-hamburger"
      >
        <ul
          class="burgerMenu z-10 h-auto p-4 flex flex-col items-center justify-around font-medium bg-blue-800 dark:bg-gray-800 dark:border-gray-700"
        >
          <li class="my-4">
            <router-link
              :to="{ name: 'About' }"
              class="tabletHeader__list__link text-4xl text-blue-50 font-semibold"
              title='accès à la page "À propos"'
              >À propos</router-link
            >
          </li>
          <li class="my-4">
            <router-link
              :to="{ name: 'Skills' }"
              class="tabletHeader__list__link text-4xl text-blue-50 font-semibold"
              title='accès à la page "Compétences"'
              >Compétences</router-link
            >
          </li>
          <li class="my-4">
            <router-link
              :to="{ name: 'Hobbies' }"
              class="tabletHeader__list__link text-4xl text-blue-50 font-semibold"
              title='accès à la page "Loisirs"'
              >Loisirs</router-link
            >
          </li>
          <li class="my-4">
            <router-link
              :to="{ name: 'Portfolio' }"
              class="tabletHeader__list__link text-4xl text-blue-50 font-semibold"
              title='accès à la page "Portfolio"'
              >Portfolio</router-link
            >
          </li>
        </ul>
      </div>
      <div class="mobileHeader__contact">
        <router-link
          :to="{ name: 'Contact' }"
          class="mobileHeader__contact__img"
          title='accès à la page "Contact"'
          ><img
            src="../assets/img/icon/icone_plane_mobile.svg"
            alt="icône de lien vers la page contact"
        /></router-link>
      </div>
    </div>
  </div>
  <!-- <div  v-scroll="handleScroll" class="bgBlue"></div> -->
</template>

<style lang="scss">
.burgerMenu {
  height: 30vh;
}

.desktopHeader,
.tabletHeader {
  height: 100px;
  width: 100%;
  background-color: rgba(0, 63, 139, 0.05);
  backdrop-filter: blur(4px);
  box-shadow: 0 5px 50px rgba(0, 0, 0, 0.5);
  padding: 0px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  transition: all ease-in-out 2s;

  &__logo {
    width: 112px;
    height: 80px;
    margin-right: 40px;
  }

  &__links {
    padding: 0px 48px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__link {
      font-family: "Nunito";
      color: #f6faff;
      text-decoration: none;
      font-size: 18px;
      position: relative;
      transition: ease-out 0.1s;
      transition-delay: 0.2s;
      margin: 0px 16px;
    }
    &__link::before {
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

    &__link::before:hover {
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

.tabletHeader,
.mobileHeader {
  display: none;
}

.bgBlue {
  display: none;
}

.active {
  display: block;
  height: 96px;
  width: 100%;
  z-index: 0;
  position: fixed;
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
}

// .bgBlueMobile {
//   height: 50vh;
//   width: 110%;
//   backdrop-filter: blur(7px);
//   border: solid 2px #f6faff;
//   border-radius: 8px;
//   z-index: 0;
//   position: absolute;
//   left: 0;
//   right: 0;
//   background-color: #003f8b;
//   // background: rgb(0,63,139);
//   background: linear-gradient(
//     180deg,
//     rgba(0, 63, 139, 1) 0%,
//     rgba(0, 63, 139, 0.9) 10%,
//     rgba(0, 63, 139, 0.8) 20%,
//     rgba(3, 48, 134, 0.7) 30%,
//     rgba(5, 35, 130, 0.6) 40%,
//     rgba(5, 35, 130, 0.5) 50%,
//     rgba(5, 35, 130, 0.4) 60%,
//     rgba(5, 35, 130, 0.3) 70%,
//     rgba(5, 35, 130, 0.2) 80%,
//     rgba(5, 35, 130, 0.1) 90%,
//     rgba(5, 35, 130, 0) 100%
//   );
// }

@media (max-width: 1000px) and (min-width: 650px) {
  .desktopHeader,
  .mobileHeader {
    display: none;
  }

  .tabletHeader {
    padding: 0px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: fixed;
    bottom: 0;

    &__logo {
      margin: 0;
    }

    &__list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-items: flex-end;

      &__link {
        color: #f6faff;
        font-weight: 600;
        text-transform: uppercase;
        text-decoration: none;
        font-family: "Nunito", sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &__link:nth-child(2)::before,
      &__link:nth-child(3)::before,
      &__link:nth-child(4)::before,
      &__link:nth-child(5)::before,
      &__link:nth-child(6)::before {
        width: 48px;
        position: absolute;
        bottom: 33%;
        text-decoration: none;
      }

      &__link:nth-child(2)::before {
        content: url(@/assets/img/icon/person-vcard.svg);
      }

      &__link:nth-child(3)::before {
        content: url(@/assets/img/icon/journal-code.svg);
      }
      &__link:nth-child(4)::before {
        content: url(@/assets/img/icon/moon-stars-fill.svg);
      }

      &__link:nth-child(5)::before {
        content: url(@/assets/img/icon/image-fill.svg);
      }

      &__link:nth-child(6)::before {
        content: url(@/assets/img/icon/icone_plane_mobile.svg);
      }
    }
  }

  .active {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    background-color: #003f8b;
    // background: rgb(0,63,139);
    background: linear-gradient(
      0deg,
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
  }
}

@media (max-width: 650px) {
  .desktopHeader,
  .tabletHeader {
    display: none;
  }

  .mobileHeader {
    width: 100%;
    height: 96px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    z-index: 10;

    &__logo {
      width: 30%;

      &__img {
        width: 50%;
      }
    }
    span.burger {
      font-size: 24px;
      height: 44px;
      width: 44px;
    }
    &__contact {
      width: 30%;
      display: flex;

      &__img {
        width: 40%;
        margin-left: auto;
      }
    }
  }
}
/*** INITIAL NAVBAR****/
</style>
