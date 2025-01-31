<script setup lang="ts">
import ButtonAtom from "@/components/atoms/Button.atom.vue";
import { useGetUser } from "@/infrastructure/mutations/user/useUser";
import { useFetchRequestToken } from "@/infrastructure/queries/user/useUser";
import { createElementBlock, onMounted, reactive, watch } from "vue";

const credentials = reactive({
  email: "",
  password: "",
});

// WITH TOKEN AND REDIRECTS
// const { data: tempToken, refetch } = useFetchRequestToken();

// watch(
//   tempToken,
//   () => {
//     if (tempToken.value) {
//       const token = tempToken.value.request_token;
//       localStorage.setItem("temp_token", token);

//       const a = document.createElement("a");
//       a.setAttribute("target", "_blank");
//       a.setAttribute(
//         "href",
//         `https://www.themoviedb.org/authenticate/${token}?redirect_to=localhost:5173/login`
//       );
//       a.click();
//     }
//   },
//   { immediate: true }
// );
//
// onMounted(() => {
//   refetch();
//   console.log(tempToken.value);
// });

const { mutate: signIn } = useGetUser();

function handleLogin() {
  signIn(credentials);
}
</script>

<template>
  <div class="page">
    <div class="form">
      <div class="form__heading">
        <h1>Log in</h1>
        <p>Welcome back to Movies</p>
      </div>

      <form @submit.prevent="handleLogin" class="form__inputs">
        <article class="input">
          <label for="email">Email</label>
          <input
            v-model="credentials.email"
            type="email"
            placeholder="Email"
            required
          />
        </article>

        <article class="input">
          <label for="password">Password</label>
          <input
            v-model="credentials.password"
            type="password"
            placeholder="*******"
            required
          />
        </article>

        <ButtonAtom @click="handleLogin">Sign in</ButtonAtom>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
}

.form {
  width: 100%;
  max-width: 840px;
  flex-direction: column;
  gap: 4rem;
  background: rgb(0, 0, 0, 0.1);
  padding: 2rem;
  background-image: linear-gradient(45deg, #021526, rgb(10, 45, 77, 0.25));
  border-radius: 0.5rem;
  outline: 2px solid rgb(255, 255, 255, 0.1);
  box-shadow: 0 24px 80px -55px rgb(110, 172, 218, 0.35);

  &__heading {
    margin-bottom: 2rem;

    p {
      font-size: clamp(1.15rem, 4vw, 1.25rem);
      opacity: 0.5;
    }
  }

  &__inputs {
    display: flex;
    gap: 2rem;
    flex-direction: column;

    .input {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      & > label {
        font-size: clamp(1.15rem, 5vw, 1.25rem);
      }

      & > input {
        padding: 1rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        // height: 2rem;
        outline: 2px solid rgb(255, 255, 255, 0.1);
        border: 5px solid (255, 255, 255, 1);
        border-radius: 0.25rem;
        background: rgb(255, 255, 255, 0.05);
        color: white;
      }
    }

    .button {
      margin-top: 2rem;
      width: 100%;
      background: rgb(0, 83, 161);
    }
  }
}
</style>
