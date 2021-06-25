<template>
  <div class="select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option.text;
          open = false;
          $emit('input', option.value);
        "
      >
        {{ option.text }}
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false,
      default: null
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      selected: this.default
        ? this.default.text
        : this.options.length > 0
          ? this.options[0].text
          : null,
      open: false
    }
  },
  mounted () {
    this.$emit('input', this.selected)
  }

})
</script>

<style lang="scss" scoped>

.select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 5rem;
  line-height: 5rem;
  border: 1px solid transparent;
}

.select .selected {
  background-color: rgba($color-white, 0.5);
  font-size: 1.5rem;
  border-radius: 2px;
  border: 1px solid transparent;
  color: inherit;
  padding-left: 2rem;
  cursor: pointer;
  user-select: none;
}

.select .selected.open {
  border: 1px solid $color-secondary-dark;
}

.select .selected:after {
  position: absolute;
  content: "";
  top: 2.5rem;
  right: 2rem;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: $color-secondary-dark transparent transparent transparent;
}

.select .items {
  overflow: hidden;
  position: absolute;
  background-color: $color-white;
  left: 0;
  right: 0;
  z-index: 1;
}

.select .items div {
  color: $color-black;
  font-size: 1.3rem;
  padding-left: 2rem;
  cursor: pointer;
  user-select: none;
  transition: all .2s;
}

.select .items div:hover {
  color: $color-white;
  background-color: $color-secondary-dark;
}

.selectHide {
  display: none;
}
</style>
