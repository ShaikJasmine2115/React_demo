import ProductList from './components/ProductList';

const App = () => {

  return (
    <>
      <div className='bg-gray-100 min-h-screen p-6'>
        <h1 className='text-2xl font-bold mb-6'>Product Catalog</h1>       
        <ProductList  />
      </div>
    </>
  )
}

export default App
