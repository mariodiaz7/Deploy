import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProductDetail from '../../services/etProductDetail';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const productData = await getProductDetail(productId);
        console.log('Detalles del producto recibidos:', productData);
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [productId]);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (error) {
    return <p>Error al obtener detalles del producto: {error}</p>;
  }

  return (
    <div>
      <h1>{productDetail.title}</h1>
      <img src={productDetail.image} alt={productDetail.title} />
      <p>Precio: ${productDetail.price}</p>
      <p>Estado del producto: {productDetail.productState}</p>
      <p>Descripción: {productDetail.description}</p>
      <p>Contacto: {productDetail.contact}</p>
      {/* Otros detalles que quieras mostrar */}
    </div>
  );
}

export default ProductDetail;
