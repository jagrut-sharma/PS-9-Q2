import { useBookContext } from "../context/BookListContext";

export default function Profile() {
  const { user } = useBookContext();

  if (!Object.keys(user).length) return <h1>Loading Profile....</h1>;

  const { name, bio, img } = user;

  return (
    <>
      <h1>Profile</h1>
      <div>
        <img src={img} alt="profile pic" className="profile" />
        <p>
          <strong>Name: </strong>
          {name}
        </p>
        <p>
          <strong>Bio: </strong>
          {bio}
        </p>
      </div>
    </>
  );
}
