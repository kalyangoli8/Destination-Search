import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imageUrl, name} = destinationDetails

  return (
    <li className="destination-itam">
      <img src={imageUrl} alt={name} className="destination-image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
