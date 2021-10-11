const SomeApp = {
    data(){
        return {
            "students": [],
            "selectedStudent": null,
            "offers": [],
            offerForm: {}
        }
    },
computed:{
    prettyBirthday() {
       return dayjs(this.result.dob.date)
        .format('D MMM YYYY')
    }
},
methods:{
    selectStudent(s) {
        if (this.selectedStudent == s) {
            return;
        }
        this.offers = [];
        this.selectedStudent= s;
        this.fetchOfferData(s);
    },

    fetchStudentData(){
       
            fetch('/api/student/')
            .then( response => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.students = responseJson;
            })
            .catch( err => {
                console.error(err);
            })
    }
,
fetchOfferData(s){
       
    fetch('/api/offer/index.php?student=' + s.id)
    .then( response => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        this.offers = responseJson;
    })
    .catch( err => {
        console.error(err);
    })
},
postNewOffer(evt) {
  this.offerForm.studentId = this.selectedStudent.id;        
  console.log("Posting!", this.offerForm);
  alert("Created!");

  fetch('api/offer/create.php', {
      method:'POST',
      body: JSON.stringify(this.offerForm),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
      // TODO: test a result was returned!
      this.offers = json;
      
      // reset the form
      this.offerForm = {};
    });
}
},
created() {
this.fetchStudentData();
}

}

Vue.createApp(SomeApp).mount('#offerApp');