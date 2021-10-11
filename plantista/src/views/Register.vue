<template>
    <v-card width="500px" class="mx-auto mt-5"> 
        <v-card-title class="text-h5">Registrierung</v-card-title>
        <v-divider />
        <v-card-text>
            <v-form >
                <v-text-field 
                label="Username"
                prepend-icon="mdi-account-circle"
            />
                <v-text-field 
                label="E-Mail"
                prepend-icon="mdi-email"
            />
            <v-text-field 
                type="Password"
                label="Passwort"
                prepend-icon="mdi-lock"
            />
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn
            color="success"
            text
            @click="$router.push({name: 'Anmeldung'})"
            >
                zur Anmeldung
            </v-btn>
            <v-spacer />
            <v-btn
                color="info"
                text
            >
                Anmelden
            </v-btn>
        </v-card-actions>
    </v-card>
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

