<template>
  <div class="sollicitatiebrief" contenteditable="true">
    <section class="peronalia">
      <div class="personalia-logo">
        <img src="@/assets/img/logo.jpg" alt="Mohammad Ayash" />
        <h1>Mohammad Ayash</h1>
      </div>
      <div class="personalia-details">
        <h1>Personalia</h1>
        <div class="name">
          <p><i class="fa-solid fa-user"></i> Mohammad Ayash</p>
        </div>
        <div class="email">
          <p><i class="fa-solid fa-envelope"></i> m.ayash@ictmaatwerk.com</p>
        </div>
        <div class="phone"></div>
        <div class="adress">
          <p><span>🏡</span> Tamboer 9</p>
          <p>6866 ED, Heelsum</p>
        </div>
      </div>
    </section>
    <section class="sollicitatier">
      <div class="company-details">
        <div class="company-name">
          <p>Mediabirds</p>
        </div>
        <div class="company-adress">
          <p>Galvanistraat 7</p>
          <p>6716 AE Ede</p>
        </div>
      </div>
      <div class="solliciteren-date">
        <p>Arnhem, 19 mei 2022</p>
      </div>
      <div class="betreft">
        <p>
          Betreft: sollicitatie naar de functie van
          <span>Front-end wordpress developer</span>
        </p>
      </div>
      <div class="solliciteren-body">
        <p class="solliciteren-top">Geachte Mevrouw/Meneer,</p>
        <div class="solliciteren-text" contenteditable="true">
          <p>
            Met enthousiasme las ik op uw website de vacature waarin staat dat u
            opzoek bent naar een front-end WordPress developer. Graag
            solliciteer ik naar deze boeiende en uitdagende functie en in deze
            brief zal ik mijn motivatie nader toelichten.
          </p>
          <p>
            Als front-end developer ben ik verantwoordelijk voor het design en
            de implementatie van user interfaces binnen webapplicaties om te
            komen tot het beste resultaat dat klanten tevreden stelt .
          </p>
          <p>
            Ik heb kennis van en ervaring met JavaScript, JQuery, VueJS CSS
            bootstrap wordPress en aanvullende libraries voor front-end
            development en single page applicaties.
          </p>
          <p>
            Bij Mediabirds werd ik aangetrokken door jullie interesse in
            medewerkers en het werken aan hun ontwikkeling . Ik vind het prettig
            om te werken met een , enthousiast , creatief en jong team .
          </p>
          <p>
            Ik ben een rustig persoon met een veel geduld en
            verantwoordelijkheidsgevoel. Graag werk ik samen in een team waarbij
            ik kan leren van collega’s en zij van mij. Ik kan ook zelfstandig
            werken en heb een groot verantwoordelijkheidsgevoel.
          </p>
          <p>
            Graag draag ik als front-end developer bij aan de innovatieve
            projecten die uw bedrijf levert. Met deze brief heeft u hopelijk een
            goed beeld gekregen van mijn capaciteiten die hiervoor nodig zijn.
          </p>
        </div>
        <p class="solliciteren-footer">Met vriendelijke groet</p>
        <p class="name">Mohammad Ayash</p>
        <p>Bijlage: Curriculum vitae</p>
      </div>
    </section>
  </div>
</template>

<style>
.sollicitatiebrief {
  background-color: #fff;
  min-height: 100vh;
  max-width: 100%;
}
.sollicitatiebrief p {
  font-family: "Times New Roman", Times, sans-serif;
  font-size: 1.2em;
}
.peronalia {
  min-height: 100vh;
  width: 30%;
  float: left;
  overflow-wrap: break-word;
  background-color: rgb(206, 218, 214);
}
.personalia-logo {
  position: relative;
}
.personalia-logo img {
  width: 100%;
}
.personalia-logo h1 {
  text-align: center;
  position: absolute;
  top: 10%;
  left: 10%;
  color: #fff;
}
.personalia-details {
  padding: 20px;
}
.personalia-details h1 {
  color: rgb(10, 44, 117);
  padding-bottom: 10px;
  text-decoration: underline;
}
.company-details {
  padding: 0px;
  margin: 0px;
  font-size: 13px;
  line-height: 80%;
}
.sollicitatier {
  width: 70%;
  float: left;
  padding: 100px 20px;
}
.solliciteren-text {
  text-align: justify;
  white-space: normal;
  font-size: 13px;
}
</style>