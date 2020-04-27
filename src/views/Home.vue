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
        name: 'DINA',
        width: 1000,
        height: 625,
        id: 0,
        link: 'https://www.dina.de/',
        src: '/img/dina.jpg',
        description: 'WP based project with plain JS. The best part here was product presentation which was done from scratch (like Apple Mac Pro presentation)',
      }, {
        name: 'Visual noise',
        width: 990,
        height: 821,
        id: 1,
        src: 'https://raw.githubusercontent.com/vlad-yaremenko/visual-noise/master/preview.jpg',
        link: 'https://visual-noise.netlify.app/',
        githubLink: 'https://github.com/vlad-yaremenko/visual-noise',
        description: 'Experiments with audio visualization',
      }, {
        name: 'iExpert',
        width: 1000,
        height: 578,
        id: 3,
        src: '/img/iexpert.jpg',
        link: 'https://anchor-design.itwcp.com/spit/',
        description: 'Quite interesting project. 3D editor in the browser which supports two different modes 2D/3D and 2D mode has an ability to edit values which are connected with UI, a lot of different objects to configure, file I/O, communicate with API to create an order. Was done using Three.js and React.js',
      }, {
        name: 'BeetleReader',
        width: 1000,
        height: 627,
        id: 4,
        src: '/img/beetlereader.jpg',
        link: 'http://beetlereader.com/',
        description: 'ePUB reader in the browser. The interesting part was quite deep work with web workers to create an ability to upload pages in multiple threads. And work with calculations of the screen size and page content size to determine where a bookmark was set',
      }, {
        name: 'Oxyfi',
        width: 1000,
        height: 675,
        id: 5,
        src: '/img/oxyfi.jpg',
        link: 'https://oxyfi.com/en/',
        description: 'Internal app for cool real-time data visualization using MapBox and Vue.js. The best part was the connection of the data displayed on the map as a path and charts so on mouseover on one of it it should display the same data point based on the time (problem to solve was that it was needed to parse and prepare data for connection between each other on the front-end side cause it was multiple data providers)',
      }, {
        name: 'FoodDocs',
        width: 1000,
        height: 833,
        id: 6,
        src: '/img/FoodDocs.jpg',
        link: 'https://www.fooddocs.eu/',
        description: 'Web application using Vue.js and Laravel. It has a lot of different modules connected with each other.',
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
