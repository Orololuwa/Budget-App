export default class BudgetController {
    constructor(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
        this.data = {
            allItems: {
                exp: [],
                inc: []
            }, 
            totals: {
                exp: 0,
                inc: 0
            },
            budget: 0,
            percentage: -1
        };
    };

    calcPercentage(totalIncome, val, index){
        if (totalIncome > 0){
            this.data.allItems.exp[index].percentage = Math.round((val / totalIncome) * 100);
        }else {
            this.data.allItems.exp[index].percentage = -1;
        }
        
    };

    getPercentage(index) {
        return this.data.allItems.exp[index].percentage;
    };
    
    calculateTotal(type){
        let sum = 0;
        this.data.allItems[type].forEach(function(cur){
            sum += cur.value
        });

        this.data.totals[type] = sum;
    };

    addItem(type, des, val){
        let newItem, ID;
        
        if (this.data.allItems[type].length > 0){
            ID = this.data.allItems[type][this.data.allItems[type].length - 1].id + 1;
        } else {
            ID = 0;
        }
        
        newItem = {id: ID, description: des, value: val};
        this.data.allItems[type].push(newItem);

        return newItem;
    }

    deleteItem(type, id){
        var ids, index;

        //id = 3
        ids = this.data.allItems[type].map(function(current){
            return current.id;
        });

        index = ids.indexOf(id);

        if (index !== -1) {
            this.data.allItems[type].splice(index, 1);
        }

    }
    
    calculateBudget(){
        
        //calculate total income and expenses
        this.calculateTotal('exp');
        this.calculateTotal('inc');

        // calculate the budget: income - expenses
        this.data.budget = this.data.totals.inc - this.data.totals.exp

            //calculate the percentage of income spent
        if (this.data.totals.inc > 0){
        this.data.percentage = Math.round((this.data.totals.exp / this.data.totals.inc) * 100);
        }else{
            this.data.percentage = -1;
        }
    }

    calculatePercentages(){
        for (let i = 0; i < this.data.allItems.exp.length; i++){
            this.calcPercentage(this.data.totals.inc, parseInt(this.data.allItems.exp[i].value), i);
        }
    }

    getPercentages(){
        var allPer = this.data.allItems.exp.map((cur, i) => {
            return this.getPercentage(i);
        });
        return allPer;
    }

    getBudget(){
        return {
            budget: this.data.budget,
            totalInc: this.data.totals.inc,
            totalExp: this.data.totals.exp,
            percentage: this.data.percentage
        }
    }
    
}