<template>
  <b-container v-if="event">
    <b-row>
      <b-col cols="12">
        <h2>{{event.name}}</h2>
      </b-col>
      <b-col v-for="(section, index) in event.sections" :key="index" :cols="section.columns">
        <h5>{{section.heading}}</h5>
        <b-col
          v-for="(paragraph, index) in section.content"
          :key="index"
          :cols="paragraph.columns"
          class="p-0"
        >
          <p v-if="paragraph.type === 'text'">{{paragraph.content}}</p>
        </b-col>
      </b-col>

      <b-col cols="12" class="mt-2">
        <b-button :to="{name: 'event.signup', params: {}}" variant="samu">Inschrijven</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      event: {
        name: "Introductieweek 2020",
        date: "29-08-2020",
        sections: [
          {
            columns: 12,
            content: [
              {
                columns: 12,
                type: "text",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo tellus, pharetra et enim vitae, consequat lobortis purus. Nulla non nisi bibendum, vehicula lacus suscipit, tempus felis. Fusce ultricies eu quam eu pellentesque. Donec commodo facilisis erat, vel sagittis lacus. Sed eget sem blandit, sagittis diam a, sollicitudin turpis. Sed et blandit nibh. Ut sollicitudin, neque posuere sodales pharetra, ante sem luctus quam, ac pulvinar ligula augue ac erat."
              }
            ]
          }
        ]
      }
    };
  }
};
</script>
<style scoped lang="scss">
#view {
  min-height: auto !important;
}
.col {
  padding: 0 !important;
}
</style>