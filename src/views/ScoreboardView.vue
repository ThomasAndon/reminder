<template>
  <div class="all">
    <div style="height: 20px"></div>
    <n-h1>
      <n-gradient-text>今日夜饭大看板</n-gradient-text>
    </n-h1>
    <div class="bigger-font-size">今天是 &nbsp;<n-time :time="today" type="date"></n-time>
    </div>

    <br>
    <div v-for="(eachStatus,i) in detail" :key="i">
      <n-card :class="getClass(eachStatus.statusCode)">
        <n-grid>
          <n-grid-item :span="4">
            <n-space vertical>
              <n-text class="in-title">{{ eachStatus.title }}</n-text>
            </n-space>
          </n-grid-item>
          <n-grid-item :span="20">
            <n-space vertical style="padding-left: 50%">
              <n-h3 class="in-status">{{ eachStatus.statusString }}</n-h3>
              <n-text>{{ eachStatus.statusTime }}</n-text>
            </n-space>
          </n-grid-item>
        </n-grid>
      </n-card>
      <br>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const today = new Date()
const getClass = (statusCode) => {
  switch (statusCode) {
    case 68:
      return 'bgc-home'
    case 58:
      return 'bgc-waiting'
    case 8:
      return 'bgc-out'
  }
}
const detail = ref(
  [
    {
      title: '妈妈',
      statusCode: 68,
      statusString: '在家吃饭',
      statusTime: '7分钟前 确认'
    },
    {
      title: '童童',
      statusCode: 58,
      statusString: '还没说',
      statusTime: '5分钟前 询问过'
    },
    {
      title: '爸爸',
      statusCode: 8,
      statusString: '在外吃饭',
      statusTime: '2小时前 确认'
    }

  ]
)
</script>

<style scoped lang="scss">
.all {
  /*  left pad*/
  padding-left: 10px;
  padding-right: 10px;
}

.in-title {
  font-size: 20px;
}

.bgc-waiting {
  background-color: rgba(230, 240, 247, 1);

  .in-status {
    color: rgba(93, 168, 248, 1);
  }
}

.bgc-home {
  background-color: rgba(240, 249, 243, 1);

  .in-status {
    color: rgba(88, 145, 85, 1);
  }
}

.bgc-out {
  background-color: #f1dfff;

  .in-status {
    color: #9d1aff;
  }
}

</style>
