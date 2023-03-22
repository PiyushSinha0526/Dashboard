import React from 'react'

function Users() {
  return (
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                username
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.users.map((user) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.name}
                </th>
                {user.purchasedProducts.map((pp) => (
                  <>
                    <td className="px-6 py-4">{pp.productName}</td>
                    <td className="px-6 py-4">{pp.category}</td>
                    <td className="px-6 py-4">{pp.price}</td>
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Users

const userData = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      purchasedProducts: [
        {
          productName: "iPhone 12",
          category: "Electronics",
          price: 999.99,
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      purchasedProducts: [
        {
          productName: "MacBook Pro",
          category: "Electronics",
          price: 1999.99,
        },
      ],
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      purchasedProducts: [
        {
          productName: "Nike Air Force 1",
          category: "Footwear",
          price: 99.99,
        },
      ],
    },
    {
      id: 4,
      name: "Alice Lee",
      email: "alice.lee@example.com",
      purchasedProducts: [
        {
          productName: "Sony PlayStation 5",
          category: "Electronics",
          price: 499.99,
        },
      ],
    },
    {
      id: 5,
      name: "Sam Kim",
      email: "sam.kim@example.com",
      purchasedProducts: [
        {
          productName: "Nintendo Switch",
          category: "Electronics",
          price: 299.99,
        },
      ],
    },
    {
      id: 6,
      name: "Jenny Lee",
      email: "jenny.lee@example.com",
      purchasedProducts: [
        {
          productName: "Samsung Galaxy S21",
          category: "Electronics",
          price: 799.99,
        },
      ],
    },
    {
      id: 7,
      name: "Tom Smith",
      email: "tom.smith@example.com",
      purchasedProducts: [
        {
          productName: "Amazon Echo Dot",
          category: "Electronics",
          price: 49.99,
        },
      ],
    },
    {
      id: 8,
      name: "Sara Park",
      email: "sara.park@example.com",
      purchasedProducts: [
        {
          productName: "Fitbit Versa 3",
          category: "Electronics",
          price: 229.99,
        },
      ],
    },
    {
      id: 9,
      name: "Chris Lee",
      email: "chris.lee@example.com",
      purchasedProducts: [
        {
          productName: "Bose QuietComfort 35 II",
          category: "Electronics",
          price: 299.99,
        },
      ],
    },
    {
      id: 10,
      name: "Mary Johnson",
      email: "mary.johnson@example.com",
      purchasedProducts: [
        {
          productName: "Apple Watch Series 6",
          category: "Electronics",
          price: 399.99,
        },
      ],
    },
  ],
};