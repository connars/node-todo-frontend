<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 class="form__title">
      registration

    </h3>
    <form action="">
      <input type="text" placeholder="name">
      <input type="password" placeholder="password">
      <button>send</button>
    </form>

    <div class="login__link-text">Have account? Login <span class="login__link">now</span></div>
  </div>

</template>

<style scoped>

  .form__title {
    text-align: center;
    margin-bottom: 30px;
    font-weight: 600;
  }
  .login__link-text {
    text-align: center;
    margin-top: 20px;
  }
  .login__link {
    color: #b7cf00;
    text-decoration: underline;
  }

  form {
      display: grid;
      justify-content: center;
      justify-items: center;

    }

    input {
      margin-bottom: 20px;
      height: 35px;
      width: 230px;

      padding: 20px;

      border-radius: 10px;
    }

    button {
      margin-top: 10px;
      width: 200px;
      height: 50px;
      color: white;
      background: #052941;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      transition: 0.5s;
    }

    button:hover {
      transform: scale(1.06);
      transition: 0.5s;
    }
</style>
