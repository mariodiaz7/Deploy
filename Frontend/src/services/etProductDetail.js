const BaseURL= import.meta.env.VITE_API_URL;

const getProductDetail = async (productId, jwt) => {
    try {
      if (!jwt) {
        throw new Error("No hay un token JWT válido");
      }
  
      const response = await fetch(`${BaseURL}/product/${productId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message || "Error desconocido al obtener detalles del producto";
      throw new Error(`Error al obtener detalles del producto: ${errorMessage}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getProductDetail:", error);
    throw error;
  }
};

export default getProductDetail;
