<template>
  <div class="main-box">
    <div class="id-card-back">
        <div @click="copyText" class="name">{{name}}</div>
        <div @click="copyText" class="sex">{{sex}}</div>
        <div @click="copyText" class="nation">{{nation}}</div>
        <div @click="copyText" class="year">{{year}}</div>
        <div @click="copyText" class="month">{{month}}</div>
        <div @click="copyText" class="day">{{day}}</div>
        <div @click="copyText" class="address">{{address}}</div>
        <div @click="copyText" class="number">{{number}}</div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:'马 龙',
            sex:'男',
            nation:'回',
            year:'2001',
            month:'10',
            day:'18',
            address:'宁夏吴忠市利通区扁担沟镇XXXXXXXXXX',
            number:'640302200110182736'
        }
    },
    methods: {
        copyText(event) {
            const textToCopy = event.target.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                console.log("Copied the text: " + textToCopy);
            }, () => {
                console.error("Failed to copy text");
            });
        }
    },
}
</script>

<style scoped>
.main-box {
    width: 800px;
    height:504px;
}
.id-card-back {
    position: relative;
    border-radius: 15px;
    border:1px solid rgb(189, 189, 189);
    background: url('../..//assets/img/id_card_back_bg.jpg');
    width: 100%;
    height: 100%;
    background-size: 100%;
}
.id-card-back * {
    position: absolute;
    font-size:18px;
    font-family: 'FZHei-B01S';
    color: rgb(49, 45, 45);
    cursor: pointer;
}
.name {
    left:20%;
    top:11.2%;
    font-size:20px;
}
.sex {
    left:20%;
    top:25%;
}
.nation {
    left:42%;
    top:25%;
}
.year {
    left:20%;
    top:37.5%;
}
.month {
    left:34%;
    top:37.5%;
}
.day {
    left:44%;
    top:37.5%;
}
.address {
    left:20%;
    top:50%;
    width: 40%;
    line-height: 1.6;
}
.number {
    top:83%;
    left:34%;
}
</style>