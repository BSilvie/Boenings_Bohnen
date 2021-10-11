<template>
    <v-card width="500px" class="mx-auto mt-5"> 
        <v-card-title class="text-h5">Anmeldung</v-card-title>
        <v-divider />
        <v-card-text>
            <v-form >
                <v-text-field
                    v-model="email"
                    label="E-Mail Adresse"
                    prepend-icon="mdi-email"
                    required
                />
                <v-text-field
                    v-model="password"
                    label="Passwort"
                    prepend-icon="mdi-lock"
                    required
                />
                <p class="forgot-password text-right mt-2 mb-4">
                    <router-link to="/forgot-password">Passwort vergessen?</router-link>
                </p>
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn
                color="success"
                text
                @click="$router.push({name: 'Registrierung'})"
            >
                zur Registrierung
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
            password: '',
            email: '',
            showPassword: false
        }
    }
}

