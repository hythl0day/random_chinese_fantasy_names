<script setup>
import Character from './components/character.vue';
import Dao from './components/dao.vue';
import Skill from './components/skill.vue';
import Book from './components/book.vue';
import Material from './components/material.vue';
import Talisman from './components/talisman.vue';
import Clan from './components/clan.vue';
import Nation from './components/nation.vue';
import Location from './components/location.vue';
import Continent from './components/continent.vue';

</script>

<template>
  <h1>仙侠小说专有名词随机生成器</h1>
  <p>版本号 0.1.12</p>
  <a title="NPM" href="https://www.npmjs.com/package/random_chinese_fantasy_names" ><img src="https://img.shields.io/npm/v/random_chinese_fantasy_names" /></a>&nbsp;
  <a title="Github" href="https://github.com/hetu-script/random_chinese_fantasy_names" ><img src="https://img.shields.io/badge/github-repository-green" /></a>
  <div class="text-dark text-opacity-25 pt-1">
    <div>作者：阿莱四十二</div>
    <div>联系我：<a href="mailto:chengfubeiming@live.com">chengfubeiming@live.com</a></div>
  </div>
  <div class="container col-xxl-6 mt-2">
    <!-- Tabs navs -->
    <ul class="nav nav-tabs nav-justified mb-2" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link fs-5 active"
          data-mdb-toggle="tab"
          href="#ex3-tabs-1"
          role="tab"
          >人名</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link fs-5"
          data-mdb-toggle="tab"
          href="#ex3-tabs-2"
          role="tab"
          >法号</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link fs-5"
          data-mdb-toggle="tab"
          href="#ex3-tabs-3"
          role="tab"
          >功法</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link fs-5"
          data-mdb-toggle="tab"
          href="#ex3-tabs-4"
          role="tab"
          >秘籍</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link fs-5"
          data-mdb-toggle="tab"
          href="#ex3-tabs-5"
          role="tab"
          >材料</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link fs-5"
          data-mdb-toggle="tab"
          href="#ex3-tabs-6"
          role="tab"
          >法宝</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link fs-5"
          data-mdb-toggle="tab"
          href="#ex3-tabs-7"
          role="tab"
          >异兽</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link fs-5"
          data-mdb-toggle="tab"
          href="#ex3-tabs-8"
          role="tab"
          >丹药</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link fs-5"
          data-mdb-toggle="tab"
          href="#ex3-tabs-9"
          role="tab"
          >门派</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link fs-5"
          data-mdb-toggle="tab"
          href="#ex3-tabs-10"
          role="tab"
          >国家</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link fs-5"
          data-mdb-toggle="tab"
          href="#ex3-tabs-11"
          role="tab"
          >地点</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link fs-5"
          data-mdb-toggle="tab"
          href="#ex3-tabs-12"
          role="tab"
          >大陆</a
        >
      </li>
    </ul>
    <!-- Tabs navs -->

    <!-- Tabs content -->
    <div class="tab-content" id="ex2-content">
      <div
        class="tab-pane fade show active"
        id="ex3-tabs-1"
        role="tabpanel"
        aria-labelledby="ex3-tab-1"
      >
        <Character />
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-2"
        role="tabpanel"
        aria-labelledby="ex3-tab-2"
      >
        <Dao />
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-3"
        role="tabpanel"
        aria-labelledby="ex3-tab-3"
      >
        <Skill />
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-4"
        role="tabpanel"
        aria-labelledby="ex3-tab-4"
      >
        <Book />
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-5"
        role="tabpanel"
        aria-labelledby="ex3-tab-5"
      >
        <Material />
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-6"
        role="tabpanel"
        aria-labelledby="ex3-tab-6"
      >
        <Talisman />
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-7"
        role="tabpanel"
        aria-labelledby="ex3-tab-7"
      >
        异兽
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-8"
        role="tabpanel"
        aria-labelledby="ex3-tab-8"
      >
        丹药
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-9"
        role="tabpanel"
        aria-labelledby="ex3-tab-9"
      >
        <Clan />
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-10"
        role="tabpanel"
        aria-labelledby="ex3-tab-10"
      >
        <Nation />
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-11"
        role="tabpanel"
        aria-labelledby="ex3-tab-11"
      >
        <Location />
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-12"
        role="tabpanel"
        aria-labelledby="ex3-tab-12"
      >
        <Continent />
      </div>
    </div>
    <!-- Tabs content -->

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a:link { 
color:lightgray; 
} 
</style>
