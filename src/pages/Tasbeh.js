import React, { useState } from "react";
import "../assets/styles/Tasbeh.css";

function Tasbeh() {
  const [son, setSon] = useState(0);

  const addTasbeh = (e) => {
    e.preventDefault();
    if (son > 32) {
      setSon(0);
    } else {
      setSon(son + 1);
    }
  };
  const clearBtn = (e) => {
    e.preventDefault();
    setSon(0);
  };
  return (
    <div className="container">
      <div className="tasbeh">
        <h1>Tasbeh</h1>
        <form>
          <label>
            <h2>Subhanallah</h2>
            <p>Alhamdulillah</p>
            <p>Allohu Akbar</p>
          </label>
          <div className="funtion-form">
            <div className="input-tasbeh">
              <input
                value={son}
                onChange={(e) => setSon(e.target.value)}
                type="text"
              />
            </div>
            <div className="btn btn-tasbeh">
              {/* <button onClick={clearBtn} className="clear">
                Tozalash
              </button> */}
              <div className="btn clear-btn">
                <input onClick={clearBtn} type="radio" id="clear" value={son} />
                <label for="javascript">Tozalash</label>
              </div>
              <button className="addTasbeh" onClick={addTasbeh}>
                Sanash
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tasbeh;
