import Image from "next/image"
import Link from "next/link"

interface recipeProps {
  recipe: any
}

const RecipeCard: React.FC<recipeProps> = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields
  return (
    <div className="card">
      <div className="featured">
        {/* featured image */}
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt="thumbnail"
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <div className="actions">
          <Link href={'/recipes/' + slug}><a>Cook this</a></Link>
        </div>
      </div>
    </div>
  )
}
export default RecipeCard