<template>
  <div id="dynamic-component-demo">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <keep-alive>
      <component :is="currentTabComponent" class="tab"></component>
    </keep-alive>
  </div>
</template>

<script>
import TabPosts from "./TabePosts.vue";
import TabArchive from "./TabArchive.vue";

export default {
  components: {
    TabPosts,
    TabArchive,
  },
  data() {
    return {
      currentTab: "Posts",
      tabs: ["Posts", "Archive"],
    };
  },
  computed: {
    currentTabComponent() {
      return "tab-" + this.currentTab.toLowerCase();
    },
  },
};
</script>

<style scoped>
/* Your global styles here */
#dynamic-component-demo {
  position: absolute;
  left: 40%;
}
.tab-button {
  margin-right: 0px;
  background-color: #84ba85; /* Green */
  border: none;
  color: rgb(251, 254, 255);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.tab-button.active {
  margin-right: 0px;
  background-color: #2e6f2e; /* Green */
  border: none;
  color: rgb(255, 255, 255);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
</style>
