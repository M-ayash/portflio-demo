<template>
  <section class="row main-page">
    <html>
      
        <li class="nav-item">
          <a href="#my-skills" class="nav-link">My Skills</a>
        </li>
        <li class="nav-item">
          <a href="#contact" class="nav-link">contact</a>
        </li>
    </html>
    <div class="col-12 col-md-6 main-parg mt-5">
      <h5>Hello I am</h5>
      <h1>Mohammad</h1>
      <h3>Front-end Developer</h3>
      <p>
        I am a web developer with frontend experience Knowledge of HTML, CSS,
        Javascript Wordpress and Vuejs.
      </p>
      <div class="social-icons">
        <a
          class="fa-brands fa-twitter"
          href="https://twitter.com/Mohammad_ay_87"
        ></a>
        <a
          class="fa-brands fa-facebook"
          href="https://www.facebook.com/mohammad.ayash.88"
        ></a>
        <a
          class="fa-brands fa-linkedin"
          href="https://www.linkedin.com/in/mohammad-ayash-465216231/"
        ></a>
        <a
          class="fa-brands fa-instagram"
          href="https://www.instagram.com/mohammad.ayash.88/"
        ></a>
        <a class="fa-brands fa-github" href="https://github.com/M-ayash"></a>
      </div>
      <div>
        <a class="btn btn-success btn-contact m-4" href="#contact">contact</a>
      </div>
    </div>
    <div class="col-12 col-md-3 main-img">
      <img
        src="@/assets/img/img_11.jpg"
        alt="laptop"
        class="rounded-circle"
        width="250"
        height="250"
      />
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
.main-page {
  min-height: 100vh;
  max-width: 100%;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
}
.main-parg {
  font-weight: bold;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.main-parg h1 {
  font-size: 100px;
  color: rgb(18, 11, 105);
}
.main-parg h3 {
  font-size: 50px;
  color: rgb(31, 169, 207);
}
.main-parg h5 {
  font-size: 40px;
  padding: 10px;
  color: #03242e;
  text-shadow: -1px 0 rgb(248, 244, 244), 0 1px rgb(245, 243, 243),
    1px 0 rgb(248, 244, 244), 0 -1px rgb(245, 240, 240);
}
.main-parg p {
  font-size: 25px;
  justify-content: center;
  color: coral;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.social-icons a {
  padding: 10px;
  text-decoration: none;
  font-size: 20px;
  color: #f7f7f7;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
.btn-contact {
  font-size: 20px;
  padding: 20px 50px;
}

@media (max-width: 768px) {
  .main-page {
    margin: 5px;
    padding: 10px;
    flex-direction: column;
  }
  .main-parg {
    text-shadow: 1px solid black;
    padding: 0;
  }
  .main-parg h1 {
    font-size: 4em;
  }
  .main-parg h3 {
    font-size: 3em;
  }
  .main-parg h5 {
    font-size: 1.5em;
  }
  .main-parg p {
    font-size: 1.5em;
  }
  .social-icons a {
  }
  .btn-contact {
    font-size: 20px;
  }
  .main-img {
    text-align: center;
  }
  @media (max-width: 576px) {
    .main-page {
      padding: 20px;
      padding-top: 6em;
    }
  }
}
</style>