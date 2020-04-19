<template>
  <main>
    <!-- <project-filter class="filter"/> -->

    <waterfall :watch="items" :line-gap="500" :min-line-gap="200" :auto-resize="true">
      <waterfall-slot
        v-for="(item, index) in items"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="item.id"
        class="item"
      >
        <project-item
          :src="item.src"
          :name="item.name"
          :desc="item.description"
          :link="item.link"
          :githubLink="item.githubLink"
        />
      </waterfall-slot>
    </waterfall>
  </main>
</template>

<script>
import Waterfall from 'vue-waterfall/lib/waterfall.vue';
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot.vue';
import ProjectItem from '../components/ProjectItem.vue';
import Filter from '../components/Filter.vue';

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
        name: '',
        width: 400,
        height: 400,
        id: 0,
        link: '',
        description: '',
      }, {
        name: 'Proje name',
        width: 800,
        height: 500,
        id: 1,
        src: 'https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2018/03/5ab0db412b6c5.png',
        link: 'https://visual-noise.netlify.app/',
        githubLink: 'https://github.com/vlad-yaremenko/noise',
        description: 'Some project description',
      }, {
        name: '',
        width: 400,
        height: 400,
        id: 2,
        link: '',
        description: '',
      }, {
        name: 'Proje name',
        width: 417,
        height: 300,
        id: 3,
        src: 'https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2018/03/5a98c85b7e034.jpg',
        link: '',
        description: 'Some project description',
      }, {
        name: 'Proje name',
        width: 400,
        height: 299,
        id: 4,
        src: 'https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2018/03/5a9d114229471.jpg',
        link: '',
        description: 'Some project description',
      }, {
        name: '',
        width: 400,
        height: 400,
        id: 5,
        link: '',
        description: '',
      }, {
        name: '',
        width: 400,
        height: 400,
        id: 6,
        link: '',
        description: '',
      }, {
        name: '',
        width: 400,
        height: 400,
        id: 7,
        link: '',
        description: '',
      }, {
        name: '',
        width: 400,
        height: 400,
        id: 8,
        link: '',
        description: '',
      }, {
        name: '',
        width: 400,
        height: 400,
        id: 9,
        link: '',
        description: '',
      }, {
        name: '',
        width: 400,
        height: 400,
        id: 10,
        link: '',
        description: '',
      }, {
        name: '',
        width: 400,
        height: 400,
        id: 11,
        link: '',
        description: '',
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
