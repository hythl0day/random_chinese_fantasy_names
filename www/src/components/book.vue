<script setup>
import { ref } from "vue";
import { getBook, bookKind, bookPrefixes, bookPostfixes, rarityColors } from "../../random_names";
import { numberValues, lengthValues } from '../shared/constants.js';

defineProps({
  
});

const numberOptions = ref(numberValues);

const lengthOptions = ref(lengthValues);

const kindOptions = ref([
  '随机',
  ...bookKind,
]);

const prefixOptions = ref([
  '随机',
  ...bookPrefixes,
]);

const postfixOptions = ref([
  '随机',
  ...bookPostfixes,
]);

const nameList = ref([]);
const number = ref(10);
const length = ref(null);
const kind = ref(null);
const prefix = ref(null);
const postfix = ref(null);

function generate() {
  let list = getBook(
    number.value,
    length.value,
    prefix.value,
    kind.value,
    postfix.value,
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
            长度：{{ length ?? '随机' }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li v-for="item of lengthOptions">
              <a class="dropdown-item" @click="length = item == '随机' ? null : item">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-4 text-start">
        <div class="btn-group mb-3 dropup">
          <button class="btn btn-info dropdown-toggle fixed-width120 text-start" type="button" data-mdb-toggle="dropdown"
            aria-expanded="false">
            前缀：{{ prefix ?? '随机' }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end force-scroll">
            <li v-for="item of prefixOptions">
              <a class="dropdown-item" @click="prefix = item == '随机' ? null : item">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-4 text-end">
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
      <div class="col-4 text-start">
        <div class="btn-group mb-3 dropup">
          <button class="btn btn-info dropdown-toggle fixed-width120 text-start" type="button" data-mdb-toggle="dropdown"
            aria-expanded="false">
            后缀：{{ postfix ?? '随机' }}
          </button>
          <ul class="dropdown-menu dropdown-menu-end force-scroll">
            <li v-for="item of postfixOptions">
              <a class="dropdown-item" @click="postfix = item == '随机' ? null : item">{{ item }}</a>
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
    <div v-for="item of nameList"  >
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
