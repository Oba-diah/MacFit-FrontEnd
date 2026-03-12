<script setup>
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
const isAdmin = true; 

import {useRouter} from "vue-router";

const router = useRouter();


function logout(){
    localStorage.removeItem( "isLoggedIn")
    router.push('/')
}
</script>

<template>
    <v-app-bar color="#29C0F7">
        
        <v-app-bar-title> <router-link to="/">MacFit Gym</router-link></v-app-bar-title> 
        <v-btn text to="/home" v-if="isLoggedIn">Home</v-btn>
        <v-btn text to="/admin" v-if="isAdmin">Admin</v-btn>
        <v-btn text to="/bundle">Bundle</v-btn>
        <v-btn text to="/gym-locations">Gym Locations</v-btn>
        
         <v-btn icon="mdi-account" v-if="isLoggedIn">P
            <v-menu activator="parent">
                <v-list>
                    <v-list-item>
                        <v-btn color="primary" to="/profile">Profile</v-btn>                        
                    </v-list-item>
                    <v-list-item>
                        <v-btn color="primary" @click="logout()">Logout</v-btn>                        
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
        <v-btn text to="/login" v-else>Login</v-btn>

    </v-app-bar>    
</template>