<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <h2>Inschrijven voor {{ form.name}}</h2>
        <p>{{form.description}}</p>
        <b-row>
          <b-col cols="6">
            <b-form>
              <b-form-group v-for="(field) in form.fields" :key="field.name" :label="field.label">
                <b-form-input
                  :type="field.type"
                  :required="field.required"
                  :pattern="field.pattern"
                ></b-form-input>
              </b-form-group>

              <!-- <b-form-group label="Achternaam">
                <b-form-input v-model="signup.lastName" type="text" required></b-form-input>
              </b-form-group>
              <b-form-group label="Emailadres">
                <b-form-input v-model="signup.email" type="email" required></b-form-input>
              </b-form-group>
              <b-form-group
                label="Telefoonnummer"
                description="Je telefoonnummer zal uitsluitend gebruikt worden als we je moeten bereiken"
              >
                <b-form-input v-model="signup.phoneNumber" type="text" required></b-form-input>
              </b-form-group>
              <b-form-group label="Geboortedatum">
                <b-form-input v-model="signup.birthday" type="date" required></b-form-input>
              </b-form-group>
              <b-form-group label="Adres">
                <b-form-input v-model="signup.address" type="text" required></b-form-input>
              </b-form-group>
              <b-form-group label="Woonplaats">
                <b-form-input v-model="signup.city" type="text" required></b-form-input>
              </b-form-group>
              <b-form-group label="Postcode">
                <b-form-input v-model="signup.postalCode" type="text" required></b-form-input>
              </b-form-group>
              <b-form-group label="Geslacht">
                <b-form-input v-model="signup.gender" type="text" required></b-form-input>
              </b-form-group>
              <b-form-group label="Maat shirt">
                <b-form-input v-model="signup.shirtSize" type="text" required></b-form-input>
              </b-form-group>
              <b-form-group label="Allergieën">
                <b-form-input v-model="signup.allergies" type="text" required></b-form-input>
              </b-form-group>
              <b-form-group label="Medicatie">
                <b-form-input v-model="signup.medication" type="text" required></b-form-input>
              </b-form-group>
              <b-form-group label="Dieetwensen">
                <b-form-input v-model="signup.diet" type="text" required></b-form-input>
              </b-form-group>
              <b-form-group label="Opmerkingen">
                <b-form-input v-model="signup.remarks" type="text" required></b-form-input>
              </b-form-group>-->
              <b-button type="submit" variant="samu">Inschrijven</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SaMuInput from "@/components/basic/SaMuInput.vue";

export default {
  components: {
    SaMuInput
  },
  data() {
    return {
      form: {
        name: "Introductieweek 2020",
        description: "",
        fields: [
          {
            name: "",
            label: "",
            placeholder: "",
            description: "",
            type: "",
            pattern: "",
            required: true
          }
        ]
      },
      signup: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",

        address: "",
        city: "",
        postalCode: "",

        gender: "",
        shirtSize: "",

        diet: "",
        allergies: "",
        medication: "",

        extraRemarks: ""
      }
    };
  }
};
</script>
<style>
</style>