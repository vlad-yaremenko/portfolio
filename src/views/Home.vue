<template>
  <div class="page">
    <div class="intro">
      <h1 class="title"> &#60;Hello/&#62;</h1>

      <blockquote class="quote" cite="https://www.azquotes.com/quote/929526">
        <p>Codes are a puzzle. A game, just like any other game.</p>
        <footer>- Alan Turing</footer>
      </blockquote>
    </div>
  </div>
</template>

<styles lang="scss" scoped>
.page {
  padding: 0 $base-padding $base-padding $base-padding;
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: flex-start;
  background-image: url('/img/me.png');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 80% bottom;

  & > * {
    width: 50%;
  }
}

.intro {
  text-align: right;
}

.title {
  font-size: $home-title;
  margin: 0;
}

.quote {
  font-size: $home-quote;
  margin: 0;
}
</styles>
