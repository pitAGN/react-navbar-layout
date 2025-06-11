export default function BlogPost({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Post: {params.id}</h2>
      <p className="text-lg text-gray-600">
        Este es el contenido del post {params.id}.
      </p>
    </div>
  );
}