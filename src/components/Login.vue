<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

  const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => (`The email and password you entered don't match`),
  }

  const show1 = ref(false)
  const show2 = ref(true)
  const password = ref(null)
  const username = ref(null)

  function login() {
    const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (storedUserDetails && storedUserDetails.email === username.value && storedUserDetails.password === password.value) {
        alert('Login successful!')
        localStorage.setItem('isLoggedIn', true);
        router.push('/home');
    } else {
        alert('Invalid email or password. Please try again.');
    }
  }
</script>

<template>
    <v-container width="50%" class="text-center" mt="12" >
        <v-row>
            <v-col md="12">
                <v-form>
                    <v-row justify="center">
                        <v-col md="3" class="text-centre">
                            <v-img src="Logo.png" alt="Macfit Gym Logo"></v-img>
                        </v-col>
                    </v-row>
                     <v-row>
                        <v-col md="12" class="text-center">
                            <div class="text-display">Welcome to Macfit Gym</div>
                        </v-col>
                    </v-row>

                     <v-row>  
                            <v-col md="4" class="text-center">
                                <div class="text-title-large font-weight-medium text-center">Username</div>
                            </v-col>
                            <v-col md="6">
                                <v-text-field variant="outlined" v-model="username" label="Email"></v-text-field>
                            </v-col>
                    </v-row>

                    <v-row>
                            <v-col md="4" class="text-center">
                                <div class="text-title-large font-weight-medium text-center">Password</div>
                            </v-col>
                            <v-col md="6">
                                <v-text-field 
                                    v-model="password"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    @click:append="show1 = !show1"
                                    variant="outlined">
                                </v-text-field>
                            </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="12">
                            <v-btn color="primary"variant="elevated" @click="login">Login</v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12">
                            <div>Don't have an account? 
                                <router-link to="/signup">Sign Up</router-link>
                            </div>
                        </v-col>
                    </v-row>

                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>    