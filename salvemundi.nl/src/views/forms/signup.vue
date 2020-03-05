import Vue from "vue"; import { Component } from "vue-property-decorator";

<template>
  <b-container class="my-3">
    <b-row>
      <b-col cols="12">
        <b-container class="my-3">
          <b-alert show variant="danger"
            >Heb je problemen met het formulier?! Stuur dan een mailtje naar
            <a href="mailto:ict@salvemundi.nl" class="alert-link"
              >ict@salvemundi.nl</a
            >.</b-alert
          >
        </b-container>
      </b-col>
      <b-col cols="12">
        <b-row v-if="form">
          <b-col cols="6">
            <h2>Inschrijven voor FHICT Introductie 2020</h2>
            <b-form @submit.prevent="submit">
              <b-form-group
                v-for="field in form.fields"
                :key="field.name"
                :label="field.label"
                :description="field.description"
              >
                <b-form-input
                  :type="field.type"
                  :required="field.required"
                  :pattern="field.pattern"
                  v-model="field.value"
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
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventService } from "../../openapi/api/event.service";
import openApiContainer from "../../openApiContainer";

@Component({})
export default class FormSignup extends Vue {
  private form: any = {};
  private formId: number = 0;

  private eventService: EventService = openApiContainer.get<EventService>(
    "EventService"
  );

  private mounted() {
    this.formId = +this.$route.params.id;

    this.eventService.getForm(this.formId).subscribe((res: any) => {
      this.form = res;
    });
  }

  private submit(e: any) {
    const fields: any[] = [];
    this.form.fields.forEach((field: any) => {
      fields.push({
        name: field.name,
        value: field.value
      });
    });

    this.eventService.signup(this.formId, { fields });
    this.$router.push({ name: "form.completed" });
  }
}

// import SaMuInput from "@/components/basic/SaMuInput.vue";

// export default {
//   components: {
//     SaMuInput
//   },
//   data() {
//     return {
//       form: {
//         name: "Introductieweek 2020",
//         description:
//           "Je kan je hier inschrijven voor de introductieweek van Fontys Hogenscholen ICT",
//         fields: [
//           {
//             name: "firstName",
//             label: "Voornaam",
//             placeholder: "",
//             description: "je leuke voornam",
//             type: "text",
//             pattern: "[a-Z][A-Z]+",
//             autocomplete: "",
//             required: true
//           }
//         ]
//       },
//       signup: {
//         firstName: "",
//         lastName: "",
//         email: "",
//         phoneNumber: "",

//         address: "",
//         city: "",
//         postalCode: "",

//         gender: "",
//         shirtSize: "",

//         diet: "",
//         allergies: "",
//         medication: "",

//         extraRemarks: ""
//       }
//     };
//   }
// };
</script>
<style></style>
