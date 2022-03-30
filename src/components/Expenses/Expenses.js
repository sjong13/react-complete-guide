import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const selectDateHandler = (year) => {
        setFilteredYear(year);
    }
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSelectDate={selectDateHandler}/>
                {props.items.map(item => 
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount = {item.amount}
                    date={item.date}/>)}
            </Card>  
        </div>
        );

}
export default Expenses;