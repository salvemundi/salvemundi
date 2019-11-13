<template>
  <b-container>
    <b-row>
      <b-col cols="7">
        <h2>ICT-commissie</h2>
        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum.</p>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
    <div class="committee-members">
      <b-row>
        <b-col>
          <a href="#">
            <committee-member-holder :member="test" />
          </a>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import CommitteeMemberHolder from "@/components/layout/committees/CommitteeMemberHolder.vue";

export default {
  components: {
    CommitteeMemberHolder
  },
  data() {
    return {
      test: {
        name: "Niek van Gogh",
        direction: "ICT & Software engineering",
        avatar: "LLUL"
      }
    };
  }
};
</script>
<style lang="scss">
</style>