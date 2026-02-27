import { useState } from "react";
import { postReview } from "../api/api";

export default function RestaurantRating({ local , setIsPosted }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const labels = {
    1: "Muy malo",
    2: "Malo",
    3: "Regular",
    4: "Bueno",
    5: "Excelente",
  };

  const handleSubmit = async () => {
    if (rating > 0){
      await postReview( local.id ,rating , comment);
      setIsPosted(true);
      setSubmitted(true);
    } 
  };


  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm text-center">
        

        {!submitted ? (
          <>
          <h2 className="text-2xl font-bold text-gray-800">{local.name}</h2>
          <p className="text-gray-400 text-sm mb-6">¿Cómo fue tu experiencia?</p>
            <div className="flex justify-center gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className="text-4xl transition-transform duration-100 hover:scale-125 focus:outline-none"
                >
                  <span
                    style={{
                      color: star <= (hover || rating) ? "#f59e0b" : "#d1d5db",
                      textShadow:
                        star <= (hover || rating)
                          ? "0 0 8px rgba(245,158,11,0.4)"
                          : "none",
                    }}
                  >
                    ★
                  </span>
                </button>
              ))}
            </div>
            <p className="text-amber-500 font-medium h-6 text-sm mb-6">
              {hover || rating ? labels[hover || rating] : ""}
            </p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Dejá un comentario (opcional)..."
              rows={3}
              className="w-full rounded-xl border border-gray-200 p-3 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-amber-300 mb-4"
            />
            <button
              onClick={handleSubmit}
              disabled={rating === 0}
              className="w-full py-2 rounded-xl font-semibold text-white transition-all duration-200"
              style={{
                background:
                  rating > 0
                    ? "linear-gradient(135deg, #f59e0b, #ef4444)"
                    : "#e5e7eb",
                cursor: rating > 0 ? "pointer" : "not-allowed",
              }}
            >
              Enviar calificación
            </button>
          </>
        ) : (
          <div className="py-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              ¡Gracias por tu reseña!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}