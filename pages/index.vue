<template>
  <div class="container">
    <div class="one"></div>
    <div class="two">
      <div></div>
      <form @submit.prevent>
        <p>{{ feedback }}</p>
        <input type="text" placeholder="Username" class="animated" />
        <input type="password" placeholder="Password" class="animated" />
        <input type="submit" value="Log In" class="animated" />
        <span>Forgot Password ?</span>
      </form>
      <p class="copy">&copy; Agusto & Co. {{ year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      feedback: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
.container {
  overflow: hidden;
  background-color: #041938;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  padding: 1.5em;
}

.one {
  flex: 1;
}

.two {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex: 1;
}

form {
  text-align: center;
  display: flex;
  flex-direction: column;
}

form p {
  color: #fff;
  font-size: 0.9em;
}

form span {
  text-align: right;
  margin-top: 10px;
  display: block;
  color: #fff;
  font-size: 0.6em;
  text-transform: uppercase;
}

input {
  background: #fff2;
  min-width: 20em;
  padding: 10px;
  padding-left: 2.5em;
  margin-top: 1.5vh;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #fff;
}

input[type="text"] {
  background: url(/images/user.png) no-repeat 4% 50% #fff2;
  background-size: auto 40%;
}

input[type="password"] {
  background: url(/images/lock.png) no-repeat 4% 50% #fff2;
  background-size: auto 40%;
}

input:focus {
  background: #fff;
  padding-left: 1em;
  color: #041938;
}

input[type="submit"] {
  background: #9c26b0;
  padding: 10px 0;
  color: #fff;
  cursor: pointer;
}

input:hover {
  opacity: 0.9;
}

.copy {
  color: #fff;
  font-size: 10px;
  align-self: flex-end;
  text-transform: uppercase;
}
</style>
