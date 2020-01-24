<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <h2>Inschrijven voor {{ form.name}}</h2>
        <p>{{form.description}}</p>
        <b-row>
          <b-col cols="6">
            <b-form>
              <b-form-group
                v-for="(field) in form.fields"
                :key="field.name"
                :label="field.label"
                :description="field.description"
              >
                <b-form-input
                  :type="field.type"
                  :required="field.required"
                  :pattern="field.pattern"
                ></b-form-input>
              </b-form-group>
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
        description: "Je kan je hier inschrijven voor de introductieweek van Fontys Hogenscholen ICT",
        fields: [
          {
            name: "firstName",
            label: "Voornaam",
            placeholder: "",
            description: "je leuke voornam",
            type: "text",
            pattern: "[a-Z][A-Z]+",
            autocomplete: "",
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