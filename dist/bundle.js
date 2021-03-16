/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/BudgetController.js":
/*!********************************!*\
  !*** ./js/BudgetController.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ BudgetController\n/* harmony export */ });\nclass BudgetController {\r\n    constructor(id, description, value){\r\n        this.id = id;\r\n        this.description = description;\r\n        this.value = value;\r\n        this.percentage = -1;\r\n        this.data = {\r\n            allItems: {\r\n                exp: [],\r\n                inc: []\r\n            }, \r\n            totals: {\r\n                exp: 0,\r\n                inc: 0\r\n            },\r\n            budget: 0,\r\n            percentage: -1\r\n        };\r\n    };\r\n\r\n    calcPercentage(totalIncome, val, index){\r\n        if (totalIncome > 0){\r\n            this.data.allItems.exp[index].percentage = Math.round((val / totalIncome) * 100);\r\n        }else {\r\n            this.data.allItems.exp[index].percentage = -1;\r\n        }\r\n        \r\n    };\r\n\r\n    getPercentage(index) {\r\n        return this.data.allItems.exp[index].percentage;\r\n    };\r\n    \r\n    calculateTotal(type){\r\n        let sum = 0;\r\n        this.data.allItems[type].forEach(function(cur){\r\n            sum += cur.value\r\n        });\r\n\r\n        this.data.totals[type] = sum;\r\n    };\r\n\r\n    addItem(type, des, val){\r\n        let newItem, ID;\r\n        \r\n        if (this.data.allItems[type].length > 0){\r\n            ID = this.data.allItems[type][this.data.allItems[type].length - 1].id + 1;\r\n        } else {\r\n            ID = 0;\r\n        }\r\n        \r\n        newItem = {id: ID, description: des, value: val};\r\n        this.data.allItems[type].push(newItem);\r\n\r\n        return newItem;\r\n    }\r\n\r\n    deleteItem(type, id){\r\n        var ids, index;\r\n\r\n        //id = 3\r\n        ids = this.data.allItems[type].map(function(current){\r\n            return current.id;\r\n        });\r\n\r\n        index = ids.indexOf(id);\r\n\r\n        if (index !== -1) {\r\n            this.data.allItems[type].splice(index, 1);\r\n        }\r\n\r\n    }\r\n    \r\n    calculateBudget(){\r\n        \r\n        //calculate total income and expenses\r\n        this.calculateTotal('exp');\r\n        this.calculateTotal('inc');\r\n\r\n        // calculate the budget: income - expenses\r\n        this.data.budget = this.data.totals.inc - this.data.totals.exp\r\n\r\n            //calculate the percentage of income spent\r\n        if (this.data.totals.inc > 0){\r\n        this.data.percentage = Math.round((this.data.totals.exp / this.data.totals.inc) * 100);\r\n        }else{\r\n            this.data.percentage = -1;\r\n        }\r\n    }\r\n\r\n    calculatePercentages(){\r\n        for (let i = 0; i < this.data.allItems.exp.length; i++){\r\n            this.calcPercentage(this.data.totals.inc, parseInt(this.data.allItems.exp[i].value), i);\r\n        }\r\n    }\r\n\r\n    getPercentages(){\r\n        var allPer = this.data.allItems.exp.map((cur, i) => {\r\n            return this.getPercentage(i);\r\n        });\r\n        return allPer;\r\n    }\r\n\r\n    getBudget(){\r\n        return {\r\n            budget: this.data.budget,\r\n            totalInc: this.data.totals.inc,\r\n            totalExp: this.data.totals.exp,\r\n            percentage: this.data.percentage\r\n        }\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://budget-app/./js/BudgetController.js?");

/***/ }),

/***/ "./js/UIController.js":
/*!****************************!*\
  !*** ./js/UIController.js ***!
  \****************************/
/*! namespace exports */
/*! export addListItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! export changedType [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clearFields [provided] [no usage info] [missing usage info prevents renaming] */
/*! export deleteListItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! export displayBudget [provided] [no usage info] [missing usage info prevents renaming] */
/*! export displayMonth [provided] [no usage info] [missing usage info prevents renaming] */
/*! export displayPercentages [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getDOMstrings [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInput\": () => /* binding */ getInput,\n/* harmony export */   \"addListItem\": () => /* binding */ addListItem,\n/* harmony export */   \"deleteListItem\": () => /* binding */ deleteListItem,\n/* harmony export */   \"clearFields\": () => /* binding */ clearFields,\n/* harmony export */   \"displayBudget\": () => /* binding */ displayBudget,\n/* harmony export */   \"displayPercentages\": () => /* binding */ displayPercentages,\n/* harmony export */   \"displayMonth\": () => /* binding */ displayMonth,\n/* harmony export */   \"changedType\": () => /* binding */ changedType,\n/* harmony export */   \"getDOMstrings\": () => /* binding */ getDOMstrings\n/* harmony export */ });\nconst DOMstrings = {\r\n    inputType: '.add__type',\r\n    inputDescription: '.add__description',\r\n    inputValue: '.add__value',\r\n    inputBtn: '.add__btn', \r\n    incomeContainer: '.income__list',\r\n    expensesContainer: '.expenses__list',\r\n    budgetLabel: '.budget__value',\r\n    incomeLabel: '.budget__income--value',\r\n    expensesLabel: '.budget__expenses--value',\r\n    percentageLabel: '.budget__expenses--percentage',\r\n    container: '.container',\r\n    expensesPercentageLabel: '.item__percentage',\r\n    dateLabel: '.budget__title--month'\r\n\r\n};\r\n\r\nconst formatNumber = (num, type) => {\r\n    let numSplit, int, dec;\r\n    const plus = '+';\r\n    const minus = '-';\r\n    /*\r\n    + or - before number\r\n    exactly 2 decimal points\r\n    comma seperating thousands\r\n    */\r\n    num = Math.abs(num);\r\n    num = num.toFixed(2);\r\n\r\n    numSplit = num.split('.');\r\n\r\n    int = numSplit[0];\r\n    if (int.length > 3 && int.length < 7){\r\n        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);\r\n    } else if (int.length > 6){\r\n    int = int.substr(0, int.length - 6) + ',' + int.substr(int.length - 6, 3) + ',' + int.substr(int.length - 3, 3);}\r\n\r\n    dec = numSplit[1];\r\n\r\n    return (type === 'exp' ? minus: plus) + ' ' + int + '.' + dec;\r\n};\r\n\r\nconst nodeListForEach = (list, callback) => {\r\n    for (let i = 0; i < list.length; i++){\r\n        callback(list[i], i);\r\n    }\r\n};\r\n\r\nconst getInput = () => {\r\n    return{\r\n        type: document.querySelector(DOMstrings.inputType).value,\r\n        description: document.querySelector(DOMstrings.inputDescription).value,\r\n        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)\r\n    }\r\n}\r\n\r\nconst addListItem = (obj, type) => {\r\n    let html, newHtml, element;\r\n\r\n    //create html string with placeholder text\r\n    if (type === 'inc'){\r\n        element = DOMstrings.incomeContainer;\r\n\r\n        html = `<div class=\"item clearfix\" id=\"inc-${obj.id}\"><div class=\"item__description\">${obj.description}</div><div class=\"right clearfix\"><div class=\"item__value\">${formatNumber(obj.value, type)}</div><div class=\"item__delete\"><button class=\"item__delete--btn\">x</button></div></div></div>`;\r\n    } else if (type === 'exp'){\r\n        element = DOMstrings.expensesContainer;\r\n\r\n        html = `<div class=\"item clearfix\" id=\"exp-${obj.id}\"><div class=\"item__description\">${obj.description}</div><div class=\"right clearfix\"><div class=\"item__value\">${formatNumber(obj.value, type)}</div><div class=\"item__percentage\">21%</div><div class=\"item__delete\"><button class=\"item__delete--btn\">x</button></div></div></div>`;\r\n    }\r\n\r\n    //insert the HTML into the DOM\r\n    document.querySelector(element).insertAdjacentHTML('beforeend', html);\r\n}\r\n\r\nconst deleteListItem = (selectorID) => {\r\n    const el = document.getElementById(selectorID);\r\n    el.parentNode.removeChild(el);\r\n}\r\n\r\nconst clearFields = () => {\r\n    let fields, fieldsArr;\r\n\r\n    fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);\r\n\r\n    fieldsArr = Array.prototype.slice.call(fields);\r\n\r\n    fieldsArr.forEach(function(cur, i, arr){\r\n        cur.value = \"\";\r\n    });\r\n\r\n    fieldsArr[0].focus();\r\n}\r\n\r\nconst displayBudget = (obj) => {\r\n    let type;\r\n    obj.budget > 0 ? type = 'inc': type = 'exp';\r\n\r\n    document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);\r\n    document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');\r\n    document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');\r\n    \r\n\r\n    if (obj.percentage > 0){\r\n        document.querySelector(DOMstrings.percentageLabel).textContent = `${obj.percentage}%`;\r\n    }else{\r\n        document.querySelector(DOMstrings.percentageLabel).textContent = '---';\r\n    }\r\n}\r\n\r\nconst displayPercentages = (percentages) => {\r\n    \r\n    let fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);\r\n\r\n    nodeListForEach(fields, function(current, index) {\r\n\r\n        if (percentages[index] > 0){\r\n            current.textContent = `${percentages[index]}%`;\r\n        }else{\r\n            current.textContent = '---'\r\n        }\r\n    }); \r\n}\r\n\r\nconst displayMonth = () => {\r\n    let now, year, month, months;\r\n    now = new Date();\r\n\r\n    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\r\n    month = now.getMonth();\r\n\r\n    year = now.getFullYear();\r\n    document.querySelector(DOMstrings.dateLabel).textContent = `${months[month]} ${year}`;\r\n}\r\n\r\nconst changedType = () => {\r\n    let fields = document.querySelectorAll(\r\n        DOMstrings.inputType + ',' +\r\n        DOMstrings.inputDescription + ',' +\r\n        DOMstrings.inputValue\r\n    );\r\n\r\n    nodeListForEach(fields, function(cur){\r\n        cur.classList.toggle('red-focus');\r\n    });\r\n\r\n    document.querySelector(DOMstrings.inputBtn).classList.toggle('red');\r\n}\r\n\r\nconst getDOMstrings = () => {\r\n    return DOMstrings;\r\n}\n\n//# sourceURL=webpack://budget-app/./js/UIController.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BudgetController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BudgetController */ \"./js/BudgetController.js\");\n/* harmony import */ var _UIController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UIController */ \"./js/UIController.js\");\n\r\n\r\n\r\nconst budgetCtrl = new _BudgetController__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\nconst updateBudget = () => {\r\n    // calc budget\r\n    budgetCtrl.calculateBudget();\r\n\r\n    // return budget\r\n    const budget = budgetCtrl.getBudget();\r\n\r\n    // display the budget on the UI\r\n    _UIController__WEBPACK_IMPORTED_MODULE_1__.displayBudget(budget);\r\n\r\n};\r\n\r\nconst updatePercentages = function(){\r\n\r\n    //1. calculate the percentages\r\n    budgetCtrl.calculatePercentages();\r\n\r\n    //2. read from the budget controller\r\n    const percentages = budgetCtrl.getPercentages();\r\n\r\n    //3. update the UI with the new percentages\r\n    _UIController__WEBPACK_IMPORTED_MODULE_1__.displayPercentages(percentages);\r\n\r\n};\r\n\r\nconst ctrlAddItem = () => {\r\n    let input, newItem;\r\n    //1. Get the field input data\r\n    input = _UIController__WEBPACK_IMPORTED_MODULE_1__.getInput();\r\n\r\n    if (input.description !== \"\" && !isNaN(input.value) && input.value > 0){\r\n\r\n        //2. Add the item to the budget controller\r\n        newItem = budgetCtrl.addItem(input.type, input.description, input.value);\r\n\r\n        //3. Add the item to the UI\r\n        _UIController__WEBPACK_IMPORTED_MODULE_1__.addListItem(newItem, input.type);\r\n\r\n        //4. clear the fields\r\n        _UIController__WEBPACK_IMPORTED_MODULE_1__.clearFields();\r\n\r\n        //5. Calculate the budget and update budget\r\n        updateBudget();\r\n\r\n        //6. calculate and update the percentages\r\n        updatePercentages();\r\n    }\r\n};\r\n\r\nconst ctrlDeleteItem = (event) => {\r\n    let itemID, type, ID;\r\n\r\n    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;\r\n\r\n    if (itemID) {\r\n\r\n        //inc-1\r\n        const splitID = itemID.split('-');\r\n        type = splitID[0];\r\n        ID = parseInt(splitID[1]);\r\n\r\n        //delete the item from the data structure\r\n        budgetCtrl.deleteItem(type, ID);\r\n\r\n        //delete the item from the UI\r\n        _UIController__WEBPACK_IMPORTED_MODULE_1__.deleteListItem(itemID);\r\n\r\n        //update and display the budget\r\n        updateBudget();\r\n\r\n    }\r\n};\r\n\r\nconst setupEventListeners = () => {\r\n    let DOM = _UIController__WEBPACK_IMPORTED_MODULE_1__.getDOMstrings();\r\n\r\n    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);\r\n\r\n    document.addEventListener('keypress', function(event){\r\n        if (event.keycode === 13 || event.which === 13){\r\n            ctrlAddItem();\r\n        }\r\n    });\r\n\r\n    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);\r\n\r\n    document.querySelector(DOM.inputType).addEventListener('change', _UIController__WEBPACK_IMPORTED_MODULE_1__.changedType);\r\n};\r\n\r\nconst init = () => {\r\n    console.log('Application has started');\r\n    _UIController__WEBPACK_IMPORTED_MODULE_1__.displayMonth();\r\n    _UIController__WEBPACK_IMPORTED_MODULE_1__.displayBudget({\r\n        budget: 0,\r\n        totalInc: 0,\r\n        totalExp: 0,\r\n        percentage: -1\r\n    });\r\n    setupEventListeners();\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://budget-app/./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;