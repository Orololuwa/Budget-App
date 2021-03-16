const DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn', 
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercentageLabel: '.item__percentage',
    dateLabel: '.budget__title--month'

};

const formatNumber = (num, type) => {
    let numSplit, int, dec;
    const plus = '+';
    const minus = '-';
    /*
    + or - before number
    exactly 2 decimal points
    comma seperating thousands
    */
    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');

    int = numSplit[0];
    if (int.length > 3 && int.length < 7){
        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    } else if (int.length > 6){
    int = int.substr(0, int.length - 6) + ',' + int.substr(int.length - 6, 3) + ',' + int.substr(int.length - 3, 3);}

    dec = numSplit[1];

    return (type === 'exp' ? minus: plus) + ' ' + int + '.' + dec;
};

const nodeListForEach = (list, callback) => {
    for (let i = 0; i < list.length; i++){
        callback(list[i], i);
    }
};

export const getInput = () => {
    return{
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
    }
}

export const addListItem = (obj, type) => {
    let html, newHtml, element;

    //create html string with placeholder text
    if (type === 'inc'){
        element = DOMstrings.incomeContainer;

        html = `<div class="item clearfix" id="inc-${obj.id}"><div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">${formatNumber(obj.value, type)}</div><div class="item__delete"><button class="item__delete--btn">x</button></div></div></div>`;
    } else if (type === 'exp'){
        element = DOMstrings.expensesContainer;

        html = `<div class="item clearfix" id="exp-${obj.id}"><div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">${formatNumber(obj.value, type)}</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn">x</button></div></div></div>`;
    }

    //insert the HTML into the DOM
    document.querySelector(element).insertAdjacentHTML('beforeend', html);
}

export const deleteListItem = (selectorID) => {
    const el = document.getElementById(selectorID);
    el.parentNode.removeChild(el);
}

export const clearFields = () => {
    let fields, fieldsArr;

    fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

    fieldsArr = Array.prototype.slice.call(fields);

    fieldsArr.forEach(function(cur, i, arr){
        cur.value = "";
    });

    fieldsArr[0].focus();
}

export const displayBudget = (obj) => {
    let type;
    obj.budget > 0 ? type = 'inc': type = 'exp';

    document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
    document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
    document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
    

    if (obj.percentage > 0){
        document.querySelector(DOMstrings.percentageLabel).textContent = `${obj.percentage}%`;
    }else{
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
    }
}

export const displayPercentages = (percentages) => {
    
    let fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);

    nodeListForEach(fields, function(current, index) {

        if (percentages[index] > 0){
            current.textContent = `${percentages[index]}%`;
        }else{
            current.textContent = '---'
        }
    }); 
}

export const displayMonth = () => {
    let now, year, month, months;
    now = new Date();

    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = now.getMonth();

    year = now.getFullYear();
    document.querySelector(DOMstrings.dateLabel).textContent = `${months[month]} ${year}`;
}

export const changedType = () => {
    let fields = document.querySelectorAll(
        DOMstrings.inputType + ',' +
        DOMstrings.inputDescription + ',' +
        DOMstrings.inputValue
    );

    nodeListForEach(fields, function(cur){
        cur.classList.toggle('red-focus');
    });

    document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
}

export const getDOMstrings = () => {
    return DOMstrings;
}