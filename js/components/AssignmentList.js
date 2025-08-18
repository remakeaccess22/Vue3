import Assignment from "./Assignment.js";
export default {
  components: { Assignment },
  template: `
    <section v-show="assignments.length" class="mb-8">
      <h2 class="font-bold text-xl mb-4">
        {{ title }}
      </h2>
      <ul class ="border border-gray-600 divide divide-y divide-gray-600">
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
