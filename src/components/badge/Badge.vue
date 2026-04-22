<!-- component 组件 -->
<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { Props } from './Badge.type'
import { computed } from 'vue'
import { useBem } from '@/hooks'
import { isNumerLike } from '@/utils'

// 组件名称
const componentName = 'f-badge'
defineOptions({ name: componentName })

// 属性
const ps = withDefaults(defineProps<Props>(), {
  max: 99,
  showZero: false,
  x: 'right',
  inline: false,
})

// const slots = useSlots()
const slots = defineSlots<{ default?: () => any }>()
const isSlots = computed(() => slots.default)

const showContent = computed(() => {
  if (ps.dot)
    return false
  if (isSlots.value)
    return true
  if (ps.content === undefined)
    return false
  if ([0, '0'].includes(ps.content))
    return ps.showZero === true
  return ps.content !== undefined
})

const num = computed(() => {
  if (isNumerLike(ps.content)) {
    return +ps.content > ps.max ? `${ps.max}+` : ps.content
  }
  else {
    return ps.content
  }
})

const { bem } = useBem(componentName)
const bemRoot = bem({ b: '', m: 'x', is: 'inline' }, ps)
const bemNum = bem({ e: 'number', is: 'inline' }, ps)
const bemDot = bem({ e: 'dot', is: 'inline' }, ps)
const dotStyle = computed<CSSProperties>(() => ({ background: ps.color }))
const numStyle = computed<CSSProperties>(() => ({ background: ps.color }))
</script>

<template>
  <div :class="bemRoot">
    <span v-if="ps.dot" :class="bemDot" :style="dotStyle" />
    <span v-else-if="showContent" :class="[bemNum, { 'no-padding': isSlots }]" :style="numStyle">{{ num }}<slot />
    </span>
  </div>
</template>

<style lang="css">
@import './style.scss';
</style>
