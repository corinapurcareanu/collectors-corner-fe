
import {React} from 'react'
import './cart.css';
import ProductService from '../../_services/product.service';

function DeleteModal({closeModal, cart, setDeleteApproval}) {
    const productService = new ProductService();

    const handleDelete = async (id) => {
        const productService = new ProductService();
        try {
          await productService.deleteCartItem(id);
          setDeleteApproval(true);
        } catch (error) {
          console.error(error);
        }
      }

    return (
        <div className="modalContainer">
        <div className="titleCloseBtn">
            Are you sure you want to remove {cart.quantity} x {cart.product.productName} from cart ?
        </div>
        <div>
        <button className='no-btn-color'
            onClick={closeModal}
            >
            No, go back
            </button> &nbsp;
            <button className='yes-btn-color'
            onClick={() => {handleDelete(cart.id); closeModal()}}
            >
            Yes, remove!
            </button>
        </div>
        </div>
        
    );
}

export default DeleteModal;