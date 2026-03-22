import { Link } from "react-router-dom";
import "../styles/league.css";

function LeagueCard({ league }) {
  return (
    <div className="league-card">

      <div className="league-header">
        <h3>{league.name}</h3>
      </div>

      <div className="teams">
        {league.teams.map((team, i) => {
          const key = team.toLowerCase().replace(/[^a-z0-9]/g, "");
          return (
            <Link key={i} to={`/club/${key}`} className="team">
              {team}
            </Link>
          );
        })}
      </div>

    </div>
  );
}

export default LeagueCard;