<script setup>
import { ref } from "vue";
import { getCreature, creatureCategory, creatureCategoryNames, rarityLevels, rarityColors, rarityNames } from "../../random_names/src";
import { numberValues as numberOptions } from '../shared/constants.js';

defineProps({
  
});

const categoryOptions = [
  '随机',
  ...creatureCategory];

const rarityOptions = [
  '随机',
  ...rarityLevels];

const nameList = ref([]);
const number = ref(10);
const category = ref(null);
const rarity = ref(null);

function generate() {
  let list = getCreature(
    number.value,
    category.value,
    rarity.value,
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
            类别：{{ category == null ? '随机' : creatureCategoryNames[category] }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end force-scroll">
            <li v-for="item of categoryOptions">
              <a class="dropdown-item" @click="category = item == '随机' ? null : item">{{ item != '随机' ? creatureCategoryNames[item] : item }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-4 text-start">
        <div class="btn-group mb-3 dropup">
          <button class="btn btn-info dropdown-toggle fixed-width120 text-start" type="button" data-mdb-toggle="dropdown"
            aria-expanded="false">
            等级：{{ rarity == null ? '随机' : rarityNames[rarity] }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end force-scroll">
            <li v-for="item of rarityOptions">
              <a class="dropdown-item" @click="rarity = item == '随机' ? null : item" :style="{color: rarityColors[item]}">{{ item != '随机' ? rarityNames[item] : item }}</a>
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
