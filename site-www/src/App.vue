<script setup>
import Character from "./components/character.vue";

</script>

<template>
  <h1>仙侠小说专有名词随机生成器</h1>
  <p class="pt-5">
    随机生成人物、功法、秘籍名字。
  </p>
  <p class="text-dark text-opacity-25">
    目前项目还未完工，预计还将加入法宝、材料、丹药、地名、门派等名字的随机生成。
  </p>
  <div class="container col-lg-4 col-sm-8">
    <!-- Tabs navs -->
    <ul class="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link active"
          id="ex3-tab-1"
          data-mdb-toggle="tab"
          href="#ex3-tabs-1"
          role="tab"
          aria-controls="ex3-tabs-1"
          aria-selected="true"
          >人名</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="ex3-tab-2"
          data-mdb-toggle="tab"
          href="#ex3-tabs-2"
          role="tab"
          aria-controls="ex3-tabs-2"
          aria-selected="false"
          >法号</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="ex3-tab-3"
          data-mdb-toggle="tab"
          href="#ex3-tabs-3"
          role="tab"
          aria-controls="ex3-tabs-3"
          aria-selected="false"
          >功法</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link"
          id="ex3-tab-3"
          data-mdb-toggle="tab"
          href="#ex3-tabs-3"
          role="tab"
          aria-controls="ex3-tabs-3"
          aria-selected="false"
          >秘籍</a
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
        Tab 2 content
      </div>
      <div
        class="tab-pane fade"
        id="ex3-tabs-3"
        role="tabpanel"
        aria-labelledby="ex3-tab-3"
      >
        Tab 3 content
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
