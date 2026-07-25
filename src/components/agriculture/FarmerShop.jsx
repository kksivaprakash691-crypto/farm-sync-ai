import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Search } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'
import { toast } from 'react-toastify'

function FarmerShop() {
  const [searchTerm, setSearchTerm] = useState('')
  const { addItem } = useCartStore()

  const products = [
    { id: 1, name: 'Tomatoes', price: 40, category: 'vegetables', emoji: '🍅' },
    { id: 2, name: 'Potatoes', price: 30, category: 'vegetables', emoji: '🥔' },
    { id: 3, name: 'Onions', price: 25, category: 'vegetables', emoji: '🧅' },
    { id: 4, name: 'Carrots', price: 35, category: 'vegetables', emoji: '🥕' },
    { id: 5, name: 'Wheat', price: 45, category: 'grains', emoji: '🌾' },
    { id: 6, name: 'Rice', price: 50, category: 'grains', emoji: '🍚' },
    { id: 7, name: 'Apples', price: 80, category: 'fruits', emoji: '🍎' },
    { id: 8, name: 'Bananas', price: 60, category: 'fruits', emoji: '🍌' },
  ]

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddToCart = (product) => {
    addItem(product)
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg p-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🛒 Farmer Shop - 550+ Products</h2>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-2 text-center">{product.emoji}</div>
            <h3 className="font-semibold text-gray-800 text-center">{product.name}</h3>
            <p className="text-sm text-gray-600 text-center mb-2">₹{product.price}/kg</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm transition-all"
            >
              <ShoppingCart size={16} />
              Add
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default FarmerShop
