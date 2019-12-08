import axios from "axios"

const firebaseClient = axios.create({
  baseURL: "https://europe-west1-com-jterrazz.cloudfunctions.net"
})

const firebaseApi = {
  postContactForm: async formData =>
    await firebaseClient.post("/contactFormSubmit", formData)
}

export default firebaseApi
