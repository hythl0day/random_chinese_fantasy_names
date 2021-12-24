<script setup>
import { ref } from "vue";
import { getDao, daoTitles, sexValues, rarityColors } from "../../random_names";
import { numberValues } from '../shared/constants.js';

defineProps({
  
});

const numberOptions = ref(numberValues);

const sexOptions = ref(sexValues);

const titleOptions = ref(daoTitles);

const nameList = ref([]);
const number = ref(10);
const sex = ref(sexValues[0])
const title = ref('')
const firstCharacter = ref('')

function generate() {
  let list = getDao(
    number.value,
    sex.value.value,
    title.value,
    firstCharacter.value,
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
          <button class="btn btn-info dropdown-toggle fixed-width120 text-start" type="button" data-mdb-toggle="dropdown"
            aria-expanded="false">
            数量：{{ number }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li v-for="item of numberOptions">
              <a class="dropdown-item" @click="number = item">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-4">
        <div class="btn-group mb-3 dropup">
          <button class="btn btn-info dropdown-toggle fixed-width120 text-start" type="button" data-mdb-toggle="dropdown"
            aria-expanded="false">
            性别：{{ sex?.text ?? '随机' }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li v-for="item of sexOptions">
              <a class="dropdown-item" @click="sex = item">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-4 text-start">
        <div class="btn-group mb-3 dropup">
          <button class="btn btn-info dropdown-toggle fixed-width120 text-start" type="button" data-mdb-toggle="dropdown"
            aria-expanded="false">
            称号：{{ title == '' ? '随机' : title }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end force-scroll">
            <li v-for="item of titleOptions">
              <a class="dropdown-item" @click="title = item == '随机' ? '' : item">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-4">
        <div class="input-group mb-3">
          <span class="input-group-text">辈分</span>
          <input type="text" class="form-control" v-model="firstCharacter" />
        </div>
      </div>
    </div>
  </div>
  
  <div class="pt-3">
    <button data-mdb-ripple-color="primary" type="button" class="btn btn-success fs-6" @click="generate">生成</button>
  </div>

  <div class="pt-3">
    <div v-for="item of nameList">
      <p :style="{color: rarityColors[item.rarity]}">{{ item.name }}</p>
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
.force-scroll {
  overflow-y: scroll;
  height: 200px;
}
</style>
