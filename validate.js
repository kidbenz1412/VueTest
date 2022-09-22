export default {
    data() {
      return {
        form: {
          username: "",
          password: "",
        }
      }
    },
    computed: {
      isValidatedForm() {
        return this.form.username != '' && this.form.password != '';
      },
    },
    methods: {
      onLogin(event) {
        event.preventDefault()
        //Call Api
      }
    }
  }