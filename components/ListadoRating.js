

import { Rating } from "@material-tailwind/react";

const ListadoRating = ({reviews}) => {


    return( <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Reseñas
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Conoce las reseñas de otros Usuarios
          </p>
        </div>
        <ul role="list" className="grid gap-x-3 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
          {reviews?.map((review) => (
            <li key={review.id}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFv_rUJ2Ru3GR0Jxy2YTNH_jrVzX3_HY-THQ&s"
                  className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                   <Rating value={review.rating} readonly />
                  <p className="text-sm/6 font-semibold text-indigo-600">{review.comment}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>)
}

export default ListadoRating;