import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';
import PropTypes from 'prop-types';


const ProductForm = (props) => {

    const sentOrder = (event, title, price, currentSize, currentColor) => {
        event.preventDefault();
        console.log(`
          Your Order:
          Name: ${title}
          Price: ${props.price}
          Size: ${currentSize.name}
          Color: ${currentColor}
        `);
      };

    return (
        <div>
        <header>
            <h2 className={styles.name}>{props.title}</h2>
            <span className={styles.price}>Price: {props.price}$</span>
        </header>
        <form className={styles.buttonContainer} onSubmit={(event) => sentOrder(event, props.title, props.price, props.currentSize, props.currentColor)}>
                <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}  />
                <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
                <Button className={styles.button}>
                    <span className="fa fa-shopping-cart" />
                </Button>
        </form>
        </div>
    )
}

ProductForm.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.object.isRequired,
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
};

export default ProductForm