import { ContainerCard } from './styles';

export default function CardCharacter({ image, name, gender, specie }) {
  return (
    <>
      <ContainerCard>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <ul>
            <li>Gender: {gender}</li>
            <li>Specie: {specie}</li>
          </ul>
        </div>
      </ContainerCard>
    </>
  );
}
