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
                return false;
            }
        }
        alert('sign in failed');
        document.getElementsByTagName("form")[0].removeAttribute("action");
    }
    validate(userName, passWord, account);
})