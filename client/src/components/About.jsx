import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  border: 3px solid black;
  padding: 20px;
  border-radius: 5px;

  margin: 50px auto;
`;

const Title = styled.h1`
  font-size: 40px;
  color: #333;
`;

const Text = styled.p`
  font-size: 20px;
  color: #555;
`;

const About = () => {
  return (
    <Container>
      <Title>Sobre mí</Title>
      <Text>Hola, mi nombre es Julian Narvaez y esta es mi primera aplicación creada a partir de React.</Text>
      <Text>Esta aplicación está diseñada para los fans de Rick y Morty, donde pueden ver todos los personajes de la serie y su información personal para poder conocer más sobre nuestros personajes favoritos.</Text>
    </Container>
  );
};

export default About;
