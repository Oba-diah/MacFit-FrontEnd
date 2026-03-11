<script setup>
import { ref } from 'vue'

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

function signUp() {
// create user object
const userDetails ={
    name: firstName.value + ' ' + lastName.value,
    email: email.value,
    phone: phone.value,
    gender: gender.value,
    dateOfBirth: dateOfBirth.value,  
    password: password.value,   
    gymLocation: gymLocation.value

}
// store this data
try {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
} catch (error) {
    console.error('Error saving user details to localStorage:', error);
}
}

  const confirmPassword = ref(null)
  const show1confirm = ref(false)
  
</script>

<template style="background-color: #26C6DA;">
    <v-container width="50%" class="text-center" mt="8"  >
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

                     <v-row>
                            <v-col md="6" class="text-center">
                                <div class="text-title-large font-weight-medium text-center">First name</div>
                            </v-col>
                            <v-col md="6">
                                <v-text-field variant="outlined" v-model="firstName"></v-text-field>
                            </v-col>
                    </v-row>

                    <v-row>
                        
                            <v-col md="6" class="text-center">
                                <div class="text-title-large font-weight-medium text-center">Last name</div>
                            </v-col>
                            <v-col md="6">
                                <v-text-field variant="outlined" v-model="lastName"></v-text-field>
                            </v-col>
                       
                    </v-row>

                    <v-row>
                            <v-col md="6" class="text-center">
                                <div class="text-title-large font-weight-medium text-center">Email</div>
                            </v-col>
                            <v-col md="6">
                                <v-text-field variant="outlined" v-model="email"></v-text-field>
                            </v-col>
                    </v-row>

                    <v-row>
                            <v-col md="6" class="text-center">
                                <div class="text-title-large font-weight-medium text-center">Phone</div>
                            </v-col>
                            <v-col md="6">
                                <v-text-field variant="outlined" type="number" v-model="phone"></v-text-field>
                            </v-col>
                    </v-row>

                    <v-row>
                            <v-col md="6"class="text-center">
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
                            <v-col md="6"class="text-center">
                                <div class="text-title-large font-weight-medium text-center">ConfirmPassword</div>
                            </v-col>
                            <v-col md="6">
                                <v-text-field 
                                    v-model="confirmPassword"
                                    :append-icon="show1confirm ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.min,rules.passwordMatch]"
                                    :type="show1confirm ? 'text' : 'password'"
                                    @click:append="show1confirm = !show1confirm"
                                    variant="outlined">
                                </v-text-field>
                            </v-col>
                    </v-row>

                    <v-row>                          
                          <v-col md="6" class="text-center">
                                <div class="text-title-large font-weight-medium text-center" >Gender</div>
                            </v-col>
                            <v-col md="6">
                                <v-radio-group inline v-model="gender">
                                    <v-radio label="Male" value="Male"></v-radio>
                                    <v-radio label="Female" value="Female"></v-radio>
                                </v-radio-group>
                            </v-col>
                    </v-row>

                    <v-row>
                        
                            <v-col md="6" class="text-center">
                                <div class="text-title-large font-weight-medium text-center">Date of Birth</div>
                            </v-col>
                            <v-col md="6">
                                <v-date-input variant="outlined" v-model="dateOfBirth"></v-date-input>
                            </v-col>
                        
                    </v-row>

                    <v-row>
                        
                            <v-col md="6" class="text-center">
                                <div class="text-title-large font-weight-medium text-center">Gym Location</div>
                            </v-col>
                            <v-col md="6">
                                <v-select
                                    v-model="gymLocation"
                                    label="Select"
                                    :items="['CBD', 'Madaraka', 'Westlands', 'Buruburu']"
                                    variant="outlined"
                                ></v-select>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col md="12">
                            <v-btn color="primary"variant="elevated" @click="signUp">Sign Up</v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12">
                            <div>Already have an account? <router-link to="/login">Login</router-link></div>
                        </v-col>
                    </v-row>

                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>    