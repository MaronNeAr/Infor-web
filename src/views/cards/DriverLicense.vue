<template>
    <div class="main-box">
        <div class="id-card-front">
            <div @click="copyText" class="card-title">中华人民共和国机动车驾驶证</div>
            <div @click="copyText" class="card-title-en">Driving License of the People's Republic of China</div>
            <div @click="copyText" class="card-id">证号: {{cardId}}</div>
            <div @click="copyText" class="name">姓名: {{name}}</div>
            <div @click="copyText" class="sex">性别: {{sex}}</div>
            <div @click="copyText" class="nationality">国籍: {{nationality}}</div>
            <div @click="copyText" class="address">住址: {{address}}</div>
            <div class="bureau">
                {{ bureau }}
            </div>
            <div @click="copyText" class="birth">出生日期: {{birth}}</div>
            <div @click="copyText" class="issue-date">初次领证日期: {{issueDate}}</div>
            <div @click="copyText" class="car-class">准驾车型: {{carClass}}</div>
            <div @click="copyText" class="valid-period">有效期限: {{validPeriod}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cardId: '35010219810410191X',
            name: '马龙',
            sex: '男',
            nationality: '中国',
            address: '宁夏吴忠市利通区',
            bureau: '宁夏吴忠市公安局交通警察支队',
            birth: '2001-10-18',
            issueDate: '2021-6-20',
            carClass: 'C1',
            validPeriod: '2011-05-31 至 2021-05-31'
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
    background: url('../../assets/img/driver_license_bg.png');
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

.card-title {
    text-align: center;
    width: 100%;
    top: 2%;
    font-size: 20px;
}

.card-title-en {
    top:10%;
    text-align: center;
    width: 100%;
    font-size: 10px;
}

.card-id {
    top: 18%;
    left: 32%;
    line-height: 17px;
    color: #fff;
    background-color: #9e9e9e;
}

.name {
    top: 25%;
    left:10%;
}

.sex {
    top: 25%;
    left: 35%;
}

.nationality {
    top: 25%;
    left: 60%;
}

.address {
    top: 35%;
    left: 10%;
}

.bureau {
    top: 50%;
    left: 10%;
    width: 24%;
    border: 3px solid red;
    color: red;
    display: inline-block;
}

.birth {
    top: 50%;
    left: 35%;
}

.issue-date {
    top: 60%;
    left: 35%;
}

.car-class {
    top: 70%;
    left: 35%;
}

.valid-period {
    top: 84%;
    left: 10%;
}
</style>