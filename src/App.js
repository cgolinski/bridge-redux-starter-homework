import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addProduct, removeProduct } from './actions';
import Chance from 'chance';
export const chance = Chance();

/* TODO: HOMEWORK!!!!!
 *
 * 1. Create the action to remove a product, and update the state to remove a product by id
 * 2. OPTIONAL: Create a more flexible product making form that will allow you to make a product with all field data, show this data too
 * 3. OPTIONAL: Create a filter search bar that allows you to shrink the list of products by whats typed!
 *            hint: it would help if you updated the global state with every keystroke!
  * */

const mapStateToProps = state => {
  return ({
    products: state.products,
    whoIsTheBest: 'Yihua',
    lowStockProducts: state.products.filter(prod => prod.stock && prod.stock < 4),
  });
};

const mapDispatchToProps = {
  add: addProduct,
  remove: removeProduct,
};

const Product = (props) => 
  <div>
    {props.name}
    <RemoveButton remove={props.remove} product={props.product} />
  </div>;

const DaBest = ({name}) => <h1>The Best: {name}</h1>;

const AdderButton = ({add}) =>
  <button onClick={ () =>
    add({
      id: chance.guid(),
      name: 'Sofa',
      department: 'Furniture',
      price: '300.00',
      stock: 5,
    })
  }>
    Add Sofa
  </button>;

const RemoveButton = ({remove, product}) =>
  <button onClick={() => remove(product)}>Remove</button>;

class App extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.add({
      id: chance.guid(),
      name: 'Table',
      department: 'Furniture',
      price: '300.00',
      stock: 5,
    });
  }

  render() {
    const { products, add, remove, whoIsTheBest } = this.props;
    // debugger;
    return (
      <div>
        <DaBest name={whoIsTheBest} />
        {products.map(product =>
          <Product
            name={product.name}
            key={product.id}
            product={product}
            remove={remove}
          />
        )}
        <AdderButton { ...this.props } />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
