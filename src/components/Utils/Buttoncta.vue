<template>
  <el-button color="#275AD8" style="color: white" round>
    {{ nom }}
    <el-icon class="el-icon--right">
      <ArrowRight />
    </el-icon>
  </el-button>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";

import { defineProps, withDefaults, defineExpose } from "vue";

interface Props {
  nom?: string;
}
withDefaults(defineProps<Props>(), {
  nom: "ahah",
});

const shout = () => {
  // alert('bouh')
};
defineExpose({ shout });

// import { defineProps, toRefs } from 'vue';
// const props = defineProps({
//     nom: {
//         type: String,
//         required: true,
//     }
// })
// const { nom } = toRefs(props)

// import { toRefs } from 'vue';

//REQUIRE TRUE
// interface Props {
//     nom: string;
// age: Number;
// }
// const props = definePropss<Props>();

//REQUIRE FALSE
// import { toRefs } from 'vue';

// interface Props {
//     nom?: string
// }
// const props = defineProps<Props>();

//VALEUR PAR DEFAULT
// import { toRefs } from 'vue';

// interface Props {
//     nom?: string
// }
// const props = withDefaults(defineComponents<Props>(), {
//     nom: 'Default value'
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
