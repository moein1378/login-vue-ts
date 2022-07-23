<template>
    <div>
        <h4>{{ state.count }} x 2 = {{ getters.times2 }}</h4>
        <button class="btn btn-success block m-2" @click="inc(1)">
            Inc
        </button>
        <button class="btn btn-primary block m-2" @click="dec(1)">
            Dec
        </button>
        <button class="btn btn-danger block m-2" @click="res(0)">
            Res
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import counterStore from '@/stores/counter'
export default defineComponent({
  setup() {
    const { state, getters, inc, dec, res } = counterStore
    return { state, getters, inc, dec, res }
  }
})
</script>
