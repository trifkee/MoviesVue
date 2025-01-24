<script setup lang="ts"></script>

<template>
  <div class="single-movie skeleton">
    <div class="single-movie__info">
      <div class="heading">
        <div></div>
        <div></div>
      </div>

      <div class="additional-info">
        <div class="additional-info__info">
          <div></div>
          <div class="score"></div>
        </div>
        <div class="additional-info__genres">
          <div></div>
          <div></div>
        </div>
      </div>

      <div class="single-movie__desc"></div>
      <div class="single-movie__link"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  animation: skeletonPulse 1s both infinite;
  border-radius: 0.25rem;
  outline: 2px solid rgba(255, 255, 255, 0.1);
}

.single-movie:is(.skeleton) .single-movie {
  min-height: 50dvh;
  display: flex;

  &__info {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 3rem;
    outline: none;
    animation: none;

    .heading {
      outline: none;
      animation: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      & > *:first-child {
        height: 1.25rem;
        width: 20%;
      }
      & > *:last-child {
        height: 4rem;
        width: 60%;
      }
    }

    .additional-info {
      outline: none;
      animation: none;
      display: flex;
      gap: 2rem;

      & > * {
        outline: none;
        animation: none;
        .score {
          border-radius: 100%;
          min-width: 3rem;
          min-height: 3rem;
        }

        & > * {
          min-width: 8rem;
          min-height: 2rem;
        }
      }
    }

    & > * {
      min-height: 2rem;
    }
  }

  &__desc {
    min-height: 10rem;
  }

  &__link {
    width: 12rem;
    height: 4rem;
  }
}

@keyframes skeletonPulse {
  0% {
    background-color: rgb(110, 172, 218, 0.05);
  }
  50% {
    background-color: rgb(110, 172, 218, 0.1);
  }
  100% {
    background-color: rgb(110, 172, 218, 0.05);
  }
}
</style>
