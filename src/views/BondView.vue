<template>
  <div class="padding">
    <n-h1 style="text-align: center">在哪吃饭</n-h1>
    <n-h3 prefix="bar">这是什么？</n-h3>
    <n-p>在哪吃饭是一个网络程序，用于在每天指定的时间询问当晚是否在家吃饭，这样就不用每天都逐一询问了。</n-p>
    <n-h3 prefix="bar">这个程序能做什么？</n-h3>
    <n-p>目前能够每天询问是否在家吃饭，如果任何人的情况有修改，能够及时地推送到刘伯伯手机上，方便弄饭。</n-p>
    <n-h3 prefix="bar">这个程序是谁编写的？</n-h3>
    <n-p>童童。</n-p>
    <n-h3 prefix="bar">我要如何使用该程序？</n-h3>
    <n-p>现在，你需要绑定你的身份，然后，每天到固定的时间，程序会有指引，告诉你如何操作。</n-p>
    <n-p>现在你需要绑定你的身份。</n-p>
    <n-h2>我是：</n-h2>
    <n-space vertical justify="center">
      <n-select v-model:value="idenChoice" :options="idenOptions"></n-select>
      <n-button @click="submitBond">
        提交
      </n-button>
    </n-space>

  </div>
  <n-space justify="center">
    <!--    on the center-->

  </n-space>
</template>

<script setup>
import { ref } from 'vue'
import { useDialog, useMessage, useNotification } from 'naive-ui'

const idenChoice = ref(null)
const idenOptions = [
  {
    label: '妈妈',
    value: '妈妈'
  },
  {
    label: '爸爸',
    value: '爸爸'
  },
  {
    label: '童童',
    value: '童童'
  },
  {
    label: '刘伯伯',
    value: '刘伯伯'
  }
]

const dialog = useDialog()
const message = useMessage()
const notification = useNotification()
const submitBond = () => {
  console.log(idenChoice.value)
  if (idenChoice.value == null) {
    notification.warning({
      content: '提示',
      meta: '请先选择你的身份',
      duration: 3000
    })
    return
  }
  dialog.warning({
    title: '提示',
    content: `确定以"${idenChoice.value}"的身份登陆吗？`,
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      message.success('确定')
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onNegativeClick: () => {

    }
  })
}
</script>
<style>
.padding {
  padding-left: 17px;
  padding-right: 17px;
}
</style>
