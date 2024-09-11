import React, { useState } from 'react';
import Header from '../dashboard/header';

const BasketBuilder = () => {
  const [products, setProducts] = useState([{ id: 1, allocation: '', product: '' }]);
  const [basketName, setBasketName] = useState('');
  const [baskets, setBaskets] = useState([]);
  const [allocationMessage, setAllocationMessage] = useState('');
  const [isBasketValid, setIsBasketValid] = useState(false);

  const handleAddProduct = () => {
    setProducts([...products, { id: products.length + 1, allocation: '', product: '' }]);
  };

  const handleRemoveProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    validateAllocation(updatedProducts);
  };

  const handleAllocationChange = (id, value) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, allocation: value } : product
    );
    setProducts(updatedProducts);
    validateAllocation(updatedProducts);
  };

  const handleSelectProduct = (id, value) => {
    setProducts(products.map((product) =>
      product.id === id ? { ...product, product: value } : product
    ));
  };

  const isProductDuplicate = (productId) => {
    return products.some((product) => product.product === productId);
  };

  const validateAllocation = (updatedProducts) => {
    const totalAllocation = updatedProducts.reduce(
      (sum, product) => sum + parseFloat(product.allocation || 0),
      0
    );

    if (totalAllocation > 100) {
      setAllocationMessage('Total allocation exceeds 100%!');
      setIsBasketValid(false);
    } else if (totalAllocation < 100) {
      setAllocationMessage('Total allocation must be exactly 100%!');
      setIsBasketValid(false);
    } else {
      setAllocationMessage('Success! Total allocation is 100%.');
      setIsBasketValid(true);
    }
  };

  const handleCreateBasket = () => {
    if (!isBasketValid || products.some((p) => !p.product || !p.allocation)) {
      return; // Prevent creating a basket if validation fails
    }

    const basket = { name: basketName, products };
    setBaskets([...baskets, basket]);

    // Reset form
    setBasketName('');
    setProducts([{ id: 1, allocation: '', product: '' }]);
    setIsBasketValid(false);
    setAllocationMessage('');
  };

  return (
    <><Header /><div className="min-h-screen bg-gray-100 p-8">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">Build Your Own Product Basket</h2>

              <div className="mb-4">
                  <label className="block text-gray-700">
                      Basket Name:
                      <input
                          type="text"
                          className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                          placeholder="Enter basket name"
                          value={basketName}
                          onChange={(e) => setBasketName(e.target.value)} />
                  </label>
              </div>

              {products.map((product, index) => (
                  <div key={product.id} className="flex items-center mb-4">
                      <span className="mr-4">{index + 1}.</span>
                      <select
                          value={product.product}
                          onChange={(e) => handleSelectProduct(product.id, e.target.value)}
                          className="mr-4 w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      >
                          <option value="">Select Product</option>
                          <option value="DWS Global High Yield Bond Fund" disabled={isProductDuplicate('DWS Global High Yield Bond Fund')}>DWS Global High Yield Bond Fund</option>
                          <option value="DWS Invest Global Focus" disabled={isProductDuplicate('DWS Invest Global Focus')}>DWS Invest Global Focus</option>
                          <option value="DWS Global Allocation Fund" disabled={isProductDuplicate('DWS Global Allocation Fund')}>DWS Global Allocation Fund</option>
                      </select>
                      <input
                          type="number"
                          placeholder="Allocation (%)"
                          value={product.allocation}
                          onChange={(e) => handleAllocationChange(product.id, e.target.value)}
                          className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                      <button
                          onClick={() => handleRemoveProduct(product.id)}
                          className="ml-4 text-red-500 hover:text-red-700"
                      >
                          &#10005;
                      </button>
                  </div>
              ))}

              {/* Allocation message */}
              {allocationMessage && (
                  <div className={`mt-2 text-sm font-medium ${allocationMessage.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
                      {allocationMessage}
                  </div>
              )}

              <button
                  onClick={handleAddProduct}
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                  + Add More Product
              </button>

              <div className="mt-6">
                  <button
                      onClick={handleCreateBasket}
                      disabled={!isBasketValid || !basketName || products.some((p) => !p.product || !p.allocation)}
                      className={`px-6 py-2 ${!isBasketValid || !basketName || products.some((p) => !p.product || !p.allocation)
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-green-600 hover:bg-green-700 text-white'} rounded-lg`}
                  >
                      Create Basket
                  </button>
              </div>
          </div>

          {/* My Baskets Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">My Baskets</h2>
              {baskets.length === 0 ? (
                  <p className="text-gray-600">No baskets created yet.</p>
              ) : (
                  <ul className="space-y-4">
                      {baskets.map((basket, index) => (
                          <li key={index} className="border-b pb-2">
                              <h3 className="text-lg font-bold">{basket.name}</h3>
                              <ul className="mt-2">
                                  {basket.products.map((product, idx) => (
                                      <li key={idx} className="text-gray-600">
                                          {product.product} - {product.allocation}%
                                      </li>
                                  ))}
                              </ul>
                          </li>
                      ))}
                  </ul>
              )}
          </div>
      </div></>
  );
};

export default BasketBuilder;
