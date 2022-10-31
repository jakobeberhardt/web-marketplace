//import Contract from "../types/Contracts"

export async function fetchShipments(rows: Array<any>) {
    fetch('https://marketplace.jeberhardt.dev/contracts')
      .then(res => res.json())
      .then(data => {
        rows.push(...data)
        console.log(rows)
      })
  }