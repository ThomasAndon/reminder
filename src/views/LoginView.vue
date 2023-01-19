<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-content>
        <n-card>
          <n-tabs
            class="card-tabs"
            default-value="signin"
            size="large"
            animated
            style="margin: 0 -4px"
            pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
          >
            <n-tab-pane name="signin" tab="登录">
              <n-form>
                <n-form-item-row label="用户名">
                  <n-input class="inp"/>
                </n-form-item-row>
                <n-form-item-row label="密码">
                  <n-input class="inp"/>
                </n-form-item-row>
              </n-form>
              <n-button type="primary" block secondary strong>
                登录
              </n-button>
            </n-tab-pane>
            <n-tab-pane name="signup" tab="注册">
              <n-form>
                <n-form-item-row label="用户名">
                  <n-input/>
                </n-form-item-row>
                <n-form-item-row label="密码">
                  <n-input/>
                </n-form-item-row>
                <n-form-item-row label="重复密码">
                  <n-input/>
                </n-form-item-row>
              </n-form>
              <n-button type="primary" block secondary strong @click="pop">
                注册
              </n-button>
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </n-layout-content>
    </n-layout>

  </n-space>
</template>

<script setup>
import { useNotification } from 'naive-ui'

import { useRoute } from 'vue-router'

const note = useNotification()
const pop = () => {
  note.error({
    content: '禁止注册',
    meta: '联系Admin',
    duration: 2000,
    keepAliveOnHover: false
  })
}
const route = useRoute()
for (const key in route.query) {
  console.log(key, route.query[key])
}
</script>
<style>
.inp {
  /*--n-font-size: 16px!important;*/
}
</style>
