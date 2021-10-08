<template>

      <v-app>
    <v-card width="500px" class="mx-auto mt-5" > 
      <v-card-title>
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form >
          <v-text-field 
            label="Username"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            type="Password"
            label="Passwort"
            prepend-icon="mdi-lock"
            append-icon="mdi-eye-off"
          />
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Passwort vergessen?</router-link>
            </p>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <router-link :to="{name: 'Registrierung'}">
        <v-btn color="success">Registrieren</v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      showPassword: false
    }
  }
}

