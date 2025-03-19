
import { Link } from 'react-router'

function Home() {
  return (
    <section>
      <div className="container flex min-h-screen flex-col justify-center">
        <title>Wanna fight?</title>

        <div className="px-40">
          <h1 className="text-[30px] leading-[40px] font-semibold mb-15">
            Wanna fight?
          </h1>

          <ul>
            <li>
              <Link to="/game" className='underline'>🎮 Play</Link>
            </li>
            <li>
              <Link to="/profile" className='underline'>📊 Profile</Link>
            </li>
            <li>
              <Link to="/settings" className='underline'>⚙️ Settings</Link>
            </li>
            <li>
              <Link to="/subscription" className='underline'>💎 Subscription</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
