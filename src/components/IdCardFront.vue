<template>
  <div class="main-box">
    <div class="id-card-front">
      <div class="authority">{{ authority }}</div>
      <div class="valid-time">{{ validTime }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "IdCardFront",
  data() {
    return {
      authority: "宁夏吴忠市公安局利通区分局",
      validTime: "2022.02.08-2032.02.08"
    };
  }
});
</script>

<style scoped>
.main-box {
  width: 500px;
  height: 315px;
}

.id-card-front {
  position: relative;
  border-radius: 15px;
  border: 1px solid rgb(189, 189, 189);
  background: url("@/assets/id_card_front_bg.jpg");
  width: 100%;
  height: 100%;
  background-size: 100%;
}

.id-card-front * {
  position: absolute;
  font-size: 14px;
  font-family: "FZHei-B01S";
  color: rgb(49, 45, 45);
}

.authority {
  left: 40%;
  top: 72%;
}

.valid-time {
  left: 40%;
  top: 86%;
}
</style>
