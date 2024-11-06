
const emailList = document.querySelector('ul')
const reloadBtn = document.querySelector('button')


function fetchEmails(element, n = 10) {
    for (let i = 0; i < n; i++) {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                const email = res.data.response
                console.log(email)
                element.innerHTML += `<li>${email}</li>`
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

fetchEmails(emailList) 

reloadBtn.addEventListener('click', () => {
    emailList.innerHTML = ''
    fetchEmails(emailList)
})

