import Thought from "./Thought";
import Header from "./generic/Header";

const Thoughts = props => {
  return (
    <>
      <Header>
        <h2>Latest Thoughts</h2>
      </Header>
      {props.thoughts &&
        props.thoughts.map(thought => (
          <Thought thought={thought} key={thought._id} />
        ))}
      {!props.thoughts && <div xs={12}>Loading...</div>}
    </>
  );
};

export default Thoughts;
