import BudgetController from './BudgetController';
import * as UICtrl from './UIController';

const budgetCtrl = new BudgetController();

const updateBudget = () => {
    // calc budget
    budgetCtrl.calculateBudget();

    // return budget
    const budget = budgetCtrl.getBudget();

    // display the budget on the UI
    UICtrl.displayBudget(budget);

};

const updatePercentages = function(){

    //1. calculate the percentages
    budgetCtrl.calculatePercentages();

    //2. read from the budget controller
    const percentages = budgetCtrl.getPercentages();

    //3. update the UI with the new percentages
    UICtrl.displayPercentages(percentages);

};

const ctrlAddItem = () => {
    let input, newItem;
    //1. Get the field input data
    input = UICtrl.getInput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0){

        //2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type);

        //4. clear the fields
        UICtrl.clearFields();

        //5. Calculate the budget and update budget
        updateBudget();

        //6. calculate and update the percentages
        updatePercentages();
    }
};

const ctrlDeleteItem = (event) => {
    let itemID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {

        //inc-1
        const splitID = itemID.split('-');
        type = splitID[0];
        ID = parseInt(splitID[1]);

        //delete the item from the data structure
        budgetCtrl.deleteItem(type, ID);

        //delete the item from the UI
        UICtrl.deleteListItem(itemID);

        //update and display the budget
        updateBudget();

    }
};

const setupEventListeners = () => {
    let DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if (event.keycode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
};

const init = () => {
    console.log('Application has started');
    UICtrl.displayMonth();
    UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
    });
    setupEventListeners();
}

init();