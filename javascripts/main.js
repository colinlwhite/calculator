import {calculate} from './components/calculator.js';
import buttonEvents from './helpers/buttonEvents.js';

//(calculate(4, 2, 'multiply')); // 8 

//(calculate(4, 2, 'divide')); // 2 

(calculate(44, 2, 'add')); // 46 
sevenButtonEvent();
const initializeApp = () => {
        buttonEvents();
        //(calculate(4, 2, 'multiply')); // 8 
        //(calculate(4, 2, 'divide')); // 2 
        (calculate(44, 2, 'add')); // 46 
};

initializeApp();



