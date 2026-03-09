<script setup>

</script>

<template>
    <V-container max-width="100%">
        <v-row>
            <v-carousel>
                <v-carousel-item src="l1.jpg" cover>  </v-carousel-item>
                <v-carousel-item src="l2.jpg" cover>  </v-carousel-item>
                <v-carousel-item src="l3.jpg" cover>  </v-carousel-item>
            </v-carousel>
        </v-row>
    </V-container>
    
      <!-- About Us -->
     <v-container style="background-color:#CFD0D6" max-width="100%">
        <v-row >
            <v-col md="8" class="text-centre">
                <div class="text-display-medium mb-12">Welcome to <strong>MacFit</strong> Gym</div>
                <div class="text-title-large font weight-light-text-medium-emphasis mb-8">At MacFit, we are committed to helping people build stronger, healthier lifestyles. Our gym provides a motivating environment with modern equipment where both beginners and experienced members can work toward their fitness goals.</div>
                <div class="text-title-large font weight-light-text-medium-emphasis mb-8">Our dedicated trainers offer guidance and support to help you improve strength, endurance, and overall wellness. We focus on proper training, consistency, and helping every member get the best results.</div>
                <div class="text-title-large font weight-light-text-medium-emphasis mb-8">More than a gym, MacFit is a community where members motivate and support each other. Join us and take the next step toward a healthier, more confident you. 💪</div>
                <v-btn color="#29C0F7">LEARN MORE</v-btn>
            </v-col>
            <v-row md="8" class="d-flex-align-centre-justify-centre fill-height">
                <v-img src="sq 1.jpg"></v-img>
                <v-img src="sq 2.jpg"></v-img>
                <v-img src="sq 3.jpg"></v-img>
            </v-row>
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

     <!-- Contact us  -->
     <v-container style="background-color:#CFD0D6" max-width="100%">
        <v-row class="text-centre">
           <div class="text-title-large font weight-light-text-medium-emphasis mb-8">Get in Touch</div> 
           <div class="text-title-large font weight-light-text-medium-emphasis mb-8">0713642242 | macfit@gmail.com</div>
           <div class="text-title-large font weight-light-text-medium-emphasis mb-8">Opening Hours</div>
           <div class="text-title-large font weight-light-text-medium-emphasis mb-8">Monday - Friday: 6:00 AM - 10:00 PM | Saturday - Sunday: 8:00 AM - 8:00 PM</div>
           <div class="text-title-large font weight-light-text-medium-emphasis mb-8">123 Fitness Street, Health City</div>
           <div class="text-title-large font weight-light-text-medium-emphasis mb-8">Design by Obadiah Murei</div>

        </v-row>
     </v-container>
</template>    