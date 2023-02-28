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
        Je m'appelle Alexis et je suis agé de 33ans en 2023 et suite à une reconversion
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
          >En savoir plus</router-link
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
          >En savoir plus</router-link
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
          >En savoir plus</router-link
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
          >En savoir plus</router-link
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
          src="../assets/img/icon/icon_telescope_white.svg"
          alt="icone représentant un téléscope"
        />
      </div>
      <div class="hobbies__astro__content">
        <h3>L'Astronomie</h3>
        <p>
          Quand j'était petit, ma soeur à reçue un livre sur l'astronomie dans laquelle
          j'ai vu une photo de
          <a
            class="out-link"
            href="https://fr.wikipedia.org/wiki/Bruce_McCandless_II#Vols_réalisés"
            target="_blank"
            >Bruce McCandeless II</a
          >
          flotant dans le vide de l'espace dans sa combinaison spatiale et son AMU. J'ai
          pensé « Qu'elle chance il a! ». Cette photo m'a vraiment facsiné et depuis ce
          temps je nourrit un fort interêt en ce qui concerne l'astronomie et la conquête
          spatiale.Aujourd'hui j'observe et photographie les meirveilles que notre univers
          nous offre grâce à mes téléscopes.
        </p>
        <p>
          Cette photo m'a vraiment facsiné et depuis ce temps je nourrit un fort interêt
          en ce qui concerne l'astronomie et la conquête spatiale.Aujourd'hui j'observe et
          photographie les meirveilles que notre univers nous offre grâce à mes
          téléscopes.
        </p>
        <a href="/About">Voir plus</a>
      </div>
    </div>
    <div class="hobbies__photo">
      <div class="hobbies__photo__content">
        <h3>La Photographie</h3>
        <p>
          Lorsque j'ai commencer l'astronomie de manière plus concrète, j'ai acheter un
          appareil photo pour me familiarisier avec l'Astrophoto qui est un courant de la
          photo très technique et assez compliquer. J'ai trouvé qu'il était un peu idiot
          d'investir dans un appareil photo pour ne s'en servir qu'une fois tout les trois
          mois... (oui car quand on fait de l'astronomie nous sommes tributaires de la
          météo...). J'ai donc chercher sur internet des tutoriels pour apprendre les
          bases de la photographie et un véritable engouement s'est créer depuis ce temps!
        </p>
        <a href="/About">Voir plus</a>
      </div>
      <div class="hobbies__photo__img">
        <img
          src="../assets/img/icon/icon_camera_white.svg"
          alt="icone représentant un appareil photo"
        />
      </div>
    </div>
    <div class="hobbies__DP">
      <div class="hobbies__DP__img">
        <img
          src="../assets/img/icon/icone_DP_white.svg"
          alt="icone représentant une tablette graphique"
        />
      </div>
      <div class="hobbies__DP__content">
        <h3>Le Digital Painting</h3>
        <p>
          Aussi loin que je me souvienne, j'ai toujours aimer le dessin. Les arts
          plastiques au collège et à l'école était la matière dans laquelle je me
          distingauot le plus. Cependant mes dessins peronnels ne dépassaient jamais
          l'état de croquis. Aujourd'hui, grâce à Photoshop et à ma tablette graphique
          vette époque est désormait révolue!
        </p>
        <a href="/About">Voir plus</a>
      </div>
    </div>
    <div class="hobbies__outdoor">
      <div class="hobbies__outdoor__content">
        <h3>Les activités outdoor</h3>
        <p>
          Étant plus jeune lors des vacances d'hiver j'allais chaques années en colo de
          ski ou j'ai pu apprendre le sowboard. C'est d'ailleurs là-bas où j'ai vraiment
          compris le concept de respect de la nature. Au fur et a mesure des années
          j'avais de moins en moins de temps à consacrer à ce sport si saisonnier qui me
          plaît tant. A cette époque je me demandait ce qu'étaient les staions de ski en
          été... en essayant de répondre à cette question je me suis vite rendu compte que
          les stations s'adaptaient lors de la saison estivale. J'ai donc commencer par la
          randonnée puis j'ai voulus tenter mon premier bivouac, etc. La marche et la
          montagne sont tout deux un bon moyen de prendre du recule sur notre société, de
          se détacher et de se déconnecter de ce monde toujours plus industrialisé,
          digitaliser et connecter.
        </p>
        <a href="/About">Voir plus</a>
      </div>
      <div class="hobbies__outdoor__img">
        <img
          src="../assets/img/icon/icon_trekking.svg"
          alt="icone représentant un appareil photo"
        />
      </div>
    </div>
  </section>
  <!-- fin SECTION 4  -->

  <!-- Début SECTION 5  -->
  <section class="creations">
    <h2>Mes créations</h2>
    <div class="creations__cardsContainer">
      <div class="creations__cardsContainer__card">
        <h3>Photographiques</h3>
        <figure class="creations__cardsContainer__card__img">
          <img
            src="../assets/img/pictures/ceinture-orion.jpg"
            alt="Nébulosités astronomiques de la ceinture d'Orion"
          />
        </figure>
        <figcaption>la Ceinture d'Orion</figcaption>
        <figure class="creations__cardsContainer__card__img">
          <img
            src="../assets/img/pictures/skater.jpg"
            alt="Skateur en triple exposition"
          />
        </figure>
        <figcaption>Triple exposition</figcaption>
        <figure class="creations__cardsContainer__card__img">
          <img
            src="../assets/img/pictures/couleurs_sur_le_leman.JPG"
            alt="crépuscule sur le Léman (Lac de Genève)"
          />
        </figure>
        <figcaption>Crépuscule sur le Léman</figcaption>
        <button>Voir le Portfolio</button>
      </div>
      <div class="creations__cardsContainer__card">
        <h3>Web</h3>
        <figure class="creations__cardsContainer__card__img">
          <img
            src="../assets/img/pictures/Logo-KA.png"
            alt="logo de 'Kaus Australis', associaton d'astronomes amateurs"
          />
        </figure>
        <figcaption>Projet K.A</figcaption>
        <figure class="creations__cardsContainer__card__img">
          <img
            src="../assets/img/icon/logo_saint_paul_sur_yenne_blanc.svg"
            alt="Logo de la mairie de Saint-Paul"
          />
        </figure>
        <figcaption>Mairie de Saint-Paul sur Yenne</figcaption>
        <figure class="creations__cardsContainer__card__img">
          <img src="../assets/Logo-blanc.svg" alt="Logo du site Alexis Carlier" />
        </figure>
        <figcaption>Mon Curiculum en ligne</figcaption>
        <button>Voir le Portfolio</button>
      </div>
      <div class="creations__cardsContainer__card">
        <h3>Graphiques</h3>
        <figure class="creations__cardsContainer__card__img">
          <img
            src="../assets/img/pictures/Valence_illustrator.png"
            alt="Illustration en flat design des Châteaux d'eau de Valence"
          />
        </figure>
        <figcaption>Illustrations</figcaption>
        <figure class="creations__cardsContainer__card__img">
          <img
            src="../assets/img/pictures/Shenron-et-goku.jpg"
            alt="Digital Painting du manga 'Dragon Ball' d'Akira Toriyama"
          />
        </figure>
        <figcaption>Digital painting</figcaption>
        <figure class="creations__cardsContainer__card__img">
          <img
            src="../assets/img/pictures/logo_astronomade.png"
            alt="Logo de l'Astronomade"
          />
        </figure>
        <figcaption>Création de logos, visuels et chartes graphiques</figcaption>
        <button>Voir le Portfolio</button>
      </div>
    </div>
  </section>
  <!-- fin SECTION 5  -->

  <!-- début SECTION CONTACT  -->
  <section class="contact">
    <div class="contact__header">
      <h2>Contactez-moi!</h2>
    </div>
    <div class="contact__container">
      <div class="contact__container__text">
        <p class="contact__container__text_p">Vous recherchez...</p>
        <div class="contact__container__text__seek">
          <h4>un Développeur?</h4>
          <h4>un Graphiste?</h4>
          <h4>un Photographe?</h4>
          <h4>un Illustrateur?</h4>
        </div>
      </div>
      <div class="contact__container__content">
        <div class="contact__container__content__btn">
          <router-link
            :to="{ name: 'Contact' }"
            class="contact__container__content__btn-contact"
            >Discutons - en !
          </router-link>
        </div>
      </div>
      <div class="contact__container__text">
        <p class="contact__container__text_p">Pour...</p>
        <div class="contact__container__text__seek">
          <h4>votre Équipe?</h4>
          <h4>votre Entreprise?</h4>
          <h4>un Projet?</h4>
        </div>
      </div>
    </div>
  </section>
  <!-- début SECTION CONTACT  -->
</template>



/********************************/ /*********** END HTML ***********/
/********************************/ /******** BEGINING STYLE ********/
/********************************/



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
  margin-bottom: 48px;
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
  background-size: cover;
  background-repeat: no-repeat;
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
  padding: 48px;
  margin: 24px 0px;

  a {
    position: relative;
    background-color: transparent;
    z-index: 1;
  }
  a::after {
    content: "";
    position: absolute;
    width: 0;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #003f8b;
    border-radius: 8px;
    z-index: -1;
    transition: all 0.3s ease;
  }
  a:hover {
    color: #f6faff;
    transition-delay: color 0.2s;
  }
  a:hover::after {
    left: 0;
    right: auto;
    width: 100%;
  }
  a:active {
    transform: translateY(10px);
  }
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
    a::after {
      border-radius: 2px;
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
        font-size: 24px;
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
  width: 100%;
  margin: 48px 0;
  background: url(../assets/img/pictures/brume.jpg);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  gap: 32px;

  h2 {
    color: #f6faff;
  }

  &__astro,
  &__photo,
  &__DP,
  &__outdoor {
    background-color: rgba(0, 24, 52, 0.25);
    backdrop-filter: blur(4px);
    padding: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 16px;

    &__img {
      display: flex;
      width: 300px;

      img {
        max-width: 70%;
        min-width: 30%;
        margin: auto;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 70%;
      gap: 48px;
      margin: 0 48px;

      h3 {
        color: #f6faff;
        font-size: 20px;
      }

      p {
        color: #f6faff;
        font-family: "Roboto", sans-serif;
      }
      a.out-link {
        font-size: 16px;
        border: none;
        padding: 0;
        text-decoration: underline;
        font-family: "Roboto", sans-serif;
      }
      a.out-link:hover {
        color: #003f8b;
      }
      a.out-link::after {
        background: none;
      }
    }
  }
  a {
    background-color: transparent;
    text-decoration: none;
    border: #f6faff solid 2px;
    border-radius: 8px;
    font-size: 24px;
    font-family: "Nunito", sans-serif;
    padding: 8px 32px;
    color: #f6faff;
  }
  // button:hover {
  //   box-shadow: inset 400px 0 0 0 #003f8b;
  // }
  &__astro,
  &__DP {
    &__content {
      a {
        margin-left: auto;
      }
    }
  }

  &__photo,
  &__outdoor {
    &__content {
      a {
        margin-right: auto;
      }
    }
  }
}
/*** fin SECTION 4 "HOBBIES" ***/

/*** début SECTION 5 "CREATIONS" ***/
.creations {
  background-image: url(../assets/img/pictures/gratin_de_fruit.jpg);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  h2 {
    color: #f6faff;
  }

  &__cardsContainer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 48px;
    border-radius: 16px;

    &__card {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: rgba(0, 63, 139, 0.25);
      backdrop-filter: blur(8px);
      padding: 32px;
      border-radius: 16px;

      h3 {
        color: #f6faff;
        font-size: 20px;
        margin-bottom: 32px;
      }

      &__img {
        display: flex;

        img {
          width: 100%;
          max-width: 300px;
          max-height: 200px;
          margin: auto;
        }
        // img:last-child {
        // }
      }

      figcaption {
        color: #f6faff;
        font-family: "Nunito", sans-serif;
        margin-top: 16px;
        margin-bottom: 32px;
      }

      button {
        border: #f6faff solid 2px;
        border-radius: 8px;
        padding: 8px 32px;
        background-color: transparent;
        color: #f6faff;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}
/*** fin SECTION 5 "CREATIONS" ***/

/*** début SECTION 6 "CONTACT" ***/
.contact {
  background: url(../assets/img/icon/bg-contact-btn.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: #b9d8ff;
  background-origin: content-box;
  margin: 48px 0;
  padding: 48px;

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__text {
      width: 25%;
      margin-bottom: 18px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        font-family: "Roboto", sans-serif;
        color: #003f8b;
        font-size: 24px;
        font-weight: 400;
        margin: 32px;
      }

      &__seek {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-end;
        gap: 32px;

        h4 {
          color: #003f8b;
          font-family: "Nunito", sans-serif;
          font-size: 20px;
          font-weight: 600;
          margin-right: 33%;
          animation: typing 6s steps(17) infinite, blink 1s infinite;
        }
      }
    }
    &__content {
      display: flex;

      &__btn {
        display: flex;
        width: 300px;
        height: 300px;
        justify-content: center;
        margin: auto;
        position: relative;

        a {
          font-size: 24px;
          font-family: "Nunito", sans-serif;
          text-transform: uppercase;
          text-decoration: none;
          color: #003f8b;
          font-weight: 600;
          border: #003f8b solid 4px;
          border-radius: 8px;
          padding: 8px 32px;
          text-align: center;
          backdrop-filter: blur(8px);
          margin: auto;
          position: relative;
          background-color: transparent;
          z-index: 1;
        }
        a::after {
          content: "";
          position: absolute;
          width: 0;
          top: 0;
          left: 0;
          height: 100%;
          background-color: #003f8b;
          z-index: -1;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        a:hover {
          color: #f6faff;
          transition-delay: color 0.2s;
        }

        a:hover::after {
          left: 0;
          right: auto;
          width: 100%;
        }

        a:active {
          transform: translateY(10px);
        }

        img {
          position: absolute;
          left: 20%;
          top: -100%;
          z-index: -1;
        }
      }
    }
  }
}
/*** fin SECTION 6 "CONTACT" ***/

@media screen and (min-width: 400px) and (max-width: 930px) {
}

@media (max-width: 400px) {
}
</style>
