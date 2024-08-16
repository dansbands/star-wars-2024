type CharacterBioProps = {
  name: string;
  birth_year: string;
};

const CharacterBio = ({ name, birth_year }: CharacterBioProps) => {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Birth Year: {birth_year}</div>
    </div>
  );
};

export default CharacterBio;