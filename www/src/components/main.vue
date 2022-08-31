<script setup>
import Character from './character.vue';
import Dao from './dao.vue';
import Skill from './skill.vue';
import Book from './book.vue';
import Material from './material.vue';
import Alchemy from './alchemy.vue';
import Talisman from './talisman.vue';
import Creature from './creature.vue';
import Clan from './clan.vue';
import Nation from './nation.vue';
import Location from './location.vue';
import Zone from './zone.vue';

</script>

<template>
  <div class="spacer">
    <h1>仙侠小说专有名词随机生成器</h1>
    <p class="text-dark text-opacity-50">版本号 0.1.18 最后更新于2022年8月31日</p>
    <a title="NPM" href="https://www.npmjs.com/package/random_chinese_fantasy_names" ><img src="https://img.shields.io/npm/v/random_chinese_fantasy_names" /></a>&nbsp;
    <a title="Github" href="https://github.com/hetu-script/random_chinese_fantasy_names" ><img src="https://img.shields.io/badge/github-repository-green" /></a>
    <div class="text-dark text-opacity-25 pt-1">
      <div>作者：阿莱四十二</div>
      <div>联系我：<a href="mailto:chengfubeiming@live.com">chengfubeiming@live.com</a></div>
    </div>
    <div class="container mt-2">
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
            >生灵</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link fs-5"
            data-mdb-toggle="tab"
            href="#ex3-tabs-6"
            role="tab"
            >材料</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link fs-5"
            data-mdb-toggle="tab"
            href="#ex3-tabs-7"
            role="tab"
            >丹药</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link fs-5"
            data-mdb-toggle="tab"
            href="#ex3-tabs-8"
            role="tab"
            >法宝</a
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
            >据点</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link fs-5"
            data-mdb-toggle="tab"
            href="#ex3-tabs-12"
            role="tab"
            >地域</a
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
          <Creature />
        </div>
        <div
          class="tab-pane fade"
          id="ex3-tabs-6"
          role="tabpanel"
          aria-labelledby="ex3-tab-6"
        >
          <Material />
        </div>
        <div
          class="tab-pane fade"
          id="ex3-tabs-7"
          role="tabpanel"
          aria-labelledby="ex3-tab-7"
        >
          <Alchemy />
        </div>
        <div
          class="tab-pane fade"
          id="ex3-tabs-8"
          role="tabpanel"
          aria-labelledby="ex3-tab-8"
        >
          <Talisman />
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
          <Zone />
        </div>
      </div>
      <!-- Tabs content -->

    </div>
  </div>
</template>

<style scoped>
a:link { 
  color:lightgray; 
}
.spacer {
  min-height: 60vh;
}
</style>