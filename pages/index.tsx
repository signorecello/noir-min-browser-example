import React from 'react';
import { mainFunc } from "../ts"

export default function Page() {
  const runMain = () => {
    mainFunc();
  }

  return (
    <main>
      <button onClick={runMain}>hey</button>
    </main>
  )
}
