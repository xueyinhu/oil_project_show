<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="UserName:" prop="username">
      <el-input v-model="ruleForm.username" type="txt" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="PassWord:" prop="password">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="loginFn()">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import { reactive, toRefs } from 'vue'

  const state = reactive({
    ruleForm: {
      username: '',
      password: ''
    }
  })

  const rules = reactive({
    username: [{required: true, message: 'Please input User name', trigger: 'blur'}],
    password: []
  })

  const loginFn = () => {}

  const { ruleForm } = toRefs(state)
</script>

<style lang="less" scoped>
</style>

