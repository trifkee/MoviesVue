<script setup lang="ts">
import { getMovieRatingColor } from "@/lib/helpers/getScoreColor";

defineProps({
  voteCount: Number,
});

function getScore(score: number) {
  // @ts-expect-error
  return score.toFixed(1) * 10;
}
</script>

<template>
  <div
    v-if="voteCount"
    class="score"
    :style="`
        --score-percentage:${getScore(voteCount ?? 0)}%;
        --border-clr:${getMovieRatingColor(voteCount ?? 0)}
       `"
    :data-score="voteCount?.toFixed(1)"
  ></div>
</template>

<style lang="scss" scoped>
.score {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 3rem;
  aspect-ratio: 1;
  box-shadow: 0 12px 150px -2px rgb(110, 172, 218, 0.35);

  background: red;
  font-weight: bold;
  background: conic-gradient(
    var(--border-clr) var(--score-percentage),
    #333 var(--score-percentage)
  );
  position: relative;
  overflow: hidden;

  &::after {
    content: attr(data-score);
    scale: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background: #333;
    border-radius: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
