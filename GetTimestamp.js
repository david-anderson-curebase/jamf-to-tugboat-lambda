const getTimestamp = () => {
    let time = new Date;
    let date = String(time.getDate());
    let month = String(time.getMonth());
    function convertDigits(time) {
        (date.length > 1) ? date = `${date}` : date = `0${date}`;
        (month.length > 1) ? month = `${month}` : month = `0${month}`;
      }
    convertDigits();
    console.log(`${time.getFullYear()}-${month}-${date}`)
}

export { getTimestamp };