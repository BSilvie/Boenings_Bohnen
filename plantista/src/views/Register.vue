<template>

      <v-app>
    <v-card width="500px" class="mx-auto mt-5" > 
      <v-card-title>
        <h1>Registrierung</h1>
      </v-card-title>
      <v-card-text>
        <v-form >
            <v-text-field 
            label="Username"
            prepend-icon="mdi-account-circle"
          />
            <v-text-field 
            label="E-Mail"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            type="Password"
            label="Passwort"
            prepend-icon="mdi-lock"
            append-icon="mdi-eye-off"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Registrieren</v-btn>

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

