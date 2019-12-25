import Card from "./generic/Card";

const Thought = ({ thought }) => {
  return (
    <Card>
      <Card.Title>{thought.message}</Card.Title>
      <Card.Copy>by {thought.author}</Card.Copy>
    </Card>
  );
};

export default Thought;
