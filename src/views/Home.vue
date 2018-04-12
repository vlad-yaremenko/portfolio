<template>
  <main>
    <project-filter class="filter"/>

    <waterfall :watch="items" :line-gap="500" :min-line-gap="200" :auto-resize="true">
      <waterfall-slot
        v-for="(item, index) in items"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="item.id"
        class="item"
      >
        <project-item :src="item.src"/>
      </waterfall-slot>
    </waterfall>
  </main>
</template>

<script>
import Waterfall from 'vue-waterfall/lib/waterfall.vue';
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot.vue';
import ProjectItem from '../components/project-item.vue';
import Filter from '../components/filter.vue';

const COMING_SOON_SRC = 'http://www.thelogomix.com/files/imagecache/v3-logo-detail/coming-01.jpg';

export default {
  name: 'home',
  components: {
    Waterfall,
    WaterfallSlot,
    ProjectItem,
    'project-filter': Filter,
  },
  data() {
    return {
      items: [{
        width: 400,
        height: 400,
        id: 0,
        src: COMING_SOON_SRC,
      }, {
        width: 800,
        height: 500,
        id: 1,
        src: 'https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2018/03/5ab0db412b6c5.png',
      }, {
        width: 400,
        height: 400,
        id: 2,
        src: COMING_SOON_SRC,
      }, {
        width: 417,
        height: 300,
        id: 3,
        src: 'https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2018/03/5a98c85b7e034.jpg',
      }, {
        width: 400,
        height: 299,
        id: 4,
        src: 'https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2018/03/5a9d114229471.jpg',
      }, {
        width: 400,
        height: 400,
        id: 5,
        src: COMING_SOON_SRC,
      }, {
        width: 400,
        height: 400,
        id: 6,
        src: COMING_SOON_SRC,
      }, {
        width: 400,
        height: 400,
        id: 7,
        src: COMING_SOON_SRC,
      }, {
        width: 400,
        height: 400,
        id: 8,
        src: COMING_SOON_SRC,
      }, {
        width: 400,
        height: 400,
        id: 9,
        src: COMING_SOON_SRC,
      }, {
        width: 400,
        height: 400,
        id: 10,
        src: COMING_SOON_SRC,
      }, {
        width: 400,
        height: 400,
        id: 11,
        src: COMING_SOON_SRC,
      }],
    };
  },
};
</script>

<style scoped lang="scss">
.filter {
  padding-top: 10px;
}

.item {
  padding: 10px;
}
</style>
