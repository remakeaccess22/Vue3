import AssignmentList from "./AssignmentList.js";
export default {
  components: { AssignmentList },

  template: `
  <section class="space-y-6">
    <assignment-list :assignments="filters.inProgress" title="In Progress Assignments"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed Assignments"></assignment-list>
  </section>
  `,

  data() {
    return {
      assignments: [
        { name: "Finish Project", completed: false },
        { name: "Review Code", completed: false },
        { name: "Write Tests", completed: false },
      ],
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.completed),
        completed: this.assignments.filter((a) => a.completed),
      };
    },
  },
};
