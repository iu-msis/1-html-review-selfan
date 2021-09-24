const Offer = {
    data(){
        return {
            result: {},
        }
    },
computed:{
    prettyBirthday() {
       return dayjs(this.result.dob.date)
        .format('D MMM YYYY')
    }
},
methods:{
    fetchUserData(){
       
            fetch('https://randomuser.me/api/')
            .then( response => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.result = responseJson.results[0]
            })
            .catch( err => {
                console.error(err);
            });
    }
},

created() {
    this.fetchUserData();
}
}
Vue.createApp(Offer).mount('#offerApp');