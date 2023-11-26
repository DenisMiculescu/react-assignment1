import ActorCard from "../actorCard";

const ActorList = ({ actors }) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    );
  };
  export default ActorList;