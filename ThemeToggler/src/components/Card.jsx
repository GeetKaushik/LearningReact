export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4">
        <img
          className="rounded-lg"
          src="https://images.pexels.com/photos/17802938/pexels-photo-17802938/free-photo-of-a-white-cat-sitting-on-top-of-a-book.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="product_image1"
        />
      </div>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            Professor Catnip
          </h5>
        </a>
      </div>
    </div>
  )
}
