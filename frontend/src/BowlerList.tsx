import { useEffect, useState } from 'react';
import { type bowler } from './types/bowler';

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  useEffect(() => {
    const fetchBowlers = async () => {
      const response = await fetch('https://localhost:5000/api/Bowler');
      const data = await response.json();
      setBowlers(data);
    };

    fetchBowlers();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <td>Bowler Name</td>
              <td>Team Name</td>
              <td>Address</td>
              <td>City</td>
              <td>State</td>
              <td>Zip</td>
              <td>Phone Number</td>
            </th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>{b.bowlerTeam}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
