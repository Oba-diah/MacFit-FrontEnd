<script setup>

</script>

<template>
    <v-container fluid class="pa-0">
        <v-carousel
            hide-delimiter-background
            height="500px"
            show-arrows="hover"
        >
            <v-carousel-item src="l1.jpg" cover></v-carousel-item>
            <v-carousel-item src="l2.jpg" cover></v-carousel-item>
            <v-carousel-item src="l3.jpg" cover></v-carousel-item>
        </v-carousel>
    </v-container>
    
      <!-- About Us -->
     <v-container fluid style="background-color:#CFD0D6" class="py-10">
    <v-row align="center">

    <v-col cols="12" md="6" class="text-center text-md-left">
      <div class="text-h3 mb-6">
        Welcome to <strong>MacFit</strong> Gym
      </div>

      <div class="text-body-1 text-medium-emphasis mb-4">
        At MacFit, we are committed to helping people build stronger, healthier lifestyles.
        Our gym provides a motivating environment with modern equipment where both beginners
        and experienced members can work toward their fitness goals.
      </div>

      <div class="text-body-1 text-medium-emphasis mb-4">
        Our dedicated trainers offer guidance and support to help you improve strength,
        endurance, and overall wellness.
      </div>

      <div class="text-body-1 text-medium-emphasis mb-6">
        More than a gym, MacFit is a community where members motivate and support each
        other. Join us and take the next step toward a healthier, more confident you 💪
      </div>

      <v-btn color="#29C0F7" size="large">
        LEARN MORE
      </v-btn>
    </v-col>

    <!-- Images Section -->
    <v-col cols="12" md="6">
      <v-row>
        <v-col cols="4">
          <v-img src="sq 1.jpg" height="200" cover></v-img>
        </v-col>

        <v-col cols="4">
          <v-img src="sq 2.jpg" height="200" cover></v-img>
        </v-col>

        <v-col cols="4">
          <v-img src="sq 3.jpg" height="200" cover></v-img>
        </v-col>
      </v-row>
    </v-col>

  </v-row>
</v-container>

     <v-container>
        <v-row>
            <v-col md="4">
                <v-card>
                    <v-img src="news1.jpg" cover></v-img>
                    <v-card-title>Do you like nature fitness?</v-card-title>
                    <v-card-text>Discover the benefits of exercising in natural surroundings and how it can enhance your fitness journey.</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>

           <v-col md="4">
                <v-card>
                    <v-img src="news2.jpg" cover></v-img>
                    <v-card-title>Have an interest in Cardio?</v-card-title>
                    <v-card-text>Explore the world of cardiovascular exercise and learn how it can improve your heart health and overall fitness.</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
            <v-col md="4"> 
                <v-card>
                    <v-img src="news3.jpg" cover></v-img>
                    <v-card-title>Tracking your health is vital </v-card-title>
                    <v-card-text>Learn how to monitor your fitness progress and make data-driven decisions to achieve your health goals.</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>   
            </v-col>
        </v-row>
    </v-container>

    <!-- reviews -->
     <v-container>
        <v-row>
            <v-col md="5>">
                <v-card>
                    <v-card-text>"MacFit has transformed my fitness journey the trainers are knowledgeable and supportive."</v-card-text>
                    <v-rating length="5" size="32" :model-value="5" active-color="primary"></v-rating>
                </v-card>
            </v-col>
             <v-col md="5>">
                <v-card>
                    <v-card-text>"The community at MacFit is amazing and unmatched.Lack of a water dispenser is disouraging."</v-card-text>
                    <v-rating length="5" size="32" :model-value="4" active-color="primary"></v-rating>
                </v-card>
            </v-col> 
            <v-col md="5>">
                <v-card>
                    <v-card-text>"The facilities at MacFit are top-notch, and the equipment is always well-maintained."</v-card-text>
                    <v-rating length="5" size="32" :model-value="5" active-color="primary"></v-rating>
                </v-card>
            </v-col>
             <v-col md="5>">
                <v-card>
                    <v-card-text>"Some of the workers are quite rude.They ruin the experience."</v-card-text>
                    <v-rating length="5" size="32" :model-value="2" active-color="primary"></v-rating>
                </v-card>
            </v-col>
        </v-row>    
     </v-container>
     
     <!-- Contact Us -->
<v-container fluid style="background-color:black"  class="py-10 text-white">
  
  <v-row justify="center">
    <v-col cols="12" class="text-center mb-6">
      <div class="text-h4 font-weight-bold">Get in Touch</div>
    </v-col>
  </v-row>

  <v-row justify="center">

    <!-- Phone -->
    <v-col cols="12" md="3" class="text-center">
      <v-icon size="36" class="mb-2">mdi-phone</v-icon>
      <div class="text-subtitle-1 font-weight-medium">Phone</div>
      <div class="text-body-1">0713 642 242</div>
    </v-col>

    <!-- Email -->
    <v-col cols="12" md="3" class="text-center">
      <v-icon size="36" class="mb-2">mdi-email</v-icon>
      <div class="text-subtitle-1 font-weight-medium">Email</div>
      <div class="text-body-1">macfitgym@gmail.com</div>
    </v-col>

    <!-- Opening Hours -->
    <v-col cols="12" md="3" class="text-center">
      <v-icon size="36" class="mb-2">mdi-clock</v-icon>
      <div class="text-subtitle-1 font-weight-medium">Opening Hours</div>
      <div class="text-body-2">
        Mon – Fri: 6:00 AM – 10:00 PM<br>
        Sat – Sun: 8:00 AM – 8:00 PM
      </div>
    </v-col>

    <!-- Location -->
    <v-col cols="12" md="3" class="text-center">
      <v-icon size="36" class="mb-2">mdi-map-marker</v-icon>
      <div class="text-subtitle-1 font-weight-medium">Location</div>
      <div class="text-body-1">123 Fitness Street, Health City</div>
    </v-col>

  </v-row>

  <!-- Footer -->
  <v-row class="mt-8">
    <v-col cols="12" class="text-center">
      <div class="text-caption text-medium-emphasis">
        © 2026 MacFit Gym | Designed by Obadiah Murei
      </div>
    </v-col>
  </v-row>

</v-container>
</template>    