/**
 * @param {*} root0 - root
 * @param {*} root0.$axios - axios
 * @param {*} root0.redirect - redirect function
 */
export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    if (error.response.status === 401) {
      redirect('/login')
    }
  })
}
