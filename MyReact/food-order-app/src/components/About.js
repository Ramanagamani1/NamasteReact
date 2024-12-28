import logo from "../images/logo.jpg";

export default function About() {
  return (
    <>
      <div className="flex gap-10 m-10">
        <img className="" src={logo} />
        <div className="my-10">
          <h2 className="py-10 text-3xl font-bold tracking-wide">Food Explorer 🍽🍟🍕🍔🍗</h2>
          <p className="text-xl">
            Food Explorer is a place where you can explore different restaurants
            and can order anything, anytime you desire.
          </p>
        </div>
      </div>
    </>
  );
}
