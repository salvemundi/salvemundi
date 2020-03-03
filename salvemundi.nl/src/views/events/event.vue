<template>
  <b-container v-if="event" class="my-3">
    <b-row>
      <b-col cols="12">
        <h2>{{ event.title }}</h2>
        <p>{{ event.description }}</p>
      </b-col>
      <b-col
        v-for="(section, index) in event.sections"
        :key="index"
        :cols="section.columns"
      >
        <h5>{{ section.heading }}</h5>
        <b-col
          v-for="(paragraph, index) in section.content"
          :key="index"
          :cols="paragraph.columns"
          class="p-0"
        >
          <p v-if="paragraph.type === 'text'">{{ paragraph.content }}</p>
        </b-col>
      </b-col>

      <b-col cols="12" class="mt-2">
        <b-button
          :to="{
            name: 'form.signup',
            params: {
              id: event.formId
            }
          }"
          variant="samu"
          v-if="event.hasSignupForm"
        >
          Inschrijven
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts" scoped>
import { EventService } from "../../openapi/api/event.service";
import openApiContainer from "../../openApiContainer";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class EventDetails extends Vue {
  private event: any = null;

  private eventService: EventService = openApiContainer.get<EventService>(
    "EventService"
  );

  private mounted() {
    this.eventService.getEvent(+this.$route.params.id).subscribe((res: any) => {
      this.event = res.data;
      this.event.sections = [
        {
          columns: 12,
          heading: "Globale informatie",
          content: [
            {
              columns: 12,
              type: "text",
              content:
                "De introductie is 5 dagen. De slaaplocatie is gemakkelijk te bereiken met het openbaar vervoer. Vanuit onze slaaplocatie worden tijdens de introductie touringcars ingezet om alle studenten bij de evenementen te krijgen. Slapen zal gebeuren in slaapzalen met stapelbedden. Naast het slapen is er een grote evenementenzaal met een bar waar zowel alcohol (18+) als frisdrank verkocht zal worden door middel van consumptiebonnen. De locatie zit bij een bosrand en een mooi open veld. Genoeg ruimte voor activiteiten dus."
            },
            {
              columns: 12,
              type: "text",
              content:
                "Vanaf 01-03-2020 gaan de onbetaalde inschrijvingen voor de introductie open. Dit betekent dat je je wel kan inschrijven om een plekje te reserveren, maar nog niet hoeft te betalen. Houd je mail goed in de gaten, vanaf 01-07-2020 kun je de betaling voltooien en jezelf officieel inschrijven bij de introductie. Het afgelopen jaar duurde het 25 dagen voordat de introductie volledig was uitverkocht, ben er dus op tijd bij!"
            }
          ]
        }
      ];
    });
  }
}
</script>
<style scoped lang="scss">
#view {
  min-height: auto !important;
}
.col {
  padding: 0 !important;
}
</style>
