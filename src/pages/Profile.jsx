
import { Link } from 'react-router'

function Profile() {
  return (
    <section>
      <div className="container flex min-h-screen flex-col justify-center">
        <title>Wanna fight?</title>

        <div className="px-40">
          <Link to="/" className="underline">
            ← homepage
          </Link>

          <h1 className="mb-15 text-[30px] leading-[40px] font-semibold">
            Profile
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Profile;
