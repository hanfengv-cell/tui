<script setup lang="ts">
import type { ButtonProps } from './Button.type'
import { ref } from 'vue'
import FIcon from '@/components/icon/Icon.vue'
import DemoCard from '@/document/doc/DemoCard.vue'
import FButton from '.'

defineOptions({
  meta: {
    name: 'Button 按钮',
    desc: '按钮用于触发一个操作，如提交表单。',
    tag: '1基础组件',
  } as DemoMeta,
})
const disabled = ref(true)
const type = ref<ButtonProps['type']>('default')
</script>

<template>
  <DemoCard title="按钮类型">
    <FButton type="primary">提交</FButton>
    <FButton type="success">确认</FButton>
    <FButton type="danger">删除</FButton>
    <FButton type="warning">重置</FButton>
    <FButton type="default">默认</FButton>
    <FButton :type="type" @click="type = (type === 'danger' ? 'primary' : 'danger')">change</FButton>
  </DemoCard>

  <DemoCard title="朴素按钮 和 链接">
    <FButton plain type="primary">朴素按钮</FButton>
    <FButton link>链接1</FButton>
    <FButton link type="success">链接2</FButton>
  </DemoCard>

  <DemoCard title="圆角 square round circle">
    <FButton square type="primary">方形</FButton>
    <FButton round type="primary">圆角</FButton>
    <FButton circle icon="ep:search" type="primary">圆形</FButton>
  </DemoCard>

  <DemoCard title="按钮尺寸">
    <FButton size="large" type="primary">large</FButton>
    <FButton size="normal" type="primary">normal</FButton>
    <FButton size="small" type="primary">small</FButton>
    <FButton size="mini" type="primary">mini</FButton>
  </DemoCard>

  <DemoCard title="自定义颜色">
    <FButton color="#7232dd">单色按钮</FButton>
    <FButton color="#7232dd" plain>单色按钮</FButton>
  </DemoCard>

  <DemoCard title="块级元素">
    <FButton block type="primary" size="large">块级元素</FButton>
  </DemoCard>

  <DemoCard title="禁用按钮">
    <FButton disabled type="primary">主要按钮</FButton>
    <FButton :disabled="disabled" type="success">成功按钮</FButton>
    <FButton @click="disabled = !disabled">change</FButton>
  </DemoCard>

  <DemoCard title="是否显示为加载状态">
    <FButton loading type="primary">主要按钮</FButton>
  </DemoCard>

  <DemoCard title="左右图标">
    <FButton icon="ep:search" type="primary">搜索</FButton>
    <FButton icon="ep:edit" type="primary" icon-position="right">编辑</FButton>
    <FButton icon="ep:star" type="primary" icon-size="20" circle />
    <FButton type="primary">Icon组件 <FIcon name="ep:upload" /></FButton>
  </DemoCard>

  <DemoCard title="图标按钮 (宽高相等)">
    <FButton mono icon="ep:video-play" icon-size="24px" style="color: red;" />
    <FButton mono icon="ep:video-pause" icon-size="24px" />
  </DemoCard>

  <DemoCard title="事件">
    <FButton text="click" type="primary" @click="(event: MouseEvent) => console.log(event)" />
  </DemoCard>
</template>
