<script setup lang="ts">
import DemoCard from '@/document/doc/DemoCard.vue'
import FBadge from '.'

defineOptions({
  meta: {
    name: 'Badge 徽标',
    desc: 'Badge 展示小红点或者数字',
    tag: '4展示组件',
  } as DemoMeta,
})
</script>

<template>
  <DemoCard title="基础用法">
    <div class="box">
      <FBadge dot />
    </div>
    <div class="box">
      <FBadge :content="0" show-zero />
    </div>
    <div class="box">
      <FBadge content="9" />
    </div>
    <div class="box">
      <FBadge content="100" />
    </div>
    <div class="box">
      <FBadge content="hot" />
    </div>
  </DemoCard>

  <DemoCard title="最大值">
    <div class="box">
      <FBadge :max="9" :content="10" />
    </div>
    <div class="box">
      <FBadge :content="100" />
    </div>
  </DemoCard>

  <DemoCard title="自定义颜色">
    <div class="box">
      <FBadge color="var(--f-blue)" dot />
    </div>
    <div class="box">
      <FBadge color="var(--f-blue)" :content="5" />
    </div>
  </DemoCard>

  <DemoCard title="自定义内容">
    <div class="box">
      <FBadge color="var(--f-success-color)">
        <f-icon name="ep:check" />
      </FBadge>
    </div>
    <div class="box">
      <FBadge><f-icon name="ep:close" /></FBadge>
    </div>
    <div class="box">
      <FBadge color="var(--f-primary-color)">
        <f-icon name="ep:download" />
      </FBadge>
    </div>
    <div class="box">
      <FBadge><f-icon name="ep:loading" style="font-size: 16px; padding: 3px;" /></FBadge>
    </div>
  </DemoCard>

  <DemoCard title="位置">
    <div class="box">
      <FBadge dot x="left" />
    </div>
    <div class="box">
      <FBadge dot />
    </div>
    <div>
      <div class="box" /><FBadge dot />
    </div>
    <div>
      <div class="box" /><FBadge dot x="left" />
    </div>
  </DemoCard>

  <DemoCard title="独立展示">
    <f-space>
      <FBadge inline dot />
      <FBadge inline :content="5" />
      <FBadge inline :content="10" />
      <FBadge inline :content="9" style="--f-badge-number-fontsize: 20px" />
    </f-space>
  </DemoCard>
</template>

<style scoped>
.box {
  background: var(--f-gray-light-2);
  border-radius: var(--f-bd-radius-base);
  width: 40px;
  height: 40px;
}
</style>
