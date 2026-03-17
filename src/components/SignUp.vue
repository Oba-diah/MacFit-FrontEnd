<script setup>
import { ref } from 'vue'

import { useRouter } from "vue-router";
import {useAuth} from '../services/auth'

const router = useRouter();
const { register, loading, error } = useAuth()

  const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    passwordMatch: () => password.value === confirmPassword.value || 'Passwords do not match.',
  }

  const show1 = ref(false)
  const show2 = ref(true)
  const password = ref(null)

//   models
const firstName = ref(null)
const lastName = ref(null)
const email = ref(null)
const phone = ref(null)
const gender = ref(null)
const dateOfBirth = ref(null)
const gymLocation = ref(null)

const signUp = async () => {

  loading.value = true;
  error.value = "";

  const formData = new FormData();
  formData.append("name", firstName.value +' '+ lastName.value,);
  formData.append("email", email.value);
  formData.append("phoneNumber", phone.value);
  formData.append("dateOfBirth", dateOfBirth.value);
  formData.append("gender", gender.value);
  formData.append("gymLocation", gymLocation.value);
  formData.append("password", password.value);
  formData.append("role_id", 4);

  try {
    await register(formData)
   
    // Redirect after successful signup
    router.push('/homepage').then(() => {
        router.go(0); // Reloads the current route
    });
  } catch (err) {
    // Error is already handled by the auth service
    console.error('Sign up failed', err)
  }
};



  const confirmPassword = ref(null)
  const show1confirm = ref(false)
  
</script>

<template >
    <v-container width="50%" class="text-center" mt="8" >
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
                            <div class="text-display">Sign Up for Macfit Gym</div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                            <v-col md="6">
                                <v-text-field variant="outlined" v-model="firstName" label="First Name"></v-text-field>
                            </v-col>
                    </v-row>

                    <v-row justify="center">
                            <v-col md="6">
                                <v-text-field variant="outlined" v-model="lastName" label="Last Name"></v-text-field>
                            </v-col>
                       
                    </v-row>

                    <v-row justify="center">
                            <v-col md="6">
                                <v-text-field variant="outlined" v-model="email" label="Email"></v-text-field>
                            </v-col>
                    </v-row>

                    <v-row justify="center">
                            <v-col md="6">
                                <v-text-field variant="outlined" type="number" v-model="phone" label="Phone"></v-text-field>
                            </v-col>
                    </v-row>

                    <v-row justify="center">
                            <v-col md="6">
                                <v-text-field
                                    label="Password"
                                    v-model="password"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    @click:append="show1 = !show1"
                                    variant="outlined">
                                </v-text-field>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                            <v-col md="6">
                                <v-text-field 
                                    label="Confirm Password"
                                    v-model="confirmPassword"
                                    :append-icon="show1confirm ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.min,rules.passwordMatch]"
                                    :type="show1confirm ? 'text' : 'password'"
                                    @click:append="show1confirm = !show1confirm"
                                    variant="outlined">
                                </v-text-field>
                            </v-col>
                    </v-row>

                    <v-row justify="center">                          
                          <v-col md="3" class="text-center">
                                <div class="text-title-large font-weight-medium text-center" >Gender</div>
                            </v-col>
                            <v-col md="6">
                                <v-radio-group inline v-model="gender">
                                    <v-radio label="Male" value="Male"></v-radio>
                                    <v-radio label="Female" value="Female"></v-radio>
                                </v-radio-group>
                            </v-col>
                    </v-row>

                    <v-row justify="center">                            
                            <v-col md="6">
                                <v-date-input variant="outlined" v-model="dateOfBirth" label="Date Of Birth"></v-date-input>
                            </v-col>
                    </v-row>

                    <v-row justify="center">
                            <v-col md="6">
                                <v-select
                                    v-model="gymLocation"
                                    label="Select"
                                    :items="['CBD', 'Madaraka', 'Westlands', 'Buruburu']"
                                    variant="outlined"
                                ></v-select>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col md="12">
                            <v-btn color="primary"variant="elevated" @click="signUp">Sign Up</v-btn>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col md="12">
                            <div>Already have an account? <router-link to="/login">Login</router-link></div>
                        </v-col>
                    </v-row>

                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>    