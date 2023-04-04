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
            ><img
              src="../assets/img/icon/instagram-2016-5.svg"
              alt=""
              style="height: 20px"
          /></a>
          <a href="#" class="git"
            ><img src="../assets/img/icon/github-icon-1.svg" style="height: 20px" alt=""
          /></a>
          <a href="#" class="linkedin"
            ><img
              src="../assets/img/icon/linkedin-icon-2.svg"
              alt=""
              style="height: 20px"
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
  // height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  color: #f6faff;
  font-size: 18px;
  font-weight: 400;
  background-color: #003f8b;
  padding: 16px 48px;
  margin-bottom: 140px;

  .vue,
  .fol-law,
  .copyright {
    margin: 8px 0;
  }

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
      padding: 0 48px;

      & p {
        margin: 0px 8px;
      }

      & a {
        margin: 8px;
        color: #f6faff;
      }
    }
    .law a {
      margin: 8px;
      color: #f6faff;
    }
  }
}
</style>
