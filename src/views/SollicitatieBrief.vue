<template>
  <div class="CV">
    <div class="cv-title">
      <h1 class="left-title">Mohammad</h1>
      <h1 class="right-title">Ayash</h1>
    </div>
    <section class="cv-left">
      <div class="cv-img">
        <img src="@/assets/img/main-img.jpg" alt="Mohammad Ayash" class="" />
        <p class="description p-3">
          Enthousiaste ICT specialist met een jaar ervaring in front-end ontwikkeling (WordPress en VueJs) en Hardware .opzoek naar een leuke baan waarin ik verder kan ontwikkelen samen met andere ICT collega's .
        </p>
      </div>
      <hr />
      <div class="activite">
        <h3>ACTIVITEITEN EN INTERESSES</h3>
        <ul>
          <li>Lezen</li>
          <li>Wandelen</li>
          <li>voetbal</li>
          <li>programmeren</li>
        </ul>
      </div>
      <div class="skills">
        <h3>Talen</h3>
        <ul>
          <li>
            <span>Engels</span>
            <div class="progress">
              <span class="progress-bar bg-info" style="width: 85%">85%</span>
            </div>
          </li>
          <li>
            Nederlands
            <div class="progress">
              <span class="progress-bar bg-info" style="width: 75%">75%</span>
            </div>
          </li>
          <li>
           Arabich
            <div class="progress">
              <span class="progress-bar bg-info" style="width: 99%">99%</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="skills">
        <h3>VAARDIGHEDEN</h3>
        <ul>
          <li>
            <span>Frontend</span>
            <div class="progress">
              <span class="progress-bar bg-info" style="width: 80%">80%</span>
            </div>
          </li>
          <li>
            VueJs
            <div class="progress">
              <span class="progress-bar bg-info" style="width: 75%">75%</span>
            </div>
          </li>
          <li>
            <span>Backend</span>
            <div class="progress">
              <span class="progress-bar bg-info" style="width: 70%">70%</span>
            </div>
          </li>
          <li>
            Wordpress
            <div class="progress">
              <span class="progress-bar bg-info" style="width: 80%">80%</span>
            </div>
          </li>
          <li>
            Hardware
            <div class="progress">
              <span class="progress-bar bg-info" style="width: 60%">60%</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!---->
    <section class="cv-right p-3">
      <h3 class="job-name">ICT specialist</h3>
      <div class="personalia-details">
        <div class="email">
          <p><i class="fa-solid fa-envelope"></i> mohammadhd1987@gmail.com</p>
        </div>
        <div class="phone"></div>
        <div class="adress">
          <p><i class="fa-solid fa-map-location-dot"></i> Tamboer 9</p>
          <p>6866 ED, Heelsum</p>
        </div>
        <hr />
      </div>
    </section>
    <section class="sollicitatier">
      <div class="company-details">
        <div class="company-name">
          <p>Sales Wizard b.v.</p>
        </div>
        <div class="company-adress">
          <p></p>
          <p>Velperbinnensingel 5</p>
          <p>6811 BP, Arnhem</p>
        </div>
      </div>
      <div class="solliciteren-date">
        <p>Arnhem, 24 Juni 2022</p>
      </div>
      <div class="betreft">
        <p>
          Betreft: sollicitatie naar de functie van
          <span>Front-end developer</span>
        </p>
      </div>
      <div class="solliciteren-body">
        <p class="solliciteren-top">Geachte Mevrouw/Meneer,</p>
        <div class="solliciteren-text" contenteditable="true">
          <p>
            Met enthousiasme las ik op uw website de vacature waarin staat dat u
            opzoek bent naar een front-end developer. Graag solliciteer ik naar
            deze boeiende en uitdagende functie en in deze brief zal ik mijn
            motivatie nader toelichten.
          </p>
          <p>
            Als front-end developer ben ik verantwoordelijk voor het design en
            de implementatie van user interfaces binnen webapplicaties om te
            komen tot het beste resultaat dat klanten tevreden stelt .
          </p>
          <p>
            Ik heb kennis van en ervaring met JavaScript, WordPress,PHP, JQuery,
            VueJS CSS bootstrap en aanvullende libraries voor front-end
            development en single page applicaties.
          </p>
          <p>
            Bij Sales Wizard hoop ik Dat ik mijzelf kan ontwikkelen om een
            professionele WordPress developer te worden. Ik vind het prettig om
            te werken met een , enthousiast , creatief en vriendelijke team .
          </p>
          <p>
            Ik ben een rustig persoon met een veel geduld en
            verantwoordelijkheidsgevoel. Graag werk ik samen in een team waarbij
            ik kan leren van collega’s en zij van mij. Ik kan ook zelfstandig
            werken .
          </p>
          <p>
            Graag draag ik als front-end developer bij aan de innovatieve
            projecten die uw bedrijf levert. Met deze brief heeft u hopelijk een
            goed beeld gekregen van mijn capaciteiten die hiervoor nodig zijn.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.CV {
  display: block;
  background-color: #fff;
  min-width: 100%;
}
.cv-title h1 {
  display: inline-block;
  width: 50%;
  font: 4em sans-serif;
  text-align: center;
  font-weight: bolder;
  margin-bottom: 0;
  background-color: #fff;
  color: rgb(57, 90, 135);
}
.job-name {
  background-color: rgb(57, 90, 135);
  color: #fff;
  text-align: center;
  margin: 0;
}
/*/////////////*/
.cv-left {
  width: 40%;
  float: left;
  background-color: rgb(57, 90, 135);
  color: #fff;
  padding-bottom: 214px;
}
.cv-img {
  width: 100%;
  text-align: center;
}
.cv-img img {
  border-radius: 50%;
  border: 3px solid #ddd;
  max-width: 100%;
  height: 30vh;
}

.description {
  font-size: 1.4em;
  text-align: justify;
}
.activite,
.skills {
  margin: 20px 10px;
}
.activite h3,
.skills h3 {
  text-align: center;
}
.progress {
  display: inline-flex;
  width: 10em;
  float: right;
}

/*/ //////////////*/

.cv-right {
  width: 60%;
  float: left;
  color: rgb(57, 90, 135);
}

.personalia-details {
  padding: 20px;
}
.personalia-details h1 {
  color: rgb(57, 90, 135);
  padding-bottom: 10px;
  text-decoration: underline;
}
.solliciteren-text {
  text-align: justify;
  white-space: normal;
}

.work-exper,
.opleiding {
  color: #000;
}
.work-exper h2,
.opleiding h2 {
  text-align: center;
  color: rgb(57, 90, 135);
}
.work-exper h3,
.opleiding h3 {
  color: rgb(0, 22, 51);
}
.work-exper p,
.opleiding p {
  color: gray;
  padding-left: 10px;
}
@media (max-width: 768px) {
   .CV{
    padding-top:10em;
    width: 100%;
  }
}
@media (max-width: 480px) {
  .cv-left,.cv-right{
    width: 100%;
  }
  .cv-left{
    padding-bottom: 20px;
  }
  .skills ul li{
    margin-bottom: 5px;
  }
}
@media print {
  .cv {
    min-height: 90%;
    max-width: 100%;
  }
  .cv-img img {
    height: 20vh;
  }
}
</style>