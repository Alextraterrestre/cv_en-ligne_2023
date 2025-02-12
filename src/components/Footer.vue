<template>
  <div class="footer">
    <div class="vue">
      <p>Powered by</p>
      <div>
        <img src="../assets/logo.svg" alt="" style="height: 30px" />
      </div>
      <p>Vue.js</p>
    </div>
    <div class="fol-law">
      <div class="network">
        <p>Suivez-moi sur :</p>
        <div class="folow">
          <a href="#" class="insta"
            ><img src="../assets/img/icon/instagram-2016-5.svg" alt=""
          /></a>
          <a href="#" class="git"
            ><img src="../assets/img/icon/github-icon-1.svg" alt=""
          /></a>
          <a href="#" class="linkedin"
            ><img src="../assets/img/icon/linkedin-icon-2.svg" alt=""
          /></a>
        </div>
      </div>
      <div class="law">
        <a href="http://" target="_blank"> Mentions légales</a>
      </div>
    </div>
    <div class="copyright">
      <p>© Alexis Carlier 2023</p>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  color: #f6faff;
  font-size: 18px;
  font-weight: 400;
  background-color: #003f8b;
  gap: 16px;
  padding: 48px;

  .vue {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;

    img {
      height: 30px;
    }
  }

  .fol-law {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .network {
      display: flex;
      align-items: center;
      & p {
        padding: 16px 0;
      }

      .folow {
        display: flex;
      }

      & a {
        color: #f6faff;
        height: 44px;
        width: 44px;
        margin: 0 8px;
      }
    }
    .law {
      margin: 16px 0;
    }

    .law a {
      color: #f6faff;
      text-decoration: underline;
    }
  }
}
@media (max-width: 1000px) {
  .footer {
    padding: 24px 24px 104px 24px;
  }
}
@media (max-width: 650px) {
  .footer {
    padding: 16px 16px 104px 16px;

    & .fol-law {
      flex-direction: column;
      align-items: center;

      & .network {
        flex-direction: column;
      }
    }
  }
}
</style>
