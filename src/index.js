module.exports = function toReadable (number) {
    let result = [];
    const unitsFromOneToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', '', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let trick = [...number + ""];

    if (number < 20){
        if(number == 10){
            return tens[1];
        } else if (number == 0){
            return "zero";
        }
        return unitsFromOneToNineteen[number];
    }

    if (number < 100 && number > 19){
        result.push(tens[Number(trick[0])]);
        if(trick[1] !== 0){
            result.push(unitsFromOneToNineteen[Number(trick[1])]);
        }
    }
    
    if (number > 99){
        result.push(unitsFromOneToNineteen[Number(trick[0])]);
        result.push("hundred");

        if (Number(trick[1]) !== 0 && Number(trick[1]) !== 1){
            result.push(tens[Number(trick[1])]);
            result.push(unitsFromOneToNineteen[Number(trick[2])]);
        } else if (Number(trick[1]) == 1 && Number(trick[2])!== 0){
            result.push(unitsFromOneToNineteen[Number(trick[1]+trick[2])]);
        } else if (Number(trick[2]) == 0){
            result.push(tens[Number(trick[1])]);
        } else if (Number(trick[1]) == 0){
            result.push(unitsFromOneToNineteen[Number(trick[2])]);
        }
    }
    
    return result.filter(elem => elem.length > 0).join(" ").trim();
}

// 1. < 20 +
// 2. > 20 && < 99 +
// 3. > 20 && < 99 +