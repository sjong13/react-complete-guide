import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import {useState} from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const selectDateHandler = (year) => {
        setFilteredYear(year);
    }
    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSelectDate={selectDateHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );

}
export default Expenses;