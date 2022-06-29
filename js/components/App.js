import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: {Assignments, Panel},

     template: `
         <div class="grid gap-6">
            <assignments></assignments>

            <panel>
               default slot here?
            </panel>

            <panel>
               <template v-slot:heading>heading</template>
               default slot here?
            </panel>

            <panel theme="light">
               <template v-slot:heading>
                  Just a heading
               </template>
               Random Text for default

               <template v-slot:footer>
                  Just a footer
               </template>
            </panel>
         </div>
     `
};