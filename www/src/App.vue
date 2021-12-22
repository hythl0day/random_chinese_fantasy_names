<script setup>
import Character from './components/character.vue';
import Dao from './components/dao.vue';
import Skill from './components/skill.vue';
import Book from './components/book.vue';
import Talisman from './components/talisman.vue';
</script>

<template>
  <h1>仙侠小说专有名词随机生成器</h1>
  <p class="pt-3">随机生成人物、功法、秘籍名字。</p>
  <p class="text-dark text-opacity-25">
    目前项目还未完工，预计还将加入材料、丹药、地名的随机生成。
  </p>
  <div class="container col-xl-4 col-lg-6">
    <!-- Tabs navs -->
    <ul class="nav nav-tabs nav-justified mb-3" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link active"
          data-mdb-toggle="tab"
          href="#ex3-tabs-1"
          role="tab"
          >人名</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          data-mdb-toggle="tab"
          href="#ex3-tabs-2"
          role="tab"
          >法号</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          data-mdb-toggle="tab"
          href="#ex3-tabs-3"
          role="tab"
          >功法</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          data-mdb-toggle="tab"
          href="#ex3-tabs-4"
          role="tab"
          >秘籍</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          data-mdb-toggle="tab"
          href="#ex3-tabs-5"
          role="tab"
          >法宝</a
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
        <Talisman />
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
</style>
