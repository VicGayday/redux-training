import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'
import { addCashAction, getCashAction } from './store/cashReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cashReducer.cash)
  const customers = useSelector(state => state.customerReducer.customers)

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

    return (
      <div className="app">
        <div style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Баланс: {cash}
        </div>
        <div style={{ display: "flex" }}>
          <button type="button" onClick={() => addCash(+prompt())}>
            Пополнить счет
          </button>
          <button type="button" onClick={() => getCash(+prompt())}>
            Снять со счета
          </button>
          <button type="button" onClick={() => addCustomer(prompt())}>
            Добавить клиента
          </button>
          <button type="button" onClick={() => getCash(+prompt())}>
            Удалить клиента
          </button>
        </div>
        {customers.length > 0 ? (
          <div>
            <h3>Клиенты:</h3>
            {customers.map((customer) => (
              <div className="customer-list" key={customer.id} onClick={() => removeCustomer(customer)}>
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ fontSize: "1.2rem", marginTop: "20px" }}>
            Клиенты отсутствуют
          </div>
        )}
      </div>
    );
}

export default App;
