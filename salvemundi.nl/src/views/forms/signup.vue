import Vue from "vue"; import { Component } from "vue-property-decorator";

<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <h2>Inschrijven voor {{ form.name }}</h2>
        <p>{{ form.description }}</p>
        <b-row>
          <b-col cols="6">
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
  private formId: number = +this.$route.params.id;

  private eventService: EventService = openApiContainer.get<EventService>(
    "EventService"
  );

  private mounted() {
    this.eventService.getForm(this.formId).subscribe((res: any) => {
      this.form = res.data;
    });
  }

  private submit(e) {
    this.eventService.signup(this.formId, {});
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
