function Card(props) {
    const {name, image} = props.data
  return (
    <>
        <h1>{name}</h1>
        <img src={image.desktop} alt="data" />
    </>
  )
}

export default Card