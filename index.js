const account = [
    {username: 'tondiki', password: 'tonn'},
    {username: 'johannes', password: 'joo'},
    {username: 'whisnu', password: 'nuu'},
    {username: 'tegar', password: 'garr'},
    {username: 'gilbert', password: 'bertt'},
    {username: 'admin123', password: 'admin123'},
];
const userName = document.getElementById('username');
const passWord = document.getElementById('password');
const subMit = document.getElementById('submit');
let temp = [];
subMit.addEventListener('click', () => {
    function validate(userName, passWord, account) {
        for (let i in account) {
            if (userName.value === account[i].username && passWord.value === account[i].password) {
                // alert('sign in succesfully');
                return false;
            }
        }
        alert('sign in failed');
        document.getElementsByTagName("form")[0].removeAttribute("action");
    }
    validate(userName, passWord, account);
})
const tes = document.getElementById('test');
// console.log(userName);
// console.log(passWord);
const listLagu = {
    moodCityPop: [
        {
            lagu: 'Plastic Love',
            artis: 'Mariya Takeuchi',
            link: 'https://open.spotify.com/track/7rU6Iebxzlvqy5t857bKFq?si=sBl0fcBnQzyIXd3HCtMeBA&utm_source=copy-link'
        },
        {
            lagu: 'Stay With Me',
            artis: 'Miki Matsubara',
            link: 'https://open.spotify.com/track/5DCLkzuWICNar6qn3B393f?si=7NZcubtFR9Shy2SlAAcx7g&utm_source=copy-link'
        },
    ]}
=======
const test = document.getElementById("test");
test.addEventListener("mousemove", () => {
  console.log(test.value);
});