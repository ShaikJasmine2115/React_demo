import ProductList from './components/ProductList';
import Header from './components/Header';

const App = () => {

  return (
    <>
      <Header />
      <div className='bg-gray-100 min-h-screen p-6'>
        <h1 className='text-2xl font-bold mb-6'>Product Catalog</h1>       
        <ProductList  />
      </div>
    </>
  )
}

export default App
