'use client'
// import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const products = [
  { id: 2, name: "Product 2", price: "$10.00", image: "/img2.JPEG", category: "Category A" },
  { id: 3, name: "Product 3", price: "$12.00", image: "/img3.JPEG", category: "Category B" },
  { id: 4, name: "Product 4", price: "$15.00", image: "/img4.JPEG", category: "Category C" },
  { id: 5, name: "Product 5", price: "$20.00", image: "/img5.JPEG", category: "Category A" },
  { id: 6, name: "Product 6", price: "$18.00", image: "/img6.JPEG", category: "Category B" },
  { id: 7, name: "Product 7", price: "$22.00", image: "/img7.JPEG", category: "Category C" },
  { id: 8, name: "Product 8", price: "$25.00", image: "/img8.JPEG", category: "Category A" },
  { id: 9, name: "Product 9", price: "$30.00", image: "/img9.JPEG", category: "Category B" },
  { id: 10, name: "Product 10", price: "$35.00", image: "/img10.JPEG", category: "Category C" },
  { id: 11, name: "Product 11", price: "$40.00", image: "/img11.JPEG", category: "Category A" },
  { id: 12, name: "Product 12", price: "$45.00", image: "/img12.JPEG", category: "Category B" },
  { id: 13, name: "Product 13", price: "$50.00", image: "/img13.JPEG", category: "Category C" },
  { id: 14, name: "Product 14", price: "$55.00", image: "/img14.JPEG", category: "Category A" },
  { id: 15, name: "Product 15", price: "$60.00", image: "/img15.JPEG", category: "Category B" },
  { id: 16, name: "Product 16", price: "$65.00", image: "/img16.JPEG", category: "Category C" },
  { id: 17, name: "Product 17", price: "$70.00", image: "/img17.JPEG", category: "Category A" },
  { id: 18, name: "Product 18", price: "$75.00", image: "/img18.JPEG", category: "Category B" },
  { id: 19, name: "Product 19", price: "$80.00", image: "/img19.JPEG", category: "Category C" },
  { id: 20, name: "Product 20", price: "$85.00", image: "/img20.JPEG", category: "Category A" },
  { id: 21, name: "Product 21", price: "$90.00", image: "/img21.JPEG", category: "Category B" },
];

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const showProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="py-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Products</h1>
      </section>

      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">


          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full group"
                onClick={() => showProductModal(product)}
              >
                {/* Image Container with hover effect */}
                <div className="relative rounded-2xl w-full h-64 sm:h-72 md:h-80 lg:h-96">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain rounded-4xl p-4 cursor-pointer group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    priority={product.id <= 4}
                  />
                </div>



                {/* Content Container */}
                <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">

                  {/* <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm sm:text-base font-semibold text-gray-900">{product.price}</span>
                    <button className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <ShoppingCart className="w-4 h-4 text-gray-700" />
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Modal */}
      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-2 overflow-y-auto">
          <div className="bg-white rounded-lg w-[90%] sm:w-full max-w-2xl relative shadow-xl mx-auto my-4 sm:my-8">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-4 -right-4 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-800 z-10 bg-white rounded-full p-2"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-8 p-4 sm:p-8">
              {/* Product Image */}
              <div className="w-full flex justify-center">
                <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px]">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="rounded-xl object-contain"
                    sizes="(min-width: 768px) 400px, 350px"
                    priority
                  />
                </div>
              </div>

              {/* Product Info */}
            </div>

          </div>
        </div>
      )}

    </main>
  );
}
