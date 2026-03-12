<script setup>
import { ref } from 'vue'
import {useRouter} from "vue-router"

const router =useRouter();

const showBundleDialog = ref(false)
const isLoggedIn = localStorage.getItem('isLoggedIn') 
const selectedBundle =ref(null)
const selectedPrice =ref(null)

function showBundle(name, price){
    if(isLoggedIn){
        selectedBundle.value = name
        selectedPrice.value = price
        showBundleDialog.value = true
    }else{
        router.push('/login')
    }
}
function subscribe(){
     const userDetails = JSON.parse(localStorage.getItem('userDetails'));
     userDetails.subscription = {
        name: selectedBundle.value,
        price: selectedPrice.value,
     }
     localStorage.setItem('userDetails', JSON.stringify(userDetails))
     showBundleDialog = false


}
</script>

<template>
    <v-container style="background-color:#CFD0D6 ;" class="mt-10 p-10">
        <v-row>
            <div class="text-display-medium mb-12">Bundles </div>
        </v-row>
        <v-row>
            <div class="text-display-medium mb-12 font-italic" >Please choose your pricing </div>
        </v-row>

        <v-row>    
            <v-col md="3">
                 <v-card class="text-center" @click="showBundle('Daily pass',300)">
                    <v-icon color="#3A4B68" icon="mdi-clock-outline" size="large" class="mt-10"></v-icon>
                    <v-card-title>Daily Pass</v-card-title>
                    <v-card-text>300ksh</v-card-text>
                 </v-card>
            </v-col>
        

            <v-col md="3">
             <v-card class="text-center"  @click="showBundle('Monthly pass',5000)">
                <v-icon color="#3A4B68" icon="mdi-calendar-account" size="large" class="mt-10"></v-icon>
                <v-card-title>Monthly Pass</v-card-title>
                <v-card-text>5000ksh</v-card-text>
             </v-card>
            </v-col>
        
            <v-col md="3">
                <v-card class="text-center"  @click="showBundle('3 Months pass',12000)">
                    <v-icon color="#3A4B68" icon="mdi-dice-3" size="large" class="mt-10"></v-icon>
                    <v-card-title>3 Months Pass</v-card-title>
                    <v-card-text>12000ksh</v-card-text>
                </v-card>
            </v-col>
    
            <v-col md="3">
                <v-card class="text-center"  @click="showBundle('6 Months pass',20000)">
            <v-icon color="#3A4B68" icon="mdi-numeric-6-box-multiple" size="large" class="mt-10"></v-icon>
            <v-card-title>6 Months Pass</v-card-title>
            <v-card-text>20000ksh</v-card-text>
            </v-card>
            </v-col>
        
            <v-col >
             <v-card class="text-center"  @click="showBundle('Yearly pass',55000)">
                <v-icon color="#3A4B68" icon="mdi-hours-12" size="large" class="mt-10"></v-icon>
                <v-card-title> Yearly Pass</v-card-title>
                <v-card-text>55000ksh</v-card-text>
             </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- WHATS INCLUDED -->
    <v-container style="background-color:#CFD0D6 ;" class="mt-10 p-10">
        <v-row>
                <div class="text-display-medium mb-12" mt="3">Whats Included</div>
        </v-row>
        <v-row>
            <v-col md="4">
             <v-card>
                 <v-icon color="#3A4B68" icon="mdi-locker" size="large" class="mt-8"></v-icon>
                <v-card-title>Personal Lockers</v-card-title>
             </v-card>
            </v-col>
            <v-col md="4">
             <v-card>
                 <v-icon color="#3A4B68" icon="mdi-account" size="large" class="mt-8"></v-icon>
                <v-card-title>Personal Training Sessions</v-card-title>
             </v-card>
            </v-col>
            <v-col md="4">
             <v-card>
                 <v-icon color="#3A4B68" icon="mdi-account-group" size="large" class="mt-8"></v-icon>
                <v-card-title>Group Fitness Classes</v-card-title>
             </v-card>
            </v-col>
            </v-row>

            <v-row>
            <v-col md="4">
             <v-card>
                 <v-icon color="#3A4B68" icon="mdi-all-inclusive" size="large" class="mt-8"></v-icon>
                <v-card-title>Free Access to Facilities</v-card-title>
             </v-card>
            </v-col>
        
            <v-col md="4">
                <v-card>
                     <v-icon color="#3A4B68" icon="mdi-tea" size="large" class="mt-8"></v-icon>
                <v-card-title>Free Refreshments</v-card-title>
                </v-card>
            </v-col>
             <v-col md="4">
                <v-card>
                     <v-icon color="#3A4B68" icon="mdi-waves" size="large" class="mt-8"></v-icon>
                <v-card-title>Steam Room and Showers</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- How to Join -->
     <v-container style="background-color:#CFD0D6 ;" class="mt-10 p-10">
        <v-row>
            <v-col>
                    <div class="text-display-medium mb-12">How to Join</div>
            </v-col>
        </v-row> 
        
    <v-row>
        <v-col>
            <v-list>
                <v-list-item>1. Select your preferred bundle</v-list-item>
                <v-list-item>2. Complete the registration process</v-list-item>
                <v-list-item>3. Make the payment</v-list-item>
                <v-list-item>4. Start your fitness journey!</v-list-item>
            </v-list>
        </v-col>
    </v-row>
     </v-container>

     <!-- Dialog -->
       <v-dialog v-model="showBundleDialog" max-width="600" >

      <v-card prepend-icon="mdi-account" title="Subscribe to Bundle" >
        <v-card-text>
          You are about to subscribe to {{ selectedBundle }} at {{ selectedPrice }}. Click on the button below to complete payment
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
         <v-spacer></v-spacer>
          <v-btn text="Close" variant="plain" @click="showBundleDialog = false" ></v-btn>
          <v-btn color="primary" variant="tonal" @click="subscribe()" >Subscribe</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>    