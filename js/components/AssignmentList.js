import Assignment from "./Assignment.js";
export default {
  components: { Assignment },
  template: `
    <section v-show="assignments.length" class="mb-8">
      <h2 class="font-bold text-2xl mb-4">
        {{ title }}
      </h2>
      <ul>
        <assignment
        v-for="assignment in assignments"
        :key="assignment.name"
        :assignment="assignment"
        ></assignment>
      </ul>
    </section>
  `,

  props: {
    assignments: Array,
    title: String,
  },
};
