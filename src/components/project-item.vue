<template>
  <div class="wrapper">
    <div class="preview">
      <img :src="src" :alt="alt">
    </div>

    <div class="description">
      Project description
    </div>
  </div>
</template>

<script>
export default {
  name: 'project-item',
  props: ['src', 'alt'],
};
</script>

<style scoped lang="scss">
$ease-out-quint: cubic-bezier(0.230, 1.000, 0.320, 1.000);
$ease-in-quint: cubic-bezier(0.755, 0.050, 0.855, 0.060);

.wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .preview {
    width: 100%;
    height: 100%;

    animation: turn-on 2s linear;
    animation-fill-mode:forwards;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%;
      min-height: 100%;
    }
  }

  .description {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #eee;
    font-size: 26px;
    opacity: 0;
    visibility: hidden;
    transition: .3s $ease-in-quint;
    user-select: none;
  }

  &:hover {
    .preview {
      animation: turn-off 0.55s $ease-out-quint;
      animation-fill-mode: forwards;
    }

    .description {
      visibility: visible;
      opacity: 1;
    }
  }
}

@keyframes turn-off{
  0%{
    transform: scale(1,1.3) translate3d(0,0,0);
    filter: brightness(1);
    opacity: 1;
  }
  60%{
    transform: scale(1.3,0.001) translate3d(0,0,0);
    filter: brightness(10);
  }
  100%{
    animation-timing-function: $ease-in-quint;
    transform: scale(0.000,0.0001) translate3d(0,0,0);
    filter: brightness(50);
  }
}

@keyframes turn-on{
  0%{
    transform:scale(1,0.8) translate3d(0,0,0);
    filter:brightness(30);
    opacity:1;
  }
  3.5%{
    transform:scale(1,0.8) translate3d(0,100%,0);
  }
  3.6%{
    transform:scale(1,0.8) translate3d(0,-100%,0);
    opacity:1;
  }
  9%{
    transform:scale(1.3,0.6) translate3d(0,100%,0);
    filter:brightness(30);
    opacity:0;
  }
  11%{
    transform:scale(1,1) translate3d(0,0,0);
    filter:contrast(0) brightness(0);
    opacity:0;
  }
  100%{
    transform:scale(1,1) translate3d(0,0,0);
    filter:contrast(1) brightness(1.2) saturate(1.3);
    opacity:1;
  }
}
</style>

