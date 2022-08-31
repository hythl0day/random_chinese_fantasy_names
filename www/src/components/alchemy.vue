<script setup>
import { ref } from "vue";
import { getAlchemy, alchemyKind, rarityColors } from "../../random_names/src";
import { numberValues as numberOptions, lengthValues as lengthOptions } from '../shared/constants.js';

defineProps({
  
});

const kindOptions = [
  '随机',
  ...alchemyKind,
];

const nameList = ref([]);
const number = ref(10);
const kind = ref(null);

function generate() {
  let list = getAlchemy(
    number.value,
    kind.value,
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
      <div class="col-4 text-start">
        <div class="btn-group mb-3 dropup">
          <button class="btn btn-info dropdown-toggle fixed-width120 text-start" type="button" data-mdb-toggle="dropdown"
            aria-expanded="false">
            类别：{{ kind ?? '随机' }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end force-scroll">
            <li v-for="item of kindOptions">
              <a class="dropdown-item" @click="kind = item == '随机' ? null : item">{{ item }}</a>
            </li>
          </ul>
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
