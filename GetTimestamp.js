const getTimestamp = () => {
    let time = new Date;
    let date = String(time.getDate());
    let month = String(time.getMonth());
    (date.length > 1) ? date = `${date}` : date = `0${date}`;
    (month.length > 1) ? month = `${month}` : month = `0${month}`;
    console.log(`${time.getFullYear()}-${month}-${date}`);
}

getTimestamp()

export { getTimestamp };