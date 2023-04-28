<template>
  <div class="banner1">
    <div class="certificate">

      <div class="certificate-icon">
        <img src="./1.png" alt="Certificate Icon" />
      </div>
      <div class="certificate-title" style="display: flex;">
        <div class="certificate-title-1" style="font-size: 80px;z-index:1 !important;">证书</div>
        <div class="certificate-title-2" style="font-size: 80px;z-index:3 !important;">管理</div>
      </div>
    </div>
    <div class="purple-circle"></div>
    <div class="top-right-element yellow-glass"></div>
  </div>
</template>
<style>
  .banner1 {
    top: -60px;
    position: relative;
    width: 100%;
    height: 350px;
    background: linear-gradient(to bottom, rgb(91, 173, 235), rgba(35, 165, 213, 0) 99%, rgba(35, 165, 213, 0));
    /*animation: Gradient 20s ease infinite;*/
    /*background-size: 400% 400%;*/
    color: #fff;
    overflow: hidden;
  }

  @keyframes Gradient {
    0% {
      background-position: 0 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0 50%;
    }
  }

  .certificate {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }

  .certificate-image {
    position: relative;
    z-index: 1;
    margin-right: -100px;
  }

  .certificate-image img {
    width: 300px;
    height: auto;
  }

  .certificate-icon {
    position: relative;
    z-index: 2;
    margin-left: -100px;
  }

  .certificate-icon img {
    width: 400px;
    height: auto;
  }

  .certificate-title {
    position: relative;

    margin-left: -100px;
  }

  .certificate-title-1 {
    margin-bottom: -10px;

  }

  .purple-circle {
    position: absolute;
    bottom: -200px;
    left: -100px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: #79c0e3;
    opacity: 0.3;
    background-image: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%);
    z-index: 0;
    filter: blur(10px);

  }



  .yellow-glass {
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    opacity: 0.2;
    background-color: #cefafa;
    border-radius: 50%;
    z-index: 0;
    background-image: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%);
    filter: blur(10px);
  }
</style>