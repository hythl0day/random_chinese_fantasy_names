<script setup>
import { ref } from "vue";
import { getName, sexValues as sexOptions, rarityColors } from "../../random_names";
import { numberValues as numberOptions } from '../shared/constants.js';

defineProps({

});

const styleOptions = [
  { text: '随机', value: null },
  { text: '一个实字', value: 'single' },
  { text: '两个实字', value: 'double' },
  { text: '虚字+实字', value: 'combine' },
];

const nameList = ref([]);
const number = ref(10);
const sex = ref(sexOptions[0])
const nameStyle = ref({})
const familyName = ref('')
const middleCharacter = ref('')

function generate() {
  let list = getName(
    number.value,
    {
      isFemale: sex.value.value,
      style: nameStyle.value.value,
      familyName: familyName.value,
      middleCharacter: middleCharacter.value,
    }
  )
  nameList.value.splice(0, nameList.value.length)
  for (let name of list) {
    nameList.value.push(name)
  }
}

</script>

<template>
  <div class="pt-3">
    <div class="row justify-content-center">
      <div class="col-4 text-end">
        <div class="btn-group mb-3 dropup">
          <button
            class="btn btn-info dropdown-toggle fixed-width120 text-start"
            type="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >数量：{{ number }}</button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li v-for="item of numberOptions">
              <a class="dropdown-item" @click="number = item">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-4">
        <div class="btn-group mb-3 dropup">
          <button
            class="btn btn-info dropdown-toggle fixed-width120 text-start"
            type="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >性别：{{ sex?.text ?? '随机' }}</button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li v-for="item of sexOptions">
              <a class="dropdown-item" @click="sex = item">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-4 text-start">
        <div class="btn-group mb-3 dropup">
          <button
            class="btn btn-info dropdown-toggle fixed-width140 text-start"
            type="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >样式：{{ nameStyle?.text ?? '随机' }}</button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li v-for="item of styleOptions">
              <a class="dropdown-item" @click="nameStyle = item">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-4">
        <div class="input-group mb-3">
          <span class="input-group-text">姓氏</span>
          <input type="text" class="form-control" v-model="familyName" />
        </div>
      </div>
      <div class="col-4">
        <div class="input-group mb-3">
          <span class="input-group-text">字辈</span>
          <input type="text" class="form-control" v-model="middleCharacter" />
        </div>
      </div>
    </div>
  </div>

  <div class="pt-3">
    <button
      data-mdb-ripple-color="primary"
      type="button"
      class="btn btn-success fs-6"
      @click="generate"
    >生成</button>
  </div>

  <div class="pt-3">
    <div v-for="item of nameList">
      <p :style="{ color: rarityColors.common }">{{ item }}</p>
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
