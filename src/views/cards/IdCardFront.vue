<template>
    <div class="main-box">
        <div class="id-card-front">
            <div @click="copyText" class="authority">{{authority}}</div>
            <div @click="copyText" class="valid-time">{{validTime}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            authority:'宁夏吴忠市公安局利通区分局',
            validTime:'2022.02.08-2032.02.08'
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
    width: 400px;
    height:252px;
}
.id-card-front {
    position: relative;
    border-radius: 15px;
    border:1px solid rgb(189, 189, 189);
    background: url('../../assets/img/id_card_front_bg.jpg');
    width: 100%;
    height: 100%;
    background-size: 100%;
}
.id-card-front * {
    position: absolute;
    font-size:17px;
    font-family: 'FZHei-B01S';
    color: rgb(49, 45, 45);
    cursor: pointer;
}
.authority {
    left:40%;
    top:72%;
}
.valid-time {
    left:40%;
    top:86%;
}
</style>