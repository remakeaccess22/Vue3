import Assignments from "./Assignments.js";
import Panel from "./Panel.js";
export default {
  components: {
    Assignments,
    Panel,
  },
  template: `
  <div class="grid gap-6">
    <assignments></assignments>
    <panel>
      <template #default>
        This is Default Content.
      </template>
    </panel>

    <panel>
      <template #heading>
        Hi there!
      </template>
      <template #default>
        This is Default Content.
      </template>
    </panel>

    <panel>
      <template #heading>
        Hi there!
      </template>
      <template #default>
        This is Default Content.
      </template>
      <template #footer>
        This is Footer Content.
      </template>
    </panel>

  </div>
  `,
};
