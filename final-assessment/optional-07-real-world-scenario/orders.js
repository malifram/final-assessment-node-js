// Fungsi untuk menghasilkan ID yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Array untuk menyimpan data orders
let orders = [];

// Fungsi untuk menambahkan order
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu', // Default status
  };
  orders.push(newOrder);
  return newOrder; // Return the newly created order
}

// Fungsi untuk memperbarui status order
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = status;
    return true; // Indicate success
  }
  return false; // Indicate failure (order not found)
}

// Fungsi untuk menghitung total pendapatan dari order yang selesai
function calculateTotalRevenue() {
  return orders.reduce((total, order) => {
    if (order.status === 'Selesai') {
      return total + order.totalPrice;
    }
    return total;
  }, 0);
}

// Fungsi untuk menghapus order
function deleteOrder(id) {
  const initialLength = orders.length;
  orders = orders.filter(order => order.id !== id);
  return orders.length < initialLength; // Return true if an order was deleted
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
