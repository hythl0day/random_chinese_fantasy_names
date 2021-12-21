<script setup>
import { ref } from "vue";
import { getName } from "../modules/index.js"

defineProps({
  
});

const number = ref(10);
const sex = ref('random')
const nameStyle = ref('random')
const familyName = ref('')
const middleCharacter = ref('')
const lastCharacter = ref('')
const nameList = ref([]);

function generate() {
  let list = getName(
    number.value,
    sex.value == 'random' ? null : sex.value ? false : true,
    nameStyle.value,
    familyName.value,
    middleCharacter.value,
    lastCharacter.value,
  )
  nameList.value.splice(0, nameList.value.length)
  for (let name of list) {
    nameList.value.push(name)
  }
}

function checkStyle(style) {
  switch(style) {
    case 'random':
      return '随机'
    case 'single':
      return '一个实字'
    case 'combine':
      return '虚字+实字'
    case 'double':
      return '两个实字'
  }
}

</script>

<template>
  <div class="pt-5">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="btn-group mb-4 dropup">
          <button class="btn btn-info dropdown-toggle fixed-width120 text-start" type="button" data-mdb-toggle="dropdown"
            aria-expanded="false">
            数量：{{ number }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" @click="number = 10">10</a></li>
            <li><a class="dropdown-item" @click="number = 50">50</a></li>
            <li><a class="dropdown-item" @click="number = 100">100</a></li>
          </ul>
        </div>
      </div>
      <div class="col-4">
        <div class="btn-group mb-4 dropup">
          <button class="btn btn-info dropdown-toggle fixed-width120 text-start" type="button" data-mdb-toggle="dropdown"
            aria-expanded="false">
            性别：{{ sex == 'random' ? '随机' : sex ? '男' : '女' }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" @click="sex = 'random'">随机</a></li>
            <li><a class="dropdown-item" @click="sex = true">男</a></li>
            <li><a class="dropdown-item" @click="sex = false">女</a></li>
          </ul>
        </div>
      </div>
      <div class="col-4">
        <div class="btn-group mb-4 dropup">
          <button class="btn btn-info dropdown-toggle fixed-width140 text-start" type="button" data-mdb-toggle="dropdown"
            aria-expanded="false">
            样式：{{ checkStyle(nameStyle) }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" @click="nameStyle = 'random'">随机</a></li>
            <li><a class="dropdown-item" @click="nameStyle = 'single'">一个实字</a></li>
            <li><a class="dropdown-item" @click="nameStyle = 'combine'">虚字+实字</a></li>
            <li><a class="dropdown-item" @click="nameStyle = 'double'">两个实字</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-4">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">姓</span>
          <input type="text" class="form-control" aria-label="Username"
            aria-describedby="basic-addon1" v-model="familyName" />
        </div>
      </div>
      <div class="col-4">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">中间的字</span>
          <input type="text" class="form-control" aria-label="Username"
            aria-describedby="basic-addon1" v-model="middleCharacter" />
        </div>
      </div>
      <div class="col-4">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">最后的字</span>
          <input type="text" class="form-control" aria-label="Username"
            aria-describedby="basic-addon1" v-model="lastCharacter" />
        </div>
      </div>
    </div>
  </div>
  
  <div class="pt-5">
    <button data-mdb-ripple-color="primary" type="button" class="btn btn-info" @click="generate">生成</button>
  </div>

  <div class="pt-5">
    <div v-for="item of nameList">
      {{ item }}
    </div>
  </div>
</template>

<style scoped>
.fixed-width120 {
    width: 120px !important;
}
.fixed-width140 {
    width: 140px !important;
}
</style>
