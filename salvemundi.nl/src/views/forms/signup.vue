<template>
  <b-container class="my-3">
    <b-row>
      <b-col cols="12">
        <b-container class="my-3">
          <b-alert show variant="danger">
            {{$t('problems')}}
            <a href="mailto:ict@salvemundi.nl" class="alert-link">ict@salvemundi.nl</a>.
          </b-alert>
        </b-container>
      </b-col>
      <b-col cols="12">
        <b-row v-if="form">
          <b-col cols="12" md="6">
            <h2>{{$t('header')}}</h2>
            <b-form @submit.prevent="submit">
              <b-form-group v-for="field in form.fields" :key="field.name" :label="field.label" :description="field.description">
                <b-form-input :type="field.type" :required="field.required" :pattern="field.pattern" v-model="field.value"></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="samu">{{$t('action')}}</b-button>
            </b-form>
          </b-col>
          <b-col cols="12" md="6">
            <img src="/introduction/69667110_1139358879598442_4109661709403160576_o.jpg" style="width: 100%;"/>
            <img src="/introduction/IMG_20190929_201157.jpg" style="width: 100%;"/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { EventService } from '../../openapi/api/event.service';
import openApiContainer from '../../openApiContainer';

@Component({})
export default class FormSignup extends Vue {
  private form: any = {};
  private formId: number = 0;
  private eventService: EventService = openApiContainer.get<EventService>('EventService');

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
        value: field.value,
      });
    });

    this.eventService.signup(this.formId, { fields });
    this.$router.push({ name: 'form.completed' });
  }
}
</script>
<style></style>

<i18n src="@/lang/forms/signup.json"></i18n>
