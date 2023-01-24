<template>
  <NavBar />
  <router-view />

  <!-- début SECTION 1 "ACCUEIL" -->
  <section class="landing">
    <div class="landing__header">
      <h1 class="landing__header_h1">Bienvenus sur mon Curiculum Vitae en ligne</h1>
      <p>Jetez un oeil!</p>
    </div>
    <div class="landing__socialNetworks">
      <a
        class="landing__socialNetwork_linkedIn"
        href="https://www.linkedin.com/in/alexis-carlier-528b281b8/"
        title="lien vers le compte LinkedIn"
        target="_blank"
      >
        <img src="../assets/img/icon/linkedin_icon.png" alt="icône LinkedIn" />
      </a>
      <a
        class="landing__socialNetwork_github"
        href="https://www.linkedin.com/in/alexis-carlier-528b281b8/"
        title="lien vers le compte Github"
        target="_blank"
      >
        <img src="../assets/img/icon/github_icon.png" alt="icône githum" />
      </a>
      <a
        class="landing__socialNetwork_instagram"
        href="https://www.instagram.com/al3xtraterrestre/?hl=fr"
        title="lien vers le compte Instagram"
        target="_blank"
      >
        <img src="../assets/img/icon/instagram_icon.png" alt="icône github" />
      </a>
    </div>
  </section>
  <!-- fin SECTION 1 "ACCUEIL" -->

  <!-- début SECTION 2 "A PROPOS" -->
  <section class="about">
    <div class="about__header">
      <h2>Qui suis-je?</h2>
      <p>
        Je m'appel Alexis et je suis agé de 33ans en 2023 et suite à une reconversion
        professionnelle depuis les métiers de la restauration vers les métiers du Digital,
        je suis à la recherche d'un emplois dans le <strong>Développement Web</strong>.
        Dynamique, sérieux et autonome, je suis impliqué dans mon travail et je m'intégre
        facilement dans une équipe.
      </p>
      <router-link
        :to="{ name: 'About' }"
        class="about__link"
        title='lien vers la page "A Propos"'
        >Consulter</router-link
      >
    </div>
    <div class="about__portrait">
      <img src="../assets/img/pictures/portrait.png" alt="portrtait d'Alexis Carlier" />
    </div>
    <div class="about__text">
      <h3>Du fourneau...</h3>
      <p>
        La créativité et le sens du service m'a amener lors de mes années de collégien à
        m'intéressé aux métiers de la restauration et plus particulièrement à la cuisine.
        J'ai effectuer 6 ans d'études où j'ai pu apprendre les métiers qui compose la
        restauration. A la suite de ces études j'ai travaillé dans ce domaine d'activité
        durant une quizaine d'année ou j'ai gravi les échelon jusqu'au poste de Chef de
        Cuisisne.
      </p>

      <h3>... au clavier.</h3>
      <p>
        En 2018, lors d'une période de chômage, j'ai entrepris une réorientation
        professionnelle en effectuant une formation « Découverte Multimédia ». Cette
        formation m'a motivé afin de continuer vers les métiers du web et du digital...
      </p>
    </div>
  </section>
  <!-- fin SECTION 2  -->

  <!-- début SECTION 3 "COMPÉTENCES"   -->
  <section class="skills">
    <div class="skills__header">
      <h2>Mes compétences</h2>
    </div>
    <!-- card 1 "graphisme" -->
    <div class="skills__container">
      <div class="skills__container__card">
        <h3>Graphisme</h3>
        <div class="bgImg">
          <img
            src="../assets/img/icon/icon_graphisme.svg"
            alt="icone représentant une tablette graphique"
          />
        </div>
        <p>Photographie</p>
        <p>Vidéo</p>
        <p>Illustration</p>
        <p>Création de charte Graphique</p>
        <p>Web Design</p>
        <router-link :to="{ name: 'Skills' }" class="knowing_more"
          >Mes compétences</router-link
        >
      </div>
      <!-- card 1 "graphisme" -->

      <!-- card 2 "SEO" -->
      <div class="skills__container__card">
        <h3>Référencement Naturel</h3>
        <div class="bgImg">
          <img
            src="../assets/img/icon/icon_SEO.svg"
            alt="Icône pour le référencement naturel"
          />
        </div>
        <p>Rédaction Web</p>
        <p>Optimisation SEO</p>
        <router-link :to="{ name: 'Skills' }" class="knowing_more"
          >Mes compétences</router-link
        >
      </div>
      <!-- card 2 "SEO" -->

      <!-- card 3 "dev front" -->
      <div class="skills__container__card">
        <h3>Développement Frontend</h3>
        <div class="bgImg">
          <img
            src="../assets/img/icon/icon_front.svg"
            alt="Icône pour le développement web côté Front"
          />
        </div>
        <p>HTML, CSS / SCSS</p>
        <p>Javascript</p>
        <p>Vue.js</p>
        <p>React.js</p>
        <p>Wordpress</p>
        <router-link :to="{ name: 'Skills' }" class="knowing_more"
          >Mes compétences</router-link
        >
      </div>
      <!-- card 3 "dev front" -->

      <!-- card 4 "dev back" -->
      <div class="skills__container__card">
        <h3>Développement Backend</h3>
        <div class="bgImg">
          <img
            src="../assets/img/icon/icon_back.svg"
            alt="Icône de développement web côté Back"
          />
        </div>
        <p>PHP</p>
        <p>SQL</p>
        <p>Symphony</p>
        <router-link :to="{ name: 'Skills' }" class="knowing_more"
          >Mes compétences</router-link
        >
      </div>
      <!-- card 4 "dev front" -->
    </div>
    <div class="skills__uploads">
      <p>télécharger mon CV :</p>
      <button href="#" target="_blank">Version pour écrans</button>
      <hr />
      <button href="#" target="_blank">Version imprimable</button>
    </div>
  </section>
  <!-- fin SECTION 3  -->

  <!-- fin SECTION 4  -->
  <section class="hobbies">
    <h2>Mes loisirs</h2>
    <div class="hobbies__astro">
      <div class="hobbies__astro__img">
        <img
          src="../assets/img/icon/icon_scope.svg"
          alt="icone représentant un téléscope"
        />
      </div>
      <div class="hobbies__astro__content">
        <h3>L'Astronomie</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et augue non est
          euismod pulvinar. Fusce ac enim non mi sagittis euismod. Aliquam congue vel nibh
          quis viverra. Phasellus efficitur.
        </p>
        <button>Voir plus</button>
      </div>
    </div>
    <div class="hobbies__photo">
      <div class="hobbies__photo__content">
        <h3>La Photographie</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et augue non est
          euismod pulvinar. Fusce ac enim non mi sagittis euismod. Aliquam congue vel nibh
          quis viverra. Phasellus efficitur.
        </p>
        <button>Voir plus</button>
      </div>
      <div class="hobbies__photo__img">
        <img
          src="../assets/img/icon/icon_camera.svg"
          alt="icone représentant un appareil photo"
        />
      </div>
    </div>
    <div class="hobbies__DP">
      <div class="hobbies__DP__img">
        <img
          src="../assets/img/icon/icon_graphisme.svg"
          alt="icone représentant une tablette graphique"
        />
      </div>
      <div class="hobbies__DP__content">
        <h3>Le Digital Painting</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et augue non est
          euismod pulvinar. Fusce ac enim non mi sagittis euismod. Aliquam congue vel nibh
          quis viverra. Phasellus efficitur.
        </p>
        <button>Voir plus</button>
      </div>
    </div>
    <div class="hobbies__outdoor">
      <div class="hobbies__photo__content">
        <h3>Les activités outdoor</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et augue non est
          euismod pulvinar. Fusce ac enim non mi sagittis euismod. Aliquam congue vel nibh
          quis viverra. Phasellus efficitur.
        </p>
        <button>Voir plus</button>
      </div>
      <div class="hobbies__photo__img">
        <img
          src="../assets/img/icon/icon_camera.svg"
          alt="icone représentant un appareil photo"
        />
      </div>
    </div>
  </section>
  <!-- fin SECTION 4  -->

  <!-- Début SECTION 5  -->
  <section class="creations">
    <div class="creations_header">
      <h2>Mes créations</h2>
    </div>
    <div class="creations__cards">
      <div class="creations__cards__img">
        <img src="" alt="" />
      </div>
      <p>Lorem Ipsum</p>
      <div class="creations__cards__img">
        <img src="" alt="" />
      </div>
      <p>Lorem Ipsum</p>
      <div class="creations__cards__img">
        <img src="" alt="" />
      </div>
      <p>Lorem Ipsum</p>
    </div>
    <div class="creations__cards"></div>
    <div class="creations__cards"></div>
  </section>
  <!-- fin SECTION 5  -->

  <!-- début SECTION CONTACT  -->
  <section class="contact">
    <h2>Contactez_moi!</h2>
    <div class="contact__container">
      <div class="contact__container__text__top">
        <p class="contact__container__text__top_p">Vous recherchez...</p>
        <div class="contact__container__text__seek">
          <h4>un Développeur?</h4>
          <h4>un Graphiste?</h4>
          <h4>un Photographe?</h4>
          <h4>un Illustrateur?</h4>
        </div>
      </div>
      <div class="contact__container">
        <div class="contact__container__content">
          <div class="contact__container__content__btn">
            <router-link
              :to="{ name: 'Contact' }"
              class="contact__container__content__btn-contact"
              >Contact</router-link
            >
          </div>
        </div>
      </div>
      <div class="contact__container">
        <div class="contact__container__text__top">
          <p class="contact__container__text__top_p">Vous recherchez...</p>
          <div class="contact__container__text__seek">
            <h4>un Équipe?</h4>
            <h4>un Entreprise?</h4>
            <h4>un Projet?</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- début SECTION CONTACT  -->
</template>

<style lang="scss">
/* RESETS*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h2 {
  color: #003f8b;
  font-size: 40px;
  font-family: "Nunito", sans-serif;
}

h3 {
  font-size: 20px;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
}
strong {
  font-weight: 400;
}
/* RESETS*/

/*** début style  SECTION 1 "ACCUEIL" ***/
.landing {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-image: url(../assets/img/pictures/nuages_noctulescents_comete_neowise.jpg);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  &__header {
    margin: auto;
    width: 60%;
    text-align: center;
    border-radius: 16px;
    background-color: rgba(0, 24, 52, 0.25);
    backdrop-filter: blur(4px);

    h1,
    p {
      color: #f6faff;
      font-family: "Nunito", sans-serif;
      margin: 48px 32px;
    }

    h1 {
      font-size: 48px;
      font-weight: 500;
    }
    p {
      font-size: 40px;
      font-weight: 300;
    }
  }

  &__socialNetworks {
    margin: 0 48px 48px 0;

    a {
      margin: 0 8px 48px 8px;
    }
  }
}
/*** fin style SECTION 1 "ACCUEIL" ***/
.about,
.skills,
.hobbies,
.creations,
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 48px 48px 0 48px;
}

/*** début SECTION 2 "ABOUT" ***/
.about {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  &__header,
  &__portrait,
  &__text {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 16px;
    gap: 32px;
  }

  &__header {
    p {
      margin: 32px 0;
      color: #003f8b;
      font-size: 20px;
      font-family: "Nunito", sans-serif;
    }

    a {
      color: #003f8b;
      text-decoration: none;
      font-family: "Nunito", sans-serif;
      font-size: 24px;
      border: solid 3px #003f8b;
      border-radius: 8px;
      padding: 8px 32px;
    }
  }

  &__portrait {
    display: flex;

    img {
      width: 75%;
    }
  }

  &__text {
    padding: 16px;

    h3 {
      color: #003f8b;
    }

    p {
      width: 100%;
      color: #003f8b;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
    }
  }
}
/*** fin style SECTION 2 "ABOUT" ***/

/*** début SECTION 3 "SKILLS" ***/
.skills {
  &__container {
    display: flex;
    margin: 48px 0;
    justify-content: space-around;
    gap: 32px;
    width: 100%;

    &__card {
      width: 100%;
      padding: 48px 0;
      gap: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      background: rgb(0, 24, 52);
      background: -moz-linear-gradient(
        180deg,
        rgba(0, 24, 52, 1) 0%,
        rgba(144, 193, 252, 1) 100%
      );
      background: -webkit-linear-gradient(
        180deg,
        rgba(0, 24, 52, 1) 0%,
        rgba(144, 193, 252, 1) 100%
      );
      background: linear-gradient(
        180deg,
        rgba(0, 24, 52, 1) 0%,
        rgba(144, 193, 252, 1) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#001834",endColorstr="#90c1fc",GradientType=1);
      border-radius: 16px;

      h3 {
        color: #f6faff;
      }

      .bgImg {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: #b9d8ff;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 75%;
        }
      }

      p {
        width: 100%;
        color: #f6faff;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
      }

      .knowing_more {
        margin-top: auto;
        font-size: 20px;
        color: #f6faff;
        text-decoration: none;
        font-family: "Nunito", sans-serif;
        border: solid 3px #f6faff;
        padding: 8px 32px;
        border-radius: 8px;
      }
    }
  }
  &__uploads {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 48px;

    p {
      font-size: 24px;
      font-family: "Roboto", sans-serif;
      color: #003f8b;
    }

    hr {
      height: 48px;
      border: 1px solid #003f8b;
      border-radius: 8px;
    }

    button {
      font-size: 24px;
      font-family: "Roboto", sans-serif;
      color: #003f8b;
      border: none;
      background-color: #f6faff;
      text-decoration: underline;
      padding: 8px 32px;
      cursor: pointer;
      border: #f6faff solid 2px;
      transition: background-color ease-out 0.4s;
      transition-delay: text-decoration ease-out 0.4s;
    }

    button:hover {
      background-color: #b9d8ff;
      border-radius: 8px;
    }
  }
}
/*** fin SECTION 3 "SKILLS" ***/

/*** début SECTION 4 "HOBBIES" ***/
.hobbies {
    
}
/*** début SECTION 4 "HOBBIES" ***/
</style>
