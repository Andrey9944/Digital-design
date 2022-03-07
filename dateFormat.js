const btn = document.querySelector('#btn')
const input = document.querySelector('#inputDateFormat')
btn.addEventListener('click', () => {
    getDayInfo(input.value)
})
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function getDayInfo(date) {
    if (date === '') {
        alert ('Введите дату')
    } else if (isValid(date) === false) {
        alert('Введите дату в формате 01.01.2021')
        console.log(date)
    } else {
        let options = {
            era: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        let dateFormat = new Date(+date.slice(6,10), +date.slice(3,5)-1, +date.slice(0,3))
        let week = capitalizeFirstLetter((dateFormat.toLocaleString("ru", options)).split(',')[0]);
        let year = +date.slice(6,10)
        let month = capitalizeFirstLetter((dateFormat.toLocaleString("ru", options)).split(' ')[2]);
        let oneJan = new Date(dateFormat.getFullYear(),0,1);
        let numberOfDays = Math.floor((dateFormat - oneJan) / (24 * 60 * 60 * 1000));
        let prefixes = ['1', '2', '3', '4', '5'];
        let weekNum = prefixes[Math.floor(dateFormat.getDate() / 7)];
        let formatDate = `${week}, ${weekNum} неделя ${month} ${year} года`
        document.getElementById('format_date').innerHTML = formatDate
        input.value = ''
    }
}
function isValid(date) {
    return date[2] === '.' && date[5] === '.' && date.split('.')[2].length===4
}