import React, { useState } from "react";

import data from "./data";

import "./styles.css";

function Accordion() {
  const [selection, setSelection] = useState(null);
  const [multiselection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSelection = (itemId) => {
    setSelection(selection === itemId ? null : itemId);
  };

  const handleMultiselection = (itemId) => {
    let copyMult = [...multiple];
    let findCurrentIdx = multiple.indexOf(itemId);

    if (findCurrentIdx === -1) {
      copyMult.push(itemId);
    } else {
      copyMult.splice(findCurrentIdx, 1);
    }

    setMultiple(copyMult);
  };

  return (
    <div className="wrapper">
      <div className="multi-selection" onClick={() => setMultiSelection(!multiselection)}>
        {multiselection ? "Enable Multiple selection" : "Disable multi selection" }
      </div>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div key={dataItem.id} className="content">
                <div
                  onClick={() =>
                    multiselection
                      ? handleMultiselection(dataItem.id)
                      : handleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <div className="accodion-question">{dataItem.question}</div>
                  <div className="accordion-icon">+</div>
                </div>
                {multiselection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="answer">{dataItem.answer}</div>
                    )
                  : selection === dataItem.id && (
                      <div className="answer">{dataItem.answer}</div>
                    )}
              </div>
            );
          })
        ) : (
          <p>No Items to show</p>
        )}
      </div>
    </div>
  );
}

export default Accordion;
