<script setup>

</script>

<template>
<v-app>
<!-- HERO SECTION -->
<v-carousel height="600" hide-delimiters show-arrows="hover">
  <v-carousel-item src="h1.jpg" cover>
    <v-container class="fill-height d-flex align-center justify-center">
      <div class="text-center white--text">
        <h1 class="text-white">BUILD YOUR PERFECT BODY</h1>
        
      </div>
    </v-container>
  </v-carousel-item>

  <v-carousel-item src="h2.jpg" cover>
    <v-container class="fill-height d-flex align-center justify-center">
      <div class="text-center white--text">
        <h1 class="text-yellow">TRAIN HARD. STAY STRONG.</h1>
        
      </div>
    </v-container>
  </v-carousel-item>
</v-carousel>

<!-- ABOUT SECTION -->
<v-container class="my-12">
<v-row align="center">
  
  <v-col cols="12" md="6">
    <v-img src="h4.jpg" height="400"></v-img>
  </v-col>

  <v-col cols="12" md="6">
    <h2>About Our Gym</h2>
    <p>
      Our fitness center provides world class equipment, professional
      trainers, and customized workout programs designed to help you
      achieve your fitness goals faster.
    </p>
    <v-btn color="black" dark>Learn More</v-btn>
  </v-col>

</v-row>
</v-container>

<!-- SERVICES -->
<v-container>
<h2 class="text-center mb-8">Our Programs</h2>

<v-row>

<v-col cols="12" md="4">
    <v-card>
        <v-img src="weights.jpg" height="250" cover></v-img>
        <v-card-title>Weight Training</v-card-title>
        <v-card-text>Build strength and muscle with our professional training programs.</v-card-text>
    </v-card>
</v-col>

<v-col cols="12" md="4">
    <v-card>
        <v-img src="h3.jpg" height="250"></v-img>
        <v-card-title>Cardio Fitness</v-card-title>
        <v-card-text>Improve endurance and heart health with modern cardio equipment.</v-card-text>
    </v-card>
</v-col>

<v-col cols="12" md="4">
    <v-card>
        <v-img src="yoga.jpg" height="250" cover></v-img>
        <v-card-title>Yoga & Flexibility</v-card-title>
        <v-card-text>
        Enhance flexibility, balance, and mental focus.
        </v-card-text>
    </v-card>
</v-col>

</v-row>
</v-container>



<!-- FOOTER -->
<v-footer color="black" dark class="pa-6">
<v-col class="text-center">
© MacFit Gym
</v-col>
</v-footer>

</v-app>
</template>    