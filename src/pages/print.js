import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import Article from './Article'
import PrintBS from "./PRINTFACT";
export default function PrintComponent() {
  let componentRef = React.createRef()

  return (
    <>
      <div>
        <ReactToPrint
          trigger={() => <Button>Print this out!</Button>}
          content={() => PrintBS}
        />

        <PrintBS ref={(el) => (componentRef = el)} />
      </div>
    </>
  );
}
